$(document).ready(function() {
    var options = {
        strings: ["Hello user!", "Welcome to", "miss-api.xyz", "Lets go start!"],
        typeSpeed: 70, // скорость набора текста
        backSpeed: 100, // скорость удаления текста

        startDelay: 50, // изначальная задержка перед набором
        loop: false, // повтор?
        showCursor: true, // показывать курсор

        backDelay: 500, // пауза перед удалением текста

        callback: function(){ }
    }

    var typed = new Typed("#typing", options);
});