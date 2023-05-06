import { UserContext, UserDispatchContext } from "@/context/userContext";
import userReducer from "@/reducer/userReducer";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import Router from "next/router";
import { useEffect, useReducer } from "react";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("Variable env NEXT_PUBLIC_PROJECT_ID obligatoire");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
  sepolia,
];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }) {
  const [user, dispatch] = useReducer(userReducer, {
    isConnected: false,
    username: null,
    avatarUrl: null,
  });

  useEffect(() => {
    if (!user.isConnected) Router.push("/login");
  }, [user.isConnected]);

  return (
    <>
      <UserContext.Provider value={user}>
        <UserDispatchContext.Provider value={dispatch}>
          <WagmiConfig client={wagmiClient}>
            <Component {...pageProps} />
          </WagmiConfig>
        </UserDispatchContext.Provider>
      </UserContext.Provider>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
