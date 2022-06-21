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

