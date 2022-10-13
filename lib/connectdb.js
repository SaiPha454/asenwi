import {MongoClient} from 'mongodb'

const uri = process.env.MONGODB_URI;
const options={};

let mongoClient;
if(!process.env.MONGODB_URI){
    throw new Error('Please  add your mongodb uri env file')
}

export async function connectToDb(){
    try{
        if(mongoClient){
            return {mongoClient}
        }
        mongoClient= await (new  MongoClient(uri,options)).connect();
        return {mongoClient};
    }catch(e){
        console.log('Connection error while trying to connect',e)
    }
}