const main = document.getElementById('main-job') as HTMLElement;
const form = document.getElementById('form-job') as HTMLFormElement;
const btnSubmit = document.getElementById("btn-submit") as HTMLButtonElement;
main.appendChild(form);


const createForm= (titleLabel,controlType,id,placeHolder?) =>{

    const boxForm = document.createElement('div');
    boxForm.classList.add("container");

    const labelControl = document.createElement('label');
    labelControl.appendChild(document.createTextNode(titleLabel))
    labelControl.classList.add("text-dark");

    boxForm.appendChild(labelControl);
    form.appendChild(boxForm);

    const controlForm = document.createElement(controlType);
    controlForm.classList.add("form-control");
    controlForm.setAttribute('placeholder', placeHolder);
    controlForm.setAttribute('id', id);

    boxForm.appendChild(controlForm);
    boxForm.appendChild(btnSubmit);
     
}
createForm("Job title", "input","jobTitle", "Job title")
createForm("Description", "textarea","descriptionJob","Add a description");
createForm("Tags","select","location");
createForm("","select","category");
createForm("","select","seniority");

const selectLocation = document.getElementById("location") as HTMLSelectElement;
const selectCategory = document.getElementById("category") as HTMLSelectElement;
const selectSeniority = document.getElementById("seniority") as HTMLSelectElement;


const loadOptions = async () => {

    const locations = await getLocations();
    createOption(selectLocation, locations,'name', 'id');
    
    const categories = await getCategories();
    createOption(selectCategory, categories,'name', 'id');

    const seniorities = await getSeniorities();
    createOption(selectSeniority, seniorities,'name', 'id');


}

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