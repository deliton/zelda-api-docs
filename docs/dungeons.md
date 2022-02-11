---
id: dungeons
title: Dungeons Route
sidebar_label: Dungeons
slug: /dungeons
---

## Introduction

This route fetches a list of all the dungeons that can be encountered in the Legend of Zelda games, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

```javascript
{
	"success": true,
	"count": 2,
	"data": [
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2ce"
			],
			"name": "Abyss of Agony",
			"description": "Abyss of Agony is a Level in Tri Force Heroes. It is the second Level of the Riverside area. ",
			"id": "5f6d158a3dd55d9ed2d1c083"
		},
		{
			"appearances": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c3"
			],
			"name": "Bottle Grotto",
			"description": "Bottle Grotto is the second Dungeon in Link's Awakening. It is the resting place of the Conch Horn, one of the eight Instruments of the Sirens. The entrance to this Dungeon is located within Goponga Swamp, north of the Mysterious Forest and is surrounded by swampy Water fitting with the Dungeon being named a Grotto, which is a cave located near a source of Water and is prone to flooding, although no Water can actually be found within the Dungeon. BowWow is needed to enter, as the entrance is completely blocked by Goponga Flowers, which cannot be destroyed by using any of the weapons Link currently has available to him. The interior of this Dungeon is mostly gray flooring and blue walls. The main tool of the Dungeon is the Power Bracelet, which is required to lift the numerous Pots and the Genie's Bottle which the level is named after. The mini-boss is a Hinox. ",
			"id": "5f6d158a3dd55d9ed2d1c084"
		}
	]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/dungeons | This route retrieves a list of all the characters of **The Legend of Zelda** games so far. |
| `GET`         | https://zelda.fanapis.com/api/dungeons/:dungeon_id | This route retrieves one **The Legend of Zelda** character using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/dungeons?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/dungeons?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/dungeons?name=Deku%20Tree  | This parameter is used to search for dungeons by their names |
