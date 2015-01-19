// display load screen while loading
window.addEventListener("load", function load(){ 
    var load_screen = document.getElementById("load_screen"); 
    document.body.removeChild(load_screen);
    $(document).ready(function() {
        var wh=$(window).height();
        var ww = $(window).width();
        var hh=$('header').height();
        $('.vid-body').css('height', wh);
        $('.video-doc-div').css('height', wh-hh + 'px');//ensures video pages are size of the viewport height
        $('body').css('width',ww+'px');//ensures pages are all full width of the viewport
        if(ww<1000){
            $('.section').css('height', 'auto');//enables auto height < 1000 px
            $('.video-div').css('height', 'auto');       
        }else{
            $('.section').css('height', ww/2.2483333333+'px'); //maintains ideal ratio up to 1000px
            $('.video-div').css('height', ww/1.68625+'px'); //the video div has a different ratio to the others
        } 
        $(window).bind('resize orientationchange', function(){ //window resize function
            var hh=$('header').height();
            var ww = $(window).width();
            
            $('.section').css({
                'width': ww + 'px',
                'height': ww/2.2483333333+'px'   
            });
            $('body').css('width',ww+'px');  
            // $('.section').css('height', ww/2.2483333333+'px');
            $('.video-div').css('height', ww/1.68625+'px');
            if(ww>1130){
                $('#click-menu-ul').css('display', 'none');
            }
            
            //variables for responsive light boxes on home page for over screen size over 1000px - to keep the trays positioned absolutely in the middle of the page, 
            //margin top has to be minus half the height of the element height, and margin left has to be minus half the width.   

            var elHeight = $(".tray").height();
            var dbleH = elHeight * 2;
            var marginTop = (elHeight - dbleH)/2;
            var trayWidth = $(".tray").width();
            var dbleW = trayWidth * 2;
            var marginLeft = (trayWidth - dbleW)/2;

            if(ww<1000){
                $('.tray').css({'width': ww+"px","margin": '0px'}); //tray div goes full screen less than 1000 pixels
                $('.section').css('height', 'auto');
                $('.video-div').css('height', 'auto');
                $('.svg-container.section').css({
                    'margin': '0px',
                    'height':'auto'
                });   
            }else{
                $(".tray").css({
                    "margin-top": marginTop+"px",
                    "margin-left": marginLeft+"px",
                    "width": ww/2+"px"    
                });
                $('.section').css('height', ww/2.2483333333+'px');
                $('.video-div').css('height', ww/1.68625+'px');
            }
        }).trigger('resize orientationchange');
        
        $('#click-menu').click(function(){
            if($('#click-menu-ul').css('display')==='none'){
                $('#click-menu-ul').css('display', 'block');    
            }else{
                $('#click-menu-ul').css('display', 'none'); 
            }
        });     
    });
});
  

// script for horizontal navigation - no longer live    

        // $(function() {
        //     var ww = $(window).width();
        //     var wh=$(window).height();
        //     $('.section').css('width',ww + 'px');
        //     $('.vid-section').css('width',ww + 'px');$('.video-doc-div').css('height',wh);$('.vid-section').css({'display':'none','height': wh});
        //     $('body').css('width',ww+'px');$('body').css('height', 'auto');
        //     $('ul a').bind('click',function(event){
        //         var $anchor = $(this);
        //         if($anchor.attr('href')!=='#home'){
                    
        //             $('body').css('width',ww*8+'px');
        //             $('.vid-section').css('display','inline-block');
        //             $('body').css({
        //                 'overflow': 'hidden'
        //             });
        //             setTimeout(function(){
        //                 $('body').css({'height': wh + 'px'});
        //             },1000)                    
        //         }else{
        //             setTimeout(function(){
        //                 $('body').css({'height': 'auto','overflow': 'visible','width': ww});
        //                 $('.vid-section').hide(100);    
        //             },1000)         
        //         };
        //         $('html, body').stop().animate({
        //             scrollTop:0,
        //             scrollLeft: $($anchor.attr('href')).offset().left
        //         }, 1000, 'easeInOutExpo');   
        //         event.preventDefault();         
        //     });
        // });
