const button = document.getElementsByClassName("btn");
const inputresource = document.getElementById("RESinput").value;

button[0].addEventListener("click", activatebutton);
//lấy giá trị mới nhất của html.

const inputid = document.getElementById("IDinput").value;

const getByID = (resource, id) => {
    const requestUrl = 'https://jsonplaceholder.typicode.com/' + resource + '/' + id;
    fetch(requestUrl)
      .then((response) => {return response.json()})
      .then((json) => console.log(json))
  };

const getAll = (resource) => {
    const requestUrl = `https://jsonplaceholder.typicode.com/${resource}`;
  
    fetch(requestUrl)
      .then(response => {return response.json()})
      .then(json => console.log(json))
  }

function activatebutton() {
  const inputid = document.getElementById("IDinput").value;

  if (inputid !== null && inputresource !== null ) {
    getByID(inputresource, inputid);
  }
  else if (inputresource !== null && inputid === null) {
    getAll(inputresource);
  }
}
