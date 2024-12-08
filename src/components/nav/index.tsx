import React, { PureComponent, } from 'react';
// import { useLocation } from 'react-router-dom';

import { Link } from 'react-scroll';

export enum NavItems {
    About = 'about',
    Experience= 'experience',
    Work = 'work',
    // Contact = 'contact', 
}

export interface NavProps {
    // navItems: NavItems;
}

export interface NavState {
    active: string | undefined;
}



export class NavComponent extends PureComponent<{}, NavState> {
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

    hadleClick(item:string) {       
        // evt.stopPropagation();
        // evt.preventDefault();
        this.setState({active:item.toLocaleLowerCase()});        
    }


    render () {
        // const {NavItems} = this.props;
        const navItems = Object.keys(NavItems);
        const {active} = this.state;        
        return (
            <nav className="nav pt-2">
            <ul className='flex'>
                    {navItems.map((item, key) => (<li key={key} className={`navListItem ${item.toLocaleLowerCase() === active ? 'active' : '' }`}>
                        <Link activeClass="active" to={`${item.toLocaleLowerCase()}`} className='link' smooth={true} duration={700} offset={-80} onClick={() => this.hadleClick(item)}>{item}</Link>
                </li>))}
            </ul>         
        </nav>  
        ) 
    }
}

  
  export default NavComponent;