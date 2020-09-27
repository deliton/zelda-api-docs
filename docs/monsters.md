---
id: monsters
title: Monsters Route
sidebar_label: Monsters
slug: /monsters
---

## Introduction

This route fetches a list of all the monsters that can be encountered in the Legend of Zelda games, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

```javascript
{
    "success": true,
    "count": 1,
    "data": [
        {
            "appearances": [
                {
                    "_id": "5f6ce9d805615a85623ec2c0",
                    "name": "The Legend of Zelda: Oracle of Seasons"
                },
                {
                    "_id": "5f6ce9d805615a85623ec2c9",
                    "name": "The Legend of Zelda: Breath of the Wild"
                }
            ],
            "_id": "5f6d1715a837149f8b47a1e3",
            "name": "Golden Lynel",
            "description": "Golden Lynels are recurring Enemies in...",
            "__v": 0
        }
    ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda-api.apius.cc/api/monsters | This route retrieves a list of all the monsters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda-api.apius.cc/api/monsters/:monster_id | This route retrieves one **The Legend of Zelda** monster using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda-api.apius.cc/api/monsters?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda-api.apius.cc/api/monsters?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda-api.apius.cc/api/monsters?name=Bokoblin  | This parameter is used to search for monsters by their names |
