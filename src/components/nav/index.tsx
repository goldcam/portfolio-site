import  { PureComponent, } from 'react';

enum NavItems {
    About = 'about',
    Experience= 'experience',
    Work = 'work',
    Contact = 'contact', 
}

export class NavComponent extends PureComponent {
    render () {
        const navItems = Object.keys(NavItems)
        return (
            <nav className="nav pt-20 lg:w-1/6 lg:py-20 ">
            <ul className='border-l-2 border-whiteish'>

           { navItems.map((item, key) =>  (<li key={key} className='navListItem'>
                    <a href='#about' className='link'>{item}</a>
                </li>))}
                <li className='navListItem'>
                    <a className='link'>Resume</a>
                </li>
            </ul>         
        </nav>  
        ) 
    }
}

  
  export default NavComponent;