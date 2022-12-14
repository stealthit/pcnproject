$("ul.gnb li").on("click",function(){
  var idx = $(this).index();
  if (idx > 0) {

    if (idx == 7) {
      $(this).toggleClass('active'); 
      $(this).siblings().removeClass('active');
    }
    else $(this).addClass('active').siblings().not('li.edit').removeClass('active');
  }
})

$("ul.tab-box li").on("click",function(){  
  $(this).addClass('active').siblings().removeClass('active');
})

$(".edit-mode").on("click",function(){
  $(this).toggleClass('active');   
})
//------------------ Modal --------------------------
$(".modal-open").on('click',function(){
  $("#modal-background").fadeIn(300);
  $(".modal-con").css("display", "flex").hide().fadeIn();
  $("body").css("overflow", "hidden");
});

$("#modal-background, .close").on('click',function(){
  if ($("#modal-background2").css("display") == "block") return;
  if ($(this).hasClass("close") || !$(this).next().hasClass('modal-progress'))
  {
    $("#modal-background").fadeOut(300);
    $(".modal-con").fadeOut(300);  
    $('body').css('overflow', 'overlay');
    $(this).parents("#left-area").hide();      
    $(this).parents("#right-area").hide();   
    $(".gnb li").not('li.edit').removeClass('active');
  }
});
$("#modal-background2, .close").on('click',function(){
  if ($(this).hasClass("close"))
  {
    $("#modal-background2").fadeOut(300); 
    $(".modal-con2").fadeOut(300);     
  }
});

function loadLeft(sName){
  $('#left-area .left-area-box').load(sName+'.html .modal-'+sName,function(){
    $('#left-area').show();
    // $("#modal-background").fadeIn(100);   
    $('.modal-'+sName).show();
    $("body").css("overflow", "hidden");   

    $(".close").on("click",function(){            
      // if ($("#modal-background2").css("display") == "block") return;            
      // $("#modal-background").fadeOut(300);
      // $(".modal-con").fadeOut(300);  
      // $('body').css('overflow', 'overlay');         
      $(this).parents("#left-area").hide();      
      $(this).parents("#right-area").hide();   
      $(".gnb li").not('li.edit').removeClass('active');
    })

    loadEvent();
  });      
  return false;          
}

