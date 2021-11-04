import React from 'react';
import LibraryCard from '../LibraryCard/LibraryCard';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <LibraryCard></LibraryCard>
        </div>
    );
};

export default Home;