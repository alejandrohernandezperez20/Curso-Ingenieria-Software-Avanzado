--CREA LA BASE DE DATOS---
CREATE DATABASE academia;

--empezando a usar  la base de datos academia
USE academia;
--Se crea la tabla notas en la base de datos academia
CREATE TABLE notas(
    nombre VARCHAR(30),
    identificacion INT(15),
    calificacion VARCHAR(15)
);
--Se crea la tabla profesores en la base de datos
CREATE TABLE profesores(
    nombre VARCHAR(30),
    curso VARCHAR(30),
    horario VARCHAR(15),
    telefono INT(9),
    observacion VARCHAR(50)
);
--Se crea la tabla inscripciones para los alumnos en la base de datos
CREATE TABLE inscripciones(
    nombre VARCHAR(30),
    seguimiento VARCHAR(30),
    dni VARCHAR(9),
    direccion VARCHAR(30),
    telefono INT(9),
    curso VARCHAR(30),
    horario VARCHAR(30),
    modalidad VARCHAR(30),
    correo VARCHAR(30)
);
