import Head from 'next/head';
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_APIKEY }), publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
      
    </>
  );
}
