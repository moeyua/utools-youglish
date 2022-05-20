const utools = window.utools;

window.exports = {
    "YouGlish": {
       mode: "none",
       args: {
          enter: (action) => {
             // action = { code, type, payload }
            //  utools.hideMainWindow()
             utools.ubrowser.goto('https://youglish.com/pronounce/' + action.payload + '/english?').run()
            //  utools.outPlugin()
          }  
       } 
    }
 }