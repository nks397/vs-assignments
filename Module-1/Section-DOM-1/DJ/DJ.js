const black = document.getElementById("black");

black.addEventListener("mouseover", function() {
    black.style.backgroundColor= "blue"
    });

black.addEventListener("mousedown", function() {
    black.style.backgroundColor= "red"
    });

black.addEventListener("mouseup", function() {
    black.style.backgroundColor= "yellow"
    });

black.addEventListener("dblclick", function() {
    black.style.backgroundColor= "green"
    });

black.addEventListener("scroll", function() {
    black.style.backgroundColor= "orange"
    });
    

window.addEventListener("keydown", colorChange);

    function colorChange(e) {
    if (e.keyCode === 98) {
        black.style.backgroundColor= "blue"
    }
    else if (e.keyCode === 82) {
        black.style.backgroundColor= "red" 
    }
    else if (e.keyCode === 89) {
        black.style.backgroundColor= "yellow"
    }
    else if (e.keyCode === 71) {
        black.style.backgroundColor= "green"
    }
    else if (e.keyCode === 79) {
        black.style.backgroundColor= "orange"
    }
}
