const HPAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async () => {

    const wizards = await getAllWizards();
  
    const spinnerHtmlElement = document.getElementById('spinner');
    spinnerHtmlElement.remove();

    const elixirs = await getAllElixirs();
  
    const spinnerHtmlElement2 = document.getElementById('spinner');
    spinnerHtmlElement.remove();
  
    for (const wizard of wizards) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
       <ul> 
           <li>${wizard.firstName}</li>
           <li>${wizard.lastName}</li>
       </ul>
      `;
      for (const elixir of elixirs) {
        const mainHtmlElement = document.getElementById('main');
        const newElement = document.createElement('div');
        newElement.innerHTML = `
          <p>${elixir.name}</p>
        `;
        const mainHtmlElement2 = document.getElementById('main');
        const newElement2 = document.createElement('div');
        newElement2.innerHTML = `
          <button onclick=elixirClicat(${elixir.name})></button>
        `;
        mainHtmlElement.appendChild(newElement);
      }
      mainHtmlElement.appendChild(newElement);
    }

};

async function getAllWizards() {
    const response = await fetch(`${HPAPI_BASE_URL}/Wizards`);
    const data = await response.json();
    return data;
}

async function getAllElixirs(){
    const response = await fetch(`${HPAPI_BASE_URL}/Elixirs`);
    const data = await response.json();
    return data;
}

async function elixirClicat(id){
    const response = await fetch(`${HPAPI_BASE_URL}/Elixirs/Ingredients`);
    const data = await response.json();
    return data;
}