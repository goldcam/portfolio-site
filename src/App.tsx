import  { PureComponent, ComponentType } from 'react';


import AboutComponent from './pages/about';
import ExperienceComponent from './pages/experience';
// import WorkComponent from './pages/work';
// import ModeToggleComponent from './components/modeToggle';

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
      // Footer,
      // Name
    } = this.props
    return ( 
               
      <div className='px-4 max-w-screen-xl mx-auto'>       
               
      <div className="lg:flex lg:justify-between lg:gap-3  ">
        <Header />        
        <main className='flex flex-col pt-20 lg:w-9/12 lg:py-20 '>       
            <AboutComponent />
            <ExperienceComponent />
            {/* <WorkComponent /> */}
        </main>
      </div>
       
      {/* <Footer /> */}
    </div>
        
      
    )
  }
} 

export default AppComponent;
