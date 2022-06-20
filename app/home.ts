type Job = {
    name: string,
    description: string,
    location: string,
    category: string,
    seniority: string,
    id: number,
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

    filterLocation.addEventListener('change', (e) => {
        e.stopPropagation();  
        const params = new URLSearchParams(window.location.search);
        params.set('location', e.target.value);
        window.location.href = window.location.pathname + '?' + params.toString(); 
    })

    filterSeniority.addEventListener('change', (e) => {
        e.stopPropagation();  
        const params = new URLSearchParams(window.location.search);
        params.set('seniority', e.target.value);
        window.location.href = window.location.pathname + '?' + params.toString(); 
    })

    filterCategory.addEventListener('change', (e) => {
        e.stopPropagation();  
        const params = new URLSearchParams(window.location.search);
        params.set('category', e.target.value);
        window.location.href = window.location.pathname + '?' + params.toString(); 
    })

}

setFilters();


/*
*  Function to create cards
*/