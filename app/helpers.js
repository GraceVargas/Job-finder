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
var showData = function (elem) {
    elem.classList.remove('d-hidden');
};
var hideData = function (elem) {
    elem.classList.add('d-hidden');
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
