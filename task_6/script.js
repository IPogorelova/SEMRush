$( document ).ready(function() {

    var textFilters = [{value: 'containing', text: 'Containing'}, {value: 'exactlyMatching', text: 'Exactly matching'}, {value: 'beginsWith', text: 'Begins with'}, {value: 'endsWith', text: 'Ends with'}]
    var numberFilters = [{value: 'equal', text: 'Equal'}, {value: 'greaterThan', text: 'Greater than'}, {value: 'lessThan', text: 'Less than'}]

    function addOptions(options, operationField){
        operationField.find('option').remove();
        $.each(options, function (i, item) {
            operationField.append($('<option>', {
                value: item.value,
                text : item.text
            }));
        });
    }

    addOptions(textFilters, $(".filterOperation"));



    $('body').on('change', '.fieldType', function() {
        var operationField = $(this).siblings(".filterOperation");

        if ($(this).val() === 'textField') {
            addOptions(textFilters, operationField);
            $(this).siblings(".option").attr('type', 'text').val('');
        }
        else {
            addOptions(numberFilters, operationField);
            console.log($(this).siblings(".option"));
            $(this).siblings(".option").attr('type', 'number').val('');
        }
    })

    $('body').on('click', '.removeFilter',  function() {
        if ($('.condition-box').length > 1) {
            $(this).parent().remove();
        }
        else {
            $(this).attr('disabled', 'disabled');
        }
    });

    $('body').on('click', '#addCondition', function() {
        $('.search-conditions').append('<div class="condition-box">\n' +
            '            <select name="fieldType" class="fieldType">\n' +
            '                <option value="textField" selected>Text field</option>\n' +
            '                <option value="numberField">Number field</option>\n' +
            '            </select>\n' +
            '            <select name="filterOperation" class="filterOperation">\n' +
            '                <option value="containing" selected>Containing</option>\n' +
            '                <option value="exactlyMatching">Exactly matching</option>\n' +
            '                <option value="beginsWith">Begins with</option>\n' +
            '                <option value="endsWith">Ends with</option>\n' +
            '            </select>\n' +
            '            <input name="option" type="text" class="option">\n' +
            '            <button class="removeFilter">X</button>\n' +
            '        </div>');
    })

    $('#clear').on('click', function() {
        var optionBoxes = $('.condition-box');
        $.each(optionBoxes, function (i, item) {
            if ($('.condition-box').length > 1) {
                item.remove();
            }
        })
        $(".fieldType").value = 'textField';
        $(".filterOperation").value = 'containing';
        addOptions(textFilters, $(".filterOperation"));
        $(".option").value = '';
    });


    $('#apply').on('click', function(event) {
        event.preventDefault();
        console.log(JSON.stringify($('#search-form').serializeArray()))
    })

});
