const HPAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async () => {

    const wizards = await getAllWizards();
  
    const spinnerHtmlElement = document.getElementById('spinner');
    spinnerHtmlElement.remove();
  
    for (const wizard of wizards) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <p>${wizard.firstname}</p>
        <p>${wizard.lastname}</p>
      `;
      mainHtmlElement.appendChild(newElement);
    }
};

async function getAllWizards() {
    const response = await fetch(`${HPAPI_BASE_URL}/Wizards`);
    const data = await response.json();
    return data.wizard;
}

