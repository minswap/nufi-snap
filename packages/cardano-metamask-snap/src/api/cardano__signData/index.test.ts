import { expect } from '@jest/globals';
import { installSnap } from '@metamask/snaps-jest';

import { accountFixture } from '../../fixtures/account';
import { origin } from '../../fixtures/constants';

const signDataFixture = {
  basePaymentKeyStakeKeyAddress: {
    networkId: 0,
    addressParams:
      accountFixture.addresses.basePaymentKeyStakeKeyAddress.addressParams,
    signatureHex:
      '845846a201276761646472657373583900918e5a92781f6535f02f4ccedea5ef175c2e9da646b7075e0c051e7332deb239da91292bb73843dcc9e6f318ab68fda7524819cf15171921a166686173686564f4581b436f6e6e65637420746f20434e4654206d61726b6574706c61636558408556c4b0605d3fd7d45e4930babc1b0be0de1019422f2309e602adeca2a7925c759d09a2447c0ef1eee0a33e175d12d9a599a697056f976b803a48b1af3d2502',
    keyHex:
      'a401010327200621582015382abbf262f01aba1deaf31d0bc442305c976a415bc612a1c9dc60930efba0',
    payloadHex: '436f6e6e65637420746f20434e4654206d61726b6574706c616365',
  },
  enterpriseKeyAddress: {
    networkId: 0,
    addressParams: accountFixture.addresses.enterpriseKeyAddress.addressParams,
    signatureHex:
      '84582aa201276761646472657373581d60918e5a92781f6535f02f4ccedea5ef175c2e9da646b7075e0c051e73a166686173686564f4581b436f6e6e65637420746f20434e4654206d61726b6574706c6163655840f516598b3e64a8c2aaea136d2b98c2dab9b3bfc1707619ef9866205bcee009c2c80f26042f2f4cb338781e4b3e923ef2e7054c8ee46a76ca3c1737fae33c3606',
    keyHex:
      'a401010327200621582015382abbf262f01aba1deaf31d0bc442305c976a415bc612a1c9dc60930efba0',
    payloadHex: '436f6e6e65637420746f20434e4654206d61726b6574706c616365',
  },
  rewardKeyAddress: {
    networkId: 0,
    addressParams: accountFixture.addresses.rewardKeyAddress.addressParams,
    signatureHex:
      '84582aa201276761646472657373581de032deb239da91292bb73843dcc9e6f318ab68fda7524819cf15171921a166686173686564f4581b436f6e6e65637420746f20434e4654206d61726b6574706c616365584075d6a5ab668c74e4359e32e12fade5a5e65a7ec1265caec61debef5319e1ff3c40835fa284ebc9b1f69dcbdd1e4502bf6aebdb171040c2db26e86bce2251690d',
    keyHex:
      'a401010327200621582024f959cebe939e3486fcaa4ddcac2d0a24967c34525cedfcc53c7c90670940a6',
    payloadHex: '436f6e6e65637420746f20434e4654206d61726b6574706c616365',
  },
};

describe('cardano__signData', () => {
  Object.entries(signDataFixture).forEach(([addressName, params]) => {
    it(`should sign data with ${addressName}`, async () => {
      const { request } = await installSnap();

      const { payloadHex, signatureHex, keyHex, networkId, addressParams } =
        params;

      const pendingResponse = request({
        method: 'cardano__signData',
        origin,
        params: [
          {
            payloadHex,
            addressParams,
            networkId,
          },
        ],
      });

      const ui = await pendingResponse.getInterface();
      await ui.ok();

      const { response: actualResponse } = await pendingResponse;

      const expectedResponse = {
        result: {
          signatureHex,
          keyHex,
          payloadHex,
        },
      };

      expect(JSON.stringify(actualResponse)).toStrictEqual(
        JSON.stringify(expectedResponse),
      );
    });
  });
});
