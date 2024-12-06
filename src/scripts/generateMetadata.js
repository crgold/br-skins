const fs = require('fs');
const path = require('path');

const metadataTemplate = [
  { name: "The Blades of Shadow", rarity: "Common", id: "0" },
  { name: "The Uruk Disciple", rarity: "Common", id: "1" },
  { name: "Void Incarnate", rarity: "Common", id: "2" },
  { name: "Commander of Knights", rarity: "Common", id: "3" },
  { name: "Herald of the Curse", rarity: "Common", id: "4" },
  { name: "Ubferbak Hound", rarity: "Common", id: "5" },
  { name: "Burned Mage", rarity: "Common", id: "6" },
  { name: "Undead Berserker", rarity: "Common", id: "7" },
  { name: "Green with Anger", rarity: "Common", id: "8" },
  { name: "Uruk's Priest", rarity: "Rare", id: "9" },
  { name: "The Animal Within", rarity: "Rare", id: "10" },
  { name: "Kabuto", rarity: "Rare", id: "11" },
  { name: "Undead General", rarity: "Rare", id: "12" },
  { name: "Golden Golem", rarity: "Rare", id: "13" },
  { name: "The Hollow Warrior", rarity: "Rare", id: "14" },
  { name: "Herald of Damnation", rarity: "Rare", id: "15" },
  { name: "Dragonborn", rarity: "Rare", id: "16" },
  { name: "Lava Golem", rarity: "Rare", id: "17" },
  { name: "Golden Maiden", rarity: "Epic", id: "18" },
  { name: "Cherub", rarity: "Epic", id: "19" },
  { name: "Ascendent Succubus", rarity: "Epic", id: "20" },
  { name: "The Dark Knight", rarity: "Epic", id: "21" },
  { name: "Devoured by Chaos", rarity: "Epic", id: "22" },
  { name: "Crystal Protector", rarity: "Epic", id: "23" },
  { name: "Marked by Uruk", rarity: "Epic", id: "24" },
  { name: "The Scarlet Hunter", rarity: "Legendary", id: "25" },
  { name: "Winter Defender", rarity: "Legendary", id: "26" },
  { name: "Krampus", rarity: "Legendary", id: "27" },
  { name: "Scarlet Zephyr", rarity: "Legendary", id: "28" },
  { name: "The Lord of Sin", rarity: "Legendary", id: "29" },
  { name: "Swamp Monster", rarity: "Legendary", id: "30" }
];

const rarityCounts = {
  Common: 120,
  Rare: 80,
  Epic: 20,
  Legendary: 10
};

const generateMetadata = (template, counts) => {
  let metadata = [];
  //const imageBaseUrl = "ipfs://QmfAA9HM9FrtAYM7AmHNCVneYp7sqoMyWWsryab8hCXCaC/";
  
  // Group templates by rarity
  const templatesByRarity = template.reduce((acc, item) => {
    acc[item.rarity] = acc[item.rarity] || [];
    acc[item.rarity].push(item);
    return acc;
  }, {});
  
  Object.entries(counts).forEach(([rarity, count]) => {
    const templates = templatesByRarity[rarity] || [];
    const templateCount = templates.length;

    /*for (let i = 0; i < count; i++) {
      const template = templates[i % templateCount];
      metadata.push({
        name: `${template.name}`,
        description: "Some description",
        image: 'ipfs://QmfAA9HM9FrtAYM7AmHNCVneYp7sqoMyWWsryab8hCXCaC/0.png',
        attributes: [
          { trait_type: "Rarity", value: rarity }
        ]
      });
    }*/
   for (let x = 0; x < templateCount; x++) {
    const template = templates[x % templateCount];
      for (let i = 0; i < count; i++) {
        metadata.push({
          name: `${template.name}`,
          description: "ERMERGERD ITS CHRISTMAS!",
          image: 'ipfs://QmfAA9HM9FrtAYM7AmHNCVneYp7sqoMyWWsryab8hCXCaC/0.png',
          attributes: [
            { trait_type: "Rarity", value: rarity },
            { trait_type: "ID", value: template.id }
          ]
        });
      }
    }
  });

  return metadata;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};


const outputDir = "src/scripts/metadata";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to create individual JSON files
const createMetadataFiles = (metadata) => {
  metadata.forEach((item, index) => {
    const filePath = path.join(outputDir, `${index}`);
    fs.writeFile(filePath, JSON.stringify(item, null, 2), (err) => {
      if (err) {
        console.error(`Error writing file for index ${index}:`, err);
      } else {
        console.log(`Metadata file created: ${filePath}`);
      }
    });
  });
};

// Generate metadata
let collectionMetadata = generateMetadata(metadataTemplate, rarityCounts);

// Shuffle the metadata array
collectionMetadata = shuffleArray(collectionMetadata);

// Create individual files for each NFT
createMetadataFiles(collectionMetadata);

// Write to a JSON file
const filePath = 'src/scripts/metadata.json';

fs.writeFile(filePath, JSON.stringify(collectionMetadata, null, 2), (err) => {
  if (err) {
    console.error('Error writing metadata to file:', err);
  } else {
    console.log(`Metadata successfully written to ${filePath}`);
  }
});
