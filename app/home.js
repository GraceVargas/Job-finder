var filterForm = document.getElementById('filter-form');
var selectFilters = ['location', 'seniority', 'category'];
var createFilters = function (filters, data) {
    for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
        var filter = filters_1[_i];
        var select = document.createElement('select');
        select.classList.add('selectFilter');
        select.setAttribute('id', filter);
        filterForm.appendChild(select);
        for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
            var date = data_1[_a];
            var option = document.createElement('option');
            select.appendChild(option);
            option.appendChild(document.createTextNode(date));
        }
    }
};
createFilters(selectFilters, selectFilters);
