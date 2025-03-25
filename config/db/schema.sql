CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE usuarios (
  id SERIAL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  rol VARCHAR(25),
  lenguage VARCHAR(20)
);

SELECT * FROM usuarios;