const todoList =[{
    name: 'make dinner',
    dueDate: '21-5-2024'
}, {
    name: 'watch tv',
    dueDate: '21-5-2024'
}
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>
        ${todo}
        <button onclick= "
        todoList.splice(${i}, 1);
        renderTodoList();
        ">Delete</button>
        </p> 
        `;
        todoListHTML += html;
        document.querySelector('.js-todo-List').innerHTML = todoListHTML;
    }
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);

    inputElement.value = '';

    renderTodoList();

}