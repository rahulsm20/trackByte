const db=require('../db/connect')

const addSong = async(req,res)=>{
    const id=req.body.songId
    const name=req.body.songName
    const artId=req.body.artId
    const genre=req.body.genre
    const albumID = req.body.albumID
    const seconds = req.body.seconds
    db.query('INSERT INTO song VALUES (?,?,?,?,?,?)',[id,name,artId,genre,albumID,seconds],
    (err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send('Song added')
        }
    }
    )
}
module.exports=addSong