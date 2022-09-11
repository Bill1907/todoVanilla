import LNB from "./view/LNB.js";
import TodoList from "./view/TodoList.js";

const App = function($app) {
    this.state = {
        dataList: []
    };

    const leftNavigationBar = new LNB({
        $app,
        onNewItem: (newDataForm) => {
            this.setState({
                dataList: [ newDataForm, ...this.state.dataList ]
            });
        }
    });

    const todoList = new TodoList({
            $app,
            dataList: this.state.dataList
        }
    );

    this.setState = (newState) => {
        this.state = newState;
    };
};

export default App;

