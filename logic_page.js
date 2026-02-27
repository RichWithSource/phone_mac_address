//const uuid = crypto.randomUUID()
//window.alert(uuid)

function button_click() {
    const name = document.getElementById("txtbox");
    if(name.innerText == " " || name.innerText == null){
        window.alert("Error please enter your name")
    }
    else {
        button_clicked(name.innerText);
    }
    
}

function button_clicked(a) {
    window.alert(a);
}

