import  { PureComponent, } from 'react';
// import Nav



import Name from '../name';
import SocialLinks from '../socialLinks';
import Nav from '../nav';
export class HeaderComponent extends PureComponent {
    render () {
        return (
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-3/12 lg:flex-col lg:justify-between lg:py-20">
            <div>
                    <Name />
                    <Nav />
            </div>           
            <SocialLinks />
        </header>
        ) 
    }
}

  
  export default HeaderComponent;
  