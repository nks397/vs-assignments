const blackBtn = document.getElementById("black");

blackBtn.addEventListener("mouseover", function() {
    blackBtn.style.backgroundColor= "blue"
    });

blackBtn.addEventListener("mousedown", function() {
    blackBtn.style.backgroundColor= "red"
    });

blackBtn.addEventListener("mouseup", function() {
    blackBtn.style.backgroundColor= "yellow"
    });

blackBtn.addEventListener("dblclick", function() {
    blackBtn.style.backgroundColor= "green"
    });

blackBtn.addEventListener("scroll", function() {
    blackBtn.style.backgroundColor= "orange"
    });
    

window.addEventListener("keydown", colorChange);

    function colorChange(e) {
    if (e.keyCode === 66) {
        blackBtn.style.backgroundColor= "blue"
    }
    else if (e.keyCode === 82) {
        blackBtn.style.backgroundColor= "red" 
    }
    else if (e.keyCode === 89) {
        blackBtn.style.backgroundColor= "yellow"
    }
    else if (e.keyCode === 71) {
        blackBtn.style.backgroundColor= "green"
    }
    else if (e.keyCode === 79) {
        blackBtn.style.backgroundColor= "orange"
    }
}
