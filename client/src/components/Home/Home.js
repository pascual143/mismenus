import React from 'react';
import './Home.scss';
import  Salmon from '../../images/Salmon.jpg';

const Home = () => {
    return (
        <div>
            <div id='title'>
                <h1>Bienvenido a mis Recetas</h1>
            </div>
            <div id='img-holder'>
                <img id='salmon' alt='Salmon dish' src={Salmon} />
                <p>Here is a perfect cooked salmon.</p>
            </div>
        </div>
    )
}

export default Home;