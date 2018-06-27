/**
 * 
 */


window.onload = function(){
	
	var box = document.getElementById("box");
	
	box.style.backgroundColor = "green";
	box.style.width = "1000px";
	box.style.height = "1000px";
	box.style.position = "relative";
	box.style.left = "0px"; 
		
//	box.addEventListener("click", function(){
//		box.style.left = parseInt(box.style.left)+1+"px";
//	})
	
	var d = document.createElement("div");
	d.style.backgroundColor = "red";
	d.style.width = "10px";
	d.style.height = "500px";
	d.style.position = "absolute";
	d.style.top = "500px";
	d.style.left = "500px";
	box.appendChild(d);
	
	
	
	
	box.addEventListener("mousemove", function(e){
		document.getElementsByTagName("p")[0].innerHTML = e.layerX+"px";
		document.getElementsByTagName("p")[1].innerHTML = e.layerY+"px";
		
		var d = document.createElement("div");
		d.style.backgroundColor = "black";
		d.style.width = "5px";
		d.style.height = "5px";
		d.style.position = "absolute";
		d.style.top = e.layerY + "px";
		d.style.left = e.layerX + "px";
		box.appendChild(d);
		
	})
	
	
	
//	box.addEventListener("click",function(){
//		
//		
//		box.firstChild.style.transform = "rotate(10deg)";
//		box.children[0].style.width = "1px";
//		box.nextSibling.nextSibling.firstChild.textContent = parseInt(box.firstChild.style.transform);
//	})
	
	
	
	
	
	
	
//	setInterval(function() {
//		for(var i = 0;i<box.children.length;i++){
//		box.children[i].style.top = parseInt(box.children[i].style.top)+1+"px";
//		box.children[i].style.left = parseInt(box.children[i].style.left)+1+"px";
//		}
//		
//	}, 100)

	
	
	
	
	
		
	
}