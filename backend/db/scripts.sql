
-------- Create DataBase --------
create DATABASE ticketing;
\c ticketing

-------- Create Tables ------------
DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS customers;
CREATE TABLE customers(
    id SERIAL NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    season_pass_holder BOOLEAN,
    PRIMARY KEY(id)
);


CREATE TABLE tickets(
    id SERIAL NOT NULL,
    date DATE, 
    match TEXT,
    seat INTEGER,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    PRIMARY KEY (id)

);



-----------------------   DATA ENTRIES -----------
INSERT INTO customers(name, season_pass_holder) VALUES ('Freddy Adu', true);
INSERT INTO customers(name, season_pass_holder) VALUES ('Jozy Altidore', true);
INSERT INTO customers(name, season_pass_holder) VALUES ('Micheal Bradley', false);
INSERT INTO customers(name, season_pass_holder) VALUES ('Charlie Davies', false);
INSERT INTO customers(name, season_pass_holder) VALUES ('Brian McBride', true);
INSERT INTO customers(name, season_pass_holder) VALUES ('Landon Donavon', true);



