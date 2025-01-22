import  { PureComponent, } from 'react';
import about from '../../json/about.json'

export interface AboutComponentState {
    line1: typeof about.line1;
    line2: typeof about.line2;
}


export class AboutComponent extends PureComponent<{}, AboutComponentState> {
    constructor (props: Readonly<{}>) {
        super(props);
        this.state =  {
            line1: about.line1,
            line2: about.line2
        }
    }

    render () {
        const {line1, line2} = this.state;
        return (
        <section className='mb-20' id='about'>
                <h2 className='sectionHeader'>About</h2> 
                <p className='paragraph '>{line1}
                </p>   
                <p className='paragraph '>
                    {line2} 
                </p>
        </section>
        ) 
    }
}

  
  export default AboutComponent;
  