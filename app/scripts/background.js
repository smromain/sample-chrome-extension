'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: 'document.body.innerHTML = "<h1>i am totally working right now no need to look over my shoulder please leave me alone</H1>"; document.body.appendChild(document.createElement("img")).src="http://lorempixel.com/800/600/cats/"',
  });
});
