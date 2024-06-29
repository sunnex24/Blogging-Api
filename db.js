const mongoose = require('mongoose');
const db = (async () => {
  try {
    await mongoose.connect('mongodb://102.88.35.129/32:27017-Blog Api', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected');
  } catch (error) {
    comsole.log(error);
  }
})();