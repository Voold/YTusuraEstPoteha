let PrideActiveLine = document.getElementById("PrideActiveLine");
let move = 0;


document.getElementById("ButR").addEventListener("click", ButRcl, true);
document.getElementById("ButL").addEventListener("click", ButLcl, true);



function ButRcl(){
	if (move < 640)
		move+=640;
	if (move == 640 )
		PrideActiveLine.style.cssText="right: +"+move+"px;";
}

function ButLcl(){
	if (move == 640)
		move = 0;
	if (move == 0)
		PrideActiveLine.style.cssText="right: +"+move+"px;";		
}
