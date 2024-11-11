












setTimeout(() => {
    document.querySelector('.appsCover').style.zIndex = '8'
    setTimeout(() => {
        document.querySelector('.funnypop').style.display = 'flex'
    }, 500);
}, 2900);




function closeFunny() {
    document.querySelector('.funnypopwrapper').style.scale = '0'
    setTimeout(() => {
        document.querySelector('.funnypop').style.display = 'none' 
        document.querySelector('.funnypopwrapper').style.scale = '1'
    }, 250);
}


function fillMemes(n) {
    for (let i = 0; i < n; i++) {
        createDiv(i)
    }
}

let nums = 30
let chosePath = ''
function createDiv(path) {
    nums += path
    const div = document.createElement('div')
    div.classList = 'meme'

    const img = document.createElement('img')
    img.src = `img/memes/${path}.png`

    const text = document.createElement('p')
    text.innerText = `IMG_${nums}.png`

    div.append(img,text)

    document.querySelector('.memewrapper').appendChild(div)

    div.addEventListener('click', function() {
        document.querySelector('.popup-image').src = `img/memes/${path}.png`
        chosePath = `img/memes/${path}.png`
        document.querySelector('.popupz').style.display = 'flex'

    })
}

function save() {
    const a = document.createElement('a');
    a.href = chosePath;
    a.download = 'Ackchyually';
    a.click();
}

fillMemes(31)



function closeFolder() {
    document.querySelector('.popupzWrapper').style.scale = '0'
    setTimeout(() => {
        document.querySelector('.popupz').style.display = 'none' 
        document.querySelector('.popupzWrapper').style.scale = '1'
    }, 250);
}


function closeMemeFolder(wrapper, inner) {
    document.querySelector('.'+inner).style.scale = '0'
    setTimeout(() => {
        document.querySelector('.'+wrapper).style.display = 'none' 
        document.querySelector('.'+inner).style.scale = '1'
    }, 250);


    if (wrapper === 'popupx') {
        const vid = document.querySelector('#vid')
        vid.pause()
    }
}

function openMemeFolder(wrapper) {
    document.querySelector('.'+wrapper).style.display = 'flex' 

    if (wrapper === 'popupx') {
        const vid = document.querySelector('#vid')
        vid.play()
    }
}



function openLinkInNewTab(url) {
    let l = ''

    if (url === 'd') {
        l = 'https://dexscreener.com/solana/D44y9N2jxXWGddUx3xK9iFoS5UZyKUwFeeMEdCY6ua2s'
    } else if (url === 'b') {
        l = 'https://birdeye.so/token/C2x2aT7VVEE4BUrxWfK2xjLtdSk5g1xRL9PHw7qxpump?chain=solana'
    }else if (url === 'j') {
        l = 'https://jup.ag/swap/SOL-C2x2aT7VVEE4BUrxWfK2xjLtdSk5g1xRL9PHw7qxpump'
    }else if (url === 't') {
        l = 'https://t.me/ACKCHYUALLY'
    }else if (url === 'x') {
        l = 'https://x.com/ackchyuallycto'
    } else if (url === 'r') {
        l = 'https://www.reddit.com/r/ackchyually/'
    }

    window.open(l, '_blank');
}




function lotion() {
    document.querySelector('img.image').style.animation = 'none'
}

// lotion()