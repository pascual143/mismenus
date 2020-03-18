import React, { Component } from 'react';
import './Recipes.scss';
// import { Link } from 'react-router-dom';
// import axios from 'axios';



class Recipes extends Component {
    constructor() {
        super();
        
    }

    render() {
        // const { recipes, loading} = this.state;
        return (
            <div>
                <div id='recipes-title'>
                    <h1>Mis Menus!</h1>
                </div>
                <div id='recipes-para'>
                    <p>Ver y anadir nuevas recetas</p>
                </div>
                <div id='recipes-container'>
                    <div id='recipes-left'>
                        <div id='recipes-list-=titles'>
                            <h4>Recetas</h4>
                        </div>
                    </div>
                    <div id='recipes-list-container'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipes;