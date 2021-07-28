# Commands

First run ```npm i``` to install dependencies 

To run via command line, replace 'example3' with file that we want to convert.

Running the commands directly returns the converted file.
```
node -p "require('./src/main/index.js')()" src/test/examples/example3.md
```

If no command line argument is passed, by default the script will convert the 'example1.md' file
```
node -p "require('./src/main/index.js')()"
```

To run test
```
npm run test
```
