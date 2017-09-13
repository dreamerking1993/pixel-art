$('#sizePicker').on('submit', function() {
    makegrid();
    return false;
});

function makegrid() {

    $('button').on('click', function() {
        $('.grid table').html('');
        const rows = $('input[name="row"]').val(),
            cols = $('input[name="column"]').val();
        let i = 0;
        while (i < rows) {
            $('.grid table').append('<tr></tr>');
            i = i + 1;
        }
        for (t = 0; t < cols; t++) {
            $('.grid table tr').each(function() {
                $(this).append('<td>&nbsp;</td>');
                $('#data tr td').on('click', function() {
                    $(this).css('background', $('#colorPicker').val());
                });

            });
        }
    });
}