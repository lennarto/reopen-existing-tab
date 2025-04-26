#!/usr/bin/env osascript -l JavaScript
const Edge = Application('Microsoft Edge');

function run(args) {
  const url = args[0];
  let finalUrl = url;
  if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
    finalUrl = 'https://' + finalUrl;
  }
  const tabData = findTabForUrl(finalUrl);
  if (tabData) {
    Edge.windows[tabData.windowKey].activeTabIndex = tabData.tabKey + 1;
    Edge.windows[tabData.windowKey].index = 1;
  } else {
    const tab = Edge.Tab({url: finalUrl});
    Edge.windows[0].tabs.push(tab);
  }
  Edge.activate();
}

function normalizeUrl(url) {
  url = url.replace(/^https?:\/\//, '');
  if (url.startsWith('www.')) {
    url = url.slice(4);
  }
  return url.replace(/\/$/, '');
}

function findTabForUrl(url) {
  const target = normalizeUrl(url);
  for (let i = 0; i < Edge.windows.length; i++) {
    const currentWindow = Edge.windows[i];
    for (let j = 0; j < currentWindow.tabs.length; j++) {
      const currentTab = currentWindow.tabs[j];
      const tabUrl = normalizeUrl(currentTab.url());
      if (tabUrl.startsWith(target)) {
        return { windowKey: i, tabKey: j, tab: currentTab };
      }
    }
  }
}