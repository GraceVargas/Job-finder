var main = document.getElementById('main-job');
var form = document.getElementById('form-job');
var btnSubmit = document.getElementById("btn-submit");
main.appendChild(form);
form.appendChild(btnSubmit);
createForm("Job title", "input", "jobTitle", form, "Job title");
createForm("Description", "textarea", "descriptionJob", form, "Add a description");
createForm("Tags", "select", "location", form);
createForm("", "select", "category", form);
createForm("", "select", "seniority", form);
loadOptions();
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var job = {
        name: e.target.jobTitle.value,
        description: e.target.descriptionJob.value,
        location: e.target.selectLocation.value,
        category: e.target.selectCategory.value,
        seniority: e.target.selectSeniority.value
    };
    addJob(job);
    setTimeout(window.location.href = "./index.html", 2000);
    loadData();
});
