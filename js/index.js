var objective_btn = document.getElementById("objective-add-btn");
var objective_holder = document.getElementById("objective-text-holder");
var objective_written = -1;
objective_btn.addEventListener("click", ()=>{
    for (let i = 0; i < objective_holder.children.length; i++) {
        const element = objective_holder.children[i];
        if(objective_holder.children[i].value != ""){
            objective_written++;
        }
        if(objective_written == objective_holder.children.length-1){
            const text = document.createElement("textarea");
            text.placeholder = "In a concise summary, define your identity, your strengths, and specify the desired job role.";
            objective_holder.appendChild(text)
            objective_written = -1;
        }
    }
    objective_written = -1;
})

var education_btn = document.getElementById("education-add-btn");
var education_holder = document.getElementById("education-text-holder");
var education_written = -1;
education_btn.addEventListener("click", ()=>{
    for (let i = 0; i < education_holder.children.length; i++) {
        const element = education_holder.children[i];
        if(education_holder.children[i].children[0].children[0].value != ""){
            education_written++;
        }
        if(education_written == education_holder.children.length-1){
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job', 'border');

            // Create the first inner div with class "d-flex" and input elements for Job Title and Company Name
            const firstInnerDiv = document.createElement('div');
            firstInnerDiv.classList.add('d-flex');

            const jobTitleInput = document.createElement('input');
            jobTitleInput.setAttribute('type', 'text');
            jobTitleInput.setAttribute('placeholder', 'School Name');

            const companyNameInput = document.createElement('input');
            companyNameInput.setAttribute('type', 'text');
            companyNameInput.setAttribute('placeholder', 'Degree / Diploma');

            firstInnerDiv.appendChild(jobTitleInput);
            firstInnerDiv.appendChild(companyNameInput);

            // Create the second inner div with class "d-flex" and input elements for Start Date and End Date
            const secondInnerDiv = document.createElement('div');
            secondInnerDiv.classList.add('d-flex');

            const startDateInput = document.createElement('input');
            startDateInput.setAttribute('type', 'date');
            startDateInput.setAttribute('placeholder', 'Start Date');

            const endDateInput = document.createElement('input');
            endDateInput.setAttribute('type', 'date');
            endDateInput.setAttribute('placeholder', 'End Date');

            secondInnerDiv.appendChild(startDateInput);
            secondInnerDiv.appendChild(endDateInput);

            // Append the inner divs to the main div
            jobDiv.appendChild(firstInnerDiv);
            jobDiv.appendChild(secondInnerDiv);
            education_holder.appendChild(jobDiv);
            education_written = -1;
        }
    }
    education_written = -1;
})

var experience_btn = document.getElementById("experience-add-btn");
var experience_holder = document.getElementById("experience-text-holder");
var experience_written = -1;
experience_btn.addEventListener("click", ()=>{
    for (let i = 0; i < experience_holder.children.length; i++) {
        const element = experience_holder.children[i];
        if(experience_holder.children[i].children[0].children[0].value != ""){
            experience_written++;
        }
        if(experience_written == experience_holder.children.length-1){
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job', 'border');

            // Create the first inner div with class "d-flex" and input elements for Job Title and Company Name
            const firstInnerDiv = document.createElement('div');
            firstInnerDiv.classList.add('d-flex');

            const jobTitleInput = document.createElement('input');
            jobTitleInput.setAttribute('type', 'text');
            jobTitleInput.setAttribute('placeholder', 'Job Title');

            const companyNameInput = document.createElement('input');
            companyNameInput.setAttribute('type', 'text');
            companyNameInput.setAttribute('placeholder', 'Company Name');

            firstInnerDiv.appendChild(jobTitleInput);
            firstInnerDiv.appendChild(companyNameInput);

            // Create the second inner div with class "d-flex" and input elements for Start Date and End Date
            const secondInnerDiv = document.createElement('div');
            secondInnerDiv.classList.add('d-flex');

            const startDateInput = document.createElement('input');
            startDateInput.setAttribute('type', 'date');
            startDateInput.setAttribute('placeholder', 'Start Date');

            const endDateInput = document.createElement('input');
            endDateInput.setAttribute('type', 'date');
            endDateInput.setAttribute('placeholder', 'End Date');

            secondInnerDiv.appendChild(startDateInput);
            secondInnerDiv.appendChild(endDateInput);

            // Append the inner divs to the main div
            jobDiv.appendChild(firstInnerDiv);
            jobDiv.appendChild(secondInnerDiv);
            experience_holder.appendChild(jobDiv);
            experience_written = -1;
        }
    }
    experience_written = -1;
})


