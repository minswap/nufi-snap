import { expect } from '@jest/globals';
import { installSnap } from '@metamask/snaps-jest';

import { accountFixture } from '../../fixtures/account';
import { origin } from '../../fixtures/constants';
import { transactionsFixture } from '../../fixtures/transactions';

const fixtures = {
  simple: {
    ...transactionsFixture.simple,
    witnesses: [
      {
        ...accountFixture.paymentPart,
        signatureHex:
          'b7b0c4489155f9b279f2911d0f002830d10427f4ec7cc3c7969e0f0f91b8f723bef2b86be9c5d0c2ca65a29ee1b196a2bedeea522f097915613c303a2ef4700a',
      },
      {
        ...accountFixture.stakePart,
        signatureHex:
          'afe5c9af375ed8ad1d5d499aba59c8261645707572102c7efad45e9cfc189cdbf33279301b26fd471ecb423d3ccf185a723da1934fc9b0c011a34f507b542209',
      },
    ],
    changeOutputsParams: {
      networkId: 1,
      addressParamsBundle: [],
    },
    stringifiedUi: `{"type":"confirmation","content":{"type":"panel","children":[{"type":"heading","value":"Sign transaction"},{"type":"panel","children":[{"type":"divider"},{"type":"divider"},{"type":"heading","value":"Send"},{"type":"row","label":"To address","value":{"type":"text","value":"addr_test1qqr585tvlc7ylnqvz8pyqwauzrdu0mxag3m7q56grgmgu7sxu2hyfhlkwuxupa9d5085eunq2qywy7hvmvej456flknswgndm3"}},{"type":"row","label":"Amount","value":{"type":"text","value":"**0.000000 ADA**"}}]},{"type":"panel","children":[{"type":"divider"},{"type":"divider"},{"type":"row","label":"Transaction fee","value":{"type":"text","value":"**0.123456 ADA**"}}]}]}}`,
  },
  simpleWithChangeOutput: {
    ...transactionsFixture.simpleWithChangeOutput,
    witnesses: [
      {
        ...accountFixture.paymentPart,
        signatureHex:
          '1e66e1dd9b4d808109a8217cb7d76869cebf34a4bbb9c13fd2cad7cf5c2f0f628166d452d7ec53b656f1b4fc50a6d06f9e902720584414ca2d8f2feb69a7a506',
      },
    ],
    changeOutputsParams: {
      networkId: 1,
      addressParamsBundle: [
        {
          addressType: 0,
          paymentDerivationPath: ["1852'", "1815'", "0'", '0', '0'],
          stakeDerivationPath: ["1852'", "1815'", "0'", '2', '0'],
        },
      ],
    },
    stringifiedUi: `{"type":"confirmation","content":{"type":"panel","children":[{"type":"heading","value":"Sign transaction"},{"type":"panel","children":[{"type":"divider"},{"type":"divider"},{"type":"heading","value":"Send"},{"type":"row","label":"To address","value":{"type":"text","value":"addr1q9m75l05hh6sgntspdepjxyqjs0dzy6tam9luedzj5jw8hgl6azfkel48mkhfjsu7pk6ynw0wjp67qsyk2pwn577ywsqgw8grm"}},{"type":"row","label":"Amount","value":{"type":"text","value":"**1.176630 ADA**"}}]},{"type":"panel","children":[{"type":"divider"},{"type":"divider"},{"type":"heading","value":"Send"},{"type":"row","label":"To address","value":{"type":"text","value":"addr1q9m75l05hh6sgntspdepjxyqjs0dzy6tam9luedzj5jw8hgl6azfkel48mkhfjsu7pk6ynw0wjp67qsyk2pwn577ywsqgw8grm"}},{"type":"row","label":"Amount","value":{"type":"text","value":"**1.467024 ADA**"}}]},{"type":"panel","children":[{"type":"divider"},{"type":"divider"},{"type":"row","label":"Transaction fee","value":{"type":"text","value":"**0.174873 ADA**"}}]}]}}`,
  },
};

describe('cardano__signTransaction', () => {
  Object.entries(fixtures).forEach(
    ([
      txType,
      {
        txCborHex,
        txBodyHashHex,
        changeOutputsParams,
        stringifiedUi,
        witnesses,
      },
    ]) =>
      it(`should sign ${txType} transaction`, async () => {
        const { request } = await installSnap();

        const pendingResponse = request({
          method: 'cardano__signTransaction',
          origin,
          params: [
            {
              txCborHex,
              changeOutputsParams,
              derivationPaths: witnesses.map(
                ({ derivationPath }) => derivationPath,
              ),
            },
          ],
        });

        const ui = await pendingResponse.getInterface();
        expect(JSON.stringify(ui)).toStrictEqual(stringifiedUi);

        await ui.ok();

        const { response: actualResponse } = await pendingResponse;

        const expectedResponse = {
          result: {
            txBodyHashHex,
            witnesses,
          },
        };

        expect(JSON.stringify(actualResponse)).toStrictEqual(
          JSON.stringify(expectedResponse),
        );
      }),
  );

  it('should fail for unsupported path', async () => {
    const { request } = await installSnap();

    const derivationPath = ["10'", "1815'", "0'"];
    const { response: actualResponse } = await request({
      method: 'cardano__signTransaction',
      origin,
      params: [
        {
          txBodyHashHex: 'deadbeef',
          derivationPaths: [derivationPath],
        },
      ],
    });

    const responseError =
      'error' in actualResponse ? actualResponse.error : undefined;

    expect(responseError).toBeDefined();
  });
});
