CREATE TABLE `articlemanagement`.`users` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `username` VARCHAR(250) NOT NULL , 
    `password` VARCHAR(250) NOT NULL , 
    `email` VARCHAR(50) NOT NULL , 
    `type` VARCHAR(20) NOT NULL , 
    `regDateUTC` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `profession` VARCHAR(1000) NOT NULL , 
    `edtorConfirm` VARCHAR(20) NOT NULL , 
    PRIMARY KEY (`id`), UNIQUE (`email`)) 
    ENGINE = InnoDB;



CREATE TABLE `articlemanagement`.`files` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(250) NOT NULL , 
    `editorStatus` VARCHAR(50) NOT NULL , 
    `juryStatus` VARCHAR(50) NOT NULL , 
    `finalStatus` VARCHAR(50) NOT NULL , 
    `writer` INT NOT NULL , 
    `jury` INT NOT NULL , 
    `editorComments` TEXT NOT NULL , 
    `juryComments` TEXT NOT NULL , 
    `sendingDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `file` VARCHAR(1000) NOT NULL , 
    PRIMARY KEY (`id`)) 
    ENGINE = InnoDB;

    --files tablosunun jury ve writer stırları sonradan manuel olarak, phpmyadmin üzerinden foreign key olarak ayarlandı(users.id)