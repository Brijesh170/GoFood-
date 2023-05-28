const mongoose=require('mongoose');
// const mongoURI='mongodb+srv://brijesh1221@cluster0.m1wu32k.mongodb.net/db1?retryWrites=true&w=majority';
const mongoURI='mongodb+srv://bkp76684:brijesh1221@cluster0.m1wu32k.mongodb.net/db1?retryWrites=true&w=majority';
// const mongoURI='mongodb://bkp76684:brijesh1221@ac-86yz9uy-shard-00-00.m1wu32k.mongodb.net:27017,ac-86yz9uy-shard-00-01.m1wu32k.mongodb.net:27017,ac-86yz9uy-shard-00-02.m1wu32k.mongodb.net:27017/?ssl=true&replicaSet=atlas-etxlxk-shard-0&authSource=admin&retryWrites=true&w=majority';
// const mongoURI='mongodb+srv://bkp76684:brijesh1221@cluster0.m1wu32k.mongodb.net/db1?retryWrites=true&w=majority';
const mongoDB=async()=>{
 await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
     if(err) console.log("---",err)
     else{
     console.log("connected successful ");
     const fetched_data=await mongoose.connection.db.collection("food_items");
     fetched_data.find({}).toArray (async function(err,data)                //in find function {}means whole data. aura  iss function me read ho gaya . data ko validate mongoose provide karata hain . 
     {
     const  foodCategory=await mongoose.connection.db.collection("foodCategory");
     foodCategory.find({}).toArray(function(err,catData){
          if(err) console.log(err);
          else{
               global.food_items=data;
               global.foodCategory=catData;

          }
     })
         

     })

     }
});
}
module.exports=mongoDB;













//copy paste

// const mongoose = require('mongoose')
// const mongoURI='mongodb+srv://bkp76684:brijesh1221@cluster0.m1wu32k.mongodb.net/db1?retryWrites=true&w=majority';
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };
