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
	"count": 2,
	"data": [
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c0",
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2b9"
			],
			"inhabitants": [],
			"name": "Advance Shop",
			"description": "The Advance Shop, also known as the 100 Rupee Advance Shop, is a recurring location in The Legend of Zelda series. It is a unique store as it can only be accessed when the game is played on a Game Boy Advance. ",
			"id": "5f6e8c8e677b262b8b3fb4a8"
		},
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c5"
			],
			"inhabitants": [
				"https://zelda.fanapis.com/api/characters/5f6d186f246bd9a0809d6795",
				"https://zelda.fanapis.com/api/characters/5f6d186f246bd9a0809d644f",
				"https://zelda.fanapis.com/api/characters/5f6d186f246bd9a0809d6214",
				"https://zelda.fanapis.com/api/characters/5f6d186f246bd9a0809d638c",
				"https://zelda.fanapis.com/api/characters/5f6d186f246bd9a0809d661e",
				"https://zelda.fanapis.com/api/characters/5f6d186f246bd9a0809d62e3",
				"https://zelda.fanapis.com/api/characters/5f6d186f246bd9a0809d61a2"
			],
			"name": "Aboda Village",
			"description": "Aboda Village is a location is Spirit Tracks. It is located by the southwestern shore of the Forest Realm. It is Link's hometown and the starting point of his journey.  ",
			"id": "5f6e8c8e677b262b8b3fb4a9"
		}
	]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/places | This route retrieves a list of all the characters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda.fanapis.com/api/places/:place_id | This route retrieves one **The Legend of Zelda** character using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/places?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/places?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/places?name=Deku%20Tree  | This parameter is used to search for places by their names |
