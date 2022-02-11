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
			"name": "The Legend of Zelda",
			"description": "The Legend of Zelda is the first installment of the Zelda series. It centers its plot around a boy named Link, who becomes the central protagonist throughout the series. It came out as early as 1986 for the Famicom in Japan, and was later released in the western world, including Europe and the US in 1987. It has since then been re-released several times, for the Nintendo GameCube as well as the Game Boy Advance. The Japanese version of the game on the Famicom is known as The Hyrule Fantasy: The Legend of Zelda. ",
			"developer": "Nintendo R&D 4",
			"publisher": "Nintendo",
			"released_date": " February 21, 1986",
			"id": "5f6ce9d805615a85623ec2b7"
		},
		{
			"name": "The Legend of Zelda: A Link to the Past",
			"description": "One day, a band of evil thieves managed to open the gateway to the Sacred Realm, where the mystical Triforce was hidden. Upon finding the sacred golden relic, the leader of the thieves, Ganondorf, slew his followers and claimed it as his own. Before long, dark power began to flow forth from the Sacred Realm. People were drawn into this darkness, and never heard from again. As a result, the King of Hyrule ordered the seven sages to seal the entrance to the Sacred Realm. A great battle ensued—monsters poured into the Light World from the sacred land and attacked the castle. The Knights of Hyrule defended the sages during the great battle against evil, and, though most of them perished in the struggle, the sages were able to cast their seal, stopping the flow of darkness and trapping the evil king Ganon within. This battle became known as the Imprisoning War. ",
			"developer": "Nintendo",
			"publisher": "Nintendo",
			"released_date": " April 13, 1992",
			"id": "5f6ce9d805615a85623ec2b8"
		}
	]
}
```

## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/games | This route retrieves all **The Legend of Zelda** games released so far. |
| `GET`         | https://zelda.fanapis.com/api/games/:game_id | This route retrieves one **The Legend of Zelda** game using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/games?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/games?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/games?name=Skyward  | This parameter is used to search for games by its name |
