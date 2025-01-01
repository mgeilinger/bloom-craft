let myBouquet = []; //an empty bouquet that I'll add things to
let exampleBouquet1 = ["peonies", "lilies","carnations"]; //should return something in there I don't like
let exampleBouquet2 = ["tulips","lilies","daisies"]; //should return beautiful boquet
let exampleBouquet3 = ["lilies","tulips","daisies"]; //should return beautiful boquet
let exampleBouquet4 = ["tulips","daisies"]; //should return add more
let exampleBouquet5 = ["lilies","tulips","daisies", "carnations"]; //should return something in there I don't like

let correctBouquet = ["tulips","lilies","daisies"];

// function checkBouquet() {
//     if(JSON.stringify(myBouquet) === JSON.stringify(correctBouquet)) {
//         console.log("What a beautiful bouquet!");
//     }
//     // check if there's anything wrong in there
//     for (var i = 0; i < arrayLength; i++) {
//         console.log(myStringArray[i]);
//     }
//     // loop through the bouquet, and if you find anything that doesn't appear in the correct boquuet, console log there's something there I don't like
//     // else if() {
//     //     console.log("There's something in there I don't like!");
//     // }
//     else {
//         console.log("Looking good but maybe add some more flowers!");
//     }
// }

function checkMistakeTest(bouquet) {
    for (let i = 0; i < bouquet.length; i++) {
        let found = false;
        for (let j = 0; j < correctBouquet.length; j++) {
            if (bouquet[i] === correctBouquet[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return true; // Found a mistake
        }
    }
    return false; // No mistakes
}

function checkMissingFlowers(bouquet) {
    for (let i = 0; i < correctBouquet.length; i++) {
        if (!bouquet.includes(correctBouquet[i])) {
            return true; // Missing a flower
        }
    }
    return false; // No missing flowers
}

function checkBouquetTest(bouquet) {
    const mistake = checkMistakeTest(bouquet);
    const missingFlowers = checkMissingFlowers(bouquet);

    // Compare the bouquet to the correct bouquet
    if (JSON.stringify(bouquet.slice().sort()) === JSON.stringify(correctBouquet.slice().sort())) {
        console.log("What a beautiful bouquet!");
    } else if (mistake) {
        console.log("There's something there I don't like!");
    } else if (missingFlowers) {
        console.log("Looks good but could use more flowers!");
    } else {
        console.log("This looks interesting but isn't quite right!");
    }
}

checkBouquetTest(exampleBouquet1);
checkBouquetTest(exampleBouquet2);
checkBouquetTest(exampleBouquet3);
checkBouquetTest(exampleBouquet4);
checkBouquetTest(exampleBouquet5);