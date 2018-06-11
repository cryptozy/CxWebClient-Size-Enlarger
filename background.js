chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      title: "first",
      contexts: ["all"],
      onclick: function() {
        alert('first');
      }
});