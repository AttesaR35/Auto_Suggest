const inputField = document.querySelector("#fruit");
let searchTerm = ""
let suggestions = document.getElementById('suggestions');
let savedSug = ""


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  clear()
	for(let i = 0; i < fruit.length; i++)
	{
		if(fruit[i].toLowerCase().includes(str.toLowerCase()) === true)
		{
		  makeLi(fruit[i]);
		}
  }
}

function getVal(e)
{
  savedSug = e.target;
  document.getElementById("fruit").value = savedSug.innerText;
  clear();
}

function set(){
  searchTerm = document.getElementById("fruit").value;
  if(searchTerm === ""){
    clear()
  }
  else{
  search(searchTerm)
  }   
};

function clear(){
  let results = document.querySelectorAll("li");
  results.forEach(function(li){
    li.remove();
  })
}

function makeLi(e) {
	let newLi = document.createElement("li");
	let newText = document.createTextNode(e);
	newLi.appendChild(newText)
	document.getElementById("suggestionsUl").appendChild(newLi);
}

inputField.addEventListener('keyup', set);



suggestions.addEventListener('click', getVal);