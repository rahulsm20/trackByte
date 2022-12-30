const db=require('../db/connect')

const getSongs=async(req,res)=>{
    db.query('select al.*, a.link, ar.artName from album al, albumcover a,artist ar where al.albumId=a.albumId and al.artId=ar.artId;',
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

module.exports=getSongs