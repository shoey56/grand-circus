document.querySelectorAll('a').forEach( a=> {
    a.addEventListener('click',  function(event) {
    console.log('Clicked');
    event.preventDefault();
    }
    )});

//Click hamburger button
document.getElementById("hamburger").addEventListener("click", openMenu)
function openMenu(){
    document.getElementById("nav").classList.toggle("nav-showing");

}

//Click on Numbers in Nav
document.getElementById("numbers-link").addEventListener("click", showNumbers)
function showNumbers(){
    if (document.getElementById("numbers").classList.contains("hidden")){
    document.getElementById("numbers").classList.toggle("hidden");
    document.getElementById("letters").classList.toggle("hidden");
    }
    openMenu();

}

//Click on Letters in Nav
document.getElementById("letters-link").addEventListener("click", showLetters)
function showLetters(){
    if (document.getElementById("letters").classList.contains("hidden")){
    document.getElementById("numbers").classList.toggle("hidden");
    document.getElementById("letters").classList.toggle("hidden");
    }
    openMenu();
}
