const mongoClient=require('mongodb').MongoClient

const state={
    db:null
}

module.exports.connect=function(done){
    const url='mongodb+srv://kiran:185198131@cluster0.meialdh.mongodb.net/ReduxAssignment'
    const dbname='getzone'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

    
}

module.exports.get=function(){
    return state.db
}