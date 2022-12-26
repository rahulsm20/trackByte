const db=require('../db/connect')

const pieData=async(req,res)=>{
    db.query('select distinct al.albumName,sum(s.seconds) as seconds from artist a, album al, playlist p,song s where a.artId=al.artId and p.albumId=al.albumId and s.albumId=p.albumId and p.songId=s.songId group by al.albumName order by seconds desc limit 4;',
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

module.exports=pieData