const {MongoClient}=require('mongodb');

const client=new MongoClient('mongodb://127.0.0.1:27017');

async function register(data){
//{'username':'bharath','password':'1234567','email':'bharath@123gmail.com'}
await client.connect();

const db=client.db('scholarship');
const collection=db.collection('register');
//Test Case - username
const result=await collection.find({'username':data.username}).toArray();
if(result.length>0){
    return 'username already taken';
}
//Test Case=Email

const result1=await collection.find({'email':data.email}).toArray
 if(result1.length>0){
    return 'account already exist';
 }
 const result2=await collection.insertOne(data);
 return 'Account Created Successfully'
}


async function login(data){
    // {'username':'madhu','password':'123'}
    await client.connect();

    const db=client.db('scholarship');
    const collection=db.collection('register');

    // test-case1: username
    const result1=await collection.find({'email':data.email}).toArray();
    if(result1.length>0){
        // test-case2 - password validate
        if(result1[0].password==data.password){
           
            return 'valid login';
        } else {
    
            return 'password incorrect';
        }
    } else{
    
        return 'no such account';
    }

}
    async function scholar(data){
        // {'username':'madhu','password':'123'}
        await client.connect();
    
        const db=client.db('scholarship');
        const collection=db.collection('scholar');
    
        // test-case1: username
        //const result1=await collection.find([{'resident':data.resident},{'income':data.income},{'cgpa':data.cgpa}]).toArray();
        // const result2=await collection.find({'income':data.income}).toArray();

        
        const result=await collection.insertOne(data);
        return 'INSERTED SUCCESSFULLY';
    
}
module.exports={
    register,
    login,
    scholar
}