const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://deliver:deliver.1234@cluster1.us0iwgk.mongodb.net/deliverapp?retryWrites=true&w=majority'

const mongoDB = async () => {
  await mongoose.connect(mongoURI).then(() => {
    console.log("connected successfully")
    fetchData();
    })
    
    
    .catch((err) => {
      console.log(err);
    });
};


const  fetchData = async function() {
  try {
      const fetched_data = mongoose.connection.db.collection("fooditems");
      const data = await fetched_data.find({}).toArray();
      console.log();
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

module.exports = mongoDB
