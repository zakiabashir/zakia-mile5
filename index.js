#! /usr/bin/env node
"use strict";
// Function to toggle a specific section and hide others
function toggleSection(sectionClass) {
    const sections = document.getElementsByClassName("content-section");
    // Hide all sections
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    // Show the selected section
    const selectedSection = document.querySelector(`.${sectionClass}`);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}
// Function to show all sections
function showAllSections() {
    const sections = document.getElementsByClassName("content-section");
    // Show all sections
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "block";
    }
}
