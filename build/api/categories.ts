const getCategories = async () => {
    const response = await fetch('https://62abf9c0bd0e5d29af1868ca.mockapi.io/categories');
    const data = await response.json();
    return data;    

  }