---
id: dungeons
title: Dungeons Route
sidebar_label: Dungeons
slug: /dungeons
---

## Introduction

This route fetches a list of all the dungeons that can be encountered in the Legend of Zelda games, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

```javascript
{
    "success": true,
    "count": 1,
    "data": [
        {
            "appearances": [
                {
                    "_id": "5f6ce9d805615a85623ec2ba",
                    "name": "The Legend of Zelda: Ocarina of Time"
                }
            ],
            "_id": "5f6d158a3dd55d9ed2d1c17b",
            "name": "Inside the Deku Tree",
            "description": "Inside the Deku Tree is the first dungeon of...",
            "__v": 0
        }
    ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda-api.apius.cc/api/dungeons | This route retrieves a list of all the characters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda-api.apius.cc/api/dungeons/:dungeon_id | This route retrieves one **The Legend of Zelda** character using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda-api.apius.cc/api/dungeons?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda-api.apius.cc/api/dungeons?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda-api.apius.cc/api/dungeons?name=Deku%20Tree  | This parameter is used to search for dungeons by their names |
