


/* Show and Hidden Functions */


const showSpinner = () =>{
    document.getElementById('spinner')?.style.display = 'flex';
}

const hideSpinner = () => {
    document.getElementById('spinner')?.style.display = 'none';
}


/* Function to create Options for Select */

const createOption = (select, data, value, key)=>{

    data.forEach((elem)=>{
    
        const optionControl = document.createElement('option');
        optionControl.setAttribute('id', elem[key]);
        optionControl.setAttribute('value', elem[value]);
        optionControl.appendChild(document.createTextNode(elem[value]));
        select.appendChild(optionControl);
    })
    
}

/* Function to create Form Controls */

const createForm = (titleLabel,controlType,id, div, placeHolder?) =>{

    const boxForm = document.createElement('div') as HTMLDivElement;
    boxForm.classList.add("container");

    const labelControl = document.createElement('label');
    labelControl.appendChild(document.createTextNode(titleLabel))
    labelControl.classList.add("text-dark");

    boxForm.appendChild(labelControl);
    div.appendChild(boxForm);

    const controlForm = document.createElement(controlType);
    controlForm.classList.add("form-control");
    controlForm.setAttribute('placeholder', placeHolder);
    controlForm.setAttribute('id', id);

    boxForm.appendChild(controlForm);
     
}

/* Function to load Options from API */

const loadOptions = async () => {

    const selectLocation = document.getElementById("location") as HTMLSelectElement;
    const selectCategory = document.getElementById("category") as HTMLSelectElement;
    const selectSeniority = document.getElementById("seniority") as HTMLSelectElement;

    const locations = await getLocations();
    createOption(selectLocation, locations,'name', 'id');
    
    const categories = await getCategories();
    createOption(selectCategory, categories,'name', 'id');

    const seniorities = await getSeniorities();
    createOption(selectSeniority, seniorities,'name', 'id');


}

/* Function to create card for delete*/

const createCardDelete =  (cardToDelete, job) =>{

    const cardDelete = document.createElement('div');
    cardDelete.classList.add('cardDelete');
    cardDelete.appendChild(document.createTextNode("Are you sure to delete this job?"));
    cardToDelete.appendChild(cardDelete);

    const boxBtn = document.createElement('div');
    cardDelete.appendChild(boxBtn);

    const btnDeleteDB = document.createElement('button');
    btnDeleteDB.classList.add('btn','btn-danger');
    btnDeleteDB.setAttribute('id', 'deleteDB')
    btnDeleteDB.appendChild(document.createTextNode('Delete'))
    boxBtn.appendChild(btnDeleteDB);

    const btnCancel = document.createElement('button');
    btnCancel.classList.add('btn','btn-secondary');
    btnCancel.appendChild(document.createTextNode('Cancel'))
    boxBtn.appendChild(btnCancel);

    btnDeleteDB.addEventListener('click', ()=>{

        deleteJob(job.id);
        
        setTimeout(() => {
            loadCards();
        }, 1000);
       
    })

    btnCancel.addEventListener('click', ()=>{
        loadCards();
    })



}


