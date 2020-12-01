/**Create and link a JavaScript file. Create a function named “main”. The HTML is already set up to
call this function when the “Action!!!” button is clicked.
Within the main function:
● Get the text that the user enters into the "name" input box and use it to set a welcome
message in the <h1>, e.g., "Hello Grant!".
Test it by clicking the Action!!! button. */

function main(){
    //Add the "big" class to the "grow-me" paragraph.
    let growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    //Remove the "big" class to the "shrink-me" paragraph.
    let shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    //Find all the <li>s and log their text content to the console.
    let lists = document.querySelectorAll("li");
    for (list of lists){
        console.log(list.innerText);
    }

    /**Set the href of the link to "https://www.example.com" and update the text to say
"somewhere" instead of "nowhere". */
    let link = document.querySelector(".link");
    link.setAttribute("href", "https://www.example.com");
    link.innerText = "somewhere"

    //Set the "display" CSS property of the "hide-me" paragraph to "none".
    let hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";

    //Set the "display" CSS property of the "show-me" paragraph to "block".
    let showMe = document.getElementById("show-me");
    showMe.style.display = "block";

    /**Get the text that the user enters into the "name" input box and use it to set a welcome
message in the <h1>, e.g., "Hello Grant!". */
    let name = document.getElementById("name").value;
    let welcomeMessage = document.querySelector("h1");
    welcomeMessage.innerText = `Welcome ${name}`;

}   