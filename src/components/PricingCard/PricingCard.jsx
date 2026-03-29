import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-700 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-500 rounded-2xl p-4 mt-10 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature 
                    key={index}
                    feature={feature}
                    ></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;