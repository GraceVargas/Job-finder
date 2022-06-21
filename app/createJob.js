var main = document.getElementById('main-job');
var form = document.getElementById('form-job');
var btnSubmit = document.getElementById("btn-submit");
main.appendChild(form);
var createForm = function (titleLabel, inputType, id, placeHolder) {
    var boxForm = document.createElement('div');
    boxForm.classList.add("container");
    var labelControl = document.createElement('label');
    labelControl.appendChild(document.createTextNode(titleLabel));
    labelControl.classList.add("text-dark");
    boxForm.appendChild(labelControl);
    form.appendChild(boxForm);
    switch (titleLabel) {
        case "Description":
            var textArea = document.createElement('textarea');
            textArea.setAttribute('placeholder', placeHolder);
            textArea.setAttribute('id', id);
            textArea.classList.add("form-control");
            boxForm.appendChild(textArea);
            break;
        default:
            var inputControl = document.createElement('input');
            inputControl.classList.add("form-control");
            inputControl.setAttribute('type', inputType);
            inputControl.setAttribute('placeholder', placeHolder);
            inputControl.setAttribute('id', id);
            boxForm.appendChild(inputControl);
            break;
    }
    boxForm.appendChild(btnSubmit);
};
createForm("Job title", "text", "jobTitle", "Job title");
createForm("Description", "", "descriptionJob", "Add a description");
createForm("Tags", "text", "location", "Location");
createForm("", "text", "category", "Category");
createForm("", "text", "seniority", "Seniority");
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
    window.location.href = "./index.html";
});
