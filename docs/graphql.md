---
id: graphql
title: GraphQL Endpoint
sidebar_label: GraphQL
slug: /graphql
---

That's it, we support GraphQL out of the box now. Just go to https://zelda.fanapis.com/api/graphql and use the Apollo GraphQL sandbox. By using GraphQL you have access to all of its schema and resolvers, so it should be easy to explore on your own. Below, we'll see a few examples using the new GraphQL endpoint. 

## Route

- `POST` at https://zelda.fanapis.com/api/graphql

## Example 1

:::note

Here we are tryng to fetch 2 places, include their names, games they appeared in and then who inhabits those places, along with their race and gender. We want to get the second page.

:::

### GraphQL Query
```javascript
query {
	places(limit: 2, page: 2) {
		name,
		appearances {
			name
		}
		inhabitants {
			name,
			gender,
			race
		}
	}
}
```

### Result
```javascript
{
	"data": {
		"places": [
			{
				"name": "Abandoned North Mine",
				"appearances": [
					{
						"name": "The Legend of Zelda: Breath of the Wild"
					}
				],
				"inhabitants": [
					{
						"name": "Drak",
						"gender": "Male",
						"race": "Goron"
					}
				]
			},
			{
				"name": "Ancient Shrine",
				"appearances": [
					{
						"name": "The Legend of Zelda: Breath of the Wild"
					}
				],
				"inhabitants": []
			}
		]
	}
}
```

## Example 2

:::note

Here we are tryng to fetch a character whose name is "Princess Zelda". We want to display the character's id, race, name and description

:::

### GraphQL Query
```javascript
query {
	characters(name: "Princess Zelda") {
		id,
		name,
		race,
		description
	}
}
```

### Result
```javascript
{
	"data": {
		"characters": [
			{
				"id": "5f6d186f246bd9a0809d63f9",
				"name": "Princess Zelda",
				"race": "Hylian",
				"description": "Zelda, traditionally Princess Zelda, is the eponymous character of The Legend of Zelda series. With the exception of Link's Awakening, Majora's Mask, and Tri Force Heroes, an incarnation of Zelda or one of her alter egos has always been one of the central characters in the series. "
			}
		]
	}
}
```

## Example 3

:::note

Here we are tryng to fetch an item by item, and return its name and description

:::

### GraphQL Query
```javascript
query {
	getItem(id: "5f6e9a9dfee1a5347127c76f") {
		name
		description
	}
}

```

### Result
```javascript
{
	"data": {
		"getItem": {
			"name": "Ancient Arrow",
			"description": "Ancient Arrows are recurring Items in The Legend of Zelda series. "
		}
	}
}
```
