#!/usr/bin/env osascript -l JavaScript
const app = Application.currentApplication();
app.includeStandardAdditions = true;

const Firefox = Application('Firefox');

function run(args) {
  let url = args[0];

  // Ensure URL starts with http(s)
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  // Use shell script to open the URL in Firefox
  app.doShellScript(`open -a "Firefox" "${url}"`);

  // Bring Firefox to the front
  delay(0.5);
  Firefox.activate();
}