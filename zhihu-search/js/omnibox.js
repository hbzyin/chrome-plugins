chrome.omnibox.setDefaultSuggestion({
    "description": "match",
})
chrome.omnibox.onInputEntered.addListener(function(text, cb){
    chrome.tabs.create({"url": `https://www.zhihu.com/search?type=content&q=${text}`})
})
