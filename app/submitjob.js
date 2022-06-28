var main = document.getElementById('main-job');
var form = document.getElementById('form-job');
var btnSubmit = document.getElementById("btn-submitJob");
main.appendChild(form);
createForm("Job title", "input", "jobTitle", form, "Job title");
createForm("Description", "textarea", "descriptionJob", form, "Add a description");
createForm("Tags", "select", "location", form);
createForm("", "select", "category", form);
createForm("", "select", "seniority", form);
form.appendChild(btnSubmit);
loadOptions();
var selectLocation = document.getElementById('location');
var selectCategory = document.getElementById('category');
var selectSeniority = document.getElementById('seniority');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var job = {
        name: e.target.jobTitle.value,
        description: e.target.descriptionJob.value,
        location: selectLocation.value,
        category: selectCategory.value,
        seniority: selectSeniority.value
    };
    addJob(job);
    setTimeout(window.location.href = "./index.html", 2000);
});
