const btnSearch = document.getElementById("btnSearch")
const btnClear = document.getElementById("btnClear")
let url = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json"

function searchRecommendation(event) {
    event.preventDefault()
    let search = document.getElementById("searchInput").value.toLowerCase();
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (search === 'country') {
            search = 'countries';
        } else if (search === 'beach') {
            search = 'beaches';
        } else if (search === 'temple') {
            search = 'temples';
        }

        const searchTerm = data.find(item => item.toLowerCase() === search);
        if (searchTerm) {
            searchTerm.forEach(element => {
                console.log(element.name);
            });
        }
    })
}

btnSearch.addEventListener("click", searchRecommendation)