function doFirst(){
    
    // search 頁面
    document.querySelector(`.search_bar input`).addEventListener('keydown',enter)

}


// -------------------- search 頁面 -----------------------


// JS

// 點擊 enter 搜尋商品
function enter(e){

    if(e.keyCode === 13){          // Enter 的按鍵碼是 13
        document.querySelector(`.search_bar button`).click()
    }

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


        // 對應條件商品卡顯示
        // let categoryName = $(this).text();

        // $(".card_zone ul > li").each(function(){
        //     let categoryCard = $(this).data('class');
        //     if (categoryName != categoryCard){
        //         $(this).toggle();
        //         // $(this).show();
        //         // $(`.card_zone ul > li`).not(this).hide();

        //     } else {
        //         // $(`.card_zone ul > li`).not(this).hide();
        //         // $(this).toggle();
        //     }
        // });


        // 切換按鈕的選中狀態
        $(this).toggleClass('active');
        let clickBtn = $(`.list_btn button.active`)

        // 檢查是否所有按鈕都未選取
        if ($(clickBtn).length === 0) {         // 確認類陣列裡的個數
            $(".card_zone ul > li").show();     // 顯示所有商品卡
            return;                             // 結束函數，避免後續代碼執行
        }

        $(".card_zone ul > li").each(function(){
            let categoryCard = $(this).data('class');
            
            // 如果按鈕是選中狀態且與商品卡片對應的類別名稱匹配，則顯示商品卡片，否則隱藏
            if ($(clickBtn).filter(":contains(" + categoryCard + ")").length > 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    });


    // 清除按鈕

    $('.list_clear').click(function(){

        let clickedBtn = $(`.list_btn`).find('span')
        let btnColor = $(`.list_btn`).find('button')
        let categoryCard = $(".card_zone ul > li")

        if(clickedBtn.is(':visible')){
            clickedBtn.show();
            btnColor.css('color', '#999');
            categoryCard.show()
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


