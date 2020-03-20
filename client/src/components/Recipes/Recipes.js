import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import RecipeForm from '../RecipeForm/RecipeForm';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Recipes.scss';

class Recipes extends Component {
    constructor(){
        super();
        this.state = {
            recipes: [],
            loading: true,
        };
        this.fetchAllRecipes = this.fetchAllRecipes.bind(this);
        this.getNewRecipe = this.getNewRecipe.bind(this);
    }

    async fetchAllRecipes(endpoint) {
        let result = await Axios.get(endpoint);
        this.setState( { recipes: result.data.recipes, loading: false }, () => console.log('Recipes fetched...', result.data.recipes[1]) )
    } 

    // This method will be passed on to the RecipeForm component
    // From within the RecipeForm component each newly added recipe object will be passed to the method
    // The new recipe will be received and added to the array of recipes and displayed
    getNewRecipe (recipe) {
        this.setState({ recipes: [...this.state.recipes, recipe] });
    }

    componentDidMount() {
        // Local server
        // this.fetchAllRecipes('http://localhost:5000/api/recipes');
        // Live server
        this.fetchAllRecipes('http://mismenuspascual.heroku.com/api/recipes');
    }



    render() {
        const { recipes, loading } = this.state;
        return (
            <div>
                <div id = 'recipes-title'>
                    <h1>My Recipes!</h1>
                </div>
                <div id = 'recipes-para'>
                    <p>View and add new recipes.</p>
                </div>
                <div id = 'recipes-container'>
                    <div id = 'recipes-left'>
                        <div id = 'recipes-list-title'>
                            <h4>Recipes</h4>
                        </div>
                        <div id = 'recipes-list-container'>
                            { loading ? 
                                <Spinner />   
                                :
                                <ul>
                                    {  
                                        recipes.map(recipe =>  <Link key = {recipe._id} to={{ pathname: `/${recipe._id}`, singleRecipe: `${JSON.stringify(recipe)}` }} style={{ textDecoration: 'none' }}><li className='recipe-item' value={recipe.title} onClick = {this.fetchRecipe}>{recipe.title}</li></Link>)
                                    }
                                </ul>
                            }
                        </div>
                    </div>
                    <RecipeForm getNewRecipe={this.getNewRecipe} />
                </div>
            </div>
        );
    }
}


export default Recipes;