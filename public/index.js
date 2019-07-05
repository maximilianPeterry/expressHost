const myInput = document.getElementById('myInput');
const keyList = document.getElementById('keyList');
const codeList = document.getElementById('codeList');
const whichList = document.getElementById('whichList');
const button = document.getElementById('buttonReset');

myInput.addEventListener('input',() => {
   
    let listKey = document.createElement('li');
    let listCode = document.createElement('li');
    
    
    listKey.textContent = myInput.value;
    keyList.appendChild(listKey)

    listCode.textContent = `Key: ${myInput.value.toUpperCase()}`
    codeList.appendChild(listCode)
    
})


document.addEventListener('keypress', () => {

    let listWhich = document.createElement('li');
    listWhich.textContent = event.keyCode;
    whichList.appendChild(listWhich)
})


const removeFromList = () => {
    // keyList.removeChild(keyList.childNodes[0]);
    // codeList.removeChild(codeList.childNodes[0]);
    // whichList.removeChild(whichList.childNodes[0]);
    
    keyList.innerHTML = "";
    codeList.innerHTML = "";
    whichList.innerHTML = "";
}
button.onclick = function() {
    removeFromList();
}

let liList = document.getElementById('listKey').getElementsByTagName('li');
let liGo = liList.length;
if (liGo >= [3]) {
    removeFromList()
}