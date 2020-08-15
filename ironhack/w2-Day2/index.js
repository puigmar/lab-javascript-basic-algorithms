let googleLink = document.getElementById('google-link');
googleLink.setAttribute('href', 'http://www.google.com');
googleLink.setAttribute('target', '_blank');

let p = document.getElementById('paragraph');
p.setAttribute('class', 'paragraph');
p.removeAttribute('class');
//p.classList.add('paragraph')
//p.classList.remove('paragraph');

let h2 = document.createElement('h2');
h2.innerHTML = "Elephant";
let h1 = document.getElementById('title');
let parent = document.getElementsByTagName('Body')[0];
parent.appendChild(h2);

let p2 = document.createElement('p');
p2.innerText = "soy un párrafo <p>"
let text = document.createTextNode('pues yo soy un nodo de texto, no tengo etiqueta :(');


let parentDiv = document.getElementById('content');
parentDiv.appendChild(p2)
parentDiv.appendChild(text)

//parent.appendChild(p2);

let input = document.createElement('input');
input.setAttribute('placeholder', 'Escribe algo');
input.setAttribute('name', 'item-name')
input.setAttribute('id', 'itemAddItem')

// Añadir funcionalidad al button `add-item-button`
let button = document.getElementById('add-item-button');
parent.insertBefore(input, button)

let liCounter = 0;
button.onclick = function() {
    let idUl = 'item-list';
    let ul = document.getElementById(idUl);
    
    if(ul === null){
        let ulNode = document.createElement('ul');
        ulNode.setAttribute('id', idUl);
        parent.appendChild(ulNode);
        ul = document.getElementById(idUl);
    }
    
    let li = document.createElement('li');

    // Sacamos info de input
    let input = document.getElementById('itemAddItem');
    
    // Validamos si hay algo escrito en el value del input
    // Si es true añadimos el texto en el li, aumentamos el contador en 1
    // Si es false Alertamos
    if(input.value !== ''){
        li.innerHTML = `${liCounter} - ${input.value}`;
        ul.appendChild(li);
        liCounter++;
    } else {
        alert('Debes escribir algo en el input de add items')
    }
}

/*
let button = document.getElementById('add-item-button');
let liCounter = 0;
button.onclick = function() {
    let idUl = 'item-list';
    let ul = document.getElementById(idUl);
    
    if(ul === null){
        let ulNode = document.createElement('ul');
        ulNode.setAttribute('id', idUl);
        parent.appendChild(ulNode);
        ul = document.getElementById(idUl);
    }
    
    let li = document.createElement('li');
    li.innerHTML = `Item number ${liCounter}`;
    ul.appendChild(li);
    liCounter++;
}
*/

let html = document.getElementsByTagName('html')[0];
parent.removeChild(h2);
let parentLi = document.querySelector('.super-list li:last-child');

let ol = document.createElement('ol');
let ol_li = document.createElement('li');
ol_li.innerText = "Hola soy un li dentro de un <ol>"
ol.appendChild(ol_li);
parentLi.appendChild(ol);