var main = document.getElementById('main-job');
var form = document.getElementById('form-job');
var btnSubmit = document.getElementById("btn-submit");
main.appendChild(form);
var createForm = function (titleLabel, controlType, id, placeHolder) {
    var boxForm = document.createElement('div');
    boxForm.classList.add("container");
    var labelControl = document.createElement('label');
    labelControl.appendChild(document.createTextNode(titleLabel));
    labelControl.classList.add("text-dark");
    boxForm.appendChild(labelControl);
    form.appendChild(boxForm);
    var controlForm = document.createElement(controlType);
    controlForm.classList.add("form-control");
    controlForm.setAttribute('placeholder', placeHolder);
    controlForm.setAttribute('id', id);
    boxForm.appendChild(controlForm);
    boxForm.appendChild(btnSubmit);
};
createForm("Job title", "input", "jobTitle", "Job title");
createForm("Description", "textarea", "descriptionJob", "Add a description");
createForm("Tags", "select", "location");
createForm("", "select", "category");
createForm("", "select", "seniority");
var selectLocation = document.getElementById("location");
var opLocation = document.createElement('option');
selectLocation.appendChild(opLocation);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var job = {
        name: e.target.jobTitle.value,
        description: e.target.descriptionJob.value,
        location: e.target.location.value,
        category: e.target.category.value,
        seniority: e.target.seniority.value
    };
    addJob(job);
    setTimeout(window.location.href = "./index.html", 2000);
    loadData();
});
