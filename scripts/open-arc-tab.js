#!/usr/bin/env osascript -l JavaScript
const app = Application.currentApplication();
app.includeStandardAdditions = true;

const Arc = Application('Arc');

function run(args) {
  let url = args[0];

  // If the URL does not start with http or https, add https:// automatically
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }

  // Open URL using the system "open" command for Arc
  app.doShellScript(`open -a "Arc" "${url}"`);

  // Bring Arc to the front
  delay(0.5);
  Arc.activate();
}