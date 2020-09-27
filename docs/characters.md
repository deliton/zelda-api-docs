---
id: characters
title: Characters Route
sidebar_label: Characters
slug: /characters
---

## Introduction

This route fetches a list of all the characters that can be encountered in the Legend of Zelda games, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

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
            "_id": "5f6d186f246bd9a0809d653c",
            "name": "Midna",
            "description": "Midna is a character in The Legend of Zelda...",
            "gender": "Female",
            "race": "Twili",
            "__v": 0
        }
    ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda-api.apius.cc/api/characters | This route retrieves a list of all the characters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda-api.apius.cc/api/characters/:character_id | This route retrieves one **The Legend of Zelda** character using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda-api.apius.cc/api/characters?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda-api.apius.cc/api/characters?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda-api.apius.cc/api/characters?name=Midna  | This parameter is used to search for characters by their names |
