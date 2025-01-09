import React, { PureComponent, } from 'react';

import { Link } from 'react-scroll';

export const NavItems = {
    About : 'about',
    Experience: 'experience',
    Work : 'work',
} as const;


export interface NavState {
    active: string | undefined;
}



export class NavComponent extends PureComponent<{}, NavState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            active: undefined,
        }
        this.hadleClick = this.hadleClick.bind(this);
    }

    componentDidMount(): void {
        const anchorId = window.location.hash.substring(1);        
        this.setState({active:anchorId});        
    }

    hadleClick(item:string) {      
        this.setState({active:item});        
    }


    render () {
        const navItems = Object.values(NavItems);
        const {active} = this.state;        
        return (
            <nav className="nav pt-2 hidden lg:block">
            <ul className='flex'>
                    {navItems.map((item, key) => (<li key={key} className={`navListItem ${item === active ? 'active' : '' }`}>
                        <Link activeClass="active" to={`${item}`} className='link capitalize' smooth={true} duration={700} offset={-80} onClick={() => this.hadleClick(item)}>{item}</Link>
                </li>))}
            </ul>         
        </nav>  
        ) 
    }
}

  
  export default NavComponent;