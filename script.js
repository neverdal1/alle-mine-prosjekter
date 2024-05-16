console.log('Hello!');

const hamburgerIcon = document.querySelector('#hamburgerIcon');
console.log(hamburgerIcon);

function hamburgermeny() {
  const nav = document.querySelector('#nav');
  console.log(nav);
  nav.classList.toggle('headerhamburger');
  console.log('clicked');
}

hamburgerIcon.addEventListener('click', hamburgermeny);

const listname = document.querySelector('#listname');
console.log(listname);

//lager element i html
const lihjem = document.createElement('li');
lihjem.classList.add('listitam');

const liprosjekter = document.createElement('li');
liprosjekter.classList.add('listitam');

const likontakt = document.createElement('li');
likontakt.classList.add('listitam');

const liomoss = document.createElement('li');
liomoss.classList.add('listitam');

//modifiserer synlig i html
lihjem.textContent = 'hjem';
liprosjekter.textContent = 'prosjekter';
likontakt.textContent = 'kontakt';
liomoss.textContent = 'om oss';

// sendt inn i html
listname.appendChild(lihjem);
listname.appendChild(likontakt);
listname.appendChild(liprosjekter);
listname.appendChild(liomoss);

function addTodo(){

    
  event.preventDefault();
console.log("button clicked")
// const = er å erklære en verdi 
//taskinputdata er et variabelt navn
//  = å erklære en verdi som skal lagres
//  document referer til html.document
// queryselector() henter noe fra html
// #taskinput er id-navnet til element vi henter fra html
// .value er at vi henter verdi/innhold til element
// ; betyr full stopp av comando.
const taskInputData = document.querySelector("#taskInput").value;
console.log (taskInputData)
// const = erklæring (henter noe)
const newListItem = document.createElement("li");
console.log(newListItem)
// modifiserer manipulerer 
newListItem.textContent = taskInputData;
newListItem.classList.add("newlistItam");

const taskList = document.querySelector("#taskList");
console.log(taskList)


taskList.appendChild(newListItem);
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton)

taskButton.addEventListener("click",addTodo);


//hører til navbar 
let menu = document.querySelector(".menu"),
  toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
toggle.classList.toggle("menu-open");
};

function toggleMenu() {
menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

taskListcontainer.appendChild(newListItem);
console.log(taskListcontain
  function addTodo(){

    
    event.preventDefault();
console.log("button clicked")
// const = er å erklære en verdi 
//taskinputdata er et variabelt navn
//  = å erklære en verdi som skal lagres
//  document referer til html.document
// queryselector() henter noe fra html
// #taskinput er id-navnet til element vi henter fra html
// .value er at vi henter verdi/innhold til element
// ; betyr full stopp av comando.
const taskInputData = document.querySelector("#taskInput").value;
console.log (taskInputData)
// const = erklæring (henter noe)
const newListItem = document.createElement("li");
console.log(newListItem)
// modifiserer manipulerer 
newListItem.textContent = taskInputData;
newListItem.classList.add("newlistItam");

const taskList = document.querySelector("#taskList");
console.log(taskList)


taskList.appendChild(newListItem);
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton)

taskButton.addEventListener("click",addTodo);


//hører til navbar 
let menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
};

function toggleMenu() {
  menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

taskListcontainer.appendChild(newListItem);
console.log(taskListcontain