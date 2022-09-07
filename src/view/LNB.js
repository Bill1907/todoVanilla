const LNB = function ({$app, onNewItem}) {
    this.colorPalette = ['#f5cfb9', '#9becc7', '#eab0e7', '#d0b4f4', '#9ed9f1', '#f4b8b5'];
    this.state = {
        color: '',
        title: '',
        content: '',
        due: '',
    };

    this.toggleVisible = (target) => {
        if (target.className.includes('hidden')) {
            target.className = target.className.split(' ').reduce((acc, cur) => {
                if(cur === 'hidden') {
                    return `${acc} visible`;
                }
                return `${acc} ${cur}`;
            }, '').trim();
        } else {
            target.className = target.className.split(' ').reduce((acc, cur) => {
                if(cur === 'visible') {
                    return `${acc} hidden`;
                }
                return `${acc} ${cur}`;
            }, '').trim();
        }
    }

    this.renderNavBar = (target) => {
        const navBar = document.createElement('div');
        navBar.className = 'navigation-bar'
        target?.appendChild(navBar);
        return navBar;
    };

    this.createColorMenuButton = (target) => {
        const appendButton = document.createElement('button');
        appendButton.className = 'append-btn';
        appendButton.addEventListener('click', () => {
            const colorMenuList = document.querySelectorAll('.colorMenu');
            colorMenuList.forEach((el) => {
                this.toggleVisible(el);
            })
        });
        target.appendChild(appendButton);
    };

    this.createColorMenuButtons = (target, list) => {
        const menuHtml = list.reduce((acc, cur) => {
            return acc + `
                <button class="colorMenu hidden" style="background: ${cur}"/>
            `;
        }, '');
        target.innerHTML = menuHtml;
    }

    this.render = () => {
        console.log('render LNB');
    };

    this.setState = (newState) => {
        this.state = newState;
    };

    this.$navBar = this.renderNavBar($app);
    this.createColorMenuButtons(this.$navBar, this.colorPalette);
    this.createColorMenuButton(this.$navBar);
    this.render();
};

export default LNB;
