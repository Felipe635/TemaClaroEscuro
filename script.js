const botao = document.querySelector('.btn');

botao.addEventListener('click', function () {
    document.body.classList.toggle('dark-teme')

    var className = document.body.className;

    if(className == "light-teme"){
        this.textContent = "Dark";
    }else{
        this.textContent = "Light";
    }
});