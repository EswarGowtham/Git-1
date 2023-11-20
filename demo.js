var headerTitle=document.getElementById('header-title')
var header=document.getElementById('main-header')
header.style.border='solid 3px #000'


var items=document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[4].style.fontWeight='bold';
items[4].style.color='green';
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}

document.querySelector('.list-group-item').style.color='red';
document.querySelector('.list-group-item:nth-child(2)').style.color='blue';

document.querySelector('.list-group-item:nth-child(4)').style.color='coral';