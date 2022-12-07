const addJob = async (newJob: any)=>{
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

const deleteJob = async (id: string, job: any)=>{
    const option = {
        method: 'DELETE',
    }
   await fetch(`https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs/${id}`,option)
}


const getJob = async (id: string) => {
    const response = await fetch(`https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs?filter=${id}`);
    const data = await response.json();
    return data;    

}


const editJob = async (id: string, modifiedJob: any)=>{
    const option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedJob)
    }
   await fetch(`https://62abf9c0bd0e5d29af1868ca.mockapi.io/jobs/${id}`,option)
}




