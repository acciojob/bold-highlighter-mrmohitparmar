function highlight() {
    //Write your code here
	let str = document.querySelectorAll("strong")
  for (let i = 0; i < str.length; i++) {
    str[i].style.color = "green";
  }

}


function return_normal() {
    //Write your code here

	let str = document.querySelectorAll("strong")
  for (let i = 0; i < str.length; i++) {
    str[i].style.color = "black";
  }
    
}

	let para = document.querySelectorAll(".para");
para.addEvenetListerner("mouseenter",highlight);
para.addEventListerner("mouseleave", return_normal);