$( document ).ready(function() {
    console.log( "ready!" );
    
    $("#button").click(function () {
        $('#title').addClass('blue');
        });
        
        $('#remove').click(function () {
        $('#title').removeClass('blue');
        })
        
        setTimeout(function () {
        $('#title').addClass('blue');
        }, 2000);
        
})