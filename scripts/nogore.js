'use strict';

const targetWords = 'グロ'

function imgChanger(){
    $(function () {
        $('.AdaptiveMedia-photoContainer').find('img').css('display', 'none');
    });
}

$(function () {
    for(var tweets of $('.tweet-text')){
        console.log(tweets.innerHTML)
        if(tweets.innerHTML.indexOf(targetWords) !== -1){
            imgChanger();
        }
    }
});