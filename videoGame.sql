
create role ttp_user;
alter role ttp_user CREATEDB;


CREATE DATABASE video_games_api

\c video_games_api

CREATE TABLE videogames(
    vg_id int primary key, 
    vg_name varchar(30), 
    genre_id int
);

CREATE TABLE genre(
    vg_id int primary key,
    genre_name varchar(30)
);

CREATE TABLE game_publisher(
    vg_id int primary key, 
    developer varchar(30), 
    publisher varchar(30), 
    releaseDate date
);

CREATE TABLE game_development(
    vg_id int primary key, 
    developer varchar(30), 
    publisher varchar(30), 
    releaseDate date
);

CREATE TABLE game_ratings (
    vg_id int primary key, 
    user_rating int,
    critics_rating int
);
insert into videogames values(1, 'GTA', 1);
insert into videogames values(2, 'FIFA', 2);
insert into videogames values(3, 'NBA 2K22', 3);
insert into videogames values(4, 'God of wars', 4);
insert into genre values(1, 'violence');
insert into genre values(2, 'soccer');
insert into genre values(3, 'basketball');
insert into genre values(4, 'adventure');
insert into game_publisher values(1, 'rockstar', 'rockstar', '2020-02-12');
insert into game_publisher values(2, 'electronic arts', 'FIFA', '2021-10-23');
insert into game_publisher values(3, '2k games', '2kgames', '2021-11-12');
insert into game_publisher values (4, 'electronics arts', 'Pro', '2020-12-04');
insert into game_ratings values (1, 8 , 10);
insert into game_ratings values (2, 7, 9);
insert into game_ratings values (3, 9, 9);
insert into game_ratings values (4, 10, 8);