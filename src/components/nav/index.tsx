import  { PureComponent, } from 'react';

export class NavComponent extends PureComponent {
    render () {
        return (
            <nav className="nav flex justify-end mt-4 mx-auto max-w-screen-lg">
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