'use strict';

const targetWords = 'グロ';
// const target = document.getElementById('permalink-overlay');
const target = document.body;
const observer = new MutationObserver(() => {
    if($('.permalink').length){
        console.log('Open Permalink')
        checkWords();
    }
});

const checkWords = () => {
    $(function () {
        console.log($('#permalink-overlay').find('.tweet-text'))
        for(var tweets of $('#permalink-overlay').find('.tweet-text')){
            //console.log(tweets.innerHTML)
            if(tweets.innerHTML.indexOf(targetWords) !== -1){
                console.log('HIT')
                imgChanger();
            }
        }
    });
}

function imgChanger(){
    $(function () {
        $('#permalink-overlay').find('.AdaptiveMedia-photoContainer').find('img').css('display', 'none');
    });
}

checkWords();
observer.observe(target,{childList: true, subtree: true})