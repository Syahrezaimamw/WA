const tripleDot = document.querySelector('.triple-dot')
const dropDown = document.querySelector('.dropdown')

tripleDot.addEventListener('click', function () {
    dropDown.classList.toggle('dropJS')
})

const inputText = document.querySelector('.input-text')
const colomChat = document.querySelector('.colomchat')
const kirim = document.querySelector('.send')
const kirimAll = document.querySelector('.mc2')

const nav2 = document.querySelector('.nav2')


kirim.addEventListener('click', function () {
    let isiText = inputText.value
    inputText.value = ''
    const bubble = document.createElement('div')
    bubble.className = 'bubble'
    colomChat.appendChild(bubble)
    bubble.innerHTML = isiText

    bubble.addEventListener('mousedown', function () {
        bubble.classList.toggle('bubbleMousedown')
        bubble.addEventListener('mouseup', function () {
            bubble.classList.add('bubbleMouseup')
            nav2.classList.add('nav2JS')
            const trash = document.querySelector('.trash')
            trash.addEventListener('click', function () {
                nav2.classList.remove('nav2JS')
                bubble.remove()
            })

            const tripleDot2 = document.querySelector('.tripleDot-nav2')
            tripleDot2.addEventListener('click', function () {
                dropDown.classList.toggle('dropJS')

            })
            const leave = document.querySelector('.arrow')
            leave.addEventListener('click', function () {
                nav2.classList.remove('nav2JS')
                bubble.classList.remove('bubbleMouseup')
                dropDown.classList.toggle('dropJS')

            })

        })
    })



})
// --------------------------------------------------------- tampilan2
const tampilan2 = document.querySelector('.tampilan2')
const photoProfil = document.querySelector('.foto-profile')
photoProfil.addEventListener('click', function () {
    tampilan2.classList.toggle('tampilan2JS')

    const arrowTampilann2 = document.querySelector('.arrow-tampilan2')
    arrowTampilann2.addEventListener('click', function () {
        tampilan2.classList.remove('tampilan2JS')

    })

    const gelap = document.querySelector('.pembungkus-alert')
    const pilihProfil = document.querySelector('.photo-profile2')
    pilihProfil.addEventListener('click', function () {
        gelap.classList.add('pembungkus-alertJS')

        const slideLeave = document.querySelector('.line')
        slideLeave.addEventListener('click', function () {
            gelap.classList.remove('pembungkus-alertJS')
        })
        slideLeave.addEventListener('mouseover', function () {
            slideLeave.style.cursor = 'pointer'
        })
    })
    pilihProfil.addEventListener('mouseover', function () {
        pilihProfil.style.cursor = 'pointer'
    })

})



const userName =document.querySelector('.userName')
const kotakRename = document.querySelector('.username-rename')
const ketikRename =document.querySelector('.input-namabaru input')
const sendrename =document.querySelector('.rename')
// ---
const namaUser=document.querySelector('.nama-profile')
const namauserTampilan2=document.querySelector('.userName')

userName.addEventListener('mouseenter',function(){
    userName.style.cursor='pointer'
})
sendrename.addEventListener('mouseover',function(){
    sendrename.style.cursor='pointer'

})
userName.addEventListener('click',function(){
        kotakRename.classList.add('kotakrenameJS')
    })

    sendrename.addEventListener('click',function(){
        let is =ketikRename.value
        ketikRename.value=''
        
        namauserTampilan2.innerHTML=is
        namaUser.innerHTML=is
        kotakRename.classList.remove('kotakrenameJS')

    })

// ---------------------------------------------------------------- avatar 
const leaveMenuAvatar = document.querySelector('.kembali')
const pilihAvatar = document.querySelector('.pilih-avatar')
const chouseAvatarTampilan2 = document.querySelector('.av')
const hapusCharacther =document.querySelector('.hapus-character')
const photoProfil2 =document.querySelector('.photo-profile2')
const layarAvatar = document.querySelector('.layarGambar')




chouseAvatarTampilan2.addEventListener('click', function () {
    pilihAvatar.classList.toggle('pilih-avatarJS')
    
})
leaveMenuAvatar.addEventListener('click', function () {
    const gelap = document.querySelector('.pembungkus-alert')
    pilihAvatar.classList.toggle('pilih-avatarJS')
    gelap.classList.remove('pembungkus-alertJS')
})


const avatar = document.querySelectorAll('.ukran img')

avatar.forEach(function (e) {
    e.addEventListener('click', function () {
        const layargelapp=document.createElement('div')
        layargelapp.className='alert-gelapp'
        layargelapp.id='gl'
        const alertGnantiCharacther=document.createElement('div')
        alertGnantiCharacther.className='alert-gantiCharacther'
        const hh =document.createElement('h2')
        const slideload=document.createElement('div')
        const slideload2=document.createElement('div')
        hh.innerHTML='Mengganti Avatar'
        slideload.className='slideLoadd'
        slideload2.className='slideLoad22'
        slideload.appendChild(slideload2)
        alertGnantiCharacther.appendChild(hh)
        alertGnantiCharacther.appendChild(slideload)
        layargelapp.appendChild(alertGnantiCharacther)
        pilihAvatar.appendChild(layargelapp)
        layargelapp.classList.add('altG')
        
        chouseAvatarTampilan2.addEventListener('click',function(){
            layargelapp.classList.remove('altG')

        })
      
        layarAvatar.style.backgroundImage = `url(${e.className}.png)`
        layarAvatar.innerHTML=''
        photoProfil.style.backgroundImage = `url(${e.className}.png)`
        photoProfil.style.backgroundColor = 'transparent'
        photoProfil2.style.backgroundImage = `url(${e.className}.png)`
        photoProfil2.style.backgroundColor = 'transparent'

    })

})
hapusCharacther.addEventListener('click',function(){
    layarAvatar.style.backgroundImage='url()'
    layarAvatar.innerHTML='chouse character'
    photoProfil2.style.backgroundImage='url(as.png)'
    photoProfil.style.backgroundImage='url(as.png)'
})







// =================================================


let isDragstart = false, prevPageX, prevScrollLeft;
const draging = (e) => {
    // if(isDragstart == true){return};
    e.preventDefault()
    colomChat.scrollTop = e.pageY;
}

colomChat.addEventListener('mousemove', draging);

// copy paste
const copy = document.querySelector('.copy')
const paste = document.querySelector('.paste')
const passte = document.querySelector('.passte')
const footer = document.querySelector('.footer')

let salin;
copy.addEventListener('click', function () {
    let salin = inputText.value
    inputText.value = ''
    console.log(salin)

    const tampilCopy = document.createElement('div')
    tampilCopy.className = 'tampil-copy'
    tampilCopy.innerHTML = 'Pesan Disalin'
    colomChat.before(tampilCopy)

    passte.addEventListener('click', function () {
        inputText.value = salin
        paste.classList.remove('pasteJS')


    })
})
inputText.addEventListener('cut', function () {
    let salin = inputText.value
    inputText.value = ''
    const tampilCopy = document.createElement('div')
    tampilCopy.className = 'tampil-copy'
    tampilCopy.innerHTML = 'Pesan Disalin'
    colomChat.before(tampilCopy)
    passte.addEventListener('click', function () {
        inputText.value = salin
        paste.classList.remove('pasteJS')


    })
})
inputText.addEventListener('dblclick', function () {
    paste.classList.toggle('pasteJS')
})



// =======================================================



