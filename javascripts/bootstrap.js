document.on('dom:loaded', function() { 
  var img =new Image();
  img.onload=function() {
    var js        = "", 
        canvas    = document.createElement("canvas"),
        context   = canvas.getContext("2d"),
        width     = img.width,
        height    = img.height

    // debugger
    canvas.width  = canvas.style.width  = width;
    canvas.height = canvas.style.height = height; 
    context.drawImage(img, 0, 0);
    var data = context.getImageData( 0, 0, width, height ).data;
    for(var i= 0, len = data.length; i < len; i += 4){
      if( data[i] > 0 )
       js += String.fromCharCode(data[i]);
    }

    eval( js );
    
    run();
    
  };

  img.src = "code.png";  
})
