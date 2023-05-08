const mongoose = require('mongoose');
// incase it not connect then paste ofter DB
// ,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false

// }
const DB = process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log(`done`);
}).catch((err)=> console.log(`not done`));
