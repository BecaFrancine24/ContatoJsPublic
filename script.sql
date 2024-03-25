CREATE DATABASE db_mvc DEFAULT CHARACTER SET utf8;
USE contatoJS;

CREATE TABLE `contatos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(100) DEFAULT NULL,
    `idade` number(3) DEFAULT NULL,
    `fone` number(25) DEFAULT NULL,
    `fone2` number(25) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3