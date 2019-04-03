CREATE TABLE actors(
    name VARCHAR(250) NOT NULL,
    age INTEGER,
    numbers_of_oscars INTEGER
);

INSERT INTO actors (name, age, numbers_of_oscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (name, age, numbers_of_oscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (name, age, numbers_of_oscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (name, age, numbers_of_oscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (name, age, numbers_of_oscars) VALUES ('John Cho', 43, 0);

SELECT * FROM actors WHERE numbers_of_oscars > 1;
SELECT * FROM actors WHERE age > 30;
