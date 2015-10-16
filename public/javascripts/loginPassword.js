$(function(){
  $('.hide-show').show();
  $('.hide-show span').addClass('show password')
  
  $('.hide-show span').click(function(){
    if( $(this).hasClass('show password') ) {
      $(this).text('Hide Password');
      $('input[name="password"]').attr('type','text');
      $(this).removeClass('show password');
    } else {
       $(this).text('Show Password');
       $('input[name="password"]').attr('type','password');
       $(this).addClass('show password');
    }
  });
  
  $('form button[type="submit"]').on('click', function(){
    $('.hide-show span').text('Show Password').addClass('show password');
    $('.hide-show').parent().find('input[name="password"]').attr('type','password');
  }); 
});