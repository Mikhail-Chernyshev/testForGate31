const ul = document.getElementById('authors');
const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7';
const arrayTitles = [];
console.log(arrayTitles);
let input = document.getElementById('input-search');

const buttonSearch = document.querySelector('.button');

buttonSearch.addEventListener('click', () => {
  console.log('pipka');
  //   search(arrayTitles);
  searchApi(url);
});
arrayTitles.filter;
function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

// const emptyParams = new URLSearchParams();
// const paramsFromUrl = new URLSearchParams(window.location.search);
console.log(window.location.search);
// const params = new URLSearchParams({ inputvalue });
function createSearch(value) {
  const params = new URLSearchParams('a[]');
  params.set('a[]', value);

  //   params.append(value, value);
}
function searchApi(url) {
  arrayTitles.forEach((el) => {
    el.parentNode.style.display = 'none';
  });
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      data.map((element) => {
        if (element.title.includes(input.value)) {
          console.log(element);
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
          // checkSearch();
        }
      });
      createSearch(input.value);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function getItems(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      data.map((element) => {
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
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
// function search(array) {
//   let input = document.getElementById('input-search');
//   if (input.value === '') {
//     array.forEach((element) => {
//       element.parentNode.style.display = 'block';
//       element.style.display = 'block';
//     });
//   } else {
//     array.forEach((element) => {
//       if (element.textContent.includes(input.value)) {
//         element.style.display = 'block';
//       } else {
//         element.parentNode.style.display = 'none';
//         element.style.display = 'hidden';
//       }
//     });
//   }
// }
getItems(url);
