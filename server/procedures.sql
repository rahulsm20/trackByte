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

CREATE PROCEDURE insertIntoPlaylist(IN Id int , IN Name varchar(20))
BEGIN
	INSERT INTO playlist  (songId,songName) VALUES (Id,Name);
END //

DELIMITER ;
drop procedure insertIntoPlaylist;
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

drop procedure getAlbum;

select * from 
