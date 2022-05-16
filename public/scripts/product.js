$(document).ready(function() {
    $('.gallery').slick();
    $('.options select').select2({
        width: 'resolve'
    });
});

$('#addToCart').on('click', function() {
    var id = $('.options select').val();
    const data = {
      quantity: 1,
      id: id
    };
    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data,
        dataType: 'json',
        success: () => {
            $('#addToCart').prop("disabled",true);
            $('#addToCart').css("color", "#aaa");
            $('.success-message').fadeIn();
            setTimeout(() => {
                $('#addToCart').prop("disabled",false);
                $('#addToCart').css("color", "#fff");
                $('.success-message').fadeOut();
            }, "1000")
        }
    });
});