const handler = require('../../main/index.js');
const fs = require('fs');

describe("Successful conversions to HTML", function() {
    it("converts example 1 file to html", function() {
        const expectedResults = '<h1>Sample Document</h1>\n\n'+
        '<p>Hello!</p>\n\n'+
        '<p>This is sample markdown for the <a href="https://www. mailchimp.com">Mailchimp</a> homework assignment.</p>\n';
        const res = handler(fs.readFileSync('src/test/examples/example1.md', 'UTF-8'));
        expect(expectedResults).toBe(res);
    });

    it("converts example 2 file to html", function() {
        const expectedResults = '<h1>Header one</h1>\n\n'+ 

        '<p>Hello there</p>\n\n'+
        
        '<p>How are you?\n'+
        "What's going on?</p>\n\n"+
        
        '<h2>Another Header</h2>\n\n'+
        
        '<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?</p>\n\n'+
        
        '<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>\n';
        const res = handler(fs.readFileSync('src/test/examples/example2.md', 'UTF-8'));
        expect(expectedResults).toBe(res);
    });

    it("converts example 3 file to html", function() {
        const expectedResults = '<h1>Header one</h1>\n\n'+

        '<p>Hello there</p>\n\n'+
        
        '<p>How are you?\n'+
        "What's going on?</p>\n\n"+
        
        '<h2>Another Header</h2>\n\n'+
        
        '<p>This is a paragraph <a href="http://google.com">with an inline link</a>. Neat, eh?\n'+
        'Another paragraph <a href="http://google1.com">with an inline link1</a>. Neat, eh? Oh another link <a href="http://google2.com">with an inline link2</a>. yes?\n'+
        'Third paragraph <a href="http://google3.com">with an inline link3</a>. Neat, eh? Oh another link <a href="http://google4.com">with an inline link4</a>. yes?</p>\n\n'+
        
        '<h2>This is a header <a href="http://yahoo.com">with a link</a></h2>\n'+
        '<h2>Another and Another Header</h2>\n'+
        '<h3>This is a header <a href="http://yahoo.com">with a link</a>, link 2 <a href="http://yahoo2.com">with a link2</a> yes?</h3>\n';
        const res = handler(fs.readFileSync('src/test/examples/example3.md', 'UTF-8'));
        expect(expectedResults).toBe(res);
    });
});