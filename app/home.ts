const filterForm = document.getElementById('filter-form') as HTMLFormElement;

const selectFilters = ['location', 'seniority', 'category'];

const createFilters = (filters, data) => {
    for (let filter of filters) {
        const select = document.createElement('select');
        select.classList.add('selectFilter');
        select.setAttribute('id', filter);
        filterForm.appendChild(select);

        for (let date of data) {
            const option = document.createElement('option'); 
            select.appendChild(option);
            option.appendChild(document.createTextNode(date));
        }

        
    }
}

createFilters(selectFilters,selectFilters);


