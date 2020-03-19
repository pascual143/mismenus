import React from 'react';
import './Recipe.scss';

const Recipe = (props) => {
    let recipe = JSON.parse(props.location.singleRecipe);
    console.log('Single recipe', props.location.singleRecipe);
    console.log(props);
    // Take the recipe rating and find its percentage value.
    const starPercentage = (recipe.rating / 5) * 100;
    // Round up the percentage value and add the percentage symbol to the value.
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    return (
        <div>
            <div id = "recipe-preview-container">
                <h2 className='recipe-title'>{recipe.title}</h2>
                <div className='clear-title'></div>
                <img alt = {recipe.title} src = {recipe.image} />
                <p className='recipe-info'>Duration:</p>
                <p className='recipe-content'>{recipe.duration}</p>
                <p className='recipe-info'>Steps:</p>
                <p className='recipe-content recipe-steps'>{recipe.steps}</p>
                <p className='recipe-info'>Difficulty:</p>
                <div id="stars-outer" style={{ display: 'inline-block' }}>
                    <div id="stars-inner" style={{ width: `${starPercentageRounded}` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;