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
  $(".modal-search ul.tab-box li").on("click",function(){    
    var idx = $(this).index();
    
    $('.modal-search ul.result-list li').each(function (index, item) {
      if (idx == 0) $(this).css('display','flex');
      else if (idx-1 == (index%4)) $(this).css('display','flex');
      else  $(this).css('display','none');
    });	
  })

  $(".modal-search .btn-search").on("click",function(){
    $(".modal-search .result-box").css("display","block");
    $(".modal-search .no-data").removeClass("active");
  })
  
  // modal-edit  
  $(".modal-edit .btn-add").on("click", function(){   
    $('#right-area .right-area-box').children().hide(); 
      $('#right-area').show();      
      $('.modal-register').show();
      // $("body").css("overflow", "hidden");       
  })
  // modal-connect
  $("#btn-connect").on("click",function(){
    $('#right-area .right-area-box').children().hide();
    $('#right-area').show();      
    $('.modal-connect').show();
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
  });

  //common
  $(".ic-bookmark").on("click",function(){
    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
      //modaldiv = $('.modal_bookmarkno_wrap');
      //go_modal();
      //$("#modalIdBookmarkno").show();
      toast('즐겨찾기가 삭제 되었습니다.');
  } else {
      $(this).addClass('on');      
      //modaldiv = $('.modal_bookmark_wrap');
      //go_modal();
      //$("#modalIdBookmark").show();
      toast('즐겨찾기에 추가 되었습니다.');
  }
  })
  
  // 범례 타겟 옆에 레이어 팝업 나타내기
$('.area_btn').on("mouseenter",function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -80; //상단 좌표 
	var divLeft = p.left +20; //좌측 좌표 
	//레이어 팝업 view
	$(this).find('.area_btn_tooltip').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// 타겟 옆에 레이어 팝업 없애기
$('.area_btn').on("mouseleave",function(e){
	$(this).find('.area_btn_tooltip').hide();
});
// 범례 타겟 옆에 레이어 팝업 나타내기 end

  $("ul.tab-box li").on("click",function(){  
    $(this).addClass('active').siblings().removeClass('active');
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

// 장애정보 Rolling 
function ticker() {
  timer = setTimeout(function(){
    $('#ticker li:first').animate( {marginTop: '-40px'}, 2000, function()
    {
      $(this).detach().appendTo('ul#ticker').removeAttr('style');
    });
    ticker();
  }, 3000);         
};           

function tickerover() {
  $('#ticker').mouseover(function(){
    clearTimeout(timer);
  });
  $('#ticker').mouseout(function(){
    ticker();
  });  
};


//--------------------------------------------------------

var fileTarget = $('.filebox .upload-hidden'); fileTarget.on('change', function(){ 
  // 값이 변경되면 
  if(window.FileReader){ 
    // modern browser 
    var filename = $(this)[0].files[0].name; 
  } else { 
      // old IE 
      var filename = $(this).val().split('/').pop().split('\\').pop(); 
      // 파일명만 추출 
    } 
    // 추출한 파일명 삽입 
    $(this).siblings('.upload-name').val(filename); 
  });

  // 선택 타겟 옆에 레이어 팝업 나타내기
$('.over_info').mouseenter(function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -255; //상단 좌표 
	var divLeft = p.left -665; //좌측 좌표 
	//레이어 팝업 view
	$(this).parents('.click-overlap').siblings('.click_icbus').find('.map_detail_icbus').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// 타겟 옆에 레이어 팝업 없애기
$('.over_info').mouseleave(function(e){
	$(this).parents('.click-overlap').siblings('.click_icbus').find('.map_detail_icbus').hide();
});
// 선택 타겟 옆에 레이어 팝업 나타내기 end


    // 클릭레이어
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

      // 시설물추가 옆에 레이어 팝업 나타내기
$('.detail_fac_plus').on("click",function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top ; //상단 좌표 
	var divLeft = p.left +155; //좌측 좌표 
	//레이어 팝업 view
	$(this).parents('.click-standard').siblings('.fac_plus').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
$('.btn-cancel').on("click",function(){
  $(this).parents('.click-overlap').hide();
})
// 범례 타겟 옆에 레이어 팝업 나타내기
$('.area_btn').mouseenter(function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top -80; //상단 좌표 
	var divLeft = p.left +20; //좌측 좌표 
	//레이어 팝업 view
	$(this).find('.area_btn_tooltip').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});
// 타겟 옆에 레이어 팝업 없애기
$('.area_btn').mouseleave(function(e){
	$(this).find('.area_btn_tooltip').hide();
});
// 범례 타겟 옆에 레이어 팝업 나타내기 end

// //토스트
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
//       toast('즐겨찾기가 삭제 되었습니다.');
//   } else {
//       $(this).addClass('on');      
//       //modaldiv = $('.modal_bookmark_wrap');
//       //go_modal();
//       //$("#modalIdBookmark").show();
//       toast('즐겨찾기에 추가 되었습니다.');
//   }
// });