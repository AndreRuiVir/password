#CREATE DATABASE biblioteca;

USE biblioteca;

/*CREATE TABLE autores(
    id_autor INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (128) NOT NULL,
    apellido VARCHAR (255),
    PRIMARY KEY (id_autor));
);

CREATE TABLE editoriales(
    id_editorial INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (255) NOT NULL,
    PRIMARY KEY (id_editorial)
);

CREATE TABLE temas(
    id_tema INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (255) NOT NULL,
    PRIMARY KEY (id_tema)
);

CREATE TABLE libros(
    id_libro INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR (255) NOT NULL,
    edicion VARCHAR (32) NOT NULL,
    fk_id_autor INT NOT NULL,
    fk_id_editorial INT NOT NULL,
    fk_id_tema INT NOT NULL,
    PRIMARY KEY (id_libro),
    FOREIGN KEY (fk_id_autor) REFERENCES autores(id_autor),
    FOREIGN KEY (fk_id_editorial) REFERENCES editoriales(id_editorial),
    FOREIGN KEY (fk_id_tema) REFERENCES temas(id_tema)
);*/

#Meterle datos

-- Insert data into autores table
INSERT INTO autores (nombre, apellido) VALUES
('Gabriel', 'García Márquez'),
('J.K.', 'Rowling'),
('George', 'Orwell'),
('Jane', 'Austen'),
('Haruki', 'Murakami'),
('Agatha', 'Christie'),
('Fyodor', 'Dostoevsky'),
('Margaret', 'Atwood'),
('Ernest', 'Hemingway'),
('Maya', 'Angelou');

-- Insert data into editoriales table
INSERT INTO editoriales (nombre) VALUES
('Penguin Random House'),
('HarperCollins'),
('Simon & Schuster'),
('Oxford University Press'),
('Vintage Books'),
('Hachette Book Group'),
('Macmillan Publishers'),
('Wiley'),
('Pearson'),
('Bloomsbury');

-- Insert data into temas table
INSERT INTO temas (nombre) VALUES
('Fiction'),
('Mystery'),
('Science Fiction'),
('Romance'),
('Classics'),
('Fantasy'),
('Biography'),
('History'),
('Self-Help'),
('Poetry');

-- Insert data into libros table
INSERT INTO libros (titulo, edicion, fk_id_autor, fk_id_editorial, fk_id_tema) VALUES
('Cien años de soledad', '1st Edition', 1, 1, 1),
('Harry Potter and the Sorcerer''s Stone', '1st Edition', 2, 2, 6),
('1984', '1st Edition', 3, 3, 3),
('Pride and Prejudice', '1st Edition', 4, 4, 4),
('Norwegian Wood', '1st Edition', 5, 5, 1),
('Murder on the Orient Express', '1st Edition', 6, 6, 2),
('Crime and Punishment', '1st Edition', 7, 7, 2),
('The Handmaid''s Tale', '1st Edition', 8, 8, 4),
('The Old Man and the Sea', '1st Edition', 9, 9, 1),
('I Know Why the Caged Bird Sings', '1st Edition', 10, 10, 8);
