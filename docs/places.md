---
id: places
title: Places Route
sidebar_label: Places
slug: /places
---

## Introduction

This route fetches a list of all the places that can be encountered in the Legend of Zelda games, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

```javascript
{
    "success": true,
    "count": 1,
    "data": [
        {
            "inhabitants": [],
            "appearances": [
                {
                    "_id": "5f6ce9d805615a85623ec2be",
                    "name": "The Legend of Zelda: Twilight Princess"
                }
            ],
            "_id": "5f6e8c8e677b262b8b3fb65f",
            "name": "Twilight Realm",
            "description": "The Twilight Realm is a parallel dimension to the...",
            "__v": 0
        }
    ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda-api.apius.cc/api/places | This route retrieves a list of all the characters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda-api.apius.cc/api/places/:place_id | This route retrieves one **The Legend of Zelda** character using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda-api.apius.cc/api/places?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda-api.apius.cc/api/places?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda-api.apius.cc/api/places?name=Deku%20Tree  | This parameter is used to search for places by their names |
