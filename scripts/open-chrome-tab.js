#!/usr/bin/env osascript -l JavaScript
const Chrome = Application('Chrome');

function run(args) {
  const url = args[0];
  const tabData = findTabForUrl(url);
  console.log(args);
  if (tabData) {
    // set the specified window to be the active window
    Chrome.windows[tabData.windowKey].activeTabIndex = tabData.tabKey + 1;

    // reload the tab
    // tabData.tab.reload();

    // set the specified tab to be active
    Chrome.windows[tabData.windowKey].index = 1;
  } else {
    // create tab
    const tab = Chrome.Tab({url});

    // add tab to front window, making it the active tab
    Chrome.windows[0].tabs.push(tab);
  }
  // bring the window to front
  Chrome.activate();
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

  for (let i = 0; i < Chrome.windows.length; i++) {
    const currentWindow = Chrome.windows[i];
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