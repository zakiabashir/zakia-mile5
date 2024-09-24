// Get form and resume elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumePage = document.getElementById('resumePage') as HTMLElement;

// Function to generate the resume
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const photo = (document.getElementById('photo') as HTMLInputElement).files?.[0];
    
    const jobTitle = (document.getElementById('job_title') as HTMLInputElement).value;
    const companyName = (document.getElementById('company_name') as HTMLInputElement).value;
    const startDate = (document.getElementById('start_date') as HTMLInputElement).value;
    const endDate = (document.getElementById('end_date') as HTMLInputElement).value;
    const jobDescription = (document.getElementById('job_description') as HTMLTextAreaElement).value;

    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const eduStartDate = (document.getElementById('edu_start_date') as HTMLInputElement).value;
    const eduEndDate = (document.getElementById('edu_end_date') as HTMLInputElement).value;
    const grade = (document.getElementById('grade') as HTMLInputElement).value;

    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value;
    const referenceName = (document.getElementById('reference_name') as HTMLInputElement).value;
    const referenceContact = (document.getElementById('reference_contact') as HTMLInputElement).value;
    const coverLetter = (document.getElementById('cover_letter') as HTMLTextAreaElement).value;

    // Show resume content
    (document.getElementById('resumeName') as HTMLElement).textContent = name;
    (document.getElementById('resumeEmail') as HTMLElement).textContent = email;
    (document.getElementById('resumedob') as HTMLElement).textContent = dob;
    (document.getElementById('resumePhone') as HTMLElement).textContent = phone;
    (document.getElementById('resumegender') as HTMLElement).textContent = gender;
    (document.getElementById('resumeaddress') as HTMLElement).textContent = address;

    (document.getElementById('resumedegree') as HTMLElement).textContent = degree;
    (document.getElementById('resumeinstitute') as HTMLElement).textContent = institution;
    (document.getElementById('resumestart-date') as HTMLElement).textContent = eduStartDate;
    (document.getElementById('resumeend-date') as HTMLElement).textContent = eduEndDate;
    (document.getElementById('resumegrade') as HTMLElement).textContent = grade;

    (document.getElementById('resumejobtitle') as HTMLElement).textContent = jobTitle;
    (document.getElementById('resumecompanyname') as HTMLElement).textContent = companyName;
    (document.getElementById('resumestartdate') as HTMLElement).textContent = startDate;
    (document.getElementById('resumeenddate') as HTMLElement).textContent = endDate;
    (document.getElementById('resumejobdescription') as HTMLElement).textContent = jobDescription;

    (document.getElementById('resumeSkills') as HTMLElement).textContent = skills;
    (document.getElementById('resumelanguages') as HTMLElement).textContent = languages;
    (document.getElementById('resumehobbies') as HTMLElement).textContent = hobbies;
    (document.getElementById('resumerefrencename') as HTMLElement).textContent = referenceName;
    (document.getElementById('resumerefrencecontact') as HTMLElement).textContent = referenceContact;
    (document.getElementById('resumerecoverletter') as HTMLElement).textContent = coverLetter;

    // Handle profile photo
    if (photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            (document.getElementById('resumePhoto') as HTMLImageElement).src = e.target?.result as string;
        };
        reader.readAsDataURL(photo);
    }

    // Hide the form and show the resume page
    resumeForm.style.display = 'none';
    resumePage.classList.remove('hidden');
});

// Download PDF button
document.getElementById('download-pdf')?.addEventListener('click', function () {
print();
});

// Share your resume button
document.getElementById('shareLinkButton')?.addEventListener('click', function () {
    const username = (document.getElementById('username') as HTMLInputElement).value;
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
document.getElementById('editButton')?.addEventListener('click', function () {
    resumeForm.style.display = 'block'; // Show the form again
    resumePage.classList.add('hidden'); // Hide the resume page
});
