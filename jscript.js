var restaurant = "Indian Heaven";
var order=[];

window.addEventListener("DOMContentLoaded",function () {
updateCart();
	//Listening for the Cancel Link Event
	var lnkcancel =	document.querySelector("#lnkStartOver");
    lnkcancel.addEventListener("click",function  () {
    	var areYouSure = confirm("Are you sure to cancel this order?");
    	if (areYouSure) {
    		order=[];
    		updateCart();
    	}
    })

    //Listening for the meals click
var meals = document.querySelectorAll(".meal");
for(var meal of meals){
	meal.addEventListener("click",function () {
		var title = this.dataset.title;
		order.push(title);
		updateCart();
	})
}
})

function updateCart () {
	var html="";
	for(var meal of order){
		html +="<li>"+meal+"<li>";
	}
	var ul = document.querySelector("#cart ul center")
	ul.innerHTML=html;

	var cart=document.querySelector("#cart");
	if(order.length==0){
		cart.style.backgroundColor = 'gray';
	}
	else{
		cart.style.backgroundColor = '#006';
	}

}