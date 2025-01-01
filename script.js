let myBouquet = []; //an empty bouquet that I'll add things to
let exampleBouquet1 = ["peonies", "lilies","carnations"]; //should return false
let exampleBouquet2 = ["tulips","lilies","daisies"]; //should return true
let exampleBouquet3 = ["tulips","lilies","daisies"]; //should also return true, but will need to make it work in any order

let correctBouquet = ["tulips","lilies","daisies"];

function checkBouquet() {
    if(JSON.stringify(myBouquet) === JSON.stringify(correctBouquet)) {
        console.log("What a beautiful bouquet!");
    }
    else {
        console.log("This looks hideous!");
    }
}

checkBouquet();