import  { PureComponent, } from 'react';
import ModeToggleComponent from '../modeToggle';

export class SocialLinksComponent extends PureComponent {
    render () {
        return (
            
                <ul className='mt-2 lg:mt-10 flex '>
                <li className='socialLinks'>
                    <a className='link' href='https://www.linkedin.com/in/cam-townsend/' target='_blank' rel="noreferrer">
                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                        <span className='hidden'>LinkedIn Profile</span>
                    </a>
                </li>
                
                <li className='socialLinks'>
                    <a className='link' href='https://github.com/goldcam/' target='_blank' rel="noreferrer">
                        <i className="bi bi-github" aria-hidden="true"></i>
                        <span className='hidden'>Github Profile</span>
                    </a>
                </li>
                    
                <li className='socialLinks'>
                    <a className='link' href='https://codepen.io/cameron-townsend' target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" strokeWidth="5"></path></svg>
                        <span className='hidden'>Codepen Profile</span>
                    </a>
                </li>

                    {/* <li className='socialLinks'><a className='link'><i className="bi bi-file-earmark-person"></i> <span className='text-sm'></span></a></li> */}

                    <li className='socialLinks'><ModeToggleComponent /></li>
                </ul>   
           
               
        ) 
    }
}

  
  export default SocialLinksComponent;
  

