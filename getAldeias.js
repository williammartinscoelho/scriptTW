

javascript: $(document).ready(function () {
    var list = $('tr.nowrap');

    var str = "";
    
    $(list).each(function (i) {
        var span = $(this).find('span.quickedit-label').text().trim();
        span = span.slice(15, 22);
    
        str += "\n" + span
    });
    
    console.log(str)
});