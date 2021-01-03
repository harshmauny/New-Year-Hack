$(document).ready(function() {
    $('#resize').on('change', function() {
        console.log(this.files)
        Array.from(this.files).forEach(file => { 
            resizeImages(file, function(dataUrl) {
             uploadResizedImages(dataUrl);
          });
        });
    });

    function resizeImages(file, complete) {
      var reader = new FileReader();
        reader.onload = function(e) {
            var img = new Image();
            img.onload = function() {
              complete(resizeInCanvas(img));
            };
            img.src = e.target.result;
          }
        reader.readAsDataURL(file);
    }
  });

  async function resizeInCanvas(img) {
      var c = document.createElement("canvas");
      c.height = 768
      c.width = 1366
      var ctx = c.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, c.width, c.height);
      i = 1;
      h = img.height
      w = img.width
      while(h > c.height-60)
      {
          console.log(h, c.height-60)
          h = img.height * i
          w = img.width * i
          i = i - 0.1
      }
      check = c.width - w;
      await ctx.drawImage(img, check/2, 30, w, h);
        return c.toDataURL();
  }

  function uploadResizedImages(dataUrl) {
      dataUrl.then(url => {
          console.log(url)
          var link = document.createElement('a');
          link.download = Date.now() + '.png';
          link.href = url
          link.click();
      })
    }