$(window).load(function(){
    
	 
	 
    // ieCheck
    var ie = false;
    var defMh = 0, h = 0;
    var aniButtonDuration = 350;
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    

	 
	 
	 /*FANCYBOX*/  
	$("a[rel=Appendix]").fancybox({
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
		return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	// lightbox image
	$(".lightbox-image").append("<span></span>");
	
	$(".lightbox-image").hover(function(){
		$(this).find("img").stop().animate({opacity:0.5}, "normal")
	}, function(){
		$(this).find("img").stop().animate({opacity:1}, "normal")
	});
	
	//images rollover
	$(".rollover-image").hover(function(){
		$(this).find("img").stop().animate({opacity:0.5}, "normal")
	}, function(){
		$(this).find("img").stop().animate({opacity:1}, "normal")
	});
	
	
	 
    
    $('.gall_spinner').hide();
    $('#bgStretch')
		.bgStretch({
			align:'rightTop',
			navigs:$('#bgNav').navigs({prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
		}).sImg({
			spinner:$('.gall_spinner')
		}) 
        

    //social-icons-------------
        $('.soc_links>li>a>img').stop().animate({'opacity':'1'},300,'easeOutExpo');  
        $('.soc_links>li>a').hover(
            function(){
                $(this).children('img').stop().animate({'opacity':'0.7'},300,'easeOutExpo');  
            },
            function(){
                $(this).children('img').stop().animate({'opacity':'1'},500,'easeOutExpo');  
            }
        ); 
	


    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
        nav=$('.menu'),
        splash = $('#splash');
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       300,
      autoArrows:  false,
      dropShadows: false
    });

    $('.submenu_1 a b').css({width:'0px'})
    $('.submenu_1 a').hover(function()
    {
        $(this).find('b').css({width:'0px', left:'0px'}).stop().animate({width:'100%'}, 300,'easeOutCubic');			   
    }, function(){
        $(this).find('b').stop().animate({width:'0px', left:'119px'}, 300,'easeOutCubic');						   
    })
    
    
    nav.navs({
		useHash:true,
        defHash:'#!/',
		hoverIn:function(li){
		   	  $('>a ',li).css({color:'#f6c01f'});
		   	  $('> a > span ',li).stop().animate({color:'#f6c01f'}, aniButtonDuration, 'easeOutCubic');
		},
		hoverOut:function(li){
		  if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
              $('>a ',li).css({color:'#999896'});
		   	  $('> a > span ',li).stop().animate({color:'#fff'}, aniButtonDuration, 'easeOutCubic');
          }
		}				
    })
    
     content.tabs({
		preFu:function(_)
        {
            _.li.css({display:'none', top:'620px'});
            _.li.each(function(){
                if($(this).height() < 417){
                    $(this).height(417);
                } else {
                    $(this).height($(this).height()+40)
                }
            })
		}
		,actFu:function(_)
        {

            if(_.pren == undefined){
                aniDelay = 250;
            } else {
                if(_.n == -1 && _.pren == -1){
                    aniDelay = 250;
                } else {
                    aniDelay = 450;
                }
            }
            




            if(_.n == -1){
                content.stop().delay(aniDelay).animate({height:'65px'}, 650,'easeOutCubic');
                $('#logo').stop().delay(0).animate({'backgroundPosition':'0 top'}, 350,'easeOutCubic');
                h = 65;
    			$(window).trigger('resize');
            } else {
                content.stop().delay(aniDelay).animate({height:_.curr.height()+40}, 650,'easeOutCubic');
                $('#logo').stop().delay(0).animate({'backgroundPosition':'0 bottom'}, 350,'easeOutCubic');
            }
            
        	if(_.curr){
                h = parseInt( _.curr.outerHeight(true)+320);
        	   $(window).trigger('resize');
				_.curr
					.stop()
					.delay(aniDelay).css({display:'block', top:content.height()}).animate({top:'0px'}, 650,'easeOutCubic');
            }

            
			if(_.prev){
			    _.prev 
    				.stop()
    				.animate({top:content.height()}, 350,'easeInSine', function(){
    				     $(this).css({display:'none'});
    			     });
            }
           
        }
		
	})
       
    nav.navs(function(n, _)
    {
		content.tabs(n);
	})
	
	
	//resize
   var mainDIV = $('.main');
    $(window).resize(function()
    {
       resizeContent(mainDIV.height(), 500); 
    });
    
    function resizeContent(height, _animationSpeed)
    {
        var window_H = $(window).height();
		  /*console.log("curPageNum = " + curPageNum)*/
          var top_value;
         if (h < defMh) {h = defMh}
         top_value=(window_H-h-500+h/1.8)/2;
         if(top_value<10) {top_value=10}
         $('body').stop().animate({'minHeight':h})
         $('h1').stop().delay(0).animate({paddingTop:top_value+'px'}, 350,'easeOutCubic');
    }
	 $(window).trigger('resize');
    
 
})