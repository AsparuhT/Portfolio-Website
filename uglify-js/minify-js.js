const fs = require('fs');
const UglifyJS = require('uglify-js');

// Define the list of files. Inlude the relative path to them
const files = [
    '../js/form-submission.js',
    '../js/form-validation.js',
    '../js/hamburger-menu.js'
    // add more file paths here
];

// Read and store content of each file
const fileContents = files.map((filePath) => {
    return fs.readFileSync(filePath, 'utf8');
});

// Combine the content of all files
const combinedCode = fileContents.join(';');

// Minify the combined code
const minified = UglifyJS.minify(combinedCode);

if (minified.error) {
    console.error('Error during minification:', minified.error);
    return;
}

// Write the minified code to a new file
fs.writeFileSync('contacts-bundle.min.js', minified.code, 'utf8');

console.log('Minification complete.');