
const spinner = document.getElementById('spinner');

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

    }     
}


const loadCards = async () => {

    // Esto elimina las cards antes de lanzar el spinner.
    containerCards.innerHTML = "";

    showData(spinner);

    const jobs = await getJobs();
   
    setTimeout(() => {
        createCards(jobs);
        hideData(spinner);
    }, 5000)
}

loadCards();


/*
*  Function to create filters 
*/

const filterForm = document.getElementById('filter-form') as HTMLFormElement;

const setFilters = (filterName, filters) => {

    const select = document.createElement('select');
    select.classList.add('selectFilter');
    select.setAttribute('id', `filter${filterName}`);
    filterForm.appendChild(select);

    const optionTitle = document.createElement('option'); 
    select.appendChild(optionTitle);
    
    optionTitle.setAttribute('id', `${filterName}`)
    optionTitle.setAttribute('value', `${filterName}`)
    optionTitle.appendChild(document.createTextNode(`${filterName}`))
    select.appendChild(optionTitle);

    createOption(select, filters, 'name', 'id');
}

const loadOptionsForFilter = async () => {

    const categories = await getCategories();
    const locations = await getLocations();
    const seniorities = await getSeniorities();

    setFilters("Categories", categories);
    setFilters("Locations", locations);
    setFilters("Seniorities", seniorities);
}

loadOptionsForFilter();

/* Filter Events*/

const filterCards = async (locationSearched, senioritySearched, categorySearched) => {

    containerCards.innerHTML = "";
    
    showData(spinner);

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
    
        hideData(spinner);

    }, 5000)

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




    
/*
*  Edit Card Form
*/

const formEditCard = document.getElementById('form-edit-card') as HTMLFormElement;
const btnEdit = document.getElementById('btn-edit') as HTMLButtonElement;

createForm("Job title", "input","jobTitle", formEditCard, "Job title")
createForm("Description", "textarea","descriptionJob", formEditCard, "Add a description");
createForm("Tags","select","location", formEditCard);
createForm("","select","category", formEditCard);
createForm("","select","seniority", formEditCard, btnEdit);

loadOptions();

    // filterLocation.addEventListener('change', (e) => {
    //     e.preventDefault();
    //     const params = new URLSearchParams(window.location.search);
    //     params.set('location', e.target.value);
    //     window.location.href = window.location.pathname + '?' + params.toString(); 
    // })

    // filterSeniority.addEventListener('change', (e) => {
    //     e.preventDefault();
    //     const params = new URLSearchParams(window.location.search);
    //     params.set('seniority', e.target.value);
    //     window.location.href = window.location.pathname + '?' + params.toString(); 
    // })

    // filterCategory.addEventListener('change', (e) => {
    //     e.preventDefault();
    //     const params = new URLSearchParams(window.location.search);
    //     params.set('category', e.target.value);
    //     window.location.href = window.location.pathname + '?' + params.toString(); 
    // })

// }
// }




