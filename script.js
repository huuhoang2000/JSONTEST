const button = document.getElementsByClassName("btn")[0];

const inputid = document.getElementById("IDinput").value;
const inputresource = document.getElementById("RESinput").value;
const out1 = document.getElementById("output1");

const getByID = (resource, id) => {
      const requestUrl = 'https://jsonplaceholder.typicode.com/' + resource + '/' + id;
      fetch(requestUrl)
        .then((response) => response.json())
        .then((json) => console.log(json));
        console.log(response.json()) 
  };

  button.addEventListener("click", activatebutton);

  const getAll = (resource) => {
    const requestUrl = `https://jsonplaceholder.typicode.com/${resource}`;
  
    fetch(requestUrl)
    .then(response => response.json())
    .then(json => console.log(json))
    console.log(response.json()) 
  }

function activatebutton() {
  let value = 0;
  if (inputid !== null && inputresource !== null ) {
    getByID(inputresource, inputid );
    // value = getByID();
  }
  else if (inputresource !== null && inputid === null) {
    getAll(inputresource);
  }
  out1.innerHTML = value;
}

// function print() {
//   out1.innerHTML = value;
// }
