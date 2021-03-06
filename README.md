# CRUD APPLICATION  "My movie librairy"

My movie library has been created with a MERN stack application (Mongo, Express, React, NodeJS).
On the movies page, it display your full list of movies.
When you click on a movie title you will be able to see the selected movie information concerning  the main actor, the genres and read the movie's description with the picture.
You can keep building the library by making update, delete and also add any movies you want to include in the movie library.

## Project link on Heroku
https://crud-movie-application.herokuapp.com

## Install

In each directory, run
```
npm install
```
## Run
On Client
```
npm start
```
On Server
```
npm run dev
```

## The Server app expose with those following routes	
movie routes/ endpoints	

| HTTP verb | URL                  | Request body | Action                      |
|-----------|----------------------|--------------|-----------------------------|
| POST      | /api/movies          | JSON         | Creates a new movie         |
| GET       | /api/movies          | (empty)      | Returns all the movies      |
| GET       | /api/movies/:movieId | (empty)      | Returns the specified movie |
| PUT       | /api/movies/:movieId | JSON         | Edits the specified movie   |
| DELETE    | /api/movies/:movieId | (empty)      | Deletes the specified movie |

genre routes/ endpoints	
| HTTP verb | URL                  | Request body | Action                      |
|-----------|----------------------|--------------|-----------------------------|
| POST      | /api/genres          | JSON         | Creates a new movie         |
| GET       | /api/genres          | (empty)      | Returns all the movies      |
| GET       | /api/genres/:genreId | (empty)      | Returns the specified movie |
| PUT       | /api/genres/:genreId | JSON         | Edits the specified movie   |
| DELETE    | /api/genres/:genreId | (empty)      | Deletes the specified movie |

## The Client app expose with those following routes

| Route       | HTTP Verb | Component       | Action               |
|-------------|-----------|-----------------|----------------------|
| /movies     | GET       | MoviesListPage  | Get all movies       |
| /movies     | POST      | AddMoviePage    | Create a movie       |
| /movies/:id | GET       | MovieDetailPage | Get a movie by id    |
| /movies/:id | DELETE    | MovieDetailPage | Delete a movie by id |
| /movies/:id | PUT       | UpdateMoviePage | Update a movie by id |

