let currentTheme = 'mdn-like';
let nextTheme = 'shadowfox';
// Initialize CodeMirror for HTML editor
const htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
    mode: 'text/html',
    lineNumbers: true,
    tabSize: 2,
    lineWrapping: true,
    theme: currentTheme,
    autoCloseTags: true,
    readOnly: 'nocursor'  // Make HTML editor read-only
});

// Set predefined HTML content
htmlEditor.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a sample HTML content.</p>
</body>
</html>`);


// Initialize CodeMirror for CSS editor
const cssEditor = CodeMirror.fromTextArea(document.getElementById('cssEditor'), {
    mode: 'text/css',
    lineNumbers: true,
    tabSize: 2,
    lineWrapping: true,
    theme: currentTheme,
    autoCloseBrackets: true  // Automatically close CSS brackets
});

//set predefined CSS
cssEditor.setValue(`/* Add your CSS code here */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
}
h1 {
    color: #007bff; ss
}`);

// Function to update the preview
function updatePreview() {
    const previewFrame = document.getElementById('preview');
    const previewContent = `
        <style>
            ${cssEditor.getValue()}
        </style>
        ${htmlEditor.getValue()}
    `;
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDocument.open();
    previewDocument.write(previewContent);
    previewDocument.close();
}

// Add event listeners to update the preview on change
cssEditor.on('change', updatePreview);

// Initial preview update
updatePreview();

// Toggle between themes when the button is clicked
const themeStylesheet = document.getElementById('theme-stylesheet');
const toggleThemeButton = document.getElementById('darkmode-toggle');
const toggleText = document.getElementById('toggle-light');
const originalToggleText = toggleText.textContent;
const editorHeader = document.getElementById('editor-name');
let isDefaultTheme = true;
toggleThemeButton.addEventListener('click', () => {
    if (isDefaultTheme) {
        cssEditor.setOption('theme', nextTheme);
        htmlEditor.setOption('theme', nextTheme)
        toggleText.textContent = 'Dark'
        // document.body.style.background = 'blue';
     } else {
        cssEditor.setOption('theme', currentTheme);
        htmlEditor.setOption('theme', currentTheme)
        toggleText.textContent = originalToggleText;
        // document.body.style.background = '#f8f8f8'
        }
        isDefaultTheme = !isDefaultTheme;

    const textElement = document.getElementById('editor-name');
    const textElement2 = document.getElementById('editor-name2');
    if (textElement.style.background === 'green' ||
        textElement2.style.background === 'green'
    ) {
        textElement.style.background = 'lightblue';
        textElement2.style.background ='lightblue'
    } else {
        textElement.style.background = 'green';
        textElement2.style.background = 'green';
        }
});
