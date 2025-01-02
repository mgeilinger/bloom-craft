let myBouquet = []; //an empty bouquet that I'll add things to
let exampleBouquet1 = ["peonies", "lilies","carnations"]; //should return something in there I don't like
let exampleBouquet2 = ["tulips","lilies","daisies"]; //should return beautiful boquet
let exampleBouquet3 = ["lilies","tulips","daisies"]; //should return beautiful boquet
let exampleBouquet4 = ["tulips","daisies"]; //should return add more
let exampleBouquet5 = ["lilies","tulips","daisies", "carnations"]; //should return something in there I don't like

function generateRandomBouquet() {
    const flowerPool = [
        "Sunflowers",
        "Peonies",
        "Roses",
        "Daisies",
        "Tulips",
        "Lilies",
        "Carnations"
    ];

    // Random length between 3 and 4
    const bouquetLength = Math.floor(Math.random() * 2) + 3;

    const randomBouquet = [];
    const usedIndexes = new Set(); // To prevent duplicate flowers

    while (randomBouquet.length < bouquetLength) {
        // Generate a random index from the flower pool
        const randomIndex = Math.floor(Math.random() * flowerPool.length);

        // Add the flower if it hasn't already been picked
        if (!usedIndexes.has(randomIndex)) {
            randomBouquet.push(flowerPool[randomIndex]);
            usedIndexes.add(randomIndex);
        }
    }

    return randomBouquet;
}

// let correctBouquet = ["Tulips","Lilies","Daisies"];

let correctBouquet = generateRandomBouquet();
console.log("Generated Bouquet:", newBouquet);

function toggleFlower(flower) {
    const index = myBouquet.indexOf(flower);

    if (index === -1) {
        // Flower is not in the bouquet; add it
        myBouquet.push(flower);
        console.log("Added ${flower} to the bouquet!");
    } else {
        // Flower is already in the bouquet; remove it
        myBouquet.splice(index, 1);
        console.log("Removed ${flower} from the bouquet!");
    }

    // Update the displayed bouquet
    updateBouquetDisplay();

    console.log("Current bouquet:", myBouquet);
}

// Function to update the displayed bouquet
function updateBouquetDisplay() {
    const bouquetList = document.getElementById("bouquet-list");

    // Clear the current display
    bouquetList.innerHTML = "";

    // Add each flower in the bouquet to the display
    myBouquet.forEach((flower) => {
        const listItem = document.createElement("li");
        listItem.textContent = flower;
        bouquetList.appendChild(listItem);
    });
}

function checkMistake() {
    for (let i = 0; i < myBouquet.length; i++) {
        let found = false;
        for (let j = 0; j < correctBouquet.length; j++) {
            if (myBouquet[i] === correctBouquet[j]) {
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

function checkBouquet() {
    const mistake = checkMistake(myBouquet);

    if (JSON.stringify(myBouquet.slice().sort()) === JSON.stringify(correctBouquet.slice().sort())) {
        console.log("What a beautiful bouquet!");
        alert("What a beautiful bouquet!");
    } else if (mistake) {
        console.log("There's something there I don't like!");
        alert("There's something there I don't like!");
    } else {
        console.log("Looks good but could use more flowers!");
        alert("Looks good but could use more flowers!");
    }
}