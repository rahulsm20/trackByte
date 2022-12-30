const db=require('../db/connect')

const albumData=async(req,res)=>{
    const name=req.params.albumname
    db.query('CALL getAlbum(?);',[name],
    (err,result)=>{
        if(err)
        {
            res.status(400).send(err)
        }
        else
        {
            res.status(200).json(result)
        }
    })
}

module.exports=albumData