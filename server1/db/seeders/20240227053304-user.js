'use strict';

module.exports = {
  up: (models, mongoose) => {
   
     
      return models.users
          .insertMany ([
            {
              _id : "65dd7801a5cefd359d07692d",
              name : "adith",
              email : "adhi@gmail.com"
            }

          ])
           
        
      .then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
   
  },

  down: (models, mongoose) => {
  
      return models.users
       
          .deleteMany ({
            _id:{
              $in:[
                "65dd7801a5cefd359d07692d"
              ],
            },

          })
        
      .then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
   
  },
};
