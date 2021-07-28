module.exports  = function(lines) {
    let html = '';
    for (let i = 0; i < lines.length; i++) {
        const res =  lineToHtml(lines, i);
        i = res.i;
        html += res.html;
    }

    return html;
}

function lineToHtml(lines, i) {
    const line = lines[i];
    let html = '';

    //check for header tags
    if(line.charAt(0) === '#') return {html: createHTag(line), i};

    //check if empty line or paragraph lines
    if (line === '') {
        html += '\n';
    } else {
        const res = createPTag(lines, i);
        html += res.html;
        i = res.i;
    }

    return {html, i};
}

function textToATag(text, i) {
    let linkText = '';
    let link = '';
    let aTag = '';
    let replaceableStr = '';

    for (; i < text.length; i++) {
        if (text.charAt(i) === '[') {
            replaceableStr += text.charAt(i);
            i++;

            while (text.charAt(i) !== ']') {
                replaceableStr += text.charAt(i);
                if(!/[^a-zA-Z0-9 ]/.test(text.charAt(i))) linkText += text.charAt(i); //currently not accepting special chars
                i++;
            }
            replaceableStr += text.charAt(i);
        }
        if (text.charAt(i) === '(' && text.charAt(i-1) === ']') {
            replaceableStr += text.charAt(i);
            i++;

            while (text.charAt(i) !== ')') {
                replaceableStr += text.charAt(i);
                link += text.charAt(i); //not validating url
                i++;
            }

            replaceableStr += text.charAt(i);

            if (text.charAt(i) === ')') {
                aTag = `<a href="${link}">${linkText}</a>`;
                text = text.replace(replaceableStr, aTag);

                aTag = replaceableStr = linkText = link = '';
            }
        }
    }

    return text;
}

function createHTag(line) {
    let html = '';
    let tagCount = 1;

    while (line.charAt(tagCount) === '#') tagCount++;

    let currentTxt = textToATag(line.slice(tagCount+1),tagCount+1);
    html += `<h${tagCount}>${currentTxt}</h${tagCount}>\n`;

    return html;
}

function createPTag(lines, i){
    let pLines = '';

    pLines += `<p>${lines[i]}`;

    while (lines[i+1] && lines[i+1] !== '' && lines[i+1] !== '#') {
        pLines += `\n${lines[i+1]}`;
        i++;
    }

    pLines += `</p>\n`;
    pLines = textToATag(pLines, 0);

    return {html:`${pLines}`, i};
}