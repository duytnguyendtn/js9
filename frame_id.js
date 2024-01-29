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

let frontendID = "JS9-" + frameID
var elements = ["", "Menubar", "Toolbar", "Statusbar"];
for (var elem of elements ) {
    document.getElementById('JS9' + elem).setAttribute("id", frontendID + elem);
}