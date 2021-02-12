$(document).ready(function () {
    $(`.header-burger`).click(function (event) {
        $(`.header-burger,.navbartop`).toggleClass(`active`);
        /*при нажатии эти классы становятся активные при 
        следующем нажатии обратно это тогглекласс делает*/
        $(`body`).toggleClass(`lock`);
        /* добавляем условие боду что при нажатии 
         (тоглекласс) боди блокируется т.е. не прокручивается
         не скролиться (лок) */
    });
}); 