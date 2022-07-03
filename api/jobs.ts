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

const deleteJob = async (id, job)=>{
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: 
    }
   await fetch(`https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs/${id}`,option)
}


const getJob = async (id) => {
    const response = await fetch(`https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs?filter=${id}`);
    const data = await response.json();
    return data;    

}


const editJob = async (id, modifiedJob)=>{
    const option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedJob)
    }
   await fetch(`https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs/${id}`,option)
}




