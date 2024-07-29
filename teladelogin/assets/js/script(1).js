const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});

let nome = window.document.querySelector("#name");
let email = window.document.querySelector("#email");
let senha = window.document.querySelector("#password");
let login = window.document.querySelector("#login_button");


login.addEventListener("click", ()=>{

    if(nome.value === 'ayanowho' && email.value ==='ayanowho@gmail.com' && senha.value === 'ayano@2025'){
        window.location.href ="../usuario/ayano.html";
    }else if (nome.value === 'gustavohenrique' && email.value ==='gustavo119750@gmail.com' && senha.value === 'gustavohenrique@2025') {
        window.location.href ="../usuario/gustavohenrique.html";
    }else if (nome.value === 'patrolla' && email.value ==='patrolla@gmail.com' && senha.value === 'patrolla@2025') {
        window.location.href ="../usuario/patrolla.html";
    }


});