console.log("JavaScriptを正常に読み込みました。");

//ランダムナンバーを格納するための変数を作成
var random_number;
//インターバル関数を止めるために使用する変数
var roulette;
//ランダムナンバーを生成する関数
var final_number;

function RNgenerator(){
    //1-6までの数を、切り捨てることで作成する
    random_number=Math.floor(Math.random()*6)+1;
    document.getElementById("sen_roulette").innerHTML=random_number;
}

function kaisi(){
   roulette=setInterval(RNgenerator,100);
}

function owari(){
    if(roulette){
        clearInterval(roulette);
        final_number=random_number;
       
    }
    if(final_number==1){
        console.log(final_number);
        //もう、これ以上になく暴れまくる
        $('#hoge').animate({
            'fontSize': '64px',
        })

       
       $('#hoge').css('background-color','#B92A2C');
       $('p').text('お前さんはすごいよお前さんはすごいよお前さんはすごいよお前さんはすごいよお前さんはすごいよお前さんはすごいよお前さんはすごいよお前さんはすごいよお前さんはすごいよ')
       
     }
}



