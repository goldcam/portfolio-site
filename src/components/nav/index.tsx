import React, { PureComponent, } from 'react';
// import { useLocation } from 'react-router-dom';

export enum NavItems {
    About = 'about',
    Experience= 'experience',
    Work = 'work',
    Contact = 'contact', 
}

export interface NavProps {
    // navItems: NavItems;
}

export interface NavState {
    active: string | undefined;
}



export class NavComponent extends PureComponent<NavProps, NavState> {
    constructor(props: Readonly<NavProps>) {
        super(props);
        this.state = {
            active: undefined,
        }
        this.hadleClick = this.hadleClick.bind(this);
    }

    componentDidMount(): void {
        // const location = useLocation();
        const anchorId = window.location.hash.substring(1);
        this.setState({active:anchorId});        
    }

    hadleClick(evt:React.MouseEvent<HTMLSpanElement>, item:string) {
        // evt.stopPropagation();
        // evt.preventDefault();
        this.setState({active:item});        
    }


    render () {
        // const {NavItems} = this.props;
        const navItems = Object.keys(NavItems);
        const {active} = this.state
        return (
            <nav className="nav pt-20 lg:w-1/6 lg:py-20 ">
            <ul className='border-l border-whiteish'>

           { navItems.map((item, key) =>  (<li key={key} className={`navListItem ${item === active ? 'active' : '' }`}>
                    <a href={`#${item}`} className='link' onClick={(e) => this.hadleClick(e, item)}>{item}</a>
                </li>))}
                {/* <li className='navListItem'>
                    <a className='link'>Resume</a>
                </li> */}
            </ul>         
        </nav>  
        ) 
    }
}

  
  export default NavComponent;