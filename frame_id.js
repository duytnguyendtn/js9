function randID(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let params = new URLSearchParams(document.location.search)
let frameID = params.get("frameid") || randID(4)
alert("FrameID: " + frameID)

let frontendID = "JS9-" + frameID
var elements = ["", "Menubar", "Toolbar", "Statusbar"];
for (var elem of elements ) {
    document.getElementById('JS9' + elem).setAttribute("id", frontendID + elem);
}




/*
{% if jid %}
var id = "JS9-{{jid}}";
{% else %}
var id = "JS9-"+randID(8);
{% endif %}


var elements = ["", "Menubar", "Toolbar", "Statusbar"];
for (var elem of elements ) {
    document.getElementById('JS9' + elem).setAttribute("id", id + elem);
}

console.log(document.getElementsByClassName('JS9')[0].id)
console.log(id);
*/