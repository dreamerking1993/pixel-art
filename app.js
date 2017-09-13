$('#sizePicker').on('submit', function() {
    makegrid();
    return false;
});

function makegrid() {

        $('#pixel_canvas').html('');
        const rows = $('#input_height').val(),
            cols = $('#input_width').val();
        let i = 0;
        while (i < rows) {
            $('#pixel_canvas').append('<tr></tr>');
            i = i + 1;
        }
        for (t = 0; t < cols; t++) {
            $('#pixel_canvas tr').each(function() {
                $(this).append('<td>&nbsp;</td>');
                $('#pixel_canvas tr td').on('click', function() {
                    $(this).css('background', $('#colorPicker').val());
                });

            });
        }
}