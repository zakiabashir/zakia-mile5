"use strict";
var _a, _b, _c;
// Get form and resume elements
const resumeForm = document.getElementById('resumeForm');
const resumePage = document.getElementById('resumePage');
const header = document.getElementById('header');
// Function to generate the resume
resumeForm.addEventListener('submit', function (event) {
    var _a, _b;
    event.preventDefault(); // Prevent the form from submitting
    // Get form values
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = (_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    const address = document.getElementById('address').value;
    const photo = (_b = document.getElementById('photo').files) === null || _b === void 0 ? void 0 : _b[0];
    const jobTitle = document.getElementById('job_title').value;
    const companyName = document.getElementById('company_name').value;
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const jobDescription = document.getElementById('job_description').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const eduStartDate = document.getElementById('edu_start_date').value;
    const eduEndDate = document.getElementById('edu_end_date').value;
    const grade = document.getElementById('grade').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;
    const hobbies = document.getElementById('hobbies').value;
    const referenceName = document.getElementById('reference_name').value;
    const referenceContact = document.getElementById('reference_contact').value;
    const coverLetter = document.getElementById('cover_letter').value;
    // Show resume content
    document.getElementById('resumeName').textContent = name;
    document.getElementById('resumeEmail').textContent = email;
    document.getElementById('resumedob').textContent = dob;
    document.getElementById('resumePhone').textContent = phone;
    document.getElementById('resumegender').textContent = gender;
    document.getElementById('resumeaddress').textContent = address;
    document.getElementById('resumedegree').textContent = degree;
    document.getElementById('resumeinstitute').textContent = institution;
    document.getElementById('resumestart-date').textContent = eduStartDate;
    document.getElementById('resumeend-date').textContent = eduEndDate;
    document.getElementById('resumegrade').textContent = grade;
    document.getElementById('resumejobtitle').textContent = jobTitle;
    document.getElementById('resumecompanyname').textContent = companyName;
    document.getElementById('resumestartdate').textContent = startDate;
    document.getElementById('resumeenddate').textContent = endDate;
    document.getElementById('resumejobdescription').textContent = jobDescription;
    document.getElementById('resumeSkills').textContent = skills;
    document.getElementById('resumelanguages').textContent = languages;
    document.getElementById('resumehobbies').textContent = hobbies;
    document.getElementById('resumerefrencename').textContent = referenceName;
    document.getElementById('resumerefrencecontact').textContent = referenceContact;
    document.getElementById('resumerecoverletter').textContent = coverLetter;
    // Handle profile photo
    if (photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById('resumePhoto').src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(photo);
    }
    // Hide the form and show the resume page
    resumeForm.style.display = 'none';
    header.style.display = 'none';
    resumePage.classList.remove('hidden');
});
// Download PDF button
(_a = document.getElementById('download-pdf')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    print();
});
// Share your resume button
(_b = document.getElementById('shareLinkButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const baseUrl = window.location.href; // Get the current URL
    const shareUrl = `${baseUrl}?username=${encodeURIComponent(username)}`;
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Link copied to clipboard!'); // Show alert
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});
// Edit button functionality
(_c = document.getElementById('editButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    resumeForm.style.display = 'block'; // Show the form again
    resumePage.classList.add('hidden'); // Hide the resume page
});
