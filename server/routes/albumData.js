const db=require('../db/connect')

const albumData=async(req,res)=>{
    const name=req.params.albumname
    db.query('CALL getAlbum(?);',[name],
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

module.exports=albumData