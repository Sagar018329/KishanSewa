const app=require('./app')

const connectDatabase =require('./config/database')

const dotenv=require('dotenv');


//handles the uncut expectations
process.on('uncaughtException',err=>{
    console.log(`ERROR: ${err.stack}`);
    console.log('Sutting down  due to uncut' )
    
        process.exit(1);
     
})

//setting config
dotenv.config({path:'backend/config/config.env'})

//connecting to database
connectDatabase();

const server =app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//handle unhandled Errors
process.on('unhandledRejection',err=>{
    console.log(`ERROR: ${err.stack}`);
    console.log('Sutting down server')
    server.close(()=>{
        process.exit(1);
    })
})