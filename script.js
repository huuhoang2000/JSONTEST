const button = document.getElementsByClassName("btn")[0];

const inputid = document.getElementById("IDinput").value;
const inputresource = document.getElementById("RESinput").value;
const out1 = document.getElementById("output1");

button.addEventListener("click", activatebutton);

function activatebutton() {
  let value = 0;
  if (inputid !== null && inputresource !== null ) {
  const getByID = (inputresource, inputid) => {
      const requestUrl = 'https://jsonplaceholder.typicode.com/' + inputresource + '/' + inputid;
      fetch(requestUrl)
        .then((response) => response.json())
        .then((json) => console.log(json));
  };
    value = getByID;
  }
  else if (inputresource !== null && inputid === null) {
    const getAll = (resource) => {
      const requestUrl = `https://jsonplaceholder.typicode.com/${resource}`;
    
      fetch(requestUrl)
      .then(response => response.json())
      .then(json => console.log(json))
    }
    value = getAll;
  }
  out1.innerHTML = value;
}

// function print() {
//   out1.innerHTML = value;
// }
