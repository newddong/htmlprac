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
	
	var p = document.createElement("p");
	var t = document.createTextNode("");
	t.textContent = "0";
	document.body.appendChild(p);
	p.appendChild(t);
	
	box1.addEventListener("click",function(){
		box1.children[0].textContent = parseInt(box1.style.top)+100+"px";
		box1.style.backgroundColor = "green";
		box1.style.top = parseInt(box1.style.top)+10+"px";
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
	box1.addEventListener("click",function(){
		var p = document.getElementById("edit");
		p.style.color = "red";
		p.textContent = parseInt(p.textContent)+1;
		
	})
	
	document.body.addEventListener("mousemove", function(e) {
		t.textContent = "x:"+e.clientX + "y:"+e.clientY;
		
		
	})
	

}

