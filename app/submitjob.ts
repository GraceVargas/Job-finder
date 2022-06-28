const main = document.getElementById('main-job') as HTMLElement;
const form = document.getElementById('form-job') as HTMLFormElement;
const btnSubmit = document.getElementById("btn-submitJob") as HTMLButtonElement;
main.appendChild(form);



createForm("Job title", "input","jobTitle", form, "Job title")
createForm("Description", "textarea","descriptionJob", form, "Add a description");
createForm("Tags","select","location", form);
createForm("","select","category", form);
createForm("","select","seniority", form);
form.appendChild(btnSubmit);

loadOptions()
const selectLocation = document.getElementById('location');
const selectCategory = document.getElementById('category');
const selectSeniority = document.getElementById('seniority');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    const job = {
        name : e.target.jobTitle.value,
        description: e.target.descriptionJob.value,
        location: selectLocation.value,
        category: selectCategory.value,
        seniority: selectSeniority.value
    }
    addJob(job)

    setTimeout(window.location.href = "./index.html", 2000);



})