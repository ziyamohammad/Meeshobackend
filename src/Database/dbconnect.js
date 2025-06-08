import mongoose from "mongoose" ;

const dbconnect = async()=>{
    try{
       const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
       console.log(`Database connected /n host=${connectioninstance.connection.host}`)
    }catch(error){
        console.log("Error connecting to database");
    }
}

export {dbconnect}