
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

const loadData = () =>{
    const box = document.createElement('div');
    box.classList.add("spinner-grow","text-dark", "d-flex", "justify-content-center");
    box.setAttribute('role', "status");
    const span = document.createElement('span');
    span.appendChild(document.createTextNode("Loading..."));
    span.classList.add("visually-hidden");

    box.appendChild(span);
    document.body.appendChild(box);

}

const createOption = (select, data, value, key)=>{

    data.forEach((elem)=>{
    
        const optionControl = document.createElement('option');
        optionControl.setAttribute('id', elem["id"])
        optionControl.setAttribute('value', elem[key])
        optionControl.appendChild(document.createTextNode(elem[value]))
        select.appendChild(optionControl);
    })
    
}