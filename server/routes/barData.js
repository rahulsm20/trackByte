const db=require('../db/connect')

const barData=async(req,res)=>{
    db.query('select s.genre, sum(s.seconds) as seconds from song s,playlist p where s.songId=p.songId group by s.genre;',
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

module.exports=barData