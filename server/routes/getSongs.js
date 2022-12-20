const db=require('../db/connect')

const getSongs=async(req,res)=>{
    db.query('SELECT * FROM song',
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