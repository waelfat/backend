CREATE TABLE flights (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    origin VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    duration INTEGER NOT NULL,
);