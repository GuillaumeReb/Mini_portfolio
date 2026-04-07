// 1. On récupère l'élément par son ID
const yearSpan = document.getElementById("year");

// 2. On crée une nouvelle date et on récupère l'année entière
const currentYear = new Date().getFullYear();

// 3. On injecte l'année dans le texte de la balise
yearSpan.textContent = currentYear;
