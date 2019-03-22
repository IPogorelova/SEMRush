$( document ).ready(function() {

    var searchField = $("#fieldType");
    var operationField = $("#filterOperation");
    var optionInput = $("#option")

    var textFilters = [{value: 'containing', text: 'Containing'}, {value: 'exactlyMatching', text: 'Exactly matching'}, {value: 'beginsWith', text: 'Begins with'}, {value: 'endsWith', text: 'Ends with'}]
    var numberFilters = [{value: 'equal', text: 'Equal'}, {value: 'greaterThan', text: 'Greater than'}, {value: 'lessThan', text: 'Less than'}]

    function addOptions(options){
        $(operationField).find('option').remove();
        $.each(options, function (i, item) {
            $(operationField).append($('<option>', {
                value: item.value,
                text : item.text
            }));
        });
    }


    addOptions(textFilters);

    searchField.change(function() {
        if (searchField.val() === 'textField') {
            addOptions(textFilters);
            optionInput.attr('type', 'text').val('');
        }
        else {
            addOptions(numberFilters);
            optionInput.attr('type', 'number').val('');
        }
    })

});