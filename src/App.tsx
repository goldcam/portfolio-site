import React, { PureComponent, ComponentType } from 'react';
import './App.css';


export interface AppComponentProps {
  Header:ComponentType;
  Footer: ComponentType;
} 



export class AppComponent extends PureComponent<AppComponentProps> {
  render() {
    const {
      Header,
      Footer
    } = this.props
    return ( 
      <div className="App">
        <Header />
        <Footer />
      </div>
    )
  }
} 

export default AppComponent;
