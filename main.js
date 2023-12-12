let slides = document.querySelectorAll('.slide');
let slider =[];

console.log(slides);

for (let i = 0; i<slides.length;i++){
	slider[i] = slides[i].src;
	slides[i].remove();
}

console.log(slider);

let step =0;
let offset =0;



function slide_show(){
	let img = document.createElement('img');
	img.src = slider[step];
	img.classList.add('slide');
	img.style.left = offset*0+'px';
	document.querySelector('#show_panel').appendChild(img);
	if (step +1 == slider.length){
		step=0;
	}
	else{
		step++;
	}
	offset =1;
}

slide_show();

function left(){
	let slides2 = document.querySelectorAll(".slide");
	let offset2=0;
	for (let i=0; i<slides2.length;i++){
		slides2[i].style.left=offset2*0-0+ 'px';
		offset2++;
	}
	setTimeout(function(){
		slides2[0].remove();
		slide_show();
	},1000)
}
		
setInterval(
  () => left(),
  5000
);

function vodka(){
	alert('В стакане самогона')
}