//Фон
document.body.style= "background-color: #202020";
document.body.style.color= "#fcfcfc";


let i = 0;
while(document.querySelectorAll("a, a:visited, .btn-link, .btn-link:visited")[i]) {
document.querySelectorAll("a, a:visited, .btn-link, .btn-link:visited")[i].style.color= "#fcfcfc";
i++;
}

i = 0;
while(document.querySelectorAll("a:hover, btn-link:hover")[i]) {
document.querySelectorAll("a:hover, btn-link:hover")[i].style.color= "#000000";
i++;
}

//меню с гиперссылочками
i = 0;
while(document.querySelectorAll("#block-region-side-pre .block.block_flat_navigation .list-group-item")[i]) {
document.querySelectorAll("#block-region-side-pre .block.block_flat_navigation .list-group-item")[i].style= "background-color: #303030";
i++;
}
/*
//Контакты
document.getElementById('inst75900').style= "background-color: #000";
//Основное
document.getElementById('inst1').style= "background-color: #000";
//Спец. возможности
document.getElementById('inst586').style= "background-color: #000";
//Мои курсы
document.querySelector("#inst1259").style= "background-color: #000";
//ЭБС
document.querySelector("#inst35009").style= "background-color: #000";
//Календарь
document.querySelector("#inst3").style= "background-color: #000";
//Статистика
document.querySelector("#inst3038").style= "background-color: #000";
//События
document.querySelector("#inst470").style= "background-color: #000";

//Рамочка курсов
document.querySelector("#region-main").style= "background-color: #000";
//Фон курсов
document.querySelector("#region-main > div").style= "background-color: #000";

document.querySelector(".courses .coursebox.even, .courses .coursebox.odd").style= "background-color: #000";
*/

//Левые div-ы
i = 0;
while(document.querySelectorAll("#block-region-side-pre .block")[i]) {
document.querySelectorAll("#block-region-side-pre .block")[i].style= "background-Color: #303030";
i++;
}


//Текст для div-ов
i = 0;
while(document.querySelectorAll("#block-region-side-pre .block.block_flat_navigation .list-group-item")[i]) {
document.querySelectorAll("#block-region-side-pre .block.block_flat_navigation .list-group-item")[i].style.color= '#fcfcfc';
i++;
}

//Цвет заголовков левых меню
i = 0;
while(document.querySelectorAll("#block-region-side-pre .block .header .title h2")[i]) {
document.querySelectorAll("#block-region-side-pre .block .header .title h2")[i].style.color= '#fcfcfc';
i++;
}

//Контент1 в левых
i = 0;
while(document.querySelectorAll("#block-region-side-pre .block a, #block-region-side-pre .block a:visited, #block-region-side-pre .block .fa")[i]) {
document.querySelectorAll("#block-region-side-pre .block a, #block-region-side-pre .block a:visited, #block-region-side-pre .block .fa")[i].style.color= '#fcfcfc';
i++;
}

//Контент2 в левых
i = 0;
while(document.querySelectorAll("#block-region-side-pre .block")[i]) {
document.querySelectorAll("#block-region-side-pre .block")[i].style.color= '#fcfcfc';
i++;
}

//курсы 
i = 0;
while(document.querySelectorAll(".courses .coursebox.even, .courses .coursebox.odd")[i]) {
document.querySelectorAll(".courses .coursebox.even, .courses .coursebox.odd")[i].style= "background-color: #404040";
i++;
}

//Рамочка курсов
document.querySelector("#region-main").style= "background-color: #303030";
//Фон курсов
document.querySelector("#region-main > div").style= "background-color: #303030";

//Цвет курсов
i = 0;
while(document.querySelectorAll(".coursebox>.info>.coursename a")[i]) {
document.querySelectorAll(".coursebox>.info>.coursename a")[i].style= "color: #f0f0f0";
i++;
}

document.querySelector("h2").style= "color: #fcfcfc";

//поиск
document.querySelector("#shortsearchbox").style= "background-color: #777";

//кнопка поиска
document.querySelector("#coursesearch > fieldset > input[type=submit]:nth-child(3)").style= "background-image: linear-gradient(to top,#858585,#909090)";
document.querySelector("#coursesearch > fieldset > input[type=submit]:nth-child(3)").style.color= "#eee";

//шапка
document.querySelector("#page-header").style= "filter: brightness(75%)";

document.querySelector(".dropdown-menu").style= "background-color: #303030";
document.getElementsByClassName("dropdown").style= "background-color: #303030";
