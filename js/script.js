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
        "nome": "Angela",
        "cognome": "Caroll",
        "ruolo": "Chief Editor",
        "img": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter",
        "cognome": "Gordon",
        "ruolo": "Office Manager",
        "img": "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela",
        "cognome": "Lopez",
        "ruolo": "Social Media Manager",
        "img": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott",
        "cognome": "Estrada",
        "ruolo": "Developer",
        "img": "img/scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara",
        "cognome": "Ramos",
        "ruolo": "Graphic Designer",
        "img": "img/barbara-ramos-graphic-designer.jpg"
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
