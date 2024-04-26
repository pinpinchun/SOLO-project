function doFirst(){
    
    // search 頁面
    document.querySelector(`.list_clear`).addEventListener('click',categorylist)
}


// -------------------- search 頁面 -----------------------


// JS

// 清除按鈕測試
function categorylist(){

    let clearBtn = document.querySelector(`.list_clear`)
    let clickedBtn = document.querySelector(`.list_btn span`).css()

    clearBtn.addEventListener('click',function(){
        
        if(clickedBtn == 'hide'){

        }else{

        }

    })

}

window.addEventListener(`load`,doFirst);



// jQuery

$(document).ready(function(){
    
    // 搜尋商品
    
    $(`.search_bar input`).on('input',function(){
        $(`.search_bar button`).click(function(){
            search()
        })
    })

    
    function search(){
        let searchVal = $(`.search_bar input`).val()
        // console.log(searchVal)

        $(`.card_zone ul>li`).each(function(){
            let card = $(this).attr('data-item')

            // if(card){  確認抓到有 data-item 屬性的 card 才進下一個迴圈
                if(card.indexOf(searchVal) != -1){
                    $(this).show()
                }else{
                    $(this).hide()
                }
            // }

        })
    }



    // 分類清單

    $(".list_btn button").click(function(){

        // 獲取點擊的按鈕內的 span 元素
        let listSpan = $(this).find('span');

        // 如果 span 元素是可見的，則隱藏它，否則顯示它
        $(listSpan).toggle();


        let listTextColor = $(this).css('color');

        // 要寫嚴格等於，且不能寫 #色碼
        if(listTextColor === 'rgb(153, 153, 153)'){
            $(this).css('color','#333')
        }else{
            $(this).css('color','#999')
        }


        //     $(this).toggle(function(){
        //         $(this).css('color','#333')
        //     },function(){
        //         $(this).css('color','#999')
        //     })

        // let listBtnBorder = $(this).css('border');

        // if(listBtnBorder != '1px solid rgb(153, 153, 153)'){
        //     $(this).css('border','1px solid rgb(153, 153, 153)')
        // }else{
        //     $(this).css('border','transparent')
        // }

    });


    // 清除按鈕

    $('.list_clear').click(function(){

        let clickedBtn = $(`.list_btn`).find('span')
        let btnColor = $(`.list_btn`).find('button')

        if(clickedBtn.is(':visible')){
            clickedBtn.show();
            btnColor.css('color', '#999');
        }

    })





})































// $(document).ready(function(){
    
//     $(`.search_bar input`).on('input',function(){
//         search()
//     })

//     function search(){

//         let searchCard = $(`.search_bar input`).val()

//         $(`card_zone li`).(function(){})


//     }

// })


