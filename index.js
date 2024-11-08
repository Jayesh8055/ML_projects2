const express = require('express'); 

const app = express(); 
app.use(express.static('public'));  


app.get('/', (req, res) => {
  res.send('Hello World!');  
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the application by typing node index.js in the terminal.
// index.js is the entry point of the application. It creates an Express app, 
  // serves static files from the public directory, defines a route for the root path, 
  // and starts the server on port 3000. When a user visits http://localhost:3000 in their browser, 
  // they will see the message "Hello World!".

