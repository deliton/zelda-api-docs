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
	"count": 2,
	"data": [
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2d5"
			],
			"name": "Abominom",
			"description": "Abominoms  are enemies in the Philips CD-i game The Faces of Evil. ",
			"id": "5f6d1715a837149f8b47a157"
		},
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2ba"
			],
			"name": "Arwing",
			"description": "Arwings are unused enemies in Ocarina of Time. ",
			"id": "5f6d1715a837149f8b47a158"
		}
	]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/monsters | This route retrieves a list of all the monsters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda.fanapis.com/api/monsters/:monster_id | This route retrieves one **The Legend of Zelda** monster using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/monsters?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/monsters?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/monsters?name=Bokoblin  | This parameter is used to search for monsters by their names |
