CREATE DATABASE IF NOT EXISTS passwords;

USE passwords;

-- Tabla para almacenar información de usuarios
CREATE TABLE usuarios (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    correo_electronico VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    nombre_completo VARCHAR(255),
    PRIMARY KEY (id_usuario)
);

-- Tabla para almacenar información de brechas de seguridad
CREATE TABLE brechas_seguridad (
    id_brecha INT NOT NULL AUTO_INCREMENT,
    nombre_brecha VARCHAR(255) NOT NULL,
    fecha_detencion DATE,
    PRIMARY KEY (id_brecha)
);

-- Tabla para relacionar usuarios con las brechas de seguridad afectadas
CREATE TABLE usuarios_brechas (
    id_relacion INT NOT NULL AUTO_INCREMENT,
    fk_id_usuario INT NOT NULL,
    fk_id_brecha INT NOT NULL,
    PRIMARY KEY (id_relacion),
    FOREIGN KEY (fk_id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (fk_id_brecha) REFERENCES brechas_seguridad(id_brecha)
);

-- Tabla para almacenar información sobre la aplicación y su desarrollo
CREATE TABLE informacion_aplicacion (
    id_informacion INT NOT NULL AUTO_INCREMENT,
    version_aplicacion VARCHAR(32) NOT NULL,
    fecha_lanzamiento DATE NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id_informacion)
);

-- Inserts para la tabla 'usuarios'
INSERT INTO usuarios (correo_electronico, contrasena, nombre_completo) VALUES
('usuario1@example.com', 'contrasena123', 'Usuario Uno'),
('usuario2@example.com', 'clave456', 'Usuario Dos'),
('usuario3@example.com', 'secreto789', 'Usuario Tres');

-- Inserts para la tabla 'brechas_seguridad'
INSERT INTO brechas_seguridad (nombre_brecha, fecha_detencion) VALUES
('Brecha 1', '2023-01-15'),
('Brecha 2', '2023-02-22'),
('Brecha 3', '2023-03-10');

-- Inserts para la tabla 'usuarios_brechas'
INSERT INTO usuarios_brechas (fk_id_usuario, fk_id_brecha) VALUES
(1, 1),
(2, 2),
(3, 3),
(1, 2),
(2, 3),
(3, 1);

-- Inserts para la tabla 'informacion_aplicacion'
INSERT INTO informacion_aplicacion (version_aplicacion, fecha_lanzamiento, descripcion) VALUES
('v1.0', '2023-01-01', 'Primera versión de la aplicación'),
('v1.1', '2023-02-15', 'Corrección de errores y mejoras de rendimiento'),
('v2.0', '2023-04-01', 'Nuevas funcionalidades y actualizaciones de seguridad');
