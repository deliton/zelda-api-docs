---
id: bosses
title: Bosses Route
sidebar_label: Bosses
slug: /bosses
---

## Introduction

This route fetches a list of all the bosses that can be encountered in the Legend of Zelda games, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

```javascript
{
    "success": true,
    "count": 1,
    "data": [
        {
            "appearances": [
                {
                    "_id": "5f6ce9d805615a85623ec2be",
                    "name": "The Legend of Zelda: Twilight Princess"
                }
            ],
            "dungeons": [
                {
                    "_id": "5f6d158a3dd55d9ed2d1c10e",
                    "name": "Palace of Twilight"
                }
            ],
            "_id": "5f6e93a7cbf4202fbde22520",
            "name": "Zant",
            "description": "Zant  is one of two main antagonists in Twilight...",
            "__v": 0
        }
    ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda-api.apius.cc/api/bosses | This route retrieves a list of all the bosses of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda-api.apius.cc/api/bosses/:boss_id | This route retrieves one **The Legend of Zelda** boss using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda-api.apius.cc/api/bosses?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda-api.apius.cc/api/bosses?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda-api.apius.cc/api/bosses?name=Bokoblin  | This parameter is used to search for monsters by their names |
