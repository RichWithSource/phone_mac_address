function button_click() {
    const name = document.getElementById("txtbox").textContent;
    if(name == " " || name == null){
        window.alert('Error please enter your name')
    }
    else {
        button_clicked(name);
    }
    
}

function button_clicked(a) {
    window.alert(a);
}

