const http = require('http');

const server = http.createServer((req, res) => {
  // Set the Content-Type to text/html for proper rendering of HTML in the browser
  res.setHeader('Content-Type', 'text/html');

  // Define the response message based on the URL path
  let responseMessage;

  // Handle different routes
  switch (req.url) {
    case '/':
      responseMessage = '<h1>Hello World</h1>';
      break;
    case '/pizza':
      responseMessage = '<h1>This is your pizza</h1>';
      break;
    case '/home':
      responseMessage = '<h1>Welcome home</h1>';
      break;
    case '/about':
      responseMessage = '<h1>Welcome to About Us</h1>';
      break;
    case '/node':
      responseMessage = '<h1>Welcome to my Node Js project</h1>';
      break;
    default:
      responseMessage = '<h1>Page Not Found</h1>';
      break;
  }

  // Send the response body
  res.write(responseMessage);
  res.end(); // End the response
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
