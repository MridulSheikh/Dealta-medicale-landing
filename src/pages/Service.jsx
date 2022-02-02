import React from 'react';
import OnlineService from '../components/service/OnlineService';
import OurSpatiality from '../components/service/OurSpatiality';
import ServiceBanner from '../components/service/ServiceBanner';

const Service = () => {
    return (
        <div className='pb-10'>
            <ServiceBanner />
            <OnlineService />
            <OurSpatiality />
        </div>
    );
};

export default Service;