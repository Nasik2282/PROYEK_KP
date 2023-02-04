const inputFile = document.getElementById("input-file");
const chooseImageButton = document.getElementById("choose-image-button");
// const preview = document.getElementById("preview");
let image3 = null;
// console.log(inputFile)

chooseImageButton.addEventListener("click", () => {
    inputFile.click();
});

inputFile.addEventListener("change", () => {
    const file = inputFile.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
        image3 = reader.result;
        // preview.src = image3;
        
    };
    reader.readAsDataURL(file);
});


export { image3 };

