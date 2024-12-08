import  { PureComponent, } from 'react';


export class AboutComponent extends PureComponent {
    render () {
        return (
        <section className='mb-20' id='about'>
                <h2 className='sectionHeader'>About</h2>           
                <p className='block font-montserrat text-whiteish text-sm pb-3'>Innovative and detail-oriented frontend web developer with 10+ years of combined experience in web development and design, specializing in crafting visually appealing and highly functional user interfaces.
                </p>   
                <p className='block font-montserrat text-whiteish text-sm'>
                    Experienced in optimizing website performance and user experience through efficient coding practices. Adept at troubleshooting and debugging frontend issues to ensure smooth functionality. Proven track record of collaborating with cross-functional teams to achieve project goals. Strong communication skills in conveying technical concepts to non- technical stakeholders. Well-versed in thriving in collaborative settings, integrating REST APIs and employing version control with Git to maintain high-quality codebases. Committed to delivering high-quality work within deadlines and exceeding client expectations.  
                </p>
        </section>
        ) 
    }
}

  
  export default AboutComponent;
  