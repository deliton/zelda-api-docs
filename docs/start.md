---
id: start
title: Getting Started
sidebar_label: Getting Started
slug: /
---

## Introduction

The Zelda API is a cool open source API that provides information about the greatest game franchise out there: The Legend of Zelda. In this section you will be guided with basics steps on how to properly use this API. This API is open, so it doesn't require an API key to use it. Also, please give us a star on our [official github repository](http://www.github.com/deliton/zelda-api) and feel free to post issues there.

## Fair Use Policy

Zelda API is free and open to use. Because of this, we humbly ask developers to use it fairly and not spam it. This is an educational service so please do not harm others.

## Issues

The data available on this API was scraped from other Zelda fansites and wikis. If you find some issue or incorrect data, feel free to open an issue [on this link](https://github.com/deliton/zelda-api/issues/new)

## Getting Started

Since this API doesn't require you to provide an API key, it's extremely easy to use. Feel free to explore our documentation and test routes!

### Example REQUEST

Let's retrieve a list of all released games with the following route:

- METHOD: **GET**
- URL: http://zelda-api.apius.cc/api/games

- RESULT
```javascript
{
    "success": true,
    "count": 2,
    "data": [
        {
            "_id": "5f6ce9d805615a85623ec2b7",
            "name": "The Legend of Zelda",
            "description": "The Legend of Zelda is the first...",
            "developer": "Nintendo R&D 4",
            "publisher": "Nintendo",
            "released_date": " February 21, 1986",
            "__v": 0
        },
        {
            "_id": "5f6ce9d805615a85623ec2b8",
            "name": "The Legend of Zelda: A Link to the Past",
            "description": "One day, a band of evil thieves managed to...",
            "developer": "Nintendo",
            "publisher": "Nintendo",
            "released_date": " April 13, 1992",
            "__v": 0
        }
    ]
}
```

---