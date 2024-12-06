import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ChainContext from "./context/Chain";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Toaster } from "./components/ui/Toaster";
import { clientIdConst } from "./consts/parameters";
import { ArbitrumSepolia, BeamTestnet, EtherlinkTestnet } from "@thirdweb-dev/chains";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

const AppWrapper = () => {
  const urlParams = new URL(window.location.toString()).searchParams;
  const [selectedChain, setSelectedChain] = useState(EtherlinkTestnet); // Default to EtherlinkTestnet

  const clientId = urlParams.get("clientId") || clientIdConst || "";

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider
        supportedChains={[ArbitrumSepolia, BeamTestnet, EtherlinkTestnet]}
        activeChain={selectedChain}
        clientId={clientId}
      >
        <Toaster />
        <App />
      </ThirdwebProvider>
    </ChainContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
