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
	"count": 2,
	"data": [
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c5"
			],
			"name": "Anjean",
			"description": "Anjean  is a character in Spirit Tracks. She is a member of the Lokomo people and the protector of the Tower of Spirits, the central hub of the Spirit Tracks, whose goal is to prevent the evil Malladus from breaking free of his imprisonment. Anjean provides the Spirit Train, which Link and Princess Zelda use along their quest. Anjean was also a very close friend with Tetra after she met her shortly after the feisty pirate arrived to the land that would become the next Hyrule. As a result of their strong friendship, Anjean gave Tetra the sacred instrument known as the Spirit Flute, but only under the condition that she and her descendants would use it to protect the land. ",
			"gender": "Female",
			"race": "Lokomo",
			"id": "5f6d186f246bd9a0809d6115"
		},
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c0",
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2b9"
			],
			"name": "Animal Companion",
			"description": "The Animal Companions are three characters in Oracle of Seasons and Oracle of Ages: Ricky, Moosh, and Dimitri. They become Link's Mounts when he needs their special abilities to traverse certain terrain. ",
			"gender": null,
			"race": null,
			"id": "5f6d186f246bd9a0809d6116"
		}
	]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/characters | This route retrieves a list of all the characters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda.fanapis.com/api/characters/:character_id | This route retrieves one **The Legend of Zelda** character using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/characters?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/characters?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/characters?name=Midna  | This parameter is used to search for characters by their names |
