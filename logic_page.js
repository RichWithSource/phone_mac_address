function button_click() {
    const name = document.getElementById("txtbox");
    if(name.textContent == " " || name.textContent == null){
        window.alert("Error please enter your name")
    }
    else {
        button_clicked(name.textContent);
    }
    
}

function button_clicked(a) {
    window.alert(a);
}

