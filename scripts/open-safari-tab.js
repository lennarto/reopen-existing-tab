#!/usr/bin/env osascript -l JavaScript

const Safari = Application('Safari');

function run(args) {
  const url = args[0];
  const tabData = findTabForUrl(url);

  if (tabData) {
    // Focus the window
    Safari.windows[tabData.windowKey].currentTab = Safari.windows[tabData.windowKey].tabs[tabData.tabKey];
  } else {
    // If no tab exists, open new tab in first window
    const firstWindow = Safari.windows[0];
    firstWindow.tabs.push(Safari.Tab({ url }));
    firstWindow.currentTab = firstWindow.tabs[firstWindow.tabs.length - 1];
  }

  // Bring Safari to front
  Safari.activate();
}

function normalizeUrl(url) {
  url = url.replace(/^https?:\/\//, ''); // remove http:// or https://
  if (url.startsWith('www.')) {
    url = url.slice(4); // remove www. if present
  }
  return url.replace(/\/$/, ''); // remove trailing slash
}

function findTabForUrl(url) {
  const target = normalizeUrl(url);

  for (let i = 0; i < Safari.windows.length; i++) {
    const currentWindow = Safari.windows[i];
    for (let j = 0; j < currentWindow.tabs.length; j++) {
      const currentTab = currentWindow.tabs[j];
      const tabUrl = normalizeUrl(currentTab.url());

      if (tabUrl.startsWith(target)) {
        return {
          windowKey: i,
          tabKey: j,
          tab: currentTab
        };
      }
    }
  }
}