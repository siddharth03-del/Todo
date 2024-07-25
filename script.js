// newtodoitem("recommendation in ssb");
function newtodoitem(todo){
    const bigdiv = document.createElement('div');
    const inputdiv = document.createElement('div');
    const input = document.createElement('input');
    const todoitem = document.createElement('p');
    const editbutton = document.createElement('button');
    const deletebutton = document.createElement('button');
    bigdiv.classList.add('flex', 'flex-row', 'mt-10', 'ml-4', 'h-14');
    inputdiv.classList.add('pt-2');
    todoitem.classList.add('font-bold', 'text-blue-500', 'text-xl', 'ml-10', 'w-800px' ,'bg-yellow-100' ,'h-10' ,'rounded-2xl' ,'pl-2', 'pt-2','pb-2');
    input.classList.add('customize-checkbox');
    editbutton.classList.add('border-2', 'font-bold', 'text-white', 'bg-green-400', 'rounded-2xl', 'w-16', 'h-10','hover:bg-green-600');
    deletebutton.classList.add('border-2', 'font-bold', 'text-white', 'bg-green-400', 'rounded-2xl', 'w-16', 'h-10','hover:bg-green-600');
    inputdiv.appendChild(input);
    editbutton.textContent = "Edit";
    deletebutton.textContent = "Delete";
    todoitem.textContent = todo;
    input.type = 'checkbox';
    todoitem.setAttribute('contenteditable','false');
    editbutton.value = 'edit';
    bigdiv.appendChild(inputdiv);
    bigdiv.appendChild(todoitem);
    bigdiv.appendChild(editbutton);
    bigdiv.appendChild(deletebutton);
    const todolist = document.getElementById('todo-list');
    todolist.appendChild(bigdiv);
    input.addEventListener('click',()=>{
        if(input.checked == true){
            todoitem.classList.remove('bg-yellow-100');
            todoitem.classList.add('bg-red-400');
        }
        else{
            todoitem.classList.remove('bg-red-400');
            todoitem.classList.add('bg-yellow-100');
        }
    })
    deletebutton.addEventListener('click',()=>{
        deletetodo(bigdiv);
    })
    editbutton.addEventListener('click', (event)=>{
        console.log('clicked');
        const btn = event.target;
        if(btn.value == 'edit'){
            btn.textContent = "Save";
            btn.value = 'Save';
            todoitem.setAttribute('contenteditable','true');
            todoitem.focus();
        }
        else{
            btn.textContent = "Edit";
            btn.value = "edit";
            todoitem.setAttribute('contenteditable','false');
        }
    })
}
const addbutton = document.getElementById('addbutton');
addbutton.addEventListener('click', ()=>{
    const todo = document.getElementById('todo-input').value;
    document.getElementById('todo-input').value = "";
    if(todo == ""){
        alert('Please enter a todo item');
    }
    else{
        newtodoitem(todo);
    }
    
})
function deletetodo(bigdiv){
    const todolistcontainer = document.getElementById('todo-list');
    todolistcontainer.removeChild(bigdiv);
}