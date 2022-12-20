const db=require('../db/connect')

const addToPlaylist = async(req,res)=>{
    const id=req.body.songId
    const name=req.body.songName
    db.query('CALL insertIntoPlaylist(?,?)',[id,name],
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