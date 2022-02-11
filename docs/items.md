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
			"games": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c0",
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2b9"
			],
			"name": "100th Ring",
			"description": "The 100th Ring is a recurring Item in The Legend of Zelda series. ",
			"id": "5f6e9a9dfee1a5347127c76d"
		},
		{
			"games": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9"
			],
			"name": "Ancient Arrow",
			"description": "Ancient Arrows are recurring Items in The Legend of Zelda series. ",
			"id": "5f6e9a9dfee1a5347127c76f"
		}
	]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/items | This route retrieves a list of all the monsters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda.fanapis.com/api/items/:item_id | This route retrieves one **The Legend of Zelda** monster using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/items?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/items?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/items?name=Hookshot  | This parameter is used to search for monsters by their names |
