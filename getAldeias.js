var list = $('tr.nowrap');

$(list).each(function (i) {
    var span = $(this).find('span.quickedit-label').text().trim();
    span = span.slice(15,22);
    console.log(span);
});