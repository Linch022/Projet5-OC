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
let arrowRight = document.querySelector("#banner .arrow_right");
let arrowLeft = document.querySelector("#banner .arrow_left");

// Récupération du <p>
let imageText = document.querySelector("#banner .banner-text");

let activeImageIndex = 0;

function changeSlide(newIndexImage) {
	bannerImg.src = `./assets/images/slideshow/${slides[newIndexImage].image}`;
	const newSelected = document.getElementById(`dot-${newIndexImage}`);
	const previousSelected = document.querySelector(".dot_selected");
	previousSelected.classList.remove("dot_selected");
	newSelected.classList.add("dot_selected");
	imageText.innerHTML = slides[newIndexImage].tagLine;
	activeImageIndex = newIndexImage;
	
}

// Ajout des bullets points et récupération de l'image en cours de visionnage
let dotsContainer = document.querySelector("#banner .dots");
let bannerImg = document.querySelector("#banner .banner-img");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot");
	if(i === activeImageIndex) {
		dot.classList.add("dot_selected");	
	}
	dot.id = `dot-${i}`;
	dotsContainer.appendChild(dot);

	dot.addEventListener("click", function() {
		changeSlide(i)
	})
}

// Utilisation des flèches

arrowRight.addEventListener("click", function () {
	let newIndexImage = activeImageIndex + 1;
	if (newIndexImage >= slides.length) {
		newIndexImage = 0;
	} 

	changeSlide(newIndexImage)
});

arrowLeft.addEventListener("click", function () {
	let newIndexImage = activeImageIndex - 1;
	if (newIndexImage < 0) {
		newIndexImage = slides.length - 1;
	} 

	changeSlide(newIndexImage)
});
