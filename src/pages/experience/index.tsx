import  { PureComponent, } from 'react';

import resume from "../../json/resume.json";


export interface ExperienceState {
    experience: typeof resume.experience;
    additionalExperience: typeof resume.additionalExperience;

}


export class ExperienceComponent extends PureComponent<{}, ExperienceState> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            experience: resume.experience,
            additionalExperience: resume.additionalExperience
        }
    }


    render () {

        const {experience, additionalExperience} = this.state;

        
        return (
            <section className='flex flex-col mb-20' id='experience'>
                <h2 className='sectionHeader'>Experience</h2>
                {experience.map((item, i) => <div key={i} className='mb-12'>
                            <h3 className='block font-black font-oswald'>
                                {item.company} {item.dates} {!!item.link ? <a href={item.link} className='ml-1 link' target='_blank'><i className="bi bi-link-45deg"></i></a> : null}                                                   
                            </h3>
                            {/* <p className='text-xs'> 
                                {item.location}
                            </p> */}
                            {item.positions.map((position, j) => {
                                return (
                                    <div key={j} >
                                        <p className='pb-2 text-teal font-normal text-sm'>{position.title}</p>
                                        <p className='font-montserrat  text-xs'>
                                            {position.description}
                                        </p>
                                        <ul className='bulletList'>
                                            {position.bullets.map((bullet, b) => <li key={b}>{bullet}</li>) }
                                        </ul>
                                    </div>
                                )                               
                            })}
                            <p className='text-xs text-teal'>{item.keywords}</p>
                        </div>
                    )
                }
                <h2 className='sectionHeader'>Additional Experience</h2>

                {additionalExperience.map((item, i) => 
                    <div key={i} className=''>
                        <p className=''>
                            <span className='font-oswald font-black text-sm'>{item.title}</span> - <span className='font-thin text-xs'>{item.company}, ({item.dates})</span>
                        </p>
                    </div>
                )}

            
        </section>
        ) 
    }
}

  
  export default ExperienceComponent;
  
