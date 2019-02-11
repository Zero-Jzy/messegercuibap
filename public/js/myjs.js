
function deleteProduct(id){
    $.ajax({
        url: 'https://appcuatuine.herokuapp.com/products/' + id,
        type: 'DELETE',
        data: {"_id" : id},
        success: function(response){
            alert('Success.');
            location.href = '/products';
        },
        error: function(response, message){
            alert('Error. ' + message );
            location.href = '/products';
            console.log(response);
        }
    });
}

$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('.header').css({'opacity': '.9',  'transition': ' 1s'}).addClass('z-depth-1');
    }else{
        $('.header').css({'opacity': '1',  'transition': '.2s'}).removeClass('z-depth-1');
    }
});
