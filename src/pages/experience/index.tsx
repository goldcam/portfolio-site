

import  { PureComponent, } from 'react';


export class ExperienceComponent extends PureComponent {
    render () {
        return (
        <section className='flex flex-col' id='experience'>
            {/* <h3 className='text-2xl'>Experience</h3> */}
            <div>
                    <h3 className='block pb-2 text-teal font-semibold'>
                    Gamigo / WildTangent 2015 — 2024
                </h3>
                <p className='font-montserrat text-whiteish text-sm'>
                Crafted user-friendly interface widgets for web browsers and a Chromium Embedded Framework application to enhance user experience. Ensured code quality through the creation of unit tests, integration tests, and conducting peer code reviews. Developed templates for transactional and marketing emails using HTML, CSS, and Jinja. Led maintenance efforts for the company's WordPress website.           
                </p>
                <ul className='bulletList'>
                    <li>Established new e-commerce website tailored to specific business requirements, ensuring optimal functionality and user experience.</li>
                    <li>Enhanced the membership subscription model by introducing a monthly perk, offering users a redeemable token for a game, thereby increasing user engagement and retention.</li>
                    <li>
                    Implemented subscription payment enhancements, enabling PayPal vault payments to streamline the checkout process and improve customer convenience.
                    </li>
                </ul>
                <p className='text-xs text-teal'>
                        HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, Handlebars, React.js, Redux, Node.js, GIT, GitLab, AWS lambdas, REST APIs, and GraphQL
                        
                    </p>
                <div>
                   
                    {/* <i className="bi bi-filetype-html"></i>
                    <i className="bi bi-filetype-css"></i>
                    <i className="bi bi-filetype-scss"></i>
                    <i className="bi bi-filetype-js"></i>
                    <i className="bi bi-filetype-tsx"></i>
                    <i className="bi bi-filetype-jsx"></i>
                    <i className="bi bi-git"></i> */}

                </div>
            </div>                                 
        </section>
        ) 
    }
}

  
  export default ExperienceComponent;
  
