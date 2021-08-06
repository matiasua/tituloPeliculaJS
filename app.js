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
  const url = 'https://imdb-api.com/en/API/SearchTitle/k_asawf9nc/Matrix'
  try {
    fetch(url)
      .then(response => response.json())
      .then(json => { console.log(json) })

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