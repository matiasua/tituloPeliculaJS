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
    let url = `https://imdb-api.com/en/API/SearchTitle/k_asawf9nc/${searchValue}`
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => showData(data))

      const showData = (data) => {
        console.log('Capturo respuesta')
        console.log(data);
        let { results, ...rest } = data;
        console.log(results)
        console.log('Despues del results')
        let body = '';
        for (let i = 0; i < data.length; i++) {
          body += `<tr><td>${data[i].title} - ${data[i].description}</td></tr>`
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

searchTitle()