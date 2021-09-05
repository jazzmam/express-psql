CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);

CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temerature int
);

CREATE TABLE lives(
    monster character varying(50),
    habitat character varying(50)
);

INSERT INTO monsters(name, personality)
VALUES
('monster1', 'agressive'),
('monster2', 'agressive2'),
('monster3', 'agressive3');

INSERT INTO habitats(name, climate, temerature)
VALUES
('dessert', 'dry', 100),
('forrest', 'haunted', 40),
('mountain', 'icy', 60);

INSERT INTO lives(monster, habitat)
VALUES
('monster1', 'dessert'),
('monster2', 'forrest'),
('monster3', 'mountain');
