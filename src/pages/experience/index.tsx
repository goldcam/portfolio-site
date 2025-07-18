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
                        {item.company} {item.dates} {!!item.link ? 
                        <a href={item.link} className='ml-1 link' target='_blank' rel="noreferrer">
                                <i className="bi bi-link-45deg" aria-hidden="true"></i>
                                <span className='hidden'>{item.company} Website</span>
                        </a> : null}                                                   
                            </h3>
                            {/* <p className='text-xs'> 
                                {item.location}
                            </p> */}
                            {item.positions.map((position, j) => {
                                return (
                                    <div key={j} >
                                        <p className='positionTitle'>{position.title}</p>
                                        <p className='positionDescription'>
                                            {position.description}
                                        </p>
                                        <ul className='bulletList'>
                                            {position.bullets.map((bullet, b) => <li key={b}>{bullet}</li>) }
                                        </ul>
                                    </div>
                                )                               
                            })}
                    <p className='keywords-text'>{item.keywords}</p>
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
  
