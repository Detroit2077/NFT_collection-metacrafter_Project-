/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFT_Collection = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, creator, key, unique_id, trait, value, date ) {
    const NFTd = {
        'name' : name,
        'description': description,
        'creator': creator,
        'key' : key,
        'unique_id' : unique_id,
        'trait_type' : trait,
        'value': value,
        'creation_date' : date
    }

    NFT_Collection.push(NFTd)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i <NFT_Collection.length; i++) {
        console.log('\n')
        Object.keys(NFT_Collection[i]).forEach(key => {
            console.log(`${key}: ${NFT_Collection[i][key]}`);
        })
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log('\nNumber of NFTs: '+ NFT_Collection.length);
}

// call your functions below this line
mintNFT("Solar Flare Dragon", "A majestic dragon that harnesses the power of the sun, capable of unleashing devastating solar flares.", "0xFEDCBA98", "0xE3F2G1H0I9J", "NFT-000556677889", "Element", "Fire", "2024-05-25T15:30:00Z" )

mintNFT("Cosmic Guardian","A powerful entity safeguarding the galaxy, with an aura of cosmic energy.", "0xABCDEF123","0xB7E6D5C4F3A2B1", "NFT-000223344556", "Aura", "Guardian", "2024-05-25T14:45:00Z" )

mintNFT("Neon Samurai", "A futuristic warrior with neon lights illuminating the night, standing guard in a cyberpunk city.", "0x123456789", "0xC9D8E7F6G5H", "NFT-000334455667", "Armor", "Neon", "NFT-000334455667")

mintNFT("Mystic Forest Spirit", "An ethereal being who resides in the heart of the forest, guiding lost souls to safety.", "0x9ABCDEF01", "0xD1E2F3G4H5I6J", "NFT-000445566778", "Companion", "Forest Creatures", "2024-05-25T15:15:00Z")

listNFTs()

getTotalSupply()