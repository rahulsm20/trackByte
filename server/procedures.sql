--Table Creation

create table label(
	labelId int primary key,
	labelName varchar(50)
	);
	
create table artist(
artId int primary key,
artName varchar(50),
labelId int,
foreign key (labelId) REFERENCES label(labelId)
);

insert into label values(1,'Geffen Records');
insert into label values(2,'Universal Records');
insert into label values(3,'Death-Row Records');
insert into label values(4,'Sony Music');
insert into label values(5,'Republic Records');

insert into artist values(11,'Ariana Grande',2);
insert into artist values(12,'Shawn Mendes',2);
insert into artist values(13,'Guns N` Roses',1);
insert into artist values(14,'Eminem',3);
insert into artist values(15,'Prateek Kuhad',4);
insert into artist values(16,'Taylor Swift',5);


create table album(
albumId int primary key,
albumName varchar(50),
artId int,
foreign key(artId) REFERENCES artist(artId)
);

create table albumcover(
albumId int primary key,
link varchar(255),
foreign key(albumId) references album(albumId)
);

create table playlist(
songId int primary key,
songName varchar(50),
albumId int,
foreign key(albumId) REFERENCES album(albumId)
);

create table song(
songId int primary key,
songName varchar(100),
genre varchar(50),
albumId int, 
seconds int,
artId int,
foreign key(albumId) REFERENCES album(albumId),
foreign key(artId) REFERENCES artist(artId)
);

insert into song values (2,'Kid In Love','Pop',21,170,11),
(1,'7 rings','Pop',22, 182,12);
insert into albumcover values (22,'https://m.media-amazon.com/images/I/81FH-xfuK5L._UF1000,1000_QL80_.jpg');

insert into albumcover values (
    21,"https://m.media-amazon.com/images/I/71o9-lBNSeL._SY450_.jpg"
);
insert into albumcover values(
    23,"https://m.media-amazon.com/images/I/81BROAmi6KL._SL1400_.jpg"
);
insert into albumcover values(
    22,"https://m.media-amazon.com/images/I/81FH-xfuK5L._SL1500_.jpg"
);

insert into album(albumId,albumName,artId)
values(41,'Appetite',13);
insert into albumcover values (41,"https://m.media-amazon.com/images/I/71H9ZR6EGFL._SL1400_.jpg");
insert into song 
values(46,'Jungle',13,'Hard-Rock',41,200);

insert into album(albumId,albumName,artId)
values(24,'Midnights',16);
insert into album(albumId,albumName,artId)
values(25,'In Tokens & Charms',15);
insert into song values (39,'Oh Love',15,'Indie-Pop',25,211);
insert into albumcover values (25,"https://i1.sndcdn.com/artworks-000282586706-uhfdd3-t500x500.jpg");
insert into albumcover values (24,"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ypl8mcswjow3jibjgmjn/t-swift-midnights?fimg-ssr-default");
insert into song
values (25,'Anti-Hero',16,'Pop',24,225);




insert into song values
(48,'Clay',17,'Pop',26,216);
insert into albumcover values(26,'https://m.media-amazon.com/images/I/813UO5cS2IL._AC_SX466_.jpg');
insert into album (albumId,albumName,artId) values(26,'Perfectly Imperfect',17);
insert into artist values(17,'Grace VanderWaal',2);

insert into album(albumId,albumName,artId)
values (22,'Sweetener',11);
insert into album (albumId,albumName,artId)
values (21,'Handwritten',12);
insert into song 
values (34,'Never Be Alone',12,'Pop',21,156);
insert into song 
values (35,'Life of the Party',12,'Pop',21,160);
insert into song
values (36,'Mercy',12,'Pop',21,190);
insert into song
values (38,'No Tears Left to Cry',11,'Pop',22,210);
insert into album(albumId,albumName,artId)
values(23,'Encore',14);
insert into song
values(37,'Mockingbird',14,'Hip-Hop',23,200);


--Procedures

DELIMITER //

CREATE PROCEDURE getPlaylist()
BEGIN
	SELECT p.songName,a.artName,al.albumName,s.genre,l.labelname,s.songId,al.albumId
	FROM playlist p, song s,album al,artist a,label l
	WHERE p.songId=s.songId AND s.albumId=al.albumId 
	AND al.artId=a.artId AND a.labelId=l.labelId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE insertIntoPlaylist(IN Id int , IN Name varchar(20), IN albumID int)
BEGIN
	INSERT INTO playlist  (songId,songName,albumId) VALUES (Id,Name,albumID);
END //

DELIMITER ;


DELIMITER //

CREATE PROCEDURE getAllAlbums()
BEGIN
	SELECT p.songName,a.artName,al.albumName,s.genre,l.labelname
	FROM playlist p, song s,album al,artist a,label l
	WHERE p.songId=s.songId AND s.albumId=al.albumId 
	AND al.artId=a.artId AND a.labelId=l.labelId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getAlbum(IN albumName varchar(20))
BEGIN
SELECT al.albumName, a.link, ar.artName, s.songName,s.seconds,s.genre,l.labelName,s.songId
FROM album al, albumcover a,artist ar, song s,label l
WHERE al.albumId=a.albumId AND al.artId=ar.artId AND ar.labelId=l.labelId
AND s.albumId=al.albumId AND al.albumName=albumName;
END //

DELIMITER ;


