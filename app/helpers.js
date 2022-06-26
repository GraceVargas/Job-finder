// const createForm = (titleLabel,inputType,placeHolder) =>{
// const boxForm = document.createElement('div');
// const labelControl = document.createElement('label');
// labelControl.appendChild(document.createTextNode(titleLabel))
// const inputControl = document.createElement('input');
// inputControl.setAttribute('type', inputType)
// inputControl.setAttribute('placeholder', placeHolder);
// boxForm.appendChild(labelControl);
// boxForm.appendChild(inputControl);
// }
// const main = document.getElementById("main-home") as HTMLElement;
/* Show and Hidden Functions */
var showSpinner = function () {
    var _a;
    (_a = document.getElementById('spinner')) === null || _a === void 0 ? void 0 : _a.style.display = 'flex';
};
var hideSpinner = function (elem) {
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
