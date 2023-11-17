const HPAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async () => {

    const films = await getAllStarWarsFilms();
  
    const spinnerHtmlElement = document.getElementById('spinner');
    spinnerHtmlElement.remove();
  
    for (const film of films) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${Wizards.FirstName}</h2>
        <h2>${Wizards.LastName}</h2>
      `;
      mainHtmlElement.appendChild(newElement);
    }
};

async function getAllWizards() {
    const response = await fetch(`${HPAPI_BASE_URL}/Wizards`);
    const data = await response.json();
    return data.results;
}

