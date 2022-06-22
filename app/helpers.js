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
var loadData = function () {
    var box = document.createElement('div');
    box.classList.add("spinner-grow", "text-dark");
    box.setAttribute('role', "status");
    var span = document.createElement('span');
    span.appendChild(document.createTextNode("Loading..."));
    span.classList.add("visually-hidden");
    box.appendChild(span);
    document.body.appendChild(box);
};
