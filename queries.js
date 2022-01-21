const Pool = require("pq").Pool
const pool = new Pool({
    user : "user",
    host : "localHost",
    database : "video_games_api",
    port : 5432
})

const getVideoGames = (res,req) =>{
    pool.query("selete * from videogames",(error,result)=>{
        if(error)
            throw error.message

        res.status(200).json(result.rows)
    })
}

const getVideoGameById = (res,req)=>{
    const id = parseInt(req.params.id)

    pool.query("selete * from videogames where id = $1",[id], (error,result)=>{
        if(error)
            throw error.message
        
        res.status(200).json(result.rows)
    })
}

const createVideoGame = (res,req)=>{
    const {vg_id,vg_name,genre_id} = req.body

    pool.query("insert into videogames (vg_id,vg_name,genre_id) values ($1,$2)",
    [vg_id,vg_name,genre_id], (error,result)=>{
        if(error)
            throw error.message

        res.status(201).send("Video Game Created")
    } )
}

const updateVideoGame = (res,req)=>{
    const id = parseInt(req.params.id)
    const {vg_id,vg_name,genre_id} = req.body

    pool.query("update videogames set vg_id = $1, vg_name = $2, genre_id = $3 where id = $4",
    [vg_id,vg_name,genre_id,id], (error,result)=>{
        if(error)
            throw error.message

        res.status(201).send("Video Game Updated")
    } )
}

const deleteVideoGame = (res,req)=>{
    const id = parseInt(req.params.id)

    pool.query("delete from videogames where id = $1",[id], (error,result)=>{
        if(error)
            throw error.message

        res.status(201).send("Video Game Deleted")
    } )
}

module.exports = {
    getVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}