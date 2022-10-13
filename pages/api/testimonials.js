import {connectToDb} from '../../lib/connectdb'


export default async function handler(req,res){
    try{
        
        const {mongoClient} = await connectToDb();
       
        const db = mongoClient.db('vercel-integrate');
        const collection = db.collection('testimonial');
     
        const results = await collection.find({}).toArray();
        res.status(200).json(results)
    }catch(e){
        console.log('Connection error: on api ', e)
    }
}