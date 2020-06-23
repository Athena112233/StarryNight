function init(){
    var darkplanet1 = document.getElementById('darkplanet1');
    var darkplanet2 = document.getElementById('darkplanet2');
    var darkplanet3 = document.getElementById('darkplanet3');
    var darkplanet4 = document.getElementById('darkplanet4');
    var brightplanet1 = document.getElementById('brightplanet1');
    var brightplanet2 = document.getElementById('brightplanet2');
    var brightplanet3 = document.getElementById('brightplanet3');
    
    darkplanet1.addEventListener("click", displayCard);
    darkplanet2.addEventListener('click', displayCard);
    darkplanet3.addEventListener('click', displayCard);
    darkplanet4.addEventListener('click', displayCard);
    brightplanet1.addEventListener('click', displayCard);
    brightplanet2.addEventListener('click', displayCard);
    brightplanet3.addEventListener('click', displayCard);

    darkplanet1.addEventListener('touchend', displayCard);
    darkplanet2.addEventListener('touchend', displayCard);
    darkplanet3.addEventListener('touchend', displayCard);
    darkplanet4.addEventListener('touchend', displayCard);
    brightplanet1.addEventListener('touchend', displayCard);
    brightplanet2.addEventListener('touchend', displayCard);
    brightplanet3.addEventListener('touchend', displayCard);
}

function displayCard(){
    var planets = document.getElementsByClassName('planet');
    var num = planets.length;
    console.log(num);

    for(var i = 0; i < num; i++){
        planets[i].style.visibility = 'hidden';
    }
}