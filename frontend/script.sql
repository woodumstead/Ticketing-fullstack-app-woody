DROP DATABASE if exists ticketing;
create DATABASE ticketing;
\c ticketing

CREATE TABLE customers(
id SERIAL NOT NULL,
name VARCHAR(255) UNIQUE NOT NULL,
season_pass_holder BOOLEAN,
PRIMARY KEY(id) );

CREATE TABLE tickets(
id SERIAL NOT NULL,
date DATE,
match TEXT,
seat INTEGER,
customer_id INTEGER,
FOREIGN KEY (customer_id) REFERENCES customers(id),
PRIMARY KEY (id)
);