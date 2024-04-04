// Function to increment the count
function increment() {
    var countElement = document.getElementById("count");
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}

// Function to reset the count
function reset() {
    var countElement = document.getElementById("count");
    countElement.innerText = "0";
}
