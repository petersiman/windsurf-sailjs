$(function(){
  $('#js-sold-btn').on('click', function(e){
    e.preventDefault();
    var advertId = $(e.target).data('advert-id');
    console.log('click');
    $.get('/advert/sold/' + advertId, function(result){
      if (result && result.success){
        console.log('Sold!')
      }
    });
  });

  $('#js-delete-btn').on('click', function(e){
    e.preventDefault();
    var advertId = $(e.target).data('advert-id');
    console.log('click');
    $.get('/advert/delete/' + advertId, function(result){
      if (result && result.success){
        console.log('Deleted!')
      }
    });
  });

  $('#js-contact-user-btn').on('click', function(e){
    e.preventDefault();
    var form = $('#js-contact-user-form');
    if (form.hasClass('hidden')){
      form.removeClass('hidden');
    } else {
      form.addClass('hidden');
    }
  });
    
    $('#js-user-profile-tabs').tab;
    
    $('#js-user-profile-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })  
});
