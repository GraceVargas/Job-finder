const getLocations = async () => {
    const response = await fetch('https://62abf9c0bd0e5d29af1868ca.mockapi.io/locations');
    const data = await response.json();
    return data;    

  }