import mongoose from 'mongoose';

const Connection =  async (username = 'pulkitd132', password = 'XsJ17HX2BYwzENkq') => {
    const URL = `mongodb+srv://${username}:${password}@google-docs-clone.dapppjs.mongodb.net/?retryWrites=true&w=majority`

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true }); 
       console.log("database connect successfully")

    } catch(error){
        console.log("Error while connecting with the database", error);
    }
}

export default Connection;

