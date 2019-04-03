CREATE TABLE cities(
    id SERIAL PRIMARY KEY,
    city VARCHAR(250) NOT NULL,
    state VARCHAR(250),
    country VARCHAR(250),
    population INTEGER,
    description TEXT
);
