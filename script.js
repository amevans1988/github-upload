// JavaScript lol
var nameInput, storyInput;

var storyDefault = `document.getElementById('innerStories').innerHTML`;

const testFunc = () => {
    alert('I\'m the only one who touches the box')
}

const addStory = () => {
    event.preventDefault();
    var nameInput = (document.querySelector("#textForm > fieldset > input[type=text]:nth-child(2)").value);
    var storyInput = (document.querySelector("#textForm > fieldset > input[type=text]:nth-child(4)").value);
    // clearFields();
    return addToStory(nameInput, storyInput)
}

const addToStory = (nameInput, storyInput) => {
    if (storyDefault === `document.getElementById('innerStories').innerHTML`) {
        newStory = `${nameInput} ${storyInput}`;
        document.getElementById('innerStories').innerHTML = newStory;
    } else {
        // storyDefault = `<h5><i>This story was submitted by ${nameInput}</i></h5><br>${storyInput}`
        console.log('2nd test')
    }
}
