import { PureComponent, ReactNode, } from 'react';
import PortfolioImg from '../../../components/portfolio/img';

import PaypalImage from '../../../imgs/step-three-thumb.jpg'








export class WebProjectsComponent extends PureComponent<{}, {}> {

    render(): ReactNode {
        return (
            <div>
                <h3>Web Projects</h3> 
                <section className="webProjects ">
                    <div className='flex'>
                        <div className='w-3/12 p-3 pl-0'>
                            <PortfolioImg src={PaypalImage} alt='Wildtangent Vaulted Payment' />
                        </div>
                        <div className="w-9/12 p-3 pt-0">
                        <h4 className='projectHeader py-2'>Wildtangent – Vaulted Payments</h4>
                        <p className="paragraph">Engineered and launched PayPal Vaulted Payments, transforming the membership subscription model. This project provided users with a seamless, secure recurring payment experience, while simultaneously reducing PCI compliance scope and improving payment reliability and retention for the business.</p>
                        </div>

                    </div>
                    <div className='flex'>
                        <div className='w-3/12 p-3 pl-0'>
                            <PortfolioImg src='https://placehold.co/256x144' alt='placeholder' />
                        </div>
                        <div className="w-9/12 p-3 pt-0">
                        <h4 className='projectHeader py-2'>Wildtangent – Vaulted Payments</h4>
                        <p className="paragraph">Engineered and launched PayPal Vaulted Payments, transforming the membership subscription model. This project provided users with a seamless, secure recurring payment experience, while simultaneously reducing PCI compliance scope and improving payment reliability and retention for the business.</p>
                        </div>

                    </div>

                </section>


            </div>
        )        
    }
}

export default WebProjectsComponent;