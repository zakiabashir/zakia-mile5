"use strict";
// Get references to necessary DOM elements
const formSection = document.querySelector(".form-section");
const cvSection = document.querySelector(".cv-section");
const nameInput = document.getElementById('Name');
const button = document.getElementById('button');
const profilePic = document.getElementById("profile-pic");
const inputFile = document.getElementById("input-file");
const pdfButton = document.getElementById("pdf-btn");
const editButton = document.getElementById("edit-btn");
const shareableButton = document.getElementById("shareable-btn");
let selectedFile = null;
// Utility function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Field mapping for dynamic content updates
const fields = [
    { inputId: 'Name', outputId: 'dynamicName' },
    { inputId: 'Email', outputId: 'dynamicEmail' },
    { inputId: 'Phone', outputId: 'dynamicPhone' },
    { inputId: 'About', outputId: 'dynamicAbout' },
    { inputId: 'Education', outputId: 'dynamicEducation' },
    { inputId: 'Skill', outputId: 'dynamicSkills' },
    { inputId: 'Language', outputId: 'dynamicLanguages' }
];
// DOMContentLoaded event to handle initial page load logic
window.addEventListener('DOMContentLoaded', () => {
    // Initially show form and hide CV
    formSection.style.display = "block";
    cvSection.style.display = "none";
    // If URL contains '#cv', show the CV section and load data from local storage
    if (window.location.hash === '#cv') {
        const nameFromURL = getQueryParam('name');
        if (nameFromURL) {
            formSection.style.display = "none";
            cvSection.style.display = "block";
            // Load data from local storage using the name as a key
            const savedData = localStorage.getItem(nameFromURL);
            if (savedData) {
                const formData = JSON.parse(savedData);
                // Populate CV fields from saved data
                fields.forEach(({ inputId, outputId }) => {
                    const outputElement = document.getElementById(outputId);
                    if (outputElement && formData[inputId]) {
                        outputElement.innerText = formData[inputId];
                    }
                });
                // Show profile picture if saved
                if (formData.profilePic && profilePic) {
                    profilePic.src = formData.profilePic;
                    profilePic.style.display = "block";
                }
            }
        }
    }
});
// Handle file input for profile picture
inputFile === null || inputFile === void 0 ? void 0 : inputFile.addEventListener('change', () => {
    var _a;
    const file = (_a = inputFile.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        selectedFile = file;
    }
});
// Function to show fields dynamically in the CV section
function showField(inputElement, outputElement) {
    if (inputElement && outputElement) {
        outputElement.innerText = inputElement.value;
    }
}
// Event listener for the "Generate CV" button
button === null || button === void 0 ? void 0 : button.addEventListener('click', (event) => {
    event.preventDefault();
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Create an object to store form data
    const formData = {};
    // Update CV fields and store form values
    fields.forEach(({ inputId, outputId }) => {
        const inputElement = document.getElementById(inputId);
        const outputElement = document.getElementById(outputId);
        showField(inputElement, outputElement);
        if (inputElement) {
            formData[inputId] = inputElement.value;
        }
    });
    // Save profile picture if selected
    if (selectedFile && profilePic) {
        profilePic.src = URL.createObjectURL(selectedFile);
        profilePic.style.display = "block";
        formData.profilePic = profilePic.src;
    }
    // Save form data in local storage using the name as the key
    if (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.trim()) {
        localStorage.setItem(nameInput.value.trim(), JSON.stringify(formData));
    }
    // Hide the form section and show the CV section
    formSection.style.display = "none";
    cvSection.style.display = "block";
});
// Function to switch back to form for editing
function editForm() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    cvSection.style.display = "none";
    formSection.style.display = "block";
}
// Event listener for the "Edit" button
editButton.addEventListener("click", (event) => {
    event.preventDefault();
    editForm();
});
// Event listener for the "Generate PDF" button
pdfButton === null || pdfButton === void 0 ? void 0 : pdfButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Show the CV section for PDF generation
    formSection.style.display = "none";
    cvSection.style.display = "block";
    window.print();
    // Ensure the CV section remains visible after printing
    formSection.style.display = "none";
    cvSection.style.display = "block";
});
// Shareable button functionality
shareableButton === null || shareableButton === void 0 ? void 0 : shareableButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Use the form data to generate the shareable link with only the name
    const nameValue = (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.trim()) || "defaultName";
    const shareableURL = `${window.location.origin}?name=${encodeURIComponent(nameValue)}#cv`;
    // Show the shareable link in an alert box
    alert(`Your shareable link is: ${shareableURL}`);
    // Show the CV section and hide the form
    formSection.style.display = "none";
    cvSection.style.display = "block";
});
