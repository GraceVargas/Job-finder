/*
*  Function to create cards
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var containerCards = document.getElementById('cards-container');
var createCards = function (jobs) {
    var row = document.createElement('div');
    containerCards.innerHTML = "";
    row.classList.add('row', 'g-2');
    containerCards.appendChild(row);
    var _loop_1 = function (job) {
        var card = document.createElement('div');
        row.appendChild(card);
        card.classList.add('card-job', 'col-lg-3', 'col-md-6');
        var cardContent = document.createElement('div');
        card.appendChild(cardContent);
        cardContent.classList.add('p-3', 'cardContent', 'm-2');
        var title = document.createElement('h4');
        title.appendChild(document.createTextNode(job.name));
        cardContent.appendChild(title);
        title.classList.add('card-job-title');
        var description = document.createElement('p');
        description.appendChild(document.createTextNode(job.description));
        cardContent.appendChild(description);
        description.classList.add('card-job-description');
        var location_1 = document.createElement('span');
        location_1.appendChild(document.createTextNode(job.location));
        cardContent.appendChild(location_1);
        location_1.classList.add('card-job-span');
        var category = document.createElement('span');
        category.appendChild(document.createTextNode(job.category));
        cardContent.appendChild(category);
        category.classList.add('card-job-span');
        var seniority = document.createElement('span');
        seniority.appendChild(document.createTextNode(job.seniority));
        cardContent.appendChild(seniority);
        seniority.classList.add('card-job-span');
        var btnDetails = document.createElement('button');
        btnDetails.appendChild(document.createTextNode('See Details'));
        cardContent.appendChild(btnDetails);
        btnDetails.setAttribute('id', 'btnDetails');
        btnDetails.classList.add('btn', 'btn-primary');
        btnDetails.addEventListener('click', function () {
            showSpinner();
            containerCards.innerHTML = "";
            setTimeout(function () {
                var cardC = document.createElement('div');
                cardC.classList.add('p-3', 'card-details');
                cardC.setAttribute('id', 'cardDetails-Delete');
                containerCards.appendChild(cardC);
                createCardContent(job, cardC);
                hideSpinner();
            }, 1000);
        });
    };
    for (var _i = 0, jobs_1 = jobs; _i < jobs_1.length; _i++) {
        var job = jobs_1[_i];
        _loop_1(job);
    }
};
/*
*  Function to create filters
*/
var filterForm = document.getElementById('filter-form');
var setFilters = function (filterName, name, filters) {
    var select = document.createElement('select');
    select.classList.add('selectFilter');
    select.setAttribute('id', "filter".concat(filterName));
    select.setAttribute('name', name);
    filterForm.appendChild(select);
    select.addEventListener('change', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var params = new URLSearchParams(window.location.search);
        params.set(filterName, e.target.value);
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + params.toString();
        window.history.pushState({ path: newurl }, '', newurl);
    });
    var optionTitle = document.createElement('option');
    select.appendChild(optionTitle);
    optionTitle.setAttribute('disabled', 'disabled');
    optionTitle.setAttribute('selected', 'selected');
    optionTitle.setAttribute('id', "".concat(filterName));
    optionTitle.setAttribute('value', "".concat(filterName));
    optionTitle.appendChild(document.createTextNode("".concat(filterName)));
    select.appendChild(optionTitle);
    createOption(select, filters, 'name', 'id');
};
/* Filter Events*/
var filterCards = function (locationSearched, senioritySearched, categorySearched) { return __awaiter(_this, void 0, void 0, function () {
    var jobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                containerCards.innerHTML = "";
                showSpinner();
                return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                setTimeout(function () {
                    if (locationSearched) {
                        jobs = jobs.filter(function (job) {
                            return job.location === locationSearched;
                        });
                    }
                    if (senioritySearched) {
                        jobs = jobs.filter(function (job) {
                            return job.seniority === senioritySearched;
                        });
                    }
                    if (categorySearched) {
                        jobs = jobs.filter(function (job) {
                            return job.category === categorySearched;
                        });
                    }
                    createCards(jobs);
                    hideSpinner();
                }, 2000);
                return [2 /*return*/];
        }
    });
}); };
var startFilter = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var params, locationSearched, categorySearched, senioritySearched;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                params = new URLSearchParams(window.location.search);
                locationSearched = params.get('Locations');
                categorySearched = params.get('Categories');
                senioritySearched = params.get('Seniorities');
                return [4 /*yield*/, filterCards(locationSearched, senioritySearched, categorySearched)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
filterForm.addEventListener('submit', startFilter);
var btnClear = document.getElementById('btn-cancel');
var filterCategories = document.getElementById("filterCategories");
btnClear.addEventListener('click', function () {
    var url = new URL(location);
    url.searchParams["delete"]('Categories');
    url.searchParams["delete"]('Locations');
    url.searchParams["delete"]('Seniorities');
    history.pushState(null, document.title, url);
    location.reload();
});
var loadOptionsForFilter = function () { return __awaiter(_this, void 0, void 0, function () {
    var categories, locations, seniorities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getCategories()];
            case 1:
                categories = _a.sent();
                return [4 /*yield*/, getLocations()];
            case 2:
                locations = _a.sent();
                return [4 /*yield*/, getSeniorities()];
            case 3:
                seniorities = _a.sent();
                setFilters("Categories", 'categories', categories);
                setFilters("Locations", 'locations', locations);
                setFilters("Seniorities", 'seniorities', seniorities);
                return [2 /*return*/];
        }
    });
}); };
/*
*  Edit Card Form
*/
var divFormEdit = document.getElementById('card-edit-container');
var cardDetailsDel = document.getElementById('cardDetails-Delete');
var createCardContent = function (job, cardDetails) {
    var title = document.createElement('h4');
    title.appendChild(document.createTextNode(job.name));
    cardDetails.appendChild(title);
    title.classList.add('card-job-title');
    var description = document.createElement('p');
    description.appendChild(document.createTextNode(job.description));
    cardDetails.appendChild(description);
    description.classList.add('card-job-description');
    var tagsContainer = document.createElement('div');
    cardDetails.appendChild(tagsContainer);
    tagsContainer.classList.add('tags-container');
    var location = document.createElement('span');
    location.appendChild(document.createTextNode(job.location));
    tagsContainer.appendChild(location);
    location.classList.add('card-job-span');
    var category = document.createElement('span');
    category.appendChild(document.createTextNode(job.category));
    tagsContainer.appendChild(category);
    category.classList.add('card-job-span');
    var seniority = document.createElement('span');
    seniority.appendChild(document.createTextNode(job.seniority));
    tagsContainer.appendChild(seniority);
    seniority.classList.add('card-job-span');
    var boxBtn = document.createElement('div');
    boxBtn.classList.add('mt-5');
    var btnEditJob = document.createElement('button');
    btnEditJob.appendChild(document.createTextNode("Edit job"));
    btnEditJob.classList.add('btn', 'btn-success', 'ms-3');
    btnEditJob.setAttribute('id', "edit-".concat(job.name));
    boxBtn.appendChild(btnEditJob);
    var btnDeleteJob = document.createElement('button');
    btnDeleteJob.appendChild(document.createTextNode("Delete job"));
    btnDeleteJob.classList.add('btn', 'btn-danger');
    btnDeleteJob.setAttribute('id', "deleteDB-".concat(job.name));
    boxBtn.appendChild(btnDeleteJob);
    cardDetails.appendChild(boxBtn);
    btnDeleteJob.addEventListener('click', function () {
        cardDetails.style.display = "none";
        createCardDelete(containerCards, job);
    });
    btnEditJob.addEventListener('click', function () {
        divFormEdit.style.display = "block";
        var jobTitleItem = document.getElementById('jobTitle');
        var descriptionJobItem = document.getElementById('descriptionJob');
        var locationItem = document.getElementById('location');
        var categoryItem = document.getElementById('category');
        var seniorityItem = document.getElementById('seniority');
        jobTitleItem.value = job.name;
        descriptionJobItem.value = job.description;
        locationItem.value = job.location;
        categoryItem.value = job.category;
        seniorityItem.value = job.seniority;
        var btnEditJob = document.getElementById('btn-edit');
        var editCardContainer = document.getElementById('card-edit-container');
        btnEditJob.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
            var modifiedJob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        modifiedJob = {
                            name: jobTitleItem.value,
                            description: descriptionJobItem.value,
                            location: locationItem.value,
                            category: categoryItem.value,
                            seniority: seniorityItem.value
                        };
                        return [4 /*yield*/, editJob(job.id, modifiedJob)];
                    case 1:
                        _a.sent();
                        loadCards();
                        editCardContainer.style.display = "none";
                        return [2 /*return*/];
                }
            });
        }); });
    });
};
var formEditCard = document.getElementById('form-edit-card');
var btnEdit = document.getElementById('btn-edit');
createForm("Job title", "input", "jobTitle", formEditCard, "Job title");
createForm("Description", "textarea", "descriptionJob", formEditCard, "Add a description");
createForm("Tags", "select", "location", formEditCard);
createForm("", "select", "category", formEditCard);
createForm("", "select", "seniority", formEditCard, btnEdit);
loadOptions();
var loadCards = function () { return __awaiter(_this, void 0, void 0, function () {
    var jobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Esto elimina las cards antes de lanzar el spinner.
                containerCards.innerHTML = "";
                showSpinner();
                return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                setTimeout(function () {
                    createCards(jobs);
                    hideSpinner();
                }, 1000);
                return [2 /*return*/];
        }
    });
}); };
var init = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, loadOptionsForFilter()];
            case 1:
                _a.sent();
                return [4 /*yield*/, loadCards()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
init();
