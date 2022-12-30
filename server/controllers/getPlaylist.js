const db=require('../db/connect')

const getPlaylist=async(req,res)=>{
    db.query('CALL getPlaylist()',
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

module.exports=getPlaylist