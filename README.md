IViewImage plugin
==================

Try out a super lightweight and customizable plugin for displaying images in 
slideshow, gallery and lightbox format. 


Requirements
------------------
jQuery


Slider
------------------

####Usage

Link to an image using the following syntax:

    <div id="slider">
      <img src="img/colorful-artistic-abstract-wood-web-header.jpg"  />
      <img src="img/magnificent-colorful-feathers-abstract-header.jpg"/>
    </div>

 
Example on a call with default settings:

    $(document).ready(function(){
      $('#slider').slider({
      });
    });


The default settings are:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: 'fade',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time:    	'4000',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: original width of the image,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hight: original hight of the image<br /><br />



Example on a call with customized settings:

    $(document).ready(function(){
      $('#slider').slider({
        transition: 'fade',
    	time:       '3000',
    	width:      '940',
    	hight:      '300'
      });
    });



Lightbox
------------------

####Usage

Link to an image using the following syntax:

    <a class="lightbox" href="Url to image">
      <img src="Url to image" width="" />
    </a>

  
Include the following css syntax for styling lightboxes:
```
  #overlay {
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background:black url(loader.gif) no-repeat scroll center center;
  }

  #lightbox {
    position:fixed;
  }
 ``` 


Example on a call with default settings:

    $(document).ready(function(){
      $('.lightbox').lightbox({
      });
    });


The default settings are:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opacity: '0.5',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: 'black',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: original width of the image,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hight: original hight of the image<br /><br />
	


Example on a call with customized settings:

    $(document).ready(function(){
      $('.lightbox').lightbox({
    	opacity: '0.8',
    	color: '#551F0D',
    	width: '700',
    	hight: '500'
      });
    });



Gallery
------------------

####Usage

Link to an image using the following syntax:
```
  <div id="gallery">
    <div class="gallery-current"><img/></div>
    <div class="gallery-all"> 
      <img src="Url to image 1"/>
      <img src="Url to image 2"/>
      <img src="Url to image 3"/>
    </div>
  </div>
```

Include the following css syntax for styling the gallery:
```
  .gallery-current img {
    margin: 0px 5px 0px 5px;
  } 
  .gallery-all {
    border: 1px solid #bbb;
    overflow: scroll;
  }
```

Example on a call with default settings:

    $(document).ready(function(){
      $('#gallery').gallery({
      });
    });


The default settings are<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageSide:       'right',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageWidth:      '600',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imageHeight:     '400',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;thumbnailWidth:  '150',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;thumbnailHeight: '100'<br /><br />



Example on a call with customized settings:

    $(document).ready(function(){
      $('#gallery').gallery({
        imageSide:       'left',
        imageWidth:      '600',
        imageHeight:     '400',
        thumbnailWidth:  '150',
        thumbnailHeight: '100'
      });
    });

License 
------------------
This software is free software and carries a MIT license.

------------------
Copyright (c) 2016 Sibar Al-ani