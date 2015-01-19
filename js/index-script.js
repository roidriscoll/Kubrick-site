$(document).ready(function() {    
    //maze script draw
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
    var svgAnim = function(){
        var path, length;
        var path = new Array;
        var length = new Array;
        for (var i=0;i<34;i++){
            path[i] = document.getElementById('i'+i);
            l=path[i].getTotalLength();
            //Clear any previous transition
            path[i].style.transition = path[i].style.WebkitTransition =
              'none';
            // Set up the starting positions
            path[i].style.strokeDasharray = l + ' ' + l;
            path[i].style.strokeDashoffset = l;
            // Trigger a layout so styles are calculated & the browser
            // picks up the starting position before animating
            path[i].getBoundingClientRect();
            // Define our transition
            path[i].style.transition = path[i].style.WebkitTransition =
              'stroke-dashoffset 10s ease-in-out';
            // Go!
            path[i].style.strokeDashoffset = '0';
        }   
    }
    svgAnim();

    //svg animation
    $(function(){
        var pattern = Snap.select("#pattern"),
            hexOne = pattern.select("#first"),
            hexTwo = pattern.select('#second'),
            hexThird = pattern.select('#third'),
            hexFourth = pattern.select('#fourth'),
            hexFifth = pattern.select('#fifth'),
            isMouseIn = false;
        
        hexOne.click(function(){
            hexOne.animate({ 
                transform:  "rotate(720 500 190), scale(1.8,1.8,1.8)"
            }, 1000, mina.backin);
            $("#one").show("drop", 1500);
        });
        $('#fa-one').click(function(){
            hexOne.animate({
                transform: "rotate(0 500 190), scale(1,1,1)" 
            },1000, mina.backin);
            $( "#one" ).hide( "drop", { direction: "down" }, "slow" );
        });

        hexTwo.click(function(){
            hexTwo.animate({ 
                transform:  "rotate(720 885 190), scale(1.8,1.8,1.8)"
            }, 1000, mina.backin);
            $("#two").show("drop", 1500);
        });
        $('#fa-two').click(function(){
            hexTwo.animate({
                transform: "rotate(0 885 190), scale(1,1,1)" 
            },1000, mina.backin);
            $( "#two" ).hide( "drop", { direction: "down" }, "slow" );
        });

        hexThird.click(function(){
            hexThird.animate({ 
                transform:  "rotate(720 305 410), scale(1.8,1.8,1.8)"
            }, 1000, mina.backin);
            $("#three").show("drop", 1500);
        });
        $('#fa-three').click(function(){
            hexThird.animate({
                transform: "rotate(0 305 410), scale(1,1,1)" 
            },1000, mina.backin);
            $( "#three" ).hide( "drop", { direction: "down" }, "slow" );
        });

        hexFourth.click(function(){
            hexFourth.animate({ 
                transform:  "rotate(720 695 410), scale(1.8,1.8,1.8)"
            }, 1000, mina.backin);
            $("#four").show("drop", 1500);
        });
        $('#fa-four').click(function(){
            hexFourth.animate({
                transform: "rotate(0 695 410), scale(1,1,1)" 
            },1000, mina.backin);
            $( "#four" ).hide( "drop", { direction: "down" }, "slow" );
        });

        hexFifth.click(function(){
            hexFifth.animate({ 
                transform:  "rotate(720 1080 410), scale(1.8,1.8,1.8)"
            }, 1000, mina.backin);
            $("#five").show("drop", 1500);
        });
        $('#fa-five').click(function(){
            hexFifth.animate({
                transform: "rotate(0 1080 410), scale(1,1,1)" 
            },1000, mina.backin);
            $( "#five" ).hide( "drop", { direction: "down" }, "slow" );
        });
    });

    //lightbox text animation
    
    $(function(){
        var elHeight = $(".tray").height();
        var dbleH = elHeight * 2;
        var marginTop = (elHeight - dbleH)/2;
        var trayWidth = $(".tray").width();
        var dbleW = trayWidth * 2;
        var marginLeft = (trayWidth - dbleW)/2;
        var ww=$(window).width();
        if(ww<1000){
                $('svg-container.section').css({
                    'margin': '0px',
                    'height': 'auto'    
            });
            }else{
                 $(".tray").css("margin-top", marginTop + "px");
                $(".tray").css("margin-left", marginLeft + "px");
            }
    });
});       