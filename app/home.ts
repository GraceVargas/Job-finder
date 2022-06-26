
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
    
    optionTitle.setAttribute('id', `${filterName}`)
    optionTitle.setAttribute('value', `${filterName}`)
    optionTitle.appendChild(document.createTextNode(`${filterName}`))
    select.appendChild(optionTitle);

    createOption(select, filters, 'name', 'id');
}

/* Filter Events*/
const filterCards = async (locationSearched, senioritySearched, categorySearched) => {

    containerCards.innerHTML = ""
    
    showSpinner()

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
    
        hideSpinner()

    }, 5000)

};

const startFilter = async (event) =>{
    event.preventDefault();

    const locationSearched = event.target.locations.value;
    const senioritySearched = event.target.seniorities.value;
    const categorySearched = event.target.categories.value;         
    
    await filterCards(locationSearched, senioritySearched, categorySearched); 
}

filterForm.addEventListener('submit', startFilter)


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


const loadOptionsForFilter = async () => {

    const categories = await getCategories();
    const locations = await getLocations();
    const seniorities = await getSeniorities();

    setFilters("Categories", 'categories', categories);
    setFilters("Locations", 'locations', locations);
    setFilters("Seniorities", 'seniorities', seniorities);
}



const loadCards = async () => {

    // Esto elimina las cards antes de lanzar el spinner.
    containerCards.innerHTML = ""

    showSpinner()

    const jobs = await getJobs();

    setTimeout(() => {
        createCards(jobs);
        hideSpinner()
    }, 5000)
   

}




const init = async () => {

    await loadOptionsForFilter();
    await loadCards();

}


init()

