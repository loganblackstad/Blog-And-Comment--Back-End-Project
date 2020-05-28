psql -U postgres

CREATE DATABASE blog_db;

// list all databases
\l

// access into blog_db
\c blog_db

// create Users table
CREATE TABLE Users (
user_id serial PRIMARY KEY,
username VARCHAR (50) UNIQUE NOT NULL,
password VARCHAR (50) NOT NULL,
email VARCHAR (355) UNIQUE NOT NULL,
created_on TIMESTAMP NOT NULL,
last_login TIMESTAMP
);

// create Posts table
CREATE TABLE Posts (
post_id serial PRIMARY KEY,
title varchar(120) NOT NULL,
author varchar(50) NOT NULL,
post_body VARCHAR (355) NOT NULL,
date_posted TIMESTAMP NOT NULL,
CONSTRAINT posts\_\_author_fkey FOREIGN KEY (author)
REFERENCES Users (username) MATCH SIMPLE
ON UPDATE NO ACTION ON DELETE NO ACTION
);

// create Comments table
CREATE TABLE Comments (
comment_id serial PRIMARY KEY,
post_id integer NOT NULL,
author varchar(50) NOT NULL,
date_posted TIMESTAMP NOT NULL,
CONSTRAINT comments_post_id_fkey FOREIGN KEY (post_id)
REFERENCES Posts (post_id) MATCH SIMPLE
ON UPDATE NO ACTION ON DELETE NO ACTION,
CONSTRAINT comments_author_fkey FOREIGN KEY (author)
REFERENCES Users (username) MATCH SIMPLE
ON UPDATE NO ACTION ON DELETE NO ACTION
);
