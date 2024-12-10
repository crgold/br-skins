/** Change these values to configure the application for your own use. **/

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
export const arbContract = "0xf8C2AD7362d6987A391d6b69Cd8458255A473a3e";
export const beamContract = "0x13C4Adcda22C7761E1999C8afD356B191E6168B2";
//export const etherlinkContract = "0xd690a2eE4aA4b308634BA9eEee2cAbB2574E8c1A";
export const etherlinkContract = "0xBDa4aDBdEfeEf769B086db680465839F79045A88";

// The name of the chain your contract is deployed to.
// Refer to README.md on how to specify the chain name.
//export const chainConst = "mumbai";

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra
export const clientIdConst = import.meta.env.VITE_TEMPLATE_CLIENT_ID || "";

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
