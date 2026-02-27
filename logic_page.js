
//const uuid = crypto.randomUUID()
//window.alert(uuid)
function button_click(name) {
    const uuid = crypto.randomUUID()
    if(name.value == "Name"){
        name.value = "Error please enter your name"
        window.alert(name.value)
    }

    else {
        window.alert(name.value + " -- " + uuid);
    }
    
}




