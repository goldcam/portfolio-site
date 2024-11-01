import  { PureComponent, ComponentType } from 'react';


import AboutComponent from './pages/about';

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
      <Nav />
      <div className="lg:flex lg:justify-between max-w-screen-lg mx-auto">
        <Header />

        <section className='flex pt-24 lg:w-3/5 lg:py-24'>
       
          <main>
            <AboutComponent />
          </main>
          
        </section>
      </div>
      {/* <Footer /> */}
    </>
      
    )
  }
} 

export default AppComponent;
