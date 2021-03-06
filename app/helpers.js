/* Show and Hidden Functions */
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
var showSpinner = function () {
    var _a;
    (_a = document.getElementById('spinner')) === null || _a === void 0 ? void 0 : _a.style.display = 'flex';
};
var hideSpinner = function () {
    var _a;
    (_a = document.getElementById('spinner')) === null || _a === void 0 ? void 0 : _a.style.display = 'none';
};
/* Function to create Options for Select */
var createOption = function (select, data, value, key) {
    data.forEach(function (elem) {
        var optionControl = document.createElement('option');
        optionControl.setAttribute('id', elem[key]);
        optionControl.setAttribute('value', elem[value]);
        optionControl.appendChild(document.createTextNode(elem[value]));
        select.appendChild(optionControl);
    });
};
/* Function to create Form Controls */
var createForm = function (titleLabel, controlType, id, div, placeHolder) {
    var boxForm = document.createElement('div');
    boxForm.classList.add("container");
    var labelControl = document.createElement('label');
    labelControl.appendChild(document.createTextNode(titleLabel));
    labelControl.classList.add("text-dark");
    boxForm.appendChild(labelControl);
    div.appendChild(boxForm);
    var controlForm = document.createElement(controlType);
    controlForm.classList.add("form-control");
    controlForm.setAttribute('placeholder', placeHolder);
    controlForm.setAttribute('id', id);
    boxForm.appendChild(controlForm);
};
/* Function to load Options from API */
var loadOptions = function () { return __awaiter(_this, void 0, void 0, function () {
    var selectLocation, selectCategory, selectSeniority, locations, categories, seniorities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                selectLocation = document.getElementById("location");
                selectCategory = document.getElementById("category");
                selectSeniority = document.getElementById("seniority");
                return [4 /*yield*/, getLocations()];
            case 1:
                locations = _a.sent();
                createOption(selectLocation, locations, 'name', 'id');
                return [4 /*yield*/, getCategories()];
            case 2:
                categories = _a.sent();
                createOption(selectCategory, categories, 'name', 'id');
                return [4 /*yield*/, getSeniorities()];
            case 3:
                seniorities = _a.sent();
                createOption(selectSeniority, seniorities, 'name', 'id');
                return [2 /*return*/];
        }
    });
}); };
/* Function to create card for delete*/
var createCardDelete = function (cardToDelete, job) {
    var cardDelete = document.createElement('div');
    cardDelete.classList.add('cardDelete');
    cardDelete.appendChild(document.createTextNode("Are you sure to delete this job?"));
    cardToDelete.appendChild(cardDelete);
    var boxBtn = document.createElement('div');
    cardDelete.appendChild(boxBtn);
    var btnDeleteDB = document.createElement('button');
    btnDeleteDB.classList.add('btn', 'btn-danger');
    btnDeleteDB.setAttribute('id', 'deleteDB');
    btnDeleteDB.appendChild(document.createTextNode('Delete'));
    boxBtn.appendChild(btnDeleteDB);
    var btnCancel = document.createElement('button');
    btnCancel.classList.add('btn', 'btn-secondary');
    btnCancel.appendChild(document.createTextNode('Cancel'));
    boxBtn.appendChild(btnCancel);
    btnDeleteDB.addEventListener('click', function () {
        deleteJob(job.id, job);
        setTimeout(function () {
            loadCards();
        }, 1000);
    });
    btnCancel.addEventListener('click', function () {
        loadCards();
    });
};
