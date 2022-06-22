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
/*
*  Function to create cards
*/
var containerCards = document.getElementById('cards-container');
var createCards = function (jobs) {
    var row = document.createElement('div');
    containerCards.innerHTML = "";
    row.classList.add('row', 'g-2');
    containerCards.appendChild(row);
    loadData(containerCards);
    setTimeout(function () {
        for (var _i = 0, jobs_1 = jobs; _i < jobs_1.length; _i++) {
            var job = jobs_1[_i];
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
        }
    }, 2000);
};
/*
*  Function to create filters
*/
var filterForm = document.getElementById('filter-form');
var setFilters = function () { return __awaiter(_this, void 0, void 0, function () {
    var filtersData, response, filter, select, optionTitle, filterLocation, filterSeniority, filterCategory, createOptions, btnSubmit;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filtersData = {
                    location: [],
                    seniority: [],
                    category: []
                };
                return [4 /*yield*/, getJobs()];
            case 1:
                response = _a.sent();
                response.forEach(function (job) {
                    if (!filtersData.location.includes(job.location))
                        filtersData.location.push(job.location);
                    if (!filtersData.seniority.includes(job.seniority))
                        filtersData.seniority.push(job.seniority);
                    if (!filtersData.category.includes(job.category))
                        filtersData.category.push(job.category);
                });
                for (filter in filtersData) {
                    select = document.createElement('select');
                    select.classList.add('selectFilter');
                    select.setAttribute('id', "filter-".concat(filter));
                    filterForm.appendChild(select);
                    optionTitle = document.createElement('option');
                    select.appendChild(optionTitle);
                    optionTitle.setAttribute('id', filter);
                    optionTitle.setAttribute('value', filter);
                    optionTitle.appendChild(document.createTextNode(filter));
                    select.appendChild(optionTitle);
                }
                filterLocation = document.getElementById('filter-location');
                filterSeniority = document.getElementById('filter-seniority');
                filterCategory = document.getElementById('filter-category');
                createOptions = function (filter, select) {
                    filter.forEach((function (elem) {
                        var option = document.createElement('option');
                        select.appendChild(option);
                        option.setAttribute('id', elem);
                        option.setAttribute('value', elem);
                        option.appendChild(document.createTextNode(elem));
                        select.appendChild(option);
                    }));
                };
                createOptions(filtersData.location, filterLocation);
                createOptions(filtersData.seniority, filterSeniority);
                createOptions(filtersData.category, filterCategory);
                btnSubmit = document.getElementById('btn-submit');
                btnSubmit.addEventListener('click', function (e) {
                    e.preventDefault();
                    var locationSearched;
                    var senioritySearched;
                    var categorySearched;
                    if (filterLocation.value != 'location') {
                        locationSearched = filterLocation.value;
                    }
                    ;
                    if (filterSeniority.value != 'seniority') {
                        senioritySearched = filterSeniority.value;
                    }
                    ;
                    if (filterCategory.value != 'category') {
                        categorySearched = filterCategory.value;
                    }
                    ;
                    var loadCards = function () { return __awaiter(_this, void 0, void 0, function () {
                        var jobs;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getJobs()];
                                case 1:
                                    jobs = _a.sent();
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
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    loadCards();
                });
                return [2 /*return*/];
        }
    });
}); };
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
var loadCards = function () { return __awaiter(_this, void 0, void 0, function () {
    var jobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getJobs()];
            case 1:
                jobs = _a.sent();
                createCards(jobs);
                return [2 /*return*/];
        }
    });
}); };
loadCards();
