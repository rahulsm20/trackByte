const db=require('../db/connect')

const addToPlaylist = async(req,res)=>{
    const id=req.body.songId
    const name=req.body.songName
    const albumId=req.body.albumId
    db.query('CALL insertIntoPlaylist(?,?,?)',[id,name,albumId],
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
module.exports=addToPlaylist