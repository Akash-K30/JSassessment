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

const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, radius, color, nMoon, age ) {

const NFT = {

"name" :  name,
"Radius(in KMs)" : radius,
"Primary Color" : color,
"No. of Moons" : nMoon,
"Age(in billion years)" : age

}

NFTs.push(NFT);
console.log("Minted:" +  name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("ID:"+(i+1));
    console.log( NFTs[i]);
  }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\n Total number of NFTs we have minted are: " + NFTs.length);
  
}

// call your functions below this line

mintNFT("Earth", "6371", "Blue", "1", "4.543");
mintNFT("Mars", "3389.5", "Red", "2", "4.603");
mintNFT("Jupiter", "69911", "Brown", "90", "4.603");
mintNFT("Uranus", "25362", "Blue-Green", "28", "4.503");
listNFTs();
getTotalSupply();
