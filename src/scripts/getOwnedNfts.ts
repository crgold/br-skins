import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { getContract } from "thirdweb/contract";
import { createThirdwebClient, defineChain } from "thirdweb";
import { clientIdConst } from '../consts/parameters';
 
const myChain = defineChain(128123);

const contractAddr = "0x8545372ADC78511137c959C5B8775A6Fe965496C";

// clientId should go in an env
const clientId = createThirdwebClient({ clientId: clientIdConst });

const contract = getContract({
  client: clientId,
  chain: myChain,
  address: contractAddr,
});

const ownedNFTs = await getOwnedNFTs({
  contract: contract,
  owner: "0x79B3867037701299A0d32587ba32Ad428ec30c7d",
});

// Initialize a mapping for counting IDs
const idCounts: Record<string, number> = {};

// Iterate over the NFTs and extract IDs
ownedNFTs.forEach((nft) => {
  const attributes = nft.metadata.attributes;
  
  if (Array.isArray(attributes)) {
    const idAttribute = attributes.find(
      (attr): attr is { trait_type: string; value: string } =>
        attr?.trait_type === "ID"
    );

    if (idAttribute && idAttribute.value) {
      const idValue = idAttribute.value.toString(); // Ensure the ID is treated as a string
      idCounts[idValue] = (idCounts[idValue] || 0) + 1; // Increment the count
    }
  }
});

console.log(idCounts);