// modal Event
function loadEvent() {
  // modal-search
  // $(".modal-search ul.tab-box li").on("click",function(){    
  //   var idx = $(this).index();
    
  //   $('.modal-search ul.result-list li').each(function (index, item) {
  //     if (idx == 0) $(this).css('display','flex');
  //     else if (idx-1 == (index%4)) $(this).css('display','flex');
  //     else  $(this).css('display','none');
  //   });	
  // })

  $(".modal-search .btn-search").on("click",function(){
    $(".modal-search .result-box").css("display","flex");
    $(".modal-search .no-data").removeClass("active");
  })
  
  // modal-edit  
  $(".modal-edit .btn-add").on("click", function(){   
    $('#right-area .right-area-box').children().hide(); 
      $('#right-area').show();      
      $('.modal-register').css("display", "flex");
      // $("body").css("overflow", "hidden");       
  })
  // modal-connect
  $("#btn-connect").on("click",function(){
    $('#right-area .right-area-box').children().hide();
    $('#right-area').show();      
    $('.modal-connect').css("display", "flex")
  })
  // modal-disconnect
  $("#btn-disconnect").on("click",function(){    
      $("#modal-background").fadeIn(300);
      $(".modal-disconnect").css("display", "block").hide().fadeIn();
      $("body").css("overflow", "hidden");    
  })
  // modal-business
  $(".modal-business .btn-add").on("click", function(){   
    $('#right-area .right-area-box').children().hide(); 
      $('#right-area').show();      
      $('.modal-busi-register').show();      
  })
  // modal-setting
  $(".modal-setting .edit-btn").on("click", function(){   
    $('#right-area .right-area-box').children().hide(); 
      $('#right-area').show();      
      $('.modal-user-m').show();      
  })
  $(".modal-setting .key-btn").on("click", function(){   
    $('#right-area .right-area-box').children().hide(); 
      $('#right-area').show();      
      $('.modal-pass-m').show();      
  })
  $(".modal-setting #tab05 .btn-add").on("click", function(){   
    $('#right-area .right-area-box').children().hide(); 
      $('#right-area').show();      
      $('.modal-user-a').show();      
  })
  $(".modal-sunbunjang .btn-view").on("click", function(){
    $('#right-area .right-area-box').children().hide(); 
    $('#right-area').show();      
    $('.modal-sunView').show();
  })
// modal-input
  $(".modal-input input[name='1']").on("change",function(){
    var ckData = $("input[name='1']:checked").attr("id");	
    
    if (ckData == "personal25")
    {
      $('#right-area .right-area-box').children().hide(); 
      $('#right-area').show();      
      $('.modal-input-standard').show();     
    }
  });
  $(".modal-input input[id='personal25']").click();

  $(".tab-box .tab-menu").on("click",function () {
    const tabId = $(this).attr("data-tab"); 
    
    $("#" + tabId).addClass("active").siblings().removeClass('active');

    /***** Canvas ********************/
    // ???????????? -> ????????? -> ??????
    // var lineHeight = $(".line_conect_con").height();
    // var lineWidth = $(".line_conect_con").width();
    // var sx = $(".line_conect_con .icon1").offset().left + $(".line_conect_con .icon1").outerWidth();
    // var ex = $(".line_conect_con .icon2").offset().left;    
    // var lineCanvas = document.getElementById("lineCanvas");
    // if (lineCanvas == null || lineCanvas.getContext == null) return;
    // lineCanvas.height = lineHeight;
    // lineCanvas.width = lineWidth;
    // var line_context_canvas = lineCanvas.getContext("2d");    
    
    // line_context_canvas.strokeStyle = "#1717fb";
    // line_context_canvas.moveTo(sx-26,123);
    // line_context_canvas.lineTo(ex-26,123);          
    // line_context_canvas.stroke();

    // ???????????? -> ????????? ???????????? Canvas
    var cvHeight = $(".tb-sunbun .jb-table").height();
    var sbCanvas = document.getElementById("sbCanvas");
    if (sbCanvas == null || sbCanvas.getContext == null) return;
    sbCanvas.height = cvHeight;
    var context_canvas = sbCanvas.getContext("2d");
    context_canvas.strokeStyle = "#ff6c00";
    context_canvas.moveTo(0,50);
    context_canvas.lineTo(0+250*1,50*1);    
    context_canvas.moveTo(0,50+32);
    context_canvas.lineTo(0+250*1,50+32*1);  
    context_canvas.moveTo(0,50+32*2);
    context_canvas.lineTo(0+250*1,50+32*2);  
    context_canvas.moveTo(0,50+32*3);
    context_canvas.lineTo(0+250*1,50+32*3);  
    context_canvas.moveTo(0,50+32*4);
    context_canvas.lineTo(0+250*1,50+32*4);  
    context_canvas.moveTo(0,50+32*5);
    context_canvas.lineTo(0+250*1,50+32*5);      
    context_canvas.stroke();
  });

  //common
  $(".ic-bookmark").on("click",function(){
    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
      //modaldiv = $('.modal_bookmarkno_wrap');
      //go_modal();
      //$("#modalIdBookmarkno").show();
      toast('??????????????? ?????? ???????????????.');
  } else {
      $(this).addClass('on');      
      //modaldiv = $('.modal_bookmark_wrap');
      //go_modal();
      //$("#modalIdBookmark").show();
      toast('??????????????? ?????? ???????????????.');
  }
  })
  
  // ?????? ?????? ?????? ????????? ?????? ????????????
$('.area_btn').on("mouseenter",function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -80; //?????? ?????? 
	var divLeft = p.left +20; //?????? ?????? 
	//????????? ?????? view
	$(this).find('.area_btn_tooltip').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// ?????? ?????? ????????? ?????? ?????????
$('.area_btn').on("mouseleave",function(e){
	$(this).find('.area_btn_tooltip').hide();
});
// ?????? ?????? ?????? ????????? ?????? ???????????? end

  $("ul.tab-box li").on("click",function(){  
    $(this).addClass('active').siblings().removeClass('active');
  })

  $('.line-base').on('click', function(e){
    var strLine = e.currentTarget.innerText;
    var num = strLine.replace(/[^0-9]/g,'');
    if ($(this).hasClass('line-blue')) $(this).removeClass('line-blue');
    else if ($(this).hasClass('line-orange')) $(this).removeClass('line-orange');    
    else if (num%2 == 0) $(this).addClass('line-blue');
    else $(this).addClass('line-orange');  
  })
}

function loadRight(sName){  
  $('#right-area .right-area-box').load('../'+sName+'.html .modal-'+sName,function(){
    $('#right-area').show();
    // $("#modal-background").fadeIn(100);   
    $('.modal-'+sName).show();
    $("body").css("overflow", "hidden");   

    $(".close").on("click",function(){            
      // if ($("#modal-background2").css("display") == "block") return;            
      // $("#modal-background").fadeOut(300);
      $(".modal-con").fadeOut(300);  
      $('body').css('overflow', 'overlay');   
      $('#right-area').hide();         
    })
  });      
  return false;          
}

function ModalPopup2(sName){
  $('#modalDlg2').load('../modals/'+sName+'.html .modal-'+sName,function(){
    $('#modalDlg2').show();
    $("#modal-background2").fadeIn(100);   
    $('.modal-'+sName).show();    

    $(".close").on("click",function(){            
      $("#modal-background2").fadeOut(300); 
      $(".modal-con2").fadeOut(300);             
    })
  });      
  return false;          
}

