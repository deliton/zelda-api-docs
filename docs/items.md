---
id: items
title: Items Route
sidebar_label: Items
slug: /items
---

## Introduction

This route fetches a list of all the items that can be encountered in the Legend of Zelda games, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

```javascript
{
    "success": true,
    "count": 2,
    "data": [
        {
            "appearances": [],
            "_id": "5f6e9a9efee1a5347127ca47",
            "games": [],
            "name": "Hookshot",
            "description": "Hookshots ,, also known as Hook Shots, are Items in...",
            "__v": 0
        },
        {
            "appearances": [],
            "_id": "5f6e9a9efee1a5347127ca7d",
            "games": [],
            "name": "Nice Hookshot",
            "description": "The Nice Hookshot is an item in A Link Between Worlds",
            "__v": 0
        }
    ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda-api.apius.cc/api/items | This route retrieves a list of all the monsters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda-api.apius.cc/api/items/:item_id | This route retrieves one **The Legend of Zelda** monster using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda-api.apius.cc/api/items?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda-api.apius.cc/api/items?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda-api.apius.cc/api/Items?name=Hookshot  | This parameter is used to search for monsters by their names |
