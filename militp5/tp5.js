$(document).ready(function () {

    $('.input').keyup(function () {
        $('#span').text($(".input").val());

        localStorage.setItem('input', ($(".input").val()))
    });

    var spanContent = localStorage.getItem('input')

    $('#span').text(spanContent);

    $('.input').val(spanContent);

});