const LNB = function ({$app, onNewItem}) {
    this.state = {
        color: '',
        title: '',
        content: '',
        due: '',
    }

    this.$target = document.createElement('div');
    this.$target.className = 'navigation-bar'
    $app.appendChild(this.$target);

    this.$button = document.createElement('button');
    this.$button.className = 'append-btn';
    this.$target.appendChild(this.$button);

    this.$colorList = document.createElement('div');
    this.$colorList.className = 'color-list';

    this.colorPalette = ['#f5cfb9', '#9becc7', '#eab0e7', '#d0b4f4', '#9ed9f1', '#f4b8b5'];

    this.render = () => {

    };

    this.$button.addEventListener('click', () => {
    });

    this.render();
};

export default LNB;
