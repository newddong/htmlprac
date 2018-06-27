/**
 * 
 */


window.onload = function(){
	
	var list = document.getElementsByClassName("menu2")[0].children[0];
	
	
	
	list.children[0].addEventListener("mouseover", function(e) {
		list.children[0].children[0].style.display = "unset";
	});
	
	list.children[0].addEventListener("mouseout", function(e) {
		list.children[0].children[0].style.display = "none";
	});
	
	list.children[0].style.background = "blue";
	
	
//	var k = document.createElement("style");
//	k.innerHTML = ".head .menubar .menu2>ul>li:after{display:none;}";
//	document.body.appendChild(k);
	
}