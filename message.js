const clc  = require ( "cli-color" ) ;


const userMessage = {
    
    error: (message) => console.log(clc.red(message)),
  
 
    success: (message) => console.log(clc.green(message))
  };
  
  module.exports = userMessage;