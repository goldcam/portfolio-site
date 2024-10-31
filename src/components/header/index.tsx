import  { PureComponent, } from 'react';

import Name from '../name';
import SocialLinks from '../socialLinks';

export class HeaderComponent extends PureComponent {
    render () {
        return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-40">
            <Name />
            <SocialLinks />
        </header>
        ) 
    }
}

  
  export default HeaderComponent;
  