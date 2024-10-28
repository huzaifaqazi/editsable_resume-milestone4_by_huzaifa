document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    document.getElementById("addEducation").addEventListener("click", function () {
        var educationContainer = document.getElementById("educationContainer");
        var newEducation = document.createElement("input");
        newEducation.type = "text";
        newEducation.className = "education";
        newEducation.placeholder = "Add education";
        educationContainer.appendChild(newEducation);
    });
    document.getElementById("addSkill").addEventListener("click", function () {
        var skillsContainer = document.getElementById("skillsContainer");
        var newSkill = document.createElement("input");
        newSkill.type = "text";
        newSkill.className = "skill";
        newSkill.placeholder = "Add skill";
        skillsContainer.appendChild(newSkill);
    });
    document.getElementById("addExperience").addEventListener("click", function () {
        var experienceContainer = document.getElementById("experienceContainer");
        var newExperience = document.createElement("textarea");
        newExperience.className = "experience";
        newExperience.rows = 2;
        newExperience.placeholder = "Add experience";
        experienceContainer.appendChild(newExperience);
    });
    resumeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var fatherName = document.getElementById("fatherName").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = Array.from(document.getElementsByClassName("education"))
            .map(function (input) { return input.value; }).filter(Boolean);
        var skills = Array.from(document.getElementsByClassName("skill"))
            .map(function (input) { return input.value; }).filter(Boolean);
        var experiences = Array.from(document.getElementsByClassName("experience"))
            .map(function (input) { return input.value; }).filter(Boolean);
        var resumeHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Father's Name:</strong> ").concat(fatherName, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <ul>").concat(education.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "</ul>\n            <h3>Skills</h3>\n            <ul>").concat(skills.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "</ul>\n            <h3>Experience</h3>\n            <ul>").concat(experiences.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "</ul>\n        ");
        resumeOutput.innerHTML = resumeHTML;
        // Make the output editable
        makeEditable(resumeOutput);
    });
    function makeEditable(output) {
        output.querySelectorAll('h2, p, h3').forEach(function (element) {
            element.setAttribute('contenteditable', 'true');
            element.classList.add('editable');
        });
        output.querySelectorAll('ul').forEach(function (ul) {
            ul.setAttribute('contenteditable', 'true');
            ul.classList.add('editable');
        });
    }
});
