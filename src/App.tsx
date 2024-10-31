import  { PureComponent, ComponentType } from 'react';


export interface AppComponentProps {
  Header:ComponentType;
  Footer: ComponentType;
  Name: ComponentType;
  SocialLinks: ComponentType;
} 



export class AppComponent extends PureComponent<AppComponentProps> {
  render() {
    const {
      Header,
      Name,
      Footer,
      SocialLinks
    } = this.props
    return ( 
      <div className="App min-h-screen">
        <Header />
        
        <section>

          <aside className='border-2 border-slate-300'>
            <Name />
            <SocialLinks />
          </aside>
          <main>
          main content here...
          </main>
          
        </section>
        <Footer />
        
        
      </div>
    )
  }
} 

export default AppComponent;
