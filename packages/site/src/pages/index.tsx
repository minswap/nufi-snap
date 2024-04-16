import styled from 'styled-components';

import {
  ConnectButton,
  InstallFlaskButton,
  ReconnectButton,
  Card,
  GetCardanoExtendedPublicKeyButton,
  SignCardanoDataButton,
  SignCardanoTransactionButton,
  VerifyCardanoAddressButton,
} from '../components';
import { defaultSnapOrigin } from '../config';
import {
  useInvokeSnap,
  useMetaMask,
  useMetaMaskContext,
  useRequestSnap,
} from '../hooks';
import { isLocalSnap, shouldDisplayReconnectButton } from '../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 7.6rem;
  margin-bottom: 7.6rem;
  ${({ theme }) => theme.mediaQueries.small} {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: auto;
  }
`;

const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 2.4rem;
  text-align: center;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.primary?.default};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  ${({ theme }) => theme.mediaQueries.small} {
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 64.8rem;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
`;

const Notice = styled.div`
  background-color: ${({ theme }) => theme.colors.background?.alternative};
  border: 1px solid ${({ theme }) => theme.colors.border?.default};
  color: ${({ theme }) => theme.colors.text?.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;

  & > * {
    margin: 0;
  }
  ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 1.2rem;
    padding: 1.6rem;
  }
`;

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.error?.muted};
  border: 1px solid ${({ theme }) => theme.colors.error?.default};
  color: ${({ theme }) => theme.colors.error?.alternative};
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 2.4rem;
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;
  max-width: 60rem;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.small} {
    padding: 1.6rem;
    margin-bottom: 1.2rem;
    margin-top: 1.2rem;
    max-width: 100%;
  }
