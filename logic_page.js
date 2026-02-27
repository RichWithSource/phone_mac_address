function button_click() {
    const name = document.getElementById("txtbox");
    if(name == " " || name == null){
        alert('Error please enter your name')
    }
    else {
        button_clicked(name);
    }
    
}

function button_clicked(a) {
    alert(a);
}

