//переменные
const ul = document.getElementById('authors');
const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7';
const arrayTitles = [];
let input = document.getElementById('input-search');
const buttonSearch = document.querySelector('.button');

buttonSearch.addEventListener('click', () => {
  searchApi(url);
});
function submitForm(event) {
  event.preventDefault();
  searchApi(url);
}
function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
  return parent.appendChild(el);
}
function removeObjects(array) {
  array.forEach((el) => {
    el.parentNode.style.display = 'none';
  });
}
function createDivElement(element) {
  let div = createNode('div');
  div.classList.add('element');
  let title = createNode('h3');
  title.classList.add('element_title');
  let text = createNode('p');
  let checkbox = createNode('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  checkbox.addEventListener('click', () => {
    div.classList.toggle('onClick');
  });
  arrayTitles.push(title);
  title.innerHTML = element.title;
  text.innerHTML = element.body;
  append(ul, div);
  append(div, title);
  append(div, text);
  append(div, checkbox);
}
function getElements(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      data.map((element) => {
        if (element.title.includes(input.value)) {
          createDivElement(element);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
function searchApi(url) {
  removeObjects(arrayTitles);
  getElements(url);
}
searchApi(url);
