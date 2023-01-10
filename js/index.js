$(document).ready(function(){

    $(window).scroll(function(){

        var sct =$(window).scrollTop();

        if(sct>1){
            $('.top_header').css({
                display:'none'
            });


            $('#header').css({

                position:'fixed',
                top:'0',
                height:'50px'
            });

            $('.header_left_menu').css({
                height:50,
                alignItems:'center'
            });

            $('.header_right_menu').css({
                height:50,
                alignItems:'center'
            });

            $('#mo_header').css({

                position:'fixed',
                top:'0',
            });

            $('#bottom_header').css({
                position:'fixed',
                top:'50px' 
            });
           
            $('#scroll').css({
                opacity:1,
            });

        }else{

            $('.top_header').css({
                display:'block'
            });

            $('#header').css({

                position:'absolute',
                top:'30px',
                height:'75px'
            });

            $('.header_left_menu').css({
                height:75,
                alignItems:'center'
            });

            $('.header_right_menu').css({
                height:75,
                alignItems:'center'
            });

            $('#mo_header').css({

                position:'fixed',
                top:'15px',
            });

            $('#bottom_header').css({
                position:'absolute',
                top:'105px' 
            });
           
            $('#scroll').css({
                opacity:0,
            });

        }


        

    });


    $('#scroll').click(function(){

        $("html, body").stop().animate({ 
            scrollTop: "0" 
        },700);    

        
    });

    $('.black_point').hover(function(){

        $('#black_box').css({
            visibility:'visible'
        });

    },function(){

        $('#black_box').css({
            visibility: 'hidden'
        });
        
    });


    $('#ham_menu').click(function(){



        if(matchMedia("screen and (max-width: 749px)").matches){

            $('#mo_hidden_wrap').addClass('on');
    
            $('body').css({
                overflow:'hidden'
            });
    
            $('#wrap').addClass('on');
    
            $('#black_box').css({
                visibility:'visible',
                top:0,
                left:0,
            });
          }

            window.onresize = function(){
            document.location.reload();
      };
    });



    $('.close_box').click(function(){

        $('#mo_hidden_wrap').removeClass('on');

        $('body').css({
            overflow:'unset'
        });

        $('#wrap').removeClass('on');

        $('#black_box').css({
            visibility:'hidden',
        });

        
    }); 

    $('#search_icon>.fa-search').click(function(){

        $('#mo_search_wrap').show(500);
    });

    $('#close_icon').click(function(){
        $('#mo_search_wrap').css({
            display:'none'
        });
    });



});