// ???????????? Rolling 
function ticker() {
  timer = setInterval(function(){
    $('#ticker li:first').stop().animate( {marginTop: '-40px'}, 2000, function()
    {
      $(this).detach().appendTo('ul#ticker').removeAttr('style');
    });    
  }, 3000);         
};           

function tickerover() {
  $('#ticker').mouseover(function(){    
    clearInterval(timer);
  });
  $('#ticker').mouseout(function(){
    clearInterval(timer);
    ticker();
  });  
};


//--------------------------------------------------------

var fileTarget = $('.filebox .upload-hidden'); fileTarget.on('change', function(){ 
  // ?????? ???????????? 
  if(window.FileReader){ 
    // modern browser 
    var filename = $(this)[0].files[0].name; 
  } else { 
      // old IE 
      var filename = $(this).val().split('/').pop().split('\\').pop(); 
      // ???????????? ?????? 
    } 
    // ????????? ????????? ?????? 
    $(this).siblings('.upload-name').val(filename); 
  });

  // ?????? ?????? ?????? ????????? ?????? ????????????
$('.over_info').mouseenter(function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -255; //?????? ?????? 
	var divLeft = p.left -665; //?????? ?????? 
	//????????? ?????? view
	$(this).parents('.click-overlap').siblings('.click_icbus').find('.map_detail_icbus').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// ?????? ?????? ????????? ?????? ?????????
$('.over_info').mouseleave(function(e){
	$(this).parents('.click-overlap').siblings('.click_icbus').find('.map_detail_icbus').hide();
});
// ?????? ?????? ?????? ????????? ?????? ???????????? end


    // ???????????????
    $('.click_icbus').click(function(e){

      var divLeft = 30;
      var divTop = -55.5;
      
      if($("#c_e_1").val() == "1"){

        $('.map_detail_rect').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).hide();
        $("#c_e_1").val(0);

      }else{
        $('.map_detail_rect').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).show();
        $('click_icbus').next().addClass('active');
        $("#c_e_1").val(1);
      }
      
    });

    $('.click_standard').click(function(e){

      var divLeft = 40;
      var divTop = -20;
      
      if($("#c_e_2").val() == "1"){

        $('.map_detail_rect_stdard').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).hide();
        $("#c_e_2").val(0);

      }else{
        $('.map_detail_rect_stdard').css({
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        }).show();
        $('click_standard').next().addClass('active');
        $("#c_e_2").val(1);
      }
    });
      //memo
      $('.click_memo').mouseover(function(){

        var divLeft = 0;
        var divTop = -90;
        $('.map_detail_memo_rect').css({
          "display":"block",
          "top":divTop,
          "left":divLeft,
          "position":"absolute"
        });
        
      });

      $('.click_memo').mouseout(function(e){

       
        $('.map_detail_memo_rect').css("display","none");
        
      });

      // ??????????????? ?????? ????????? ?????? ????????????
$('.detail_fac_plus').on("click",function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top ; //?????? ?????? 
	var divLeft = p.left +155; //?????? ?????? 
	//????????? ?????? view
	$(this).parents('.click-standard').siblings('.fac_plus').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
$('.btn-cancel').on("click",function(){
  $(this).parents('.click-overlap').hide();
})
// ?????? ?????? ?????? ????????? ?????? ????????????
$('.area_btn').mouseenter(function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -80; //?????? ?????? 
	var divLeft = p.left +20; //?????? ?????? 
	//????????? ?????? view
	$(this).find('.area_btn_tooltip').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// ?????? ?????? ????????? ?????? ?????????
$('.area_btn').mouseleave(function(e){
	$(this).find('.area_btn_tooltip').hide();
});
// ?????? ?????? ?????? ????????? ?????? ???????????? end

// //?????????
let removeToast;

function toast(string) {
    const toast = document.getElementById("toast_action");

    toast.classList.contains("active") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast_action").classList.remove("active")
        }, 1000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast_action").classList.remove("active")
        }, 1000)
    toast.classList.add("active"),
        toast.innerText = string;
}

// $(".ic-bookmark").on("click",function(){
//   if ($(this).hasClass('on')) {
//       $(this).removeClass('on');
//       //modaldiv = $('.modal_bookmarkno_wrap');
//       //go_modal();
//       //$("#modalIdBookmarkno").show();
//       toast('??????????????? ?????? ???????????????.');
//   } else {
//       $(this).addClass('on');      
//       //modaldiv = $('.modal_bookmark_wrap');
//       //go_modal();
//       //$("#modalIdBookmark").show();
//       toast('??????????????? ?????? ???????????????.');
//   }
// });


