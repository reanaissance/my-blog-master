module.exports = {
  "title": "山远风起",
  "description": "blog start",
  "dest": "build",
  "port":8443,
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "没想好",
        "icon": "reco-message",
        "items": [
          {
            "text": "没想好",
            "link": "/"
          }
        ]
      },
      {
        "text": "时光史",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/YearsAreEfas",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/build/": [
        "",
        "vuePress",
        "GitSSHKey配置"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "随便记记"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "山远风起",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "15135921427@163.com",
        "link": "http://39.107.121.101/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "山远风起",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}