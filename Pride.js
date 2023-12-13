var PrideActiveLine = document.getElementById("PrideActiveLine");
var move = 0;


document.getElementById("ButR").addEventListener("click", ButRcl);
document.getElementById("ButL").addEventListener("click", ButLcl);



function ButRcl(){
	PrideActiveLine.style.background = "red";
	if (move < 640)
		move+=640;
	if (move == 640 )
		PrideActiveLine.style.cssText="right: +"+move+"px;";
}

function ButLcl(){
	PrideActiveLine.style.background = "green";
	if (move == 640)
		move = 0;
	if (move == 0)
		PrideActiveLine.style.cssText="right: +"+move+"px;";

		
}
