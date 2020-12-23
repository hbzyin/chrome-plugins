chrome.contextMenus.create({
    "title": "使用知乎搜索：%s",
    "contexts": ["selection"],
    "onclick":  function(params) {
        chrome.tabs.create({"url": `https://www.zhihu.com/search?type=content&q=${encodeURI(params.selectionText)}`})
    }
})