const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération des flèches dans le DOM
let arrowRight = document.querySelector(".arrow_right");
let arrowLeft = document.querySelector(".arrow_left");

arrowRight.addEventListener("click", function () {
	console.log("click droite")
});
arrowLeft.addEventListener("click", function () {
	console.log("click gauche")
});


// Ajout des bullets points et récupération de l'image en cours de visionnage
let dotsContainer = document.querySelector(".dots");
let bannerImg = document.querySelector(".banner-img");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot");
	if(i === 0) {
		dot.classList.add("dot_selected");	
	}
	dot.id = `dot-${i}`;
	dotsContainer.appendChild(dot);

	dot.addEventListener("click", function() {
		bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
		const newSelected = document.getElementById(`dot-${i}`);
		const previousSelected = document.querySelector(".dot_selected");
		previousSelected.classList.remove("dot_selected");
		newSelected.classList.add("dot_selected");
	})
}
