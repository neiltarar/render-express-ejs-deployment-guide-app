-- Create a table to store names
CREATE TABLE IF NOT EXISTS names (
                                     id SERIAL PRIMARY KEY,
                                     name VARCHAR(255) NOT NULL
    );

-- Sample data to seed the table
INSERT INTO names (name) VALUES
                             ('John Doe'),
                             ('Jane Smith'),
                             ('Alice Johnson'),
                             ('Bob Brown');