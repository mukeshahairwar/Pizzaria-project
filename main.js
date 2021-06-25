menu_list_array = 
["Veg Margherita Pizza"
,"Farm House Pizza"
,"PANEER MAKHANI Pizza"
,"Veg Extravaganza Pizza"
,"Peppy Paneer Pizza"
,"Cheese Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for (let o = 0; o < menu_list_array.length; o++) {
    htmldata=htmldata+'<li>' + menu_list_array[o] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for (let e = 0; e < menu_list_array.length; e++) {
    
    htmldata=htmldata+'<div class="cards">'
            +'<img src="images/pizzaImg.png"/>'
             +menu_list_array[e] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML =htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}