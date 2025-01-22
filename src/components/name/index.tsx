import { PureComponent, } from 'react';

import about from '../../json/about.json'


export interface NameState {
  name: typeof about.name;
  title: typeof about.title;

}


export class NameComponenet extends PureComponent<{}, NameState>{
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      name:about.name,
      title: about.title
    }
  }

  render() {
    const {name, title} = this.state;
    return (
      <div className='' >
        <h1 className="font-black text-3xl">{name}</h1>
        <h2 className="text-teal font-light -mt-2 font-montserrat text-xl">{title}</h2>
      </div>
    )
  }

}
  
export default NameComponenet;
  
