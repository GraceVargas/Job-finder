const addJob = async (newJob)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
    }
   await fetch('https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs',option)
}

const getJobs = async () => {
    const response = await fetch('https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs');
    const data = await response.json();
    return data;    
  }

  const loadData = (div) =>{
    const box = document.createElement('div');
    box.classList.add("spinner-grow","text-dark");
    box.setAttribute('role', "status");
    const span = document.createElement('span');
    span.appendChild(document.createTextNode("Loading..."));
    span.classList.add("visually-hidden");

    box.appendChild(span);
    div.appendChild(box);

}

  