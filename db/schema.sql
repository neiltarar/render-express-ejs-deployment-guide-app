-- data modelling
-- define the schema of the database
-- SQL

CREATE DATABASE render_demo;

CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50)
);

-- seeding 
INSERT INTO students (first_name, last_name) VALUES
('Mark', 'Adrian Velasquez'),
('Bernadine', 'Dao'),
('Leonardo', 'Manteit'),
('Georgia', 'Scott'),
('Eric', 'Stuart-Jones'),
('Alexander', 'Klaus Kampfer'),
('Angela', 'Liu'),
('Jen', 'Feng Wong'),
('Ting', 'Li');