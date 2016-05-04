chrome.commands.onCommand.addListener(function (command) {
  if (command == "save-highlight") {
    saveHighlight();
  }
});

function saveHighlight() {
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function(selection) {
    let description = selection[0]
    chrome.storage.local.get("highlights", function(result) {
      let highlights = result.highlights;
      if (highlights) {
        chrome.tabs.query({'active': true}, function(tabs) {
          let title = tabs[0].title;
          let url = tabs[0].url;
          let newHighlight = {
            _id: new Date().toISOString(),
            title: title,
            url: url,
            description: description
          }
          highlights.push(newHighlight);
          chrome.storage.local.set({"highlights": highlights});
        });
      } else {
        highlights = [];
        chrome.storage.local.set({"highlights": highlights});
      }
    })
  })
}

chrome.browserAction.onClicked.addListener((activeTab) => {
  chrome.tabs.create({ url: "./index.html" });
})
