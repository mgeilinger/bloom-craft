let myBouquet = []; //an empty bouquet that I'll add things to
let exampleBouquet1 = ["peonies", "lilies","carnations"]; //should return false
let exampleBouquet2 = ["tulips","lilies","daisies"]; //should return true
let exampleBouquet3 = ["lilies","tulips","daisies"]; //should also return true, but will need to make it work in any order
let exampleBouquet4 = ["lilies","tulips","daisies", "carnations"]; //should return false

let correctBouquet = ["tulips","lilies","daisies"];

function checkBouquet() {
    if(JSON.stringify(myBouquet) === JSON.stringify(correctBouquet)) {
        console.log("What a beautiful bouquet!");
    }
    else {
        console.log("This looks hideous!");
    }
}

function checkBouquetTest(bouquet) {
    // Sort both the bouquet and correctBouquet to ensure order doesn't matter
    const sortedBouquet = bouquet.slice().sort();  // .slice() creates a copy to avoid modifying original
    const sortedCorrectBouquet = correctBouquet.slice().sort();
    
    // Compare the sorted arrays
    if (JSON.stringify(sortedBouquet) === JSON.stringify(sortedCorrectBouquet)) {
        console.log("What a beautiful bouquet!");
    } else {
        console.log("This looks hideous!");
    }
}

checkBouquetTest(exampleBouquet1);
checkBouquetTest(exampleBouquet2);
checkBouquetTest(exampleBouquet3);
checkBouquetTest(exampleBouquet4);