const config ={
    test: /\.(svg)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  
  module.exports = config;