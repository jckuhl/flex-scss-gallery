(function() {

	const images = Array.from(document.querySelectorAll(".card-sm img"));
	const card = Array.from(document.querySelectorAll(".card-sm"));
	const cardPara = Array.from(document.querySelectorAll(".card-sm p"));
	const slideshow = document.getElementById("slideshow");
	const slidetext = document.getElementById("slidetext");
	const leftBtn = document.getElementById("left-btn");
	const rightBtn = document.getElementById("right-btn");
	const cardText = cardPara.map( (p)=> p.innerText );
	const srcs = images.map( (img)=> img.src );

	function selectImage() {
		slideshow.src = this.childNodes[1].src;
	}

	card.forEach( (card)=> {
		card.addEventListener("click", selectImage);
		window.scrollTo(0,0);
	});

	let currentIndex = 0;

	function navigateImages(dir) {
		let i = dir === "left" ? -1 : 1;

		currentIndex += 1 * i;
		if(currentIndex >= srcs.length) {
			currentIndex = 0;
		}
		if(currentIndex < 0) {
			currentIndex = srcs.length - 1;
		}
		slideshow.src = srcs[currentIndex];
		slidetext.innerText = cardText[currentIndex];
	}

	leftBtn.addEventListener("click", ()=> {
		navigateImages("left");
	});

	rightBtn.addEventListener("click", ()=> {
		navigateImages("right");
	});


})();