import { createContext } from "react";
import { Chain, EtherlinkTestnet } from "@thirdweb-dev/chains";

const ChainContext = createContext({
  selectedChain: EtherlinkTestnet,
  setSelectedChain: (chain: any) => {},
});

export default ChainContext;