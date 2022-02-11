---
id: start
title: Getting Started
sidebar_label: Getting Started
slug: /
---

The Zelda API is a cool open source API that provides information about the greatest game franchise out there: The Legend of Zelda. In this section you will be guided with basics steps on how to properly use this API. This API is open, so it doesn't require an API key to use it. Also, please give us a star on our [official github repository](http://www.github.com/deliton/zelda-api) and feel free to post issues there.

# GraphQL Support

I'm proud to announce a new version of this API! Check the [blog notes](/blog/v1-release) to see what's new.

GraphQL is an open-source data query and manipulation language created by Facebook in 2015. It provides a more efficient and scalable way to access and update data compared to traditional REST API endpoints.

GraphQL allows clients to specify the exact data they need from servers, reducing the number of requests and bandwidth needed. Servers can also batch multiple queries into a single request, improving performance. You can get started by visiting https://zelda.fanapis.com/api/graphql and play around with the data.
## Example REQUEST (REST)

Since this API doesn't require you to provide an API key, it's extremely easy to use. Feel free to explore our documentation and test routes! Let's retrieve a list of all released games with the following route:

- METHOD: **GET**
- URL: https://zelda.fanapis.com/api/games?limit=2

- RESULT

```javascript
{
	"success": true,
	"count": 2,
	"data": [
		{
			"id": "5f6ce9d805615a85623ec2b7"
			"name": "The Legend of Zelda",
			"description": "The Legend of Zelda is the first installment of the Zelda series. It centers its plot around a boy named Link, who becomes the central protagonist throughout the series.... ",
			"developer": "Nintendo R&D 4",
			"publisher": "Nintendo",
			"released_date": " February 21, 1986",
		},
		{
			"id": "5f6ce9d805615a85623ec2b8"
			"name": "The Legend of Zelda: A Link to the Past",
			"description": "One day, a band of evil thieves managed to open the gateway to the Sacred Realm, where the mystical Triforce was hidden. Upon finding the sacred golden relic, the leader of the thieves, Ganondorf, slew his followers and claimed it as his own... ",
			"developer": "Nintendo",
			"publisher": "Nintendo",
			"released_date": " April 13, 1992",
		}
	]
}
```

## Example REQUEST (GRAPHQL)

Let's retrieve a monster called "Lizalfos", I want this API to return its `name`, `description` and which games this monster is featured. So let's make a POST request with the following GraphQL body:

```json
query {
	monsters(name: "Lizalfos") {
		name,
		description,
		appearances {
			name,
			released_date,
		}
	}
}
```

Then the GraphQL API will return:

- RESULT

```javascript
{
	"data": {
		"monsters": [
			{
				"name": "Lizalfos",
				"description": "Lizalfos are recurring Enemies in The Legend of Zelda series. ",
				"appearances": [
					{
						"name": "The Legend of Zelda: Ocarina of Time",
						"released_date": " November 23, 1998"
					},
					{
						"name": "The Legend of Zelda: Twilight Princess",
						"released_date": " November 19, 2006"
					},
					{
						"name": "The Legend of Zelda: Skyward Sword",
						"released_date": " November 20, 2011"
					},
					{
						"name": "The Legend of Zelda: Breath of the Wild",
						"released_date": " March 3, 2017"
					}
				]
			}
		]
	}
}
```

Pretty easy, huh? Go to https://zelda.fanapis.com/api/graphql and use the data for your project as you like

## Fair Use Policy

Zelda API is free and open to use. Because of this, we humbly ask developers to use it fairly and not spam it. This is an educational service so please do not harm others.

## Issues

The data available on this API was scraped from other Zelda fansites and wikis. If you find some issue or incorrect data, feel free to open an issue [on this link](https://github.com/deliton/zelda-api/issues/new)


---
