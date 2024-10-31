import  { PureComponent, } from 'react';

export class HeaderComponent extends PureComponent {
    render () {
        return (
            <header className="header flex justify-end mt-4">           
            <nav className="nav">
            <ul>
                <li className='navListItem'>
                    <a className='navListItemLink'>about</a>
                </li>
                <li className='navListItem'>
                    <a className='navListItemLink'>experience</a>
                </li>
                <li className='navListItem'>
                    <a className='navListItemLink'>work</a>
                </li>
                <li className='navListItem'>
                    <a className='navListItemLink'>contact</a>
                </li>
                <li className='navListItem'>
                    <a className='navListItemLink'>resume</a>
                </li>
            </ul>         
        </nav>         
        </header>
        ) 
    }
}

  
  export default HeaderComponent;
  