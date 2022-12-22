const db=require('../db/connect')

const deleteFromPlaylist = async(req,res)=>{
    const id=req.body.songId
    db.query('delete from playlist where songId=?;',[id],
    (err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send('Song deleted')
        }
    }
    )
}
module.exports=deleteFromPlaylist