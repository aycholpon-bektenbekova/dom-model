// const htmlElement = document.documentElement;
// const headElement = document.head;
const bodyElement = document.body;

const childNodes = bodyElement.childNodes;
// const lastChildNode = bodyElement.lastChild;

// console.log(childNodes);

// console.log(bodyElement.hasChildNodes());
for(let node of childNodes) {
    console.log(node)
}

const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

//навигация по конкретно элементам
const bodyChildren = bodyElement.children;
console.log(bodyChildren);

//поиск по селектору класса
const elemOne = document.querySelectorAll('.lesson_list');
console.log(elemOne);

//поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

//поиск по смешанному селектору тега и класса
const elemsThree = document.querySelectorAll('li.lesson_item-list');
console.log(elemsThree);

//поиск по тегу первого уровня вложенности
const elemsFour = document.querySelectorAll('.lesson_list>li');
console.log(elemsFour);

//поиск по нескольким классам
const elemFive = document.querySelectorAll('.lesson_list .lesson_text');
console.log(elemFive);

//поиск по вложенным классам
const elemSix = document.querySelectorAll('.lesson_list .lesson_text');
console.log(elemSix);

//поиск по ID
const elemSeven = document.querySelectorAll('#listItem');
console.log(elemSeven);

//поиск по атрибуту
const elemEight = document.querySelectorAll('[data-item]');
console.log(elemEight);

//поиск по атрибуту со значением
const elemNine = document.querySelectorAll('[data-item="85"]');
console.log(elemNine);

//querySelectorAll возвращает коллекцию, но эта коллекция статична, а не "жива"
const elems = document.querySelectorAll('li');
console.log(elems[2]);

for (const item of elems) {
    console.log(item);
}

//ищем теги li только внутри объекта subItems
const subList = document.querySelectorAll('.lesson_sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);
//querySelectorAll проверяет только последний элемент без учета контекста

// const lessonList = document.querySelectorAll('.lesson_list')[0]; //можно заменить на -> 
const lessonList = document.querySelector('.lesson_list');//находит первый попавшийся лист и возвращает; в константу попадет не коллекция, а один объект

//getElemensByTagName ищет по тегам и возвращает "живую коллекцию"
elems1 = document.getElementsByTagName('li');
console.log(elems1);

//метод closest ищет ближайшего предка
const parent = document.querySelector('.lesson_item-sub-list');
const parentList = parent.closest('.lesson_list');
console.log(parentList); 

//получаем объект
const textElement = document.querySelector('.lesson_text');

//получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML;

// textElement.innerHTML = "Живи!";

//дописываем содержимое объекта
textElement.innerHTML = `<p>${textElementContent}</p>
<p>Живи, а работай в <span class="yellow">свободное</span>время</p>`
console.log(textElement.innerHTML);

const getComment = textElement.nextSibling;
console.log(getComment);
console.log(getComment.data);

//изменение текстового узла/комментария
getComment.data = "Hello";
console.log(getComment.data);

//создание нового элемента
const newElement = document.createElement('div');
//наполняем новый элемент
newElement.innerHTML = `LIVE and work in <span class="yellow">free</span>time!`;
//вставляем новый элемент перед объектом
textElement.before(newElement);
//после -> after внутрь->prepend в конец->append

//вставляем текст, элемент
textElement.insertAdjacentHTML(
    'afterend',
    `<p>Live and work</p>`
);

//перенос элемента
const lessonBlock = document.querySelector('.lesson');
const title = document.querySelector('h3');
lessonBlock.append(title);
//cloneNode -> клонирование

const element = document.querySelector('.lesson_item-list_red');
// const elementClassName = element.className;
// console.log(elementClassName)

// element.className = "red"

//добавить класс
element.classList.add('active');
//удалить класс
element.classList.remove('active');
//добавить класс, если его нет, а если есть удалить
element.classList.toggle('active');
//проверка наличия класса ложь/истина
element.classList.contains('active');


//css
element.style.color = "red";
element.style.cssText = `
margin-bottom: 30px;
color: red;`;

const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

const link = document.querySelector('.lesson_link');
const input = document.querySelector('.lesson_input');

console.log(link.href);
console.log(input.value);

const lessonText = document.querySelector('.lesson_text');

lessonText.hasAttribute('name');
lessonText.getAttribute('name');
lessonText.setAttribute('name', 'value');
lessonText.removeAttribute('name');

lessonText.setAttribute('some-attribute', 'some-value');

if(lessonText.hasAttribute('some-attribute')) {
    console.log('some-attribute is here');
}

input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));