`;

const Index = () => {
  const { error } = useMetaMaskContext();
  const { isFlask, snapsDetected, installedSnap } = useMetaMask();
  const requestSnap = useRequestSnap();
  const invokeSnap = useInvokeSnap();

  const isMetaMaskReady = isLocalSnap(defaultSnapOrigin)
    ? isFlask
    : snapsDetected;

  const handleGetCardanoExtendedPublicKeyClick = async () => {
    const res = await invokeSnap({
      method: 'cardano__getExtendedPublicKey',
      params: [{ derivationPath: ["1852'", "1815'", "0'"] }],
    });
    console.log('cardano extended public key result', res);
  };

  const handleCardanoSignDataClick = async () => {
    const res = await invokeSnap({
      method: 'cardano__signData',
      params: [
        {
          networkId: 0,
          addressParams: {
            addressType: 14,
            stakeDerivationPath: ["1852'", "1815'", "0'", '2', '0'],
            paymentDerivationPath: null,
          },
          payloadHex: '436f6e6e65637420746f20434e4654206d61726b6574706c616365',
        },
      ],
    });
    console.log('cardano sign data key result', res);
  };

  const handleCardanoSignTransactionClick = async () => {
    const res = await invokeSnap({
      method: 'cardano__signTransaction',
      params: [
        {
          txCborHex:
            '83a30081825820ba638246bd9be05aa46e865320c354efea75cf5796e88b763faaa30c9fbb78de000181825839000743d16cfe3c4fcc0c11c2403bbc10dbc7ecdd4477e053481a368e7a06e2ae44dff6770dc0f4ada3cf4cf2605008e27aecdb332ad349fda700021a0001e240a10081825820abd0f26723a5de57c10eb483b14c0aec1c365d911d46ab38684c2b9b2fa4a4915840f2b04185587ed5af88cac6778b0a8392f1cd4d51e6c3722d96db62cae9d716f2d71a22aac6bde7ec097e1357b9e2ffa70eb9ab5d757d24180c843593fb302f09f6',
          derivationPaths: [
            ["1852'", "1815'", "0'", '0', '0'],
            ["1852'", "1815'", "0'", '2', '0'],
          ],
        },
      ],
    });
    console.log('cardano sign transaction key result', res);
  };

  const handleCardanoVerifyAddressClick = async () => {
    const params = [
      [
        {
          addressParams: {
            addressType: 0,

            paymentDerivationPath: ["1852'", "1815'", "0'", '0', '0'],
            stakeDerivationPath: ["1852'", "1815'", "0'", '2', '0'],
          },
          networkId: 1,
        },
      ],
      [
        {
          addressParams: {
            addressType: 14,
            stakeDerivationPath: ["1852'", "1815'", "0'", '2', '0'],
            paymentDerivationPath: null,
          },
          networkId: 1,
        },
      ],
      [
        {
          addressParams: {
            addressType: 6,
            paymentDerivationPath: ["1852'", "1815'", "0'", '0', '0'],
            stakeDerivationPath: null,
          },
          networkId: 1,
        },
      ],
      [
        {
          addressParams: {
            addressType: 6,
            paymentDerivationPath: ["1852'", "1815'", "0'", '0', '2'],
            stakeDerivationPath: null,
          },
          networkId: 1,
        },
      ],
    ];
    for (const param of params) {
      const res = await invokeSnap({
        method: 'cardano__verifyAddress',
        params: param,
      });
      console.log('cardano verify address result', res);
    }
  };

  return (
    <Container>
      <Heading>
        Welcome to <Span>template-snap</Span>
      </Heading>
      <Subtitle>
        Get started by editing <code>src/index.ts</code>
      </Subtitle>
      <CardContainer>
        {error && (
          <ErrorMessage>
            <b>An error happened:</b> {error.message}
          </ErrorMessage>
        )}
        {!isMetaMaskReady && (
          <Card
            content={{
              title: 'Install',
              description:
                'Snaps is pre-release software only available in MetaMask Flask, a canary distribution for developers with access to upcoming features.',
              button: <InstallFlaskButton />,
            }}
            fullWidth
          />
        )}
        {!installedSnap && (
          <Card
            content={{
              title: 'Connect',
              description:
                'Get started by connecting to and installing the example snap.',
              button: (
                <ConnectButton
                  onClick={requestSnap}
                  disabled={!isMetaMaskReady}
                />
              ),
            }}
            disabled={!isMetaMaskReady}
          />
        )}
        {shouldDisplayReconnectButton(installedSnap) && (
          <Card
            content={{
              title: 'Reconnect',
              description:
                'While connected to a local running snap this button will always be displayed in order to update the snap if a change is made.',
              button: (
                <ReconnectButton
                  onClick={requestSnap}
                  disabled={!installedSnap}
                />
              ),
            }}
            disabled={!installedSnap}
          />
        )}
        <Card
          content={{
            title: 'Get cardano extended public key',
            description: 'The key will be logged into console',
            button: (
              <GetCardanoExtendedPublicKeyButton
                onClick={handleGetCardanoExtendedPublicKeyClick}
                disabled={!installedSnap}
              />
            ),
          }}
          disabled={!installedSnap}
          fullWidth={
            isMetaMaskReady &&
            Boolean(installedSnap) &&
            !shouldDisplayReconnectButton(installedSnap)
          }
        />
        <Card
          content={{
            title: 'Sign cardano data',
            description: 'The result will be logged into console',
            button: (
              <SignCardanoDataButton
                onClick={handleCardanoSignDataClick}
                disabled={!installedSnap}
              />
            ),
          }}
          disabled={!installedSnap}
          fullWidth={
            isMetaMaskReady &&
            Boolean(installedSnap) &&
            !shouldDisplayReconnectButton(installedSnap)
          }
        />
        <Card
          content={{
            title: 'Sign cardano transaction',
            description: 'The result will be logged into console',
            button: (
              <SignCardanoTransactionButton
                onClick={handleCardanoSignTransactionClick}
                disabled={!installedSnap}
              />
            ),
          }}
          disabled={!installedSnap}
          fullWidth={
            isMetaMaskReady &&
            Boolean(installedSnap) &&
            !shouldDisplayReconnectButton(installedSnap)
          }
        />
        <Card
          content={{
            title: 'Verify cardano address',
            description: 'The result will be logged into console',
            button: (
              <VerifyCardanoAddressButton
                onClick={handleCardanoVerifyAddressClick}
                disabled={!installedSnap}
              />
            ),
          }}
          disabled={!installedSnap}
          fullWidth={
            isMetaMaskReady &&
            Boolean(installedSnap) &&
            !shouldDisplayReconnectButton(installedSnap)
          }
        />

        <Notice>
          <p>
            Please note that the <b>snap.manifest.json</b> and{' '}
            <b>package.json</b> must be located in the server root directory and
            the bundle must be hosted at the location specified by the location
            field.
          </p>
        </Notice>
      </CardContainer>
    </Container>
  );
};

export default Index;
