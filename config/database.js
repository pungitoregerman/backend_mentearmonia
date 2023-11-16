const mongoose = require('mongoose')
require('dotenv')

let connection = async () => {
    try{
        mongoose.connect(
            process.env.LINK_DB,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
                
        }
        )
        console.log('connected to DB');
    }catch(error){
        console.log(error.message);
    }
}
connection()