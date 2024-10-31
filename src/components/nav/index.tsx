import  { PureComponent, } from 'react';

export class NavComponent extends PureComponent {
    render () {
        return (
            <nav className="nav flex md:justify-end md:mt-4 md:mx-auto mb-4 sm:mb-0 max-w-screen-lg">
            <ul>
                <li className='navListItem'>
                    <a className='link'>about</a>
                </li>
                <li className='navListItem'>
                    <a className='link'>experience</a>
                </li>
                <li className='navListItem'>
                    <a className='link'>work</a>
                </li>
                <li className='navListItem'>
                    <a className='link'>contact</a>
                </li>
                <li className='navListItem'>
                    <a className='link'>resume</a>
                </li>
            </ul>         
        </nav>  
        ) 
    }
}

  
  export default NavComponent;