let btn = document.getElementsByClassName('btn');
let poz = document.querySelector('.m-desc-poz');
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        let img = document.querySelector('.img6');
        let btn = document.querySelector('.btn-download');
        if (content.style.visibility == 'visible') {
            content.style.visibility = 'hidden';
            content.style.opacity = null;
            content.style.lineHeight = null;
            poz.style.display = 'none';
            img.style.width = null;
            btn.style.fontSize = null;
            btn.style.marginTop = null;
            btn.style.marginBottom = null;
        } else {
            content.style.visibility = 'visible';
            content.style.opacity = 1;
            content.style.lineHeight = '45px';
            poz.style.display = 'block';
            if (window.innerWidth < 413) {
                img.style.width = '330px';
            } else {
                img.style.width = '505px';
            }
            btn.style.fontSize = '18px';
            btn.style.marginTop = '30px';
            btn.style.marginBottom = '20px';
        }
    })
}