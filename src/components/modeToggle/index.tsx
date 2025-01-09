import React, { PureComponent, } from 'react';




export interface modeToggle {
    darkMode: boolean;
}



export class ModeToggleComponent extends PureComponent<{}, modeToggle> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            darkMode: true,
        }
        this.hadleClick = this.hadleClick.bind(this);
    }
  
    componentDidMount(): void {
        if (localStorage.getItem('dark-mode') === 'true') {
            this.setState({ darkMode: true});
            document.documentElement.classList.add('dark');
        } else {
            this.setState({ darkMode: false });
            document.documentElement.classList.remove('dark');

        }
    }


   

    hadleClick() {
        const {darkMode} = this.state;
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', "true");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', "false");
        }
        this.setState({ darkMode: !darkMode });
    }


    render() {
        const { darkMode } = this.state;
        return (
            <button className='focus:outline-none' onClick={this.hadleClick}>
                {darkMode === false ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
            </button>  
        ) 
    }
}


export default ModeToggleComponent;