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

      // with createHighlight, all I need is the props for the highlight.
      // Afterwards, I also need to create the action createTag

      let highlights = (result.highlights) ? result.highlights : [];
      chrome.tabs.query({'active': true}, function(tabs) {
        let title = tabs[0].title;
        let url = tabs[0].url;
        let newHighlight = {
          _id: new Date().toISOString(),
          title: title,
          url: url,
          description: description,
          tag_id: 'recent'
        }

        let newTag = {
          _id: new Date().toISOString(),
          title: 'recent'
        }

        highlights.push(newHighlight);
        chrome.storage.local.set({"highlights": highlights})

        chrome.storage.local.get("tags", function(result) {
          let tags = (result.tags) ? result.highlights : []
          tags.push(newTag);
          chrome.storage.local.set({"tags": tags});
        })
      });
    })
  })
}

chrome.browserAction.onClicked.addListener((activeTab) => {
  chrome.tabs.create({ url: "./index.html" });
});

chrome.contextMenus.create({
  title: "highlight",
  contexts: ["selection"],
  onclick: saveHighlight
});
