const button = document.getElementsByClassName("btn");

const inputid = document.getElementById("IDinput").value;
const inputresource = document.getElementById("RESinput").value;

const getByID = (resource, id) => {
    const requestUrl = 'https://jsonplaceholder.typicode.com/' + resource + '/' + id;
    fetch(requestUrl)
      .then((response) => {console.log(response.json())})
      .then((json) => console.log(json))
      // console.log(response.json()); 
  };

  button[0].addEventListener("click", activatebutton);

  // const getAll = (resource) => {
  //   const requestUrl = `https://jsonplaceholder.typicode.com/${resource}`;
  
  //   fetch(requestUrl)
  //   .then(response => {console.log(response.json())})
  //   .then(json => console.log(json))
  // }

function activatebutton() {
  if (inputid !== null && inputresource !== null ) {
    // getByID(inputresource, inputid );
    console.log(getByID(inputresource, inputid ));
    // value = getByID();
  }
  // else if (inputresource !== null && inputid === null) {
  //   getAll(inputresource);
  //   console.log(getAll(inputresource));
  // }
}

// function print() {
//   out1.innerHTML = value;
// }
// console.log(getByID('posts', 1));
// console.log(getAll('comments'));
