let create = document.getElementById('create');
let rd = document.getElementById('rd');

create.onclick = function () {
let val = document.getElementById('elem1').value;
if (val.trim() !== '') {
let element = document.createElement('div');
element.className = 'element';
element.innerText = val;
element.id = 'el';
element.onclick = function () {
this.classList.toggle('completed');
updateActiveTaskCount();
};

let btn = document.createElement('button');
btn.className = 'button';
btn.innerText = 'Delete';
btn.onclick = function () {
container.parentNode.removeChild(container);
updateTaskCount();
updateActiveTaskCount();
};

let container = document.createElement('div');
container.appendChild(element);
container.appendChild(btn);
document.getElementById('str').appendChild(container);

updateTaskCount();
updateActiveTaskCount();
}
};

rd.onclick = function () {
document.getElementById('elem1').value = '';
};

function updateTaskCount() {
const tasks = document.querySelectorAll('.element');
    document.getElementById('taskCount').innerText = tasks.length;
    }
    
function updateActiveTaskCount() {
const activeTasks = document.querySelectorAll('.element:not(.completed)');
document.getElementById('activeTaskCount').innerText = activeTasks.length;
}