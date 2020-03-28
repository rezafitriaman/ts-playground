// Contextual Typing #

window.onmousedown = function (mouseEvent: MouseEvent) {
    console.log(mouseEvent.button);
    //console.log(mouseEvent.kangaroo)
};

/*window.onscroll = function (uiEvent : UIEvent) {
    console.log(uiEvent.detail)
};*/

const handler = function(uiEvent: UIEvent) {
    console.log(uiEvent.detail)
};

