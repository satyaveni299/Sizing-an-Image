let imageElement = document.getElementById("image");
let ImageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let max = 300;
let min = 100;
let original = 200;
let maxWarning = "Too big.Decrease the size of the Image.";
let minWarning = "Can't Visible.Increase the size of the Image.";
imageElement.style.width = original + "px";
ImageWidthElement.textContent = original;

function incrementSize() {
    if (original >= max) {
        warningMessageElement.textContent = maxWarning;

    } else {
        original = original + 5;
        let updatedoriginal = original + "px";
        imageElement.style.width = updatedoriginal;
        warningMessageElement.textContent = ""
        ImageWidthElement.textContent = updatedoriginal;
    }

}

function decrementSize() {
    if (original <= min) {
        warningMessageElement.textContent = minWarning;
    } else {
        original = original - 5
        let updatedoriginal = original + "px";
        imageElement.style.width = updatedoriginal;
        warningMessageElement.textContent = "";
        ImageWidthElement.textContent = updatedoriginal;

    }

}
