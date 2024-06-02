chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            id: 1,
            priority: 1,
            action: {
                type: "redirect",
                redirect: {
                    regexSubstitution: "https://twitter.com?mx=1"
                }
            },
            condition: {
                regexFilter: "^https://(www\\.)?(twitter\\.com|x\\.com)/.*",
                resourceTypes: ["main_frame"]
            }
        }
    ],
    removeRuleIds: [1]
});
