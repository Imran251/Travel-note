$('.btnDelete' ).click(function(e) {
  e.preventDefault();
  id = e.currentTarget.value;
  $.ajax({
      url: '/travels/'+id,
      type: 'DELETE',
      success: function(result){window.location.reload();},
      error: function(result){alert("error");}
  });

  function success(result) {

  }
});
