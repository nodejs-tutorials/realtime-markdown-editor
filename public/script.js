/**
 * Created by nnduc on 8/15/15.
 */
window.onload = function () {
    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');

    var convertTextAreaToMarkdown = function () {
        var markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();
};