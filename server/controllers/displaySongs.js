const db=require('../db/connect')

const displaySongs=async(req,res)=>{
    db.query('SELECT s.songId,s.songName,a.artName,s.genre,s.seconds,s.albumId FROM song s, artist a where s.artId=a.artId',
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

module.exports=displaySongs