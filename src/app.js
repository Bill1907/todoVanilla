import LNB from "./view/LNB.js";

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

    this.setState = (newState) => {
        this.state = newState;
    };
};

export default App;
