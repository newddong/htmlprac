/**
 * 
 */
window.onload = function() {

	var box1 = document.getElementById("box1");

	box1.style.backgroundColor = "blue";
	box1.style.height = "100px";
	box1.style.width = "100px";
	box1.style.position = "absolute";
	box1.style.top = "100px";
	

	box1.addEventListener("click",function(){
		box1.children[0].textContent = parseInt(box1.style.top)+100+"px";
		box1.style.backgroundColor = "green";
		box1.style.top += parseInt(box1.style.top)+100+"px";
		box1.children[0].textContent  = box1.style.top;
	} )
	
	box1.addEventListener("click",function() {
		var box2 = document.createElement("div");
		box2.style.backgroundColor = "red";
		box2.style.height = "100px";
		box2.style.width = "100px";
		box2.style.position = "absolute";
		box2.style.top = "200px";
		document.body.appendChild(box2);
	})


}