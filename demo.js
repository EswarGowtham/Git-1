// var headerTitle=document.getElementById('header-title')
// var header=document.getElementById('main-header')
// header.style.border='solid 3px #000'


// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[4].style.fontWeight='bold';
// items[4].style.color='cyan';
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// document.querySelector('.list-group-item').style.color='red';
// document.querySelector('.list-group-item:nth-child(2)').style.color='green';

// document.querySelector('.list-group-item:nth-child(4)').style.color='coral';

// ele=document.getElementsByTagName("li")
// console.log(ele)

// var titles=document.querySelectorAll('.title');
// console.log(titles)
// var odd=document.querySelectorAll('li:nth-child(odd)')
// for(var i=0;i<odd.length;i++){
//     odd[2].style.backgroundColor='green';
// }
// Traversing DOM
var itemList=document.querySelector('#items')
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='#f4f4f4f';
// console.log(itemList.parentNode.parentNode)

// console.log(itemList.parentElement)
// itemList.parentNode.style.backgroundColor='#f4f4f4f';
// console.log(itemList.parentElement.parentElement)

//childnodes
// console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'

// First child

// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild.textContent='Hello1')

//siblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'
var newDiv=document.createElement('div')

newDiv.className='hello'

newDiv.id='hello1'

newDiv.setAttribute('title','Hello Div')

var newdivtext=document.createTextNode('hello world')

newDiv.appendChild(newdivtext)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
console.log(newDiv)
newDiv.style.fontSize='30px'
/container.insertBefore(newDiv,h1)