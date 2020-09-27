---
id: games
title: Games Route
sidebar_label: Games
slug: /games
---

## Introduction

This route fetches a of list the released The Legend of Zelda games and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

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

## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda-api.apius.cc/api/games | This route retrieves all **The Legend of Zelda** games released so far. |
| `GET`         | https://zelda-api.apius.cc/api/games/:game_id | This route retrieves one **The Legend of Zelda** game using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda-api.apius.cc/api/games?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda-api.apius.cc/api/games?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda-api.apius.cc/api/games?name=Skyward  | This parameter is used to search for games by its name |
