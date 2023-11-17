const HPAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async () => {

    const wizards = await getAllWizards();
  
    const spinnerHtmlElement = document.getElementById('spinner');
    spinnerHtmlElement.remove();

    const elixirs = await getAllElixirs();
  
    const spinnerHtmlElement2 = document.getElementById('spinner');
    spinnerHtmlElement.remove();
    
    const ingredients = await getAllIngredients();
    const spinnerHtmlElement3 = document.getElementById('spinner');
  
    for (const wizard of wizards) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
       <ul> 
           <h3>${wizard.firstName}</h3>
           <h3>${wizard.lastName}</h3>
       </ul>
      `;
      for (const elixir of elixirs) {
        const mainHtmlElement = document.getElementById('main');
        const newElement = document.createElement('div');
        newElement.innerHTML = `
          <p>${elixir.name}</p>
          <button onclick="elixirClicat(1)"></button> 
            <p>${elixir.ingredients}</p>
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

async function getAllIngredients(){
    const response = await fetch(`${HPAPI_BASE_URL}/Elixirs/Ingredients`);
    const data = await response.json();
    return data;
} 