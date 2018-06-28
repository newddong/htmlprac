/**
 * 
 */


window.onload = function(){
	
	var list = document.getElementsByClassName("menu2")[0].children[0];
	
	for(var i=0;i<list.children.length;i++){
	
	(function(j){
	list.children[j].addEventListener("mouseover", function(){
	list.children[j].className = "select";
	list.children[j].children[0].style.display = "unset";
	list.children[j].style.color = "#1c1c1c";
	list.children[j].style.fontWeight = "bold";
	
	})
	
	list.children[j].addEventListener("mouseout", function(){
	list.children[j].removeAttribute("class");
	list.children[j].children[0].style.display = "none";
	list.children[j].style.color = "#777";
	list.children[j].style.fontWeight = "normal";
	})})(i);
	
	
	}
	
	
	
	
}