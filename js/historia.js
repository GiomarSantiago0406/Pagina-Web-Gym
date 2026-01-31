
///////////////////////////////////
////Funcion: Imagen giratoria//////
///////////////////////////////////
//////////historia.js//////////////
var card = document.querySelector('.carta');
var playing = false;
var display = false;

card.addEventListener('mouseover',

    function()
    {
        if(playing)
            return

        playing = true

        anime({

            targets: card,
            scale: [{value:1},{value:1.4},{value:1,delay:250}],
            rotateY: {value: '+=360',delay:250},
            easing: 'easeInOutSine',
            duration: 400,
            complete: function(anim)
            {playing=false}

        });
    });

card.addEventListener('click',
function()
{
    if(display)
    return
    document.write('Hola')
})