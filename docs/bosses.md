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
	"count": 2,
	"data": [
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c8"
			],
			"dungeons": [
				"https://zelda.fanapis.com/api/dungeons/5f6ce9d805615a85623ec2c8"
			],
			"name": "Bilocyte",
			"description": "Bilocyte is a Boss in Skyward Sword. It is a large parasite that infiltrates and possesses Levias, who lives inside the giant Thunderhead near Skyloft. ",
			"id": "5f6e93a7cbf4202fbde224fd"
		},
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2ba",
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2bc",
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c0"
			],
			"dungeons": [
				"https://zelda.fanapis.com/api/dungeons/5f6ce9d805615a85623ec2ba",
				"https://zelda.fanapis.com/api/dungeons/5f6ce9d805615a85623ec2bc",
				"https://zelda.fanapis.com/api/dungeons/5f6ce9d805615a85623ec2c0"
			],
			"name": "Amy",
			"description": "Amy is a recurring Sub-Boss in The Legend of Zelda series. She is the youngest of the four Poe Sisters. ",
			"id": "5f6e93a7cbf4202fbde224fc"
		}
	]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/bosses | This route retrieves a list of all the bosses of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda.fanapis.com/api/bosses/:boss_id | This route retrieves one **The Legend of Zelda** boss using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/bosses?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/bosses?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/bosses?name=Bokoblin  | This parameter is used to search for monsters by their names |