var certification_btn = document.getElementById("certification-add-btn");
var certification_holder = document.getElementById("certification-text-holder");
var certification_written = -1;
certification_btn.addEventListener("click", ()=>{
    for (let i = 0; i < certification_holder.children.length; i++) {
        const element = certification_holder.children[i];
        if(certification_holder.children[i].children[0].children[0].value != ""){
            certification_written++;
        }
        if(certification_written == certification_holder.children.length-1){
            // Create the main div with class "job border"
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job', 'border');

            // Create the inner div with class "d-flex" and input elements for Name of Certification and Earned Date
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('d-flex');

            const certificationNameInput = document.createElement('input');
            certificationNameInput.setAttribute('type', 'text');
            certificationNameInput.setAttribute('placeholder', 'Name of Certification');

            const earnedDateInput = document.createElement('input');
            earnedDateInput.setAttribute('type', 'date');
            earnedDateInput.setAttribute('placeholder', 'Earned Date');

            innerDiv.appendChild(certificationNameInput);
            innerDiv.appendChild(earnedDateInput);

            // Append the inner div to the main div
            jobDiv.appendChild(innerDiv);

            certification_holder.appendChild(jobDiv);
            certification_written = -1;
        }
    }
    certification_written = -1;
})



var reference_btn = document.getElementById("reference-add-btn");
var reference_holder = document.getElementById("reference-text-holder");
var reference_written = -1;
reference_btn.addEventListener("click", ()=>{
    for (let i = 0; i < reference_holder.children.length; i++) {
        const element = reference_holder.children[i];
        if(reference_holder.children[i].children[0].children[0].value != ""){
            reference_written++;
        }
        if(reference_written == reference_holder.children.length-1){
            // Create the main div with class "job border"
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job', 'border');

            // Create the first inner div with class "d-flex" and input elements for Reference Name and Job Title, Company Name
            const firstInnerDiv = document.createElement('div');
            firstInnerDiv.classList.add('d-flex');

            const referenceNameInput = document.createElement('input');
            referenceNameInput.setAttribute('type', 'text');
            referenceNameInput.setAttribute('placeholder', 'Reference Name');

            const jobTitleCompanyInput = document.createElement('input');
            jobTitleCompanyInput.setAttribute('type', 'text');
            jobTitleCompanyInput.setAttribute('placeholder', 'Job Title, Company Name');

            firstInnerDiv.appendChild(referenceNameInput);
            firstInnerDiv.appendChild(jobTitleCompanyInput);

            // Create the second inner div with class "d-flex" and input elements for Contact Phone Number and Contact Email Address
            const secondInnerDiv = document.createElement('div');
            secondInnerDiv.classList.add('d-flex');

            const contactPhoneInput = document.createElement('input');
            contactPhoneInput.setAttribute('type', 'text');
            contactPhoneInput.setAttribute('placeholder', 'Contact Phone Number');

            const contactEmailInput = document.createElement('input');
            contactEmailInput.setAttribute('type', 'text');
            contactEmailInput.setAttribute('placeholder', 'Contact Email Address');

            secondInnerDiv.appendChild(contactPhoneInput);
            secondInnerDiv.appendChild(contactEmailInput);

            // Append the inner divs to the main div
            jobDiv.appendChild(firstInnerDiv);
            jobDiv.appendChild(secondInnerDiv);
            reference_holder.appendChild(jobDiv);
            reference_written = -1;
        }
    }
    reference_written = -1;
})



var skills_btn = document.getElementById("skills-add-btn");
var skills_holder = document.getElementById("skills-text-holder");
var skills_written = -1;
skills_btn.addEventListener("click", ()=>{
    for (let i = 0; i < skills_holder.children.length; i++) {
        const element = skills_holder.children[i];
        if(skills_holder.children[i].children[0].children[0].value != ""){
            skills_written++;
        }
        if(skills_written == skills_holder.children.length-1){
            // Create the main div with class "job border"
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job', 'border');

            // Create the inner div with class "d-flex" and input elements for Name of skills and Earned Date
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('d-flex');

            const skillsNameInput = document.createElement('input');
            skillsNameInput.setAttribute('type', 'text');
            skillsNameInput.setAttribute('placeholder', 'Your skills or abilities');

            const earnedDateInput = document.createElement('input');
            earnedDateInput.setAttribute('type', 'text');
            earnedDateInput.setAttribute('placeholder', 'Description');

            innerDiv.appendChild(skillsNameInput);
            innerDiv.appendChild(earnedDateInput);

            // Append the inner div to the main div
            jobDiv.appendChild(innerDiv);

            skills_holder.appendChild(jobDiv);
            skills_written = -1;
        }
    }
    skills_written = -1;
})
/*
objective_holder.addEventListener("click", ()=>{
    for (let i = 0; i < objective_holder.children.length; i++) {
        const element = objective_holder.children[i];
        console.log(element);
        if(objective_holder.children[i].value != "" && objective_holder.children.length > 1){
            console.log(objective_holder.children[-1]);
            objective_holder.removeChild(objective_holder.children[-1]);
        }
    }
})
*/