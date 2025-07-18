import { PureComponent, } from 'react';

import WebProjectsComponent from './webProjects';


export class ProjectsComponent extends PureComponent {
    render() {
        return (
            <section className='mb-20' id='projects'>
                <h2 className='sectionHeader'>Projects</h2>
                
                <WebProjectsComponent />             
                <h3>Design Projects</h3>               
            </section>
        )
    }
}


export default ProjectsComponent;
