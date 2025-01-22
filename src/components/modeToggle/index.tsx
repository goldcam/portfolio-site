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
        this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidMount(): void {

        if (localStorage.getItem('dark-mode') === 'false') {
            this.setState({ darkMode: false });
            document.documentElement.classList.remove('dark');
        } else {
            this.setState({ darkMode: true });
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', "true");
        }

    }


   

    handleClick() {
        const {darkMode} = this.state;
        this.setState({ darkMode: !darkMode });

        
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', "true");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', "false");
        }



    }


    render() {
        const { darkMode } = this.state;
        return (
            <button className='focus:outline-none' onClick={this.handleClick}>
                {darkMode === false ? <i className="bi bi-sun-fill"></i> : <i className="bi bi-moon-stars-fill "></i>}
            </button>  
        ) 
    }
}


export default ModeToggleComponent;