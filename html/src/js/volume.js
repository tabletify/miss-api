function set(elementID, volume){
    var doc = document.getElementById(elementID);
    doc.volume = volume; 
}

set('audio', 0.2)