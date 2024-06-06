chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            id: 1,
            priority: 1,
            action: {
                type: "redirect",
                redirect: {
                    regexSubstitution: "https://twitter.com\\1"
                }
            },
            condition: {
                regexFilter: "^https://(www\\.)?x\\.com(/.*)?",
                resourceTypes: ["main_frame"]
            }
        },
        {
            id: 2,
            priority: 1,
            action: {
                type: "redirect",
                redirect: {
                    transform: {
                        queryTransform: {
                            addOrReplaceParams: [
                                { key: "mx", value: "1" }
                            ]
                        }
                    }
                }
            },
            condition: {
                regexFilter: "^https://(www\\.)?twitter\\.com/.*",
                resourceTypes: ["main_frame"]
            }
        }
    ],
    removeRuleIds: [1, 2]
});
