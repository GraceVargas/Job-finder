

/*
*  Function to create cards 
*/

const containerCards = document.getElementById('cards-container') as HTMLDivElement;

const createCards = (jobs) => {

    const row = document.createElement('div');
    containerCards.innerHTML = "";
    row.classList.add('row', 'g-2');
    containerCards.appendChild(row);

    for (let job of jobs) {
        const card = document.createElement('div');
        row.appendChild(card);
        card.classList.add('card-job', 'col-lg-3', 'col-md-6');

        const cardContent = document.createElement('div');
        card.appendChild(cardContent);
        cardContent.classList.add('p-3', 'cardContent', 'm-2');

        const title = document.createElement('h4');
        title.appendChild(document.createTextNode(job.name));
        cardContent.appendChild(title);
        title.classList.add('card-job-title');

        const description = document.createElement('p');
        description.appendChild(document.createTextNode(job.description));
        cardContent.appendChild(description);
        description.classList.add('card-job-description');

        const location = document.createElement('span');
        location.appendChild(document.createTextNode(job.location));
        cardContent.appendChild(location);
        location.classList.add('card-job-span');

        const category = document.createElement('span');
        category.appendChild(document.createTextNode(job.category));
        cardContent.appendChild(category);
        category.classList.add('card-job-span');

        const seniority = document.createElement('span');
        seniority.appendChild(document.createTextNode(job.seniority));
        cardContent.appendChild(seniority);
        seniority.classList.add('card-job-span');

        const btnDetails = document.createElement('button');
        btnDetails.appendChild(document.createTextNode('See Details'));
        cardContent.appendChild(btnDetails);
        btnDetails.setAttribute('id', 'btnDetails');
        btnDetails.classList.add('btn', 'btn-primary');     

        btnDetails.addEventListener('click',()=>{

            showSpinner();
            containerCards.innerHTML = "";

            setTimeout(() => {
                const cardC = document.createElement('div');
                cardC.classList.add('p-3','card-details');
                cardC.setAttribute('id','cardDetails-Delete')
                containerCards.appendChild(cardC);
                createCardContent(job,cardC);

                hideSpinner();
                
            }, 1000);
          
        })

    }     
}





/*
*  Function to create filters 
*/

const filterForm = document.getElementById('filter-form') as HTMLFormElement;

const setFilters = (filterName, name, filters) => {

    const select = document.createElement('select');
    select.classList.add('selectFilter');
    select.setAttribute('id', `filter${filterName}`);
    select.setAttribute('name', name);
    filterForm.appendChild(select);

    const optionTitle = document.createElement('option'); 
    select.appendChild(optionTitle);
    optionTitle.setAttribute('disabled', 'disabled');
    optionTitle.setAttribute('selected', 'selected');
    
    optionTitle.setAttribute('id', `${filterName}`)
    optionTitle.setAttribute('value', `${filterName}`)
    optionTitle.appendChild(document.createTextNode(`${filterName}`))
    select.appendChild(optionTitle);

    createOption(select, filters, 'name', 'id');
}




/* Filter Events*/

const filterCards = async (locationSearched, senioritySearched, categorySearched) => {

    containerCards.innerHTML = "";
    
    showSpinner();

    let jobs = await getJobs();

    setTimeout(() => {
        if (locationSearched) {
            jobs = jobs.filter(job => {
                return job.location === locationSearched; 
            })
        }
            
        if (senioritySearched) {
            jobs = jobs.filter(job => {
                return job.seniority === senioritySearched; 
            })
        }
    
        if (categorySearched) {
            jobs = jobs.filter(job => {
                return job.category === categorySearched; 
            })
        }
    
        createCards(jobs);
    
        hideSpinner();

    }, 2000)

};

