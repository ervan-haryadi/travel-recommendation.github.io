const btnSearch = document.getElementById("btnSearch")
const btnClear = document.getElementById("btnClear")

// used in coding stage because of CORS restriction
let url = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json"

function searchRecommendation(event) {
  event.preventDefault()
  let search = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("searchResult");
  resultDiv.innerHTML = '';

    // fetch(url)
    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
      if (search === 'country') {
        search = 'countries';
      } else if (search === 'beach') {
        search = 'beaches';
      } else if (search === 'temple') {
        search = 'temples';
      }

      console.log(data)
      console.log(search)

      const searchTerm = data[search];
      console.log(searchTerm);
      if (search === "countries") {
        searchTerm.forEach(element => {
          console.log("is inside element")
          console.log(element.name)
          element.cities.forEach(city => {
            resultDiv.innerHTML += `<img src="${city.imageUrl}" width=100% height=50%>`;
            resultDiv.innerHTML += `<h3>${city.name}</h3>`;
            resultDiv.innerHTML += `<p>${city.description}</p>`;
            resultDiv.innerHTML += `<hr>`;
          })
        });
      } else if (searchTerm) {
        searchTerm.forEach(element => {
          resultDiv.innerHTML += `<img src="${element.imageUrl}" width=100% height=50%>`;
          resultDiv.innerHTML += `<h3>${element.name}</h3>`;
          resultDiv.innerHTML += `<p>${element.description}</p>`;
        });
      } else {
        resultDiv.innerHTML += `Destination not found!`;
      }
    })
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("searchResult").classList.toggle("show");

}

// Close the dropdown menu if the user clicks outside of it
function dropdownEvent(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

btnSearch.addEventListener("click", searchRecommendation)
window.addEventListener("click", dropdownEvent)