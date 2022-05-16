module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/goodshepherdmanor/'
    : '/',
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
    'room': {
      entry: './src/pages/Room/main.js',
      template: 'public/index.html',
      title: 'Room',
      chunks: [ 'chunk-vendors', 'chunk-common', 'room' ]
    }
  }
}
