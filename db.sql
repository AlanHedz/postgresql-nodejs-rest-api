CREATE DATABASE express_users;

USE express_users;

CREATE TABLE users (
	id serial primary key,
	name varchar(250) not null,
	email varchar(250) unique
);