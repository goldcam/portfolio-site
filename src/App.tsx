import  { PureComponent, ComponentType } from 'react';


import AboutComponent from './pages/about';
import ExperienceComponent from './pages/experience';

export interface AppComponentProps {
  Header:ComponentType;
  Footer: ComponentType;
  Name: ComponentType;
  SocialLinks: ComponentType;
  Nav: ComponentType;
} 



export class AppComponent extends PureComponent<AppComponentProps> {
  render() {
    const {
      Header,
      Name,
      Footer,
      SocialLinks,
      Nav
    } = this.props
    return ( 
    <>
      <div className="lg:flex lg:justify-between max-w-screen-lg mx-auto">
        <Header />
        <main className='flex flex-col pt-20 lg:w-3/6 lg:py-20 px-4'>       
            <AboutComponent />
            <ExperienceComponent />
        </main>
      </div>
      {/* <Footer /> */}
    </>
      
    )
  }
} 

export default AppComponent;
