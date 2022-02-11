---
id: staff
title: Staff Route
sidebar_label: Staff
slug: /staff
---

## Introduction

This route fetches a list of all the people that worked on the Legend of Zelda games and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Sample Result

```javascript
{
	"success": true,
	"count": 2,
	"data": [
		{
			"worked_on": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9"
			],
			"name": "Airi Nagano",
			"id": "5f6d127156b0219cac2f5221"
		},
		{
			"worked_on": [
				"https://zelda.fanapis.com/api/games/5f6ce9d805615a85623ec2c9"
			],
			"name": "Aya Shida",
			"id": "5f6d127156b0219cac2f5222"
		}
	]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://zelda.fanapis.com/api/staff | This route retrieves a list of all the people that worked on **The Legend of Zelda** games so far. |
| `GET`         | https://zelda.fanapis.com/api/staff/:staff_id | This route retrieves one **The Legend of Zelda** staff member using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://zelda.fanapis.com/api/staff?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://zelda.fanapis.com/api/staff?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://zelda.fanapis.com/api/staff?name=Miyamoto  | This parameter is used to search for staff by their names |
