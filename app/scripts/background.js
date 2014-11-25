'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  
  chrome.tabs.executeScript({
    code: 'document.body.innerHTML = ""; document.body.appendChild(document.createElement("img")).src="http://i.imgur.com/B7cXd.png"',
  });

  chrome.notifications.create('myNotification', {type: 'basic', title: 'Hello World!', message: 'Nothing to see here.', iconUrl: 'images/cat.jpg', priority: 2}, function () {console.log('basic text notification was created')});
});
