(function($) {
  

  /**
   * Gallery plugin code
   */ 
  $.fn.gallery = function(options) {
  
    options = $.extend({}, $.fn.gallery.defaults, options);
    var current= null;
    $('#gallery').css('width', parseInt(options.thumbnailWidth) + parseInt(options.imageWidth) + 13);

    $('.gallery-all')
    .css('width', options.thumbnailWidth)
    .css('height', options.imageHeight)
    .scrollTop($('.gallery-all img')[0].scrollHeight);

    return $('.gallery-all img').each(function() {
      toggle(this);
      $('.gallery-all img').first().trigger('click');
    });

    function toggle(container) {
      $(container)
        .css('width', options.thumbnailWidth)
        .css('height', options.thumbnailHeight)
        .click(function() {
          if(!current) {
            current = container;
            console.log("Set current.");
          } else {
            $(current).toggleClass('selected');
            current = container;
            console.log("Toogled current");
          }
          $(container).toggleClass('selected');
          $('.gallery-current img')
            .attr('src', $(current).attr('src'))
            .css('width', options.imageWidth)
            .css('height', options.imageHeight)
            .css('float', options.imageSide); 
          console.log("Click on mini image.");


        });
      console.log("Gallery image was initiated.");
    }; 
  };

  /**
   * Gallery object for default settings
   */
  $.fn.gallery.defaults = {
    sides:           'right',
    imageWidth:      '600',
    imageHeight:     '400',
    thumbnailWidth:  '150',
    thumbnailHeight: '100'
  };



  /**
   * slider plugin code
   */   
  $.fn.slider = function(options) {
  
    options = $.extend({}, $.fn.slider.defaults, options);
    
    return this.each(function() {
      createSlider(this);
      rotatePics(1, this);
    });

    /**
     * Creates a slider
     */
    function createSlider(container) {
      $(container).find("img")
      .css('position', 'absolute')
      .css('width', options.width)
      .css('height', options.hight);

      $(container)
      .css('width', options.width)
      .css('height', options.hight)
      .css('overflow', 'hidden');
    };

    function rotatePics(currentPhoto, container) {
      var numberOfPhotos = $(container).find("img").length;
      currentPhoto = currentPhoto % numberOfPhotos;
      if(options.transition == 'fade') {
        $(container).find("img").eq(currentPhoto).fadeOut(function() {
          // re-order the z-index
          $(container).find("img").each(function(i) {
            $(this).css(
              'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
            );
          });
          
          $(this).show(); 
          setTimeout(function() {rotatePics(++currentPhoto, container)}, options.time);
        });
      } else if( options.transition == 'slide') {
        $(container).find("img").eq(currentPhoto).slideUp(function() {
          // re-order the z-index
          $(container).find("img").each(function(i) {
            $(this).css(
              'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
            );
          });
          
          $(this).show(); 
          setTimeout(function() {rotatePics(++currentPhoto, container)}, options.time);
        });
      }
    };
  };
 
  /**
   * slider object for default settings
   */
  $.fn.slider.defaults = {
    transition: 'fade',
    time:       '4000',
    hight:      '180 px',
    width:      '180 px'
  };
 


  /**
   * Lightbox plugin code
   */   
  $.fn.lightbox = function(options) {
  
    options = $.extend({}, $.fn.lightbox.defaults, options);
	
    return this.click(function(e) {  
      e.preventDefault();	
      createOverlay();
      createLightbox();
	    createLoader();
      displayImage($(this).attr('href'));
    });
  
  
    /**
	 * Creates an overlay that covers the background
	 */
    function createOverlay() {
	  $('body').css('overflow-y', 'hidden');
	
      $('<div id="overlay"></div>')
      .css('opacity', '0')
	    .css('background', options.color)
      .animate({'opacity': options.opacity}, 'slow')
      .appendTo('body');
    };
    
	
	/**
	 * Creates a lightbox
	 */
    function createLightbox() {
      $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
    };
    
	
    /**
	 * Creates and applies a loader img
	 */
    function createLoader() {
      $('<img id="load">').attr('src', '../img/loader.gif')
	  .load(function() {
        positionLightboxImage();
      })
	  .appendTo('#lightbox');
    }
    
	
	/**
	 * Displays lightbox image and removes the loader image at the same time
	 *
	 * Adds eventhandler for removal of lightbox image when clicked.
	 */
    function displayImage(img) {
      $('<img>')
      .attr('src', img)
      .attr('width', options.width)
      .attr('height', options.hight)
      .load(function() {
        positionLightboxImage();
	    $('#load').remove();
      })
      .click(function() {
        removeLightbox();
      })
      .appendTo('#lightbox');
  
      return false;
    };
  
  
	/**
	 * Positions the lighbox image at center of window
	 */
    function positionLightboxImage() {
      var top = ((window.innerHeight || $(window).height()) - $('#lightbox').height()) / 2;
      var left = ((window.innerWidth || $(window).width()) - $('#lightbox').width()) / 2;
      $('#lightbox')
      .css({
        'top': top,
        'left': left
      })
      .fadeIn();
    };
  
  
    /**
	 *Removes lightbox image
	 */
    function removeLightbox() {
      $('#overlay, #lightbox')
      .fadeOut('slow', function() {
        $(this).remove();
        $('body').css('overflow-y', 'auto'); // show scrollbars!
      });
    };
    return this;
	
  };
  
  
  /**
   * Lightbox object for default settings
   */
  $.fn.lightbox.defaults = {
    opacity: '0.5',
	  color: 'black',
	  hight:  '',
	  width:  ''
  };
 
})(jQuery);