type Job = {
    name: string,
    description: string,
    location: string,
    category: string,
    seniority: string,
    id: number,
}

/*
*  Function to create cards 
*/

const containerCards = document.getElementById('cards-container') as HTMLDivElement;

const createCards = (jobs) => {
    const row = document.createElement('div');
        containerCards.innerHTML = "";
        row.classList.add('row', 'g-2');
        containerCards.appendChild(row);

        loadData(containerCards);
    
        setTimeout(() => {
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
        }, 2000);

        
    }



/*
*  Function to create filters 
*/

const filterForm = document.getElementById('filter-form') as HTMLFormElement;


const setFilters = async () => {
    const filtersData = {
        location: [],
        seniority: [],
        category: [],
    }

    const response = await getJobs();

    response.forEach((job: Job) => {  
        if (!filtersData.location.includes(job.location)) filtersData.location.push(job.location);                    
        if (!filtersData.seniority.includes(job.seniority)) filtersData.seniority.push(job.seniority);
        if (!filtersData.category.includes(job.category)) filtersData.category.push(job.category);
    })           

    for (let filter in filtersData) {
        const select = document.createElement('select');
        select.classList.add('selectFilter');
        select.setAttribute('id', `filter-${filter}`);
        filterForm.appendChild(select);

        const optionTitle = document.createElement('option'); 
        select.appendChild(optionTitle);
        optionTitle.setAttribute('id', filter)
        optionTitle.setAttribute('value', filter)
        optionTitle.appendChild(document.createTextNode(filter))
        select.appendChild(optionTitle);
    }      

    const filterLocation = document.getElementById('filter-location') as HTMLSelectElement;
    const filterSeniority = document.getElementById('filter-seniority') as HTMLSelectElement;
    const filterCategory = document.getElementById('filter-category') as HTMLSelectElement;

    const createOptions = (filter, select) => {
        filter.forEach((elem => {
        const option =  document.createElement('option'); 
        select.appendChild(option);
        option.setAttribute('id', elem)
        option.setAttribute('value', elem)
        option.appendChild(document.createTextNode(elem))
        select.appendChild(option);
    }))
    }
    createOptions(filtersData.location, filterLocation);
    createOptions(filtersData.seniority, filterSeniority);
    createOptions(filtersData.category, filterCategory);


    /* Filter Events*/

    const btnSubmit = document.getElementById('btn-submit') as HTMLButtonElement;

    btnSubmit.addEventListener('click', (e) =>{
        e.preventDefault();
        let locationSearched;
        let senioritySearched;
        let categorySearched;

        if (filterLocation.value != 'location') {locationSearched = filterLocation.value};
        if (filterSeniority.value != 'seniority') {senioritySearched = filterSeniority.value};
        if (filterCategory.value != 'category') {categorySearched = filterCategory.value};
                
        const loadCards = async () => {
            let jobs = await getJobs();

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
        };

        loadCards();
    
    })
}
    


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

setFilters();


const loadCards = async () => {
    const jobs = await getJobs();
    createCards(jobs);
}

loadCards();


