import Company from "components/company";
import Faq from "components/faq";
import Footer from "components/footer";
import GetStarted from "components/getStarted";
import Intro from "components/intro";
import Portfolio from "components/portfolio";
import Service from "components/service";
import Testimonial from "components/testimonial";
import {connectToDb} from 'lib/connectdb'
import Head from "next/head";
export default function Home({testimos}) {

  return (
    <>
    <Head>
      <title>Asenwi Landing Page</title>
      <meta name="description" content="Asenwi company Landing page" />
    </Head>
    <Intro/>
    <Company/>
    <Service/>
    <Testimonial testimos={testimos} />
    <Faq/>
    <Portfolio/>
    <GetStarted/>
    <Footer/>
    </>
  )
}


export async function getStaticProps(){
  try{
        
    const {mongoClient} = await connectToDb();
   
    const db = mongoClient.db('vercel-integrate');
    const collection = db.collection('testimonial');
 
    const results = await collection.find({}).toArray();
    return {
      props:{
        testimos: JSON.stringify(results)
      }
    }
}catch(e){
    console.log('Connection error: on api ', e)
    return {
      props:{
        testimos: []
      }
    }
}
}