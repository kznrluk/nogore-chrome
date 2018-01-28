const targetWords = 'このリプ欄にはグロ画像があります';
const target = document.body;
const observer = new MutationObserver(() => {
    if($('.permalink').length){
        checkWords();
    }
});

const checkWords = () => {
    $(function () {
        for(var tweets of $('#permalink-overlay').find('.tweet-text')){
            if(tweets.innerHTML.indexOf(targetWords) !== -1){
                imgChanger();
            }
        }
    });
}

function imgChanger(){
    $(function () {
        console.log('No Gore Twitter: Image Blocked!')
        $('#permalink-overlay').find('.AdaptiveMedia-photoContainer').find('img').css('display', 'none');
    });
}

observer.observe(target,{childList: true, subtree: true})