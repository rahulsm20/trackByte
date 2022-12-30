const db=require('../db/connect')

const getFavArt=async(req,res)=>{
    db.query('select distinct a.artName,c.link, sum(s.seconds) as seconds from artist a, album al, playlist p,song s,albumcover c where a.artId=al.artId and p.albumId=al.albumId and s.albumId=al.albumId and al.albumId=c.albumId and s.songId=p.songId group by a.artName,al.albumName,c.link,s.seconds order by seconds desc limit 1;',
    (err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json(result)
        }
    })
}

module.exports=getFavArt