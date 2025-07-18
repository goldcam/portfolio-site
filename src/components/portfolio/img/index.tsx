import { PureComponent, ReactNode, } from 'react';

export interface PortfolioImgProps {
    src: string;
    alt: string;
}


export class PortfolioImg extends PureComponent<PortfolioImgProps, {}> {    

    render(): ReactNode {
        const {src,alt} = this.props;
        return (
                <img src={src}
                     alt={alt} />
        )        
    }
}

export default PortfolioImg;


//  <img src='https://placehold.co/200x48'
//                      alt='placeholder' />