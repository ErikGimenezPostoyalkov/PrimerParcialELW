const HPAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com';

window.onload = async () => {
    //APARTAT PERSONATGES
    const wizards = await getAllWizards();
  
    const spinnerHtmlElement = document.getElementById('spinner');
    spinnerHtmlElement.remove();
  
    for (const wizard of wizards) {
      const mainHtmlElement = document.getElementById('main');
      const newElementW = document.createElement('div');
      newElementW.classList.add('wizards');

      var fullName;
      if(wizard.firstName !== null){
        fullName = `${wizard.firstName} ${wizard.lastName}`;
      }else {
        fullName = wizard.lastName;
      }
      newElementW.innerHTML = `
           <h1>${fullName}</h1>
           <button onclick="destacarWizard('${fullName}')">Destacar Personaje</button>
      `;
      mainHtmlElement.appendChild(newElementW);

      //APARTAT ELIXIRS
      if (wizard.elixirs && wizard.elixirs.length > 0) {
        
            for (const elixir of wizard.elixirs) {
                const newElementE = document.createElement('div');
                newElementE.classList.add('elixirs');
                newElementE.innerHTML = `
                    <ul> 
                      <h3>${elixir.name}</h3>
                      <button onclick="mostraIngredients('${elixir.id}')">Mostrar Ingredientes</button>
                      <div id="ingredients-${elixir.id}"></div>
                    </ul>
                `;
                mainHtmlElement.appendChild(newElementE);
            }
        }
    }

    //APARTAT CASES 
    const houses = await getAllHouses();

    for (const house of houses) {
        const mainHtmlElementH = document.getElementById('casas');
        const newElementH = document.createElement('div');
        newElementH.innerHTML = `
                <h1>${house.name}</h1>
                <button onclick="destacarHouse('${house.name}')">Destacar Casa</button>
        `;
        mainHtmlElementH.appendChild(newElementH);
    
        const newElementHouse = document.createElement('img');
        newElementHouse.classList.add('house-image');
    
        switch (house.name) {
            case 'Gryffindor':
                newElementHouse.src = 'https://imgs.search.brave.com/rserMyQl2Vs6UlzAYwBVFpM1ucekk-gFlA1-do3oGIM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVj/b2xvci5ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/L2RlY29yYWNpb24t/ZGUtcGFyZWQtZW1i/bGVtYS1ncnlmZmlu/ZG9yLWhhcnJ5LXBv/dHRlci02MWNtXzEy/NDIyXzEuanBn';
                break;
            case 'Ravenclaw':
                newElementHouse.src = 'https://imgs.search.brave.com/ONwsFOpB7X9kus9eAFr9xy7E9IrvcW9zOKIKKi2Y9vE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aGVj/b2xvci5ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/L2RlY29yYWNpb24t/ZGUtcGFyZWQtZW1i/bGVtYS1yYXZlbmNs/YXctaGFycnktcG90/dGVyLTYxY21fMTI0/MjBfMS5qcGc';
                break;
            case 'Hufflepuff':
                newElementHouse.src = 'https://imgs.search.brave.com/754nFNYk--Mx2i16QSXUJ7kAz3eyPP_zO-xp87KReHs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy15ZHJp/Y3prL2ltYWdlcy9z/dGVuY2lsLzYwOHg2/MDgvcHJvZHVjdHMv/ODgzNjQvOTExMzQv/SGFycnktUG90dGVy/LUh1ZmZsZXB1ZmYt/Q3Jlc3QtT2ZmaWNp/YWwtd2FsbC1tb3Vu/dGVkLWNhcmRib2Fy/ZC1jdXRvdXQtYnV5/LW5vdy1hdC1zdGFy/X18yMTEyMi4xNTA3/NjQ0MDk2LmpwZz9j/PTI';
                break;
            case 'Slytherin':
                newElementHouse.src = 'https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SX679_.jpg';
                break;
            default:
                break;
        }
    
        mainHtmlElementH.appendChild(newElementHouse);
    }
};

async function getAllWizards() {
    const response = await fetch(`${HPAPI_BASE_URL}/Wizards`);
    const data = await response.json();
    console.log(data);
    return data;
}

async function getAllElixirs() {
    const response = await fetch(`${HPAPI_BASE_URL}/Elixirs`);
    const data = await response.json();
    console.log(data);
    return data;
}

async function getAllHouses() {
    const response = await fetch(`${HPAPI_BASE_URL}/Houses`);
    const data = await response.json();
    console.log(data);
    return data;
}

//FUNCIÓ PER A MOSTRAR INGREDIENTS PER ELIXIR
async function mostraIngredients(elixirId) {
    const ingredientContainer = document.getElementById(`ingredients-${elixirId}`);
    ingredientContainer.innerHTML = '';

    const elixires0 = await getAllElixirs();
    const elixir0 = elixires0.find(elixir => elixir.id === elixirId);

    if (elixir0 && elixir0.ingredients && elixir0.ingredients.length > 0) {
        for (const ingredient of elixir0.ingredients) {
            const newElementI = document.createElement('div');
            newElementI.innerHTML = `
                    -${ingredient.name}
            `;
            ingredientContainer.appendChild(newElementI);
        }
    }
}

//FUNCIO PER A DESTACAR PERSONATGE/CASA
function destacarWizard(wizardName) {
    const floatingInfo = document.getElementById('floatingWizard');

    floatingInfo.textContent = `Personaje destacado: ${wizardName}`;

    floatingInfo.style.display = 'block';
}

function destacarHouse(houseName) {
    const floatingInfo = document.getElementById('floatingHouse');

    floatingInfo.textContent = `Casa destacada: ${houseName}`;

    floatingInfo.style.display = 'block';
}