#!/usr/bin/env osascript -l JavaScript
const Opera = Application('Opera');

function run(args) {
  const url = args[0];
  let finalUrl = url;
  if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
    finalUrl = 'https://' + finalUrl;
  }
  const tabData = findTabForUrl(finalUrl);
  if (tabData) {
    Opera.windows[tabData.windowKey].activeTabIndex = tabData.tabKey + 1;
    Opera.windows[tabData.windowKey].index = 1;
  } else {
    const tab = Opera.Tab({url: finalUrl});
    Opera.windows[0].tabs.push(tab);
  }
  Opera.activate();
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
  for (let i = 0; i < Opera.windows.length; i++) {
    const currentWindow = Opera.windows[i];
    for (let j = 0; j < currentWindow.tabs.length; j++) {
      const currentTab = currentWindow.tabs[j];
      const tabUrl = normalizeUrl(currentTab.url());
      if (tabUrl.startsWith(target)) {
        return { windowKey: i, tabKey: j, tab: currentTab };
      }
    }
  }
}