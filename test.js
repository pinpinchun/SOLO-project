// $(`#filter_star`).click(function(e){
//     $(`#sub_filter_star`).slideUp();
// });

$('.member_btn li').click(function(){
    let memberBtnClick = $(this).index();
    $('#member_main div.active').removeClass('active').fadeOut(function(){
        $('#member_main div').eq(memberBtnClick).fadeIn().addClass('active');
    })
})

$('#member_main div').hide().first().show().addClass('active');

