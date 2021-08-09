
const search = document.getElementById('searchTitle');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  searchTitle();
})


function searchTitle() {
    const searchValue = search.value.trim();
    console.log(searchValue);
    if (searchValue === '') {
      setErrorFor(search, 'El campo se encuentra vacio')
    }else {
      setSuccessFor(search);
    }
    let url = `https://imdb-api.com/en/API/SearchTitle/k_w0xo5scd/${searchValue}`
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => showData(data))

      reload = `Esperando respuesta`
      document.getElementById('listData').innerHTML = reload

      const showData = (data) => {
        console.log(data);
        let { results, ...rest } = data;
        console.log(results)
        let body = '';
        for (let i = 0; i < results.length; i++) {
          body += `<tr><td>${results[i].title} - ${results[i].description}</td></tr>`
          }

          document.getElementById('listData').innerHTML = body
        }
      } catch (err) {
          console.log(err);
    }

}

function setErrorFor(input, msj) {
  const formControl = input.parentElement;
  const message = formControl.querySelector('small');
  formControl.className = "form-container error";
  message.innerText = msj;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-container success";
}

  // searchTitle()


// function getSearchTitle() {
//   return Promise.resolve({
//     errorMessage: "Error XD",
//     expression: "Matrix",
//     searchType: 'Title',
//     results: [
//       {
//         description: "(1999)",
//         id: "tt01923",
//         image: "https://imdb-api.com/images/original/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
//         resultType: "Title",
//         title: "The Matrix"
//       },
//       {
//         description: "(2000)",
//         id: "tt013",
//         image: "https://imdb-api.com/images/original/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
//         resultType: "Title",
//         title: "The Matrix"
//       },
//       {
//         description: "(2003)",
//         id: "tt01330956",
//         image: "https://imdb-api.com/images/original/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.7273_AL_.jpg",
//         resultType: "Title",
//         title: "The Matrix"
//       }

//     ]
//   });
// }