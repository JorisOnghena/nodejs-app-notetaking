# Note-taking API
## Description
A test and learning project as I didn't want to write the standard "Hello World" :)
This little node.js application will expose a couple API endpoints to manipulate notes. 

It is largely based on this [tutorial](https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/).

## npm Dependencies

* body-parser
* express

## How to run
In a terminal type:
* node server
* npm run dev (if "nodemon" is installed as dev dependency)

## Api endpoints

**GET** http://localhost:54321/notes/

*Result body*
```json
[
    {
        "title": "test",
        "id": 1
    },
    {
        "title": "testing 1 2 3 4",
        "id": 2
    }
]
```
**GET** http://localhost:54321/notes/**2**

*Result body*
```json
[
    {
        "title": "testing 1 2 3 4",
        "id": 2
    }
]
```
**POST** http://localhost:54321/notes/

*Request body*
```json
{
    "title": "testing new",
    "id": 3
}
```
*Result body*
```json
[
    {
        "title": "test",
        "id": 1
    },
    {
        "title": "testing 1 2 3 4",
        "id": 2
    },
    {
        "title": "testing new",
        "id": 3
    }
]
```
**PUT** http://localhost:54321/notes/

*Request body*
```json
{
    "title": "testing new 2",
    "id": 3
}
```
*Result body*
```json
[
    {
        "title": "test",
        "id": 1
    },
    {
        "title": "testing 1 2 3 4",
        "id": 2
    },
    {
        "title": "testing new 2",
        "id": 3
    }
]
```
**DELETE** http://localhost:54321/notes/**2**

*Result body*
```json
[
    {
        "title": "test",
        "id": 1
    },
    {
        "title": "testing new",
        "id": 3
    }
]
```