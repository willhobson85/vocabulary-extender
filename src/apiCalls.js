const API_KEY = process.env.REACT_APP_API_KEY

const fetchData = (word) => {
    return fetch(`https://words.bighugelabs.com/api/2/${API_KEY}/${word}/json`)
        .then(response => response.json())
        .catch(error => console.log(`Error: fetch error`, error)
        )
}

export { fetchData }



