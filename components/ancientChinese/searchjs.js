function searchjs() {
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    return json;
}

export default searchjs;