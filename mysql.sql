/* Set up db */
 CREATE DATABASE `hackgenesis`;
 ALTER DATABASE `hackgenesis` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

 CREATE USER 'hackgenesis_user'@'localhost' IDENTIFIED BY 'password';
 GRANT ALL PRIVILEGES ON `hackgenesis`.* TO 'hackgenesis_user'@'localhost';

 use hackgenesis;
 
 CREATE TABLE `refsite`(
   `id`            INT AUTO_INCREMENT NOT NULL,
   `link` 		   VARCHAR(255),
   `type`      	   INT,
   primary key(`id`)
  );
 CREATE TABLE `types`(
   `id`            INT AUTO_INCREMENT NOT NULL,
   `type`      	   VARCHAR(255),
   primary key(`id`)
  );
