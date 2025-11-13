function highlight() {
    //Write your code here
	let str = document.querySelectorAll("strong")
  str.forEach(tag =>{(
	  tag.style.color="green";
  )}

}


function return_normal() {
    //Write your code here

	let str = document.querySelectorAll("strong")
  str.forEach(tag =>{(
	  tag.style.color="black";
  )}
    
}

	let para = document.querySelectorAll(".para");
para.addEvenetListerner("mouseenter",highlight);
para.addEventListerner("mouseleave", return_normal);