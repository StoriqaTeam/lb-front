const express     = require('express'),
          app     = express(),
    
         path     = require('path'),
          userAPI = require('./API/user'),
     cookieParser = require('cookie-parser'),

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));
app.use('/src/images', express.static(path.resolve(__dirname, 'src/images')));
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use('/src/fonts',  express.static(path.resolve(__dirname, 'src/fonts')));
//Serving cookies
app.use(cookieParser())
// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 5000);
console.log(`App listening on port ${process.env.PORT || 5000}`)
//SSR function import


app.post()


app.get('*', 
  (req, res) => res.status(200).json({root: true})
)