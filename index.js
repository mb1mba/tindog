import { dogsData }  from "./data.js";
import { Dogs } from './Dog.js'

let dogsArray = ["rex", "bella", "teddy"]

// Take first element of dogsArray and link it with dogsData to get data about the dog

function getNewDog(){
    let nextDogData = dogsData[dogsArray.shift()]
    return nextDogData ? new Dogs(nextDogData) : {}
}

let isClickable = true 

// Reassign dog value by the next first element of dogsArray only if array.length > 0. And we render it

function newDog(){
    if(isClickable){
        if(dogsArray.length > 0){{
            isClickable = false
                dog = getNewDog()
                setTimeout(()=>{
                    render()
                    isClickable = true
                }, 1500)
            }
        }
    }
}

// showBage function will be call when button is clicked to show if the profil have been liked or disliked
function showBadge(badgeId){
    document.getElementById(badgeId.style.display = "flex")
}

function handleBadge(hasBeenLiked){
        // We set isClickable value to true so buttons will be clickable once the function is called
        isClickable = true
        // if dog.HasBeenLiked then run showBadge(likeBadge) else run showBadge(nopeBadge)
        showBadge(hasBeenLiked ? likeBadge : nopeBadge);
        // We call function newDog so the next first element of dogsArray can appear
        newDog()
}

function handleButton(e){
    if(isClickable && e.target.id === "likeBtn"){
            // We set isClickable value to false so the button is no longer clickable
            isClickable = false
            // When user click on like button the dog profil is liked and swiped so we set both proprieties to true
            dog.hasBeenLiked = true
            handleBadge(dog.hasBeenLiked)
            // We call newDog function so each time we click on like button, the next dog will appear 
        }

    // We target nope Button
    if(isClickable && e.target.id === "nopeBtn"){
            // We set isClickable value to false so the button is no longer clickable
            isClickable = false
            // When user click on nope button the dog profil isn't liked but profil is always swiped so we set hasBeenLiked to false and hasBeenSwiped to true
            dog.hasBeenLiked = false
            handleBadge(dog.hasBeenLiked = false)
        } 
        
        // If the array is empty, buttons aren't clickable
    if(dogsArray.length === 0){
        isClickable = false
    }
}

document.querySelector('#likeBtn').addEventListener('click', handleButton)
document.querySelector('#nopeBtn').addEventListener('click', handleButton)

// Render HTML

function render(){
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

let dog = getNewDog()

render()