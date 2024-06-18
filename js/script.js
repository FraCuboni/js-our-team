// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di"nome" ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// creo l'array di oggetti con le informazioni fornite
const teamMembers=[
    {
        "nome": "Wayne",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "MARIO",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "GIROGIO",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "ELENe",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "GAIA",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "LUCIA",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg"
    },
]


let container = document.querySelector(".container");

// creo il ciclo per stampare le infomrazioni di ogni membro in consoles
for (let key in teamMembers){
    console.log(teamMembers[key]);
    // creo l'elemento div
    let card = document.createElement("div");
    card.classList.add('card');
    // rendo il div un child di container
    container.appendChild(card);

    // creo ulteriori classi figlie di card per contenere le varie informazioni 
    let img = document.createElement("img");
    let nameSurname = document.createElement("div");
    let role = document.createElement("div");

    // unisco i vari figli di card a card e associo le classi
    card.appendChild(img);
    card.appendChild(nameSurname);
    nameSurname.classList.add('ns');
    card.appendChild(role);
    role.classList.add('role');

    // inserisco i dati degli oggetti all'interno dei div creati
    img.src= teamMembers[key].img;
    nameSurname.innerHTML=`${teamMembers[key].nome} ${teamMembers[key].cognome}`;
    role.innerHTML= teamMembers[key].ruolo;
}

// stampo le informazioni sul dom sottoforma di stringhe

// creo il container che conterrà le box

// creo il ciclo per creare i vari oggetti all'interno del DOM