const startFilter = async(event) =>{
    event.preventDefault();

    let locationSearched;
    let senioritySearched;
    let categorySearched;

    if (event.target.filterLocations.value != 'Locations') {locationSearched = event.target.filterLocations.value};
    if (event.target.filterSeniorities.value != 'Seniorities') {senioritySearched = event.target.filterSeniorities.value};
    if (event.target.filterCategories.value != 'Categories') {categorySearched = event.target.filterCategories.value};         
    
    await filterCards(locationSearched, senioritySearched, categorySearched); 
}


filterForm.addEventListener('submit', startFilter);

const btnClear = document.getElementById('btn-cancel') as HTMLButtonElement;

btnClear.addEventListener('click', () => {
    window.location.reload();
    
})

const loadOptionsForFilter = async () => {

    const categories = await getCategories();
    const locations = await getLocations();
    const seniorities = await getSeniorities();

    setFilters("Categories", 'categories', categories);
    setFilters("Locations", 'locations', locations);
    setFilters("Seniorities", 'seniorities', seniorities);
}

    
/*
*  Edit Card Form
*/

const divFormEdit = document.getElementById('card-edit-container') as HTMLDivElement;
const cardDetailsDel = document.getElementById('cardDetails-Delete') as HTMLDivElement;

const createCardContent = (job, cardDetails)=>{

    const title = document.createElement('h4');
    title.appendChild(document.createTextNode(job.name));
    cardDetails.appendChild(title);
    title.classList.add('card-job-title');

    const description = document.createElement('p');
    description.appendChild(document.createTextNode(job.description));
    cardDetails.appendChild(description);
    description.classList.add('card-job-description');

    const location = document.createElement('span');
    location.appendChild(document.createTextNode(job.location));
    cardDetails.appendChild(location);
    location.classList.add('card-job-span');

    const category = document.createElement('span');
    category.appendChild(document.createTextNode(job.category));
    cardDetails.appendChild(category);
    category.classList.add('card-job-span');

    const seniority = document.createElement('span');
    seniority.appendChild(document.createTextNode(job.seniority));
    cardDetails.appendChild(seniority);
    seniority.classList.add('card-job-span');

    const boxBtn = document.createElement('div');
    boxBtn.classList.add('mt-5');

    const btnEditJob =  document.createElement('button');
    btnEditJob.appendChild(document.createTextNode("Edit job"));
    btnEditJob.classList.add('btn', 'btn-success','ms-3');
    btnEditJob.setAttribute('id',`edit-${job.name}`);
    boxBtn.appendChild(btnEditJob);

    const btnDeleteJob =  document.createElement('button');
    btnDeleteJob.appendChild(document.createTextNode("Delete job"));
    btnDeleteJob.classList.add('btn', 'btn-danger');
    btnDeleteJob.setAttribute('id',`deleteDB-${job.name}`);
    boxBtn.appendChild(btnDeleteJob);
    cardDetails.appendChild(boxBtn);

    btnEditJob.addEventListener('click',()=>{

        divFormEdit.style.display= "block";

    })

    btnDeleteJob.addEventListener('click', ()=>{

        cardDetails.style.display= "none";
        createCardDelete(containerCards, job);
    })

 

}

const formEditCard = document.getElementById('form-edit-card') as HTMLFormElement;
const btnEdit = document.getElementById('btn-edit') as HTMLButtonElement;

createForm("Job title", "input","jobTitle", formEditCard, "Job title")
createForm("Description", "textarea","descriptionJob", formEditCard, "Add a description");
createForm("Tags","select","location", formEditCard);
createForm("","select","category", formEditCard);
createForm("","select","seniority", formEditCard, btnEdit);

loadOptions();





const loadCards = async () => {

    // Esto elimina las cards antes de lanzar el spinner.
    containerCards.innerHTML = "";

    showSpinner();

    const jobs = await getJobs();
   
    setTimeout(() => {
        createCards(jobs);
        hideSpinner();
    }, 1000)
}



const init = async () => {

    await loadOptionsForFilter();
    await loadCards();

}


init();
