DROP DATABASE IF exists Animales;
CREATE DATABASE Animales;
use Animales;
CREATE TABLE Duenyo (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    edad INT not null,
    dni VARCHAR(9) unique not null,
    PRIMARY KEY (id)
);

CREATE TABLE Especie (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(20) unique NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Animal (
    id INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    edad INT not null,
    especie int,
    n_chip int unique not null,
    duenyo int,
    PRIMARY KEY (id),
    foreign key (especie) references Especie(id) on delete set null on update cascade,
    foreign key (duenyo) references Duenyo(id) on delete set null on update cascade
);
