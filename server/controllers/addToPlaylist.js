const db=require('../db/connect')

const addToPlaylist = async(req,res)=>{
    const id=req.body.songId
    const name=req.body.songName
    const albumId=req.body.albumId
    db.query('CALL insertIntoPlaylist(?,?,?)',[id,name,albumId],
    (err,result)=>{
        if(err)
        {
            res.status(400).json(err)
        }
        else{
            res.status(200).json('Song added')
        }
    }
    )
}
module.exports=addToPlaylist