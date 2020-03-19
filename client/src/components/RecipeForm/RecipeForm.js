import React, { Component } from 'react';
import './RecipeForm.scss';

export default class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false,
            src: '',
            title: '',
            postData: false
        }
        this.showMessage = this.showMessage.bind(this);
        this.showMessageAndSendData = this.showMessageAndSendData.bind(this);
        this.sendData = this.sendData.bind(this);
        this.getData = this.getData.bind(this);
    }

    // This method display a success message when the submit button has been clicked 
    showMessage() {
        this.setState({
            showMe: true
        });
        setTimeout(() => {
            this.setState({
                showMe: false
            });
        }, 1500);
        
    }

    // This method runs both the showMessage and sendData method when the submit button is clicked
    showMessageAndSendData(){
        this.showMessage();
        setTimeout(() => {this.sendData();}, 1000);
    }

    /*
        This method takes the image before the form data is sent to the database, 
        it turns the image to a base64 text and saves it in the state.
        I need to do a post request and save the image within the collection.
        Do a fetch request and save the data inside the state, then display it.
    */
   getData(files) {
        let file = document.getElementById('form-image').files[0];
        if(file) {
            let reader = new FileReader();
            reader.onload = ((theFile) => {
            return (e) => { 
                this.setState({src : e.target.result});                
            }; 
            })(file);
            reader.readAsDataURL(file);
            console.log(this.state.src);
            this.setState({ postData: true });
        }
        else {
            let { postData } = this.state;
            if (postData) return;
            else {
                alert("No file selected. Please upload an image or a placeholder will be used instead.");
                let question = prompt('Would you like to upload an image? if so then enter YES else enter NO.');

                if (question.toLowerCase() === 'yes') {
                    return;
                } else {
                    this.setState({src: "https://via.placeholder.com/150x150"});
                    this.setState({ postData: true });
                }
            }
        }
    }

    // This method does a Post request with the data entered
    async sendData() {
        let { postData } = this.state;

        if (postData) {
            // This object contains all the data entered including the image as base64
            let obj = {
                title: document.getElementById('form-title').value,
                image: this.state.src,
                duration: document.getElementById('form-duration').value,
                steps: document.getElementById('form-steps').value,
                rating: document.getElementById('form-rating').value
            };

            this.props.getNewRecipe(obj);

            // Reset input fields and the image src within the state
            document.getElementById('form-title').value = '';
            this.setState({ src: '' });
            document.getElementById('form-duration').value = '';
            document.getElementById('form-steps').value = '';
            document.getElementById('form-rating').value = '';
            document.getElementById('form-image').value = '';

            
            // Send the data
            // Live server
            fetch('localhost:3000/upload', {
                method: 'post',
                redirect: 'follow',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // Turn the object to json
                body: JSON.stringify({
                    title: obj.title,
                    image: obj.image,
                    duration: obj.duration,
                    steps: obj.steps,
                    rating: obj.rating
                })
            })
            .then((res) => {
                // A message to let me know that the data has been sent
                console.log('Data sent!');       
            });
        }
    }

    render() {
        const { showMe } = this.state;
        return (
            <div id = 'recipes-right'>
                <div id = 'recipes-form-holder'>
                    <form >
                        <input id = 'form-title' type = 'text' placeholder = 'Enter the title' name = 'title' autoComplete = 'off' />
                        <input id = 'form-image' type = 'file' placeholder = 'Upload an image' name = 'image' />
                        <input id = 'form-duration' type = 'text' placeholder = 'Enter the duration' name = 'duration' autoComplete = 'off'/>
                        <textarea id = 'form-steps' placeholder = 'Enter steps...' name = 'steps'></textarea>
                        <input id = 'form-rating' type = 'text' placeholder = 'Enter the difficulty between 0-5' name = 'rating' />
                        <input id = 'form-button' type = 'button' value = 'Submit' onClick = {this.showMessageAndSendData} onMouseEnter={this.getData} />
                    </form>
                    {
                        showMe ? 
                            <div id = 'message'>
                                <h3>Recipe successfully added!</h3>
                            </div> 
                            :null
                    }
                </div>
            </div>
        );
    }
};