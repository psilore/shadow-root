// main.js
var afterburner = (function() {
    "use strict"

    var init = function () {
        var hydraElement = $("hydra-claw");
        var positionOfElement = hydraElement[0].attributes[0].value;
        
        switch(positionOfElement) {
            case 'top-left':
                $("#topLeft").prop("checked", true);
                break;
            case 'top-right':
                $("#topRight").prop("checked", true);
                break;
            case 'bottom-left':
                $("#bottomLeft").prop("checked", true);
                break;
            case 'bottom-right':
                $("#bottomRight").prop("checked", true);
                break;
        }  
        $("#topLeft").click(function() {
            hydraElement[0].attributes[0].value = 'top-left';
            $("#topLeft").prop("checked", true);
            $("#topRight").prop("checked", false);
            $("#bottomLeft").prop("checked", false);
            $("#bottomRight").prop("checked", false);
        });

        $("#topRight").click(function() {
            hydraElement[0].attributes[0].value = 'top-right';
            $("#topRight").prop("checked", true);
            $("#topLeft").prop("checked", false);
            $("#bottomLeft").prop("checked", false);
            $("#bottomRight").prop("checked", false);
        });

        $("#bottomLeft").click(function() {
            
            hydraElement[0].attributes[0].value = 'bottom-left';
            $("#bottomLeft").prop("checked", true);
            $("#topLeft").prop("checked", false);
            $("#topRight").prop("checked", false);
            $("#bottomRight").prop("checked", false);
        });

        $("#bottomRight").click(function() {
            
            hydraElement[0].attributes[0].value = 'bottom-right';
            $("#bottomRight").prop("checked", true);
            $("#topLeft").prop("checked", false);
            $("#topRight").prop("checked", false);
            $("#bottomLeft").prop("checked", false);
        });

        console.log(positionOfElement);
        var controlBox = $(".control-box");
        $(".control-box-button").click(function() {
            if (controlBox.hasClass( "closed" )) {
                controlBox.removeClass('closed');
                controlBox.addClass( 'open' );
              } else {
                controlBox.removeClass('open');
                controlBox.addClass( 'closed' );
            }
        });
    };
    
    return {
        init: init
    };

})();
 
$("document").ready(function () {
    afterburner.init();
});