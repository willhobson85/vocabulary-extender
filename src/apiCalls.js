const API_KEY = process.env.REACT_APP_API_KEY


const fetchData = (word) => {
    return fetch(`https://words.bighugelabs.com/api/2/${API_KEY}/${word}/json`)
    // return fetch(`https://words.bighugelabs.com/api/2/3a3fd2dcda6a6663ef94ab90d946c9ba/thin/`)
    .then(response => response.json())
    .catch(error => console.log(`Error: fetch error`, error)
    )
}

export { fetchData }