import React from 'react';
import PlantCard from './PlantCard';

const TopPlants = ({plants}) => {

    const topPlants = plants.filter(plant => plant.rating >= 4.7)
    console.log(topPlants);
    
    return (
        <div className='mx-10'>
            <h1 className='text-center text-4xl font-bold my-10 text-green-500'>Top Rated Plants</h1>    
            <div className='grid sm:grid-cols-4 gap-5 '>
                {
                    topPlants.map(plant => <PlantCard plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default TopPlants;