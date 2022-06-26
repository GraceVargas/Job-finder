
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

const showSpinner = () =>{
    document.getElementById('spinner')?.style.display = 'flex';
}

const hideSpinner = (elem) => {
    document.getElementById('spinner')?.style.display = 'none';
}

/* Function to create Options for Select */

const createOption = (select, data, value, key)=>{

    data.forEach((elem)=>{
    
        const optionControl = document.createElement('option');
        optionControl.setAttribute('id', elem[key]);
        optionControl.setAttribute('value', elem[value]);
        optionControl.appendChild(document.createTextNode(elem[value]));
        select.appendChild(optionControl);
    })
    
}

