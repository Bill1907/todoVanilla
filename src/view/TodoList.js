const TodoList = function ({$app, todoList}) {
    this.createListBox = (target) => {
        const listWrapper = document.createElement('div');
        listWrapper.className = 'list-wrapper';
        target.appendChild(listWrapper);
        return listWrapper;
    };

    this.render = () => {
        console.log('todo list');
        const listBox = this.createListBox($app);
        if(todoList?.length > 0) {
            todoList.forEach((item) => {
                console.log(item);
            })
        }
    };

    this.render();
};


export default TodoList;
