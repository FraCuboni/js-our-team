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
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "MARIO",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "GIROGIO",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "ELENe",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "GAIA",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "LUCIA",
        "cognome": "barnett",
        "ruolo": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
]

// creo il ciclo per stampare le infomrazioni di ogni membro in consoles
for (let key in teamMembers){
    console.log(teamMembers[key]);
}

// stampo le informazioni sul dom sottoforma di stringhe

// creo il container che conterrà le box
let container = document.querySelector(".container");

// creo il ciclo per creare i vari oggetti all'interno del DOM


for (let i = 0; i < teamMembers.length; i++){

    // assegno il valore i all'array aggiungendo una variabile
    let member = teamMembers[i];
    // creo l'elemento div
    let card = document.createElement("div")
    // rendo il div un child di container
    container.appendChild(card);

    card.innerHTML= member;
}