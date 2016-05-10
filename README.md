# Highlighter

A chrome extension to save and store highlights (texts).
You may organize the highlights in tags.

To install the extension, download the zip and:

`npm install`

Then, go to your chrome browser.
Click the three dashed icons on the very top right, and click settings.
From there, click the extensions link on the very left, and it should ask you to load an unpacked extension. Navigate to where you saved this directory and open it.

After loading up the file, a highlighter image should appear as a browser icon near the end of the top right of your browser, which means its been successfully installed.

Now you are free to store highlights.
To store them, highlight a text you'd like to save, and either:
- Press Cmd+Shift+H or
- Right click the highlight and click highlight.

The extension was made primarily with Google Chrome's API, React.js, and architected with Redux.
The storage space is used through chrome's google storage (saved as a promise through the `chrome-storage-wrapper` library) held locally in the browser.
