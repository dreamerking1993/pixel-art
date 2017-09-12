$('button').on('click', function() {
    $('.grid table').html('');
    var rows = $('input[name="row"]').val(),
      cols = $('input[name="column"]').val();
    for (i = 0; i < rows; i++) {
      $('.grid table').append('<tr></tr>')
    }
    for (t = 0; t < cols; t++) {
      $('.grid table tr').each(function() {
        $(this).append('<td>&nbsp;</td>')
        $('#data tr td').on('click', function() {
        $(this).css('background', $('#colorPicker').val());
        });

      })
    }
  })



    

    
