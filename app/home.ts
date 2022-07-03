
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

    select.addEventListener('change', (e) => {
        e.preventDefault();  
        e.stopPropagation();
        const params = new URLSearchParams(window.location.search);
        params.set(filterName, e.target.value);
        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + params.toString();
            window.history.pushState({path: newurl}, '', newurl);
    })

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

    const params = new URLSearchParams(window.location.search);
    let locationSearched = params.get('Locations');
    let categorySearched = params.get('Categories');
    let senioritySearched = params.get('Seniorities');    
    
    await filterCards(locationSearched, senioritySearched, categorySearched); 
}


filterForm.addEventListener('submit', startFilter);

const btnClear = document.getElementById('btn-cancel') as HTMLButtonElement;

btnClear.addEventListener('click', () => {
    let url = new URL(location);
    url.searchParams.delete('Categories');
    url.searchParams.delete('Locations');
    url.searchParams.delete('Seniorities');
    history.pushState(null, document.title, url);    
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


    btnDeleteJob.addEventListener('click', ()=>{

        cardDetails.style.display= "none";
        createCardDelete(containerCards, job);
    })

    btnEditJob.addEventListener('click',()=>{

        divFormEdit.style.display= "block";

        const jobTitleItem = document.getElementById('jobTitle') as HTMLInputElement;
        const descriptionJobItem = document.getElementById('descriptionJob') as HTMLInputElement;
        const locationItem = document.getElementById('location') as HTMLSelectElement;
        const categoryItem = document.getElementById('category') as HTMLSelectElement;
        const seniorityItem = document.getElementById('seniority') as HTMLSelectElement;

        jobTitleItem.value = job.name;
        descriptionJobItem.value = job.description;
        locationItem.value = job.location;
        categoryItem.value = job.category;
        seniorityItem.value = job.seniority;

        const btnEditJob = document.getElementById('btn-edit') as HTMLButtonElement;
        const editCardContainer = document.getElementById('card-edit-container') as HTMLDivElement;

        btnEditJob.addEventListener('click', async (e) => {
            e.preventDefault();

            const modifiedJob = {
                name: jobTitleItem.value,
                description:  descriptionJobItem.value,
                location: locationItem.value,
                category: categoryItem.value,
                seniority: seniorityItem.value
            }            

            await editJob(job.id, modifiedJob);
             loadCards();
            editCardContainer.style.display= "none";           
        })
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





