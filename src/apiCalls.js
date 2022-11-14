const fetchData = (word) => {
    return (
        fetch(`https://words.bighugelabs.com/api/2/7a9c00d2294b26bf6e0405670492c80c/${word}/json`)
        .then(response => response.json())
        .catch(error => console.log(`Error: fetch error`, error)
        )
    )
}

export { fetchData }





