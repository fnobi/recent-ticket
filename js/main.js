var log = document.getElementById('log');

chrome.history.search({
    text: 'redmine'
}, function (results) {
    results.forEach(function (result) {
        log.innerHTML += [
            '<li><a target="_blank" href="', result.url , '">',result.title, '</a></li>'
        ].join('');
    });
});
