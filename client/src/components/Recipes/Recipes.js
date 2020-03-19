import React, { Component } from 'react';
import './Recipes.scss';
import { Link } from 'react-router-dom';
// import axios from 'axios';



class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            loading: true,
        };
    }

    render() {
        const { recipes, loading } = this.state;
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
                        <ul>
                            {  
                                recipes.map(recipe =>  <Link key = {recipe._id} to={{ pathname: `/${recipe._id}`, singleRecipe: `${JSON.stringify(recipe)}` }} style={{ textDecoration: 'none' }}><li className='recipe-item' value={recipe.title} onClick = {this.fetchRecipe}>{recipe.title}</li></Link>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipes;