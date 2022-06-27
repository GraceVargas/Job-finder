const main = document.getElementById('main-job') as HTMLElement;
const form = document.getElementById('form-job') as HTMLFormElement;
const btnSubmit = document.getElementById("btn-submit") as HTMLButtonElement;
main.appendChild(form);
form.appendChild(btnSubmit);


createForm("Job title", "input","jobTitle", form, "Job title")
createForm("Description", "textarea","descriptionJob", form, "Add a description");
createForm("Tags","select","location", form);
createForm("","select","category", form);
createForm("","select","seniority", form);



loadOptions()


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    const job = {
        name : e.target.jobTitle.value,
        description: e.target.descriptionJob.value,
        location: e.target.selectLocation.value,
        category: e.target.selectCategory.value,
        seniority: e.target.selectSeniority.value
    }
    addJob(job)

    setTimeout(window.location.href = "./index.html", 2000);

    loadData();

})