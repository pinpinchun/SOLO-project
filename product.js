// ------------------ JS -----------------------

function doFirst(){

    document.querySelector('.shop_intro button').addEventListener('click',falling);
    document.getElementById('keep').addEventListener('click',keep);
    document.getElementById('like').addEventListener('click',like);
    // document.getElementById('comment').addEventListener('click',comment);
    document.querySelector('.main_comment > img').addEventListener('click',close);
    document.querySelector('.comment_btn button').addEventListener('click',submit);
    document.querySelector('.filter_star > button').addEventListener('click',expand);

}

// 牆倒下

function falling(){
    
    let wall = document.querySelector(`.falling_wall`) 
    
    wall.classList.add('fallingWall');
    
    for(i = 1; i <= 8; i++){
        let fog = document.querySelector(`#fog${i}`);
        fog.style.display = 'block';
        fog.classList.add(`fog${i}`);
    }
    
    setTimeout(function(){
        wall.classList.remove('fallingWall');
        
        for(j = 1 ; j <= 8 ; j++){
            let fog = document.querySelector(`#fog${j}`);
            fog.style.display = 'none';
            fog.classList.remove(`fog${j}`);
        }

    },10000)

    setTimeout(function(){

        let nowHeight = document.body.scrollHeight;
    
        scrollTo({
            top: nowHeight * 0.6,
            behavior: 'smooth'
        })
        
    },3500)

}


// 收藏按鈕

let clicktime = 1;     // 宣告在區塊外 clicktime 才會變化

function keep(){

    
    let keepBtn = document.querySelector('#keep > img');

    if(clicktime == 1){
        keepBtn.classList.add('keep_clicked');
        clicktime = 2;
    }else{
        keepBtn.classList.remove('keep_clicked');
        clicktime = 1;
    }
}


// 喜歡按鈕

function like(){

    let likeBtn = document.querySelector('#like > img');

    if(clicktime == 1){
        likeBtn.classList.add('like_clicked');
        clicktime = 2;
    }else{
        likeBtn.classList.remove('like_clicked');
        clicktime = 1;
    }
}

// 關閉評論

function close(){

    document.querySelector('.window_comment').style.display = 'none';
    document.querySelector('.write_comment').style.display = 'none';

}


// 送出評論

function submit(){

    document.querySelector('.window_comment').style.display = 'none';
    document.querySelector('.write_comment').style.display = 'none';
    alert('感謝你的評論！\n你的評論將能幫助更多貓貓獲得幸福！')

}


// 展開子選單

function expand(){

    if(clicktime == 1){
        document.querySelector('.sub_filter_star').style.display = 'block';
        clicktime = 2;
    }else{
        document.querySelector('.sub_filter_star').style.display = 'none'; 
        clicktime = 1;
    }

}



window.addEventListener('load',doFirst)


// ------------------ jQuery -----------------------


$(document).ready(function(){

    $('.hamburger').click(function(){
        $('.main_nav').slideToggle()
    })

    // 評論按鈕

    $('#comment').click(function(){

        $('.window_comment').fadeIn().show()
        $('.write_comment').slideDown().show()
    })

})