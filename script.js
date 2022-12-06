const button = document.getElementsByClassName("btn")[0];

const inputid = document.getElementById("IDinput").value;
const inputresource = document.getElementById("RESinput").value;



button.addEventListener("click", activatebutton);

function activatebutton() {
  if (inputid !== null && inputresource !== null ) {
  const getByID = (inputresource, inputid) => {
      const requestUrl = 'https://jsonplaceholder.typicode.com/${' + inputresource + '}/${' + inputid + '}';
      fetch(requestUrl)
        .then((response) => response.json())
        .then((json) => console.log(json));
  };
  }
  else if (inputresource !== null && inputid === null) {
    const getAll = (resource) => {
      const requestUrl = `https://jsonplaceholder.typicode.com/${resource}`;
    
      fetch(requestUrl)
      .then(response => response.json())
      .then(json => console.log(json))
    }
  }
}
