const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent (markdownContent){

    const turndownService = new TurndownService();
    //1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    console.log ("converted html", convertedHtml);
    //2. Sanitizie html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags
    })

    console.log("sanitized html", sanitizedHtml);

    //3. convert the santized html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    console.log("sanitized Markdown", sanitizedMarkdown);


    return sanitizedMarkdown
}


module.exports = sanitizeMarkdownContent;