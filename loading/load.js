/*「画像が読み込まれたあと、1.5秒後に2秒かけてグレースクリーンが消えて画像が表示される」というアニメーション*/
const loading = document.querySelector('#loading');
const Screen = document.querySelector('#screen');

window.addEventListener('load', () =>{
    loading.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden', 
        },
        {
            duration: 2000,
            delay: 1500,
            easing: 'ease',
            fill: 'forwards',
        }
    );

/*読み込み中のグリーンスクリーンのアニメーション*/
Screen.animate(
    
    /*始めは上から100vhの位置→縦、横が画面いっぱいに広がった状態→スクリーンが上へ移動して終わり*/
    {   
    translate: ['0 100vh', '0 0', '0 -100vh'],
    },   
    {
        duration: 3000,
        delay: 1000,
        easing: 'ease',
        fill: 'forwards',
    }
); 

const text = document.querySelector('p');
text.animate = (
  [  
    {
        opacity: 1,
        offset: 0.5,
    },
    {
        opacity: 0,
        offset: 1,
    },
  ],
    {
        duration: 300,
        easing: 'ease',
        fill: 'forwards',
    }
);
});
