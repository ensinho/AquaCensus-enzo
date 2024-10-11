document.addEventListener('DOMContentLoaded', function() {
    // Pega as referências para os botões e inputs
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    // Cria um listener para o botão de "Entrar"
    loginButton.addEventListener('click', async function() {
        const email = emailInput.value.trim();
        const senha = passwordInput.value.trim();

        // Checa se as caixas de email e senha estão preenchidas
        if (email === '' || senha === '') {
            alert('Insira o email e a senha!');
        } else {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const raw = JSON.stringify({
                "email": email,
                "senha": senha
                });

                const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
                };
                function redirect(result){ // Redireciona para a página principal
                    window.location.href = 'home.html';
                }

                fetch("http://localhost:3000/usuarios/login", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.user) {
                        // Armazene os dados do usuário no localStorage
                        localStorage.setItem('userName', result.user.nome);
                        localStorage.setItem('userRole', result.user.cargo);
                        localStorage.setItem('userPhoto', result.user.foto);
                        localStorage.setItem('userId', result.user.id);
                    }
                    redirect();  // Redireciona após armazenar os dados
                })
                .catch((error) => console.error(error));

            } 
            catch (error) {
                alert('Erro de conexão com a API: ' + error.message);
            }
        }
    });

    // Cria um listener para o botão de "Cadastrar"
    registerButton.addEventListener('click', function() {
        // Redireciona para a página de cadastro
        window.location.href = 'cadastro.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const userName = document.getElementById('user-name');
    const userRole = document.querySelector('.user-role');
    const profileImg = document.querySelector('.profile-img');

    // Carregar as informações do usuário do localStorage
    const storedName = localStorage.getItem('userName');
    const storedRole = localStorage.getItem('userRole');
    const storedPhoto = localStorage.getItem('userPhoto');

    if (storedName) {
        userName.textContent = storedName;
    }
    if (storedRole) {
        userRole.textContent = storedRole;
    }
    if (storedPhoto) {
        profileImg.src = storedPhoto;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Pega as referências para os botões e inputs
    const nomeCientInput = document.getElementById('nome-cientifico-input');
    const numEmbInput = document.getElementById('numero-embarcacao-input');
    const dataInput = document.getElementById('data-input');
    const localPescInput = document.getElementById('local-pesca-input');
    const nomeComInput = document.getElementById('nome-comum-input');
    const pesoInput = document.getElementById('peso-input');
    const comprimentoInput = document.getElementById('comprimento-input');
    const cadastrarButton = document.getElementById('cadastrar-especie-button');
    const idUser = localStorage.getItem('userId');
    const fotoColeta1 = document.getElementById('input-foto-principal').files[0];
    const fotoColeta2 = document.getElementById('input-foto-secundaria-1').files[0];
    const fotoColeta3 = document.getElementById('input-foto-secundaria-2').files[0];

    // Cria um listener para o botão de "Entrar"
    cadastrarButton.addEventListener('click', async function() {
        const nomeCient = nomeCientInput.value.trim();
        const numEmb = numEmbInput.value.trim();
        const data = dataInput.value.trim();
        const localPesc = localPescInput.value.trim();
        const nomeCom = nomeComInput.value.trim();
        const peso = pesoInput.value.trim();
        const comprimento = comprimentoInput.value.trim();


        // Checa se todos os campos estão preenchidos
        if (nomeCient === '' || numEmb === '' || data === '' || localPesc === '' || nomeCom === '' || peso === '' || comprimento === '') {
            alert('Preencha todos os campos necessários!');
        } else {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const raw = JSON.stringify({
                "email": email,
                "senha": senha
                });

                const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
                };
                function redirect(result){ // Redireciona para a página principal
                    window.location.href = 'home.html';
                }

                fetch("http://localhost:3000/usuarios/login", requestOptions)
                .then((response) => response.text())
                .then((result) => redirect(result))
                .catch((error) => console.error(error));

            } 
            catch (error) {
                alert('Erro de conexão com a API: ' + error.message);
            }
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Pega as referências para os botões e inputs
    const favoritebutton = document.getElementById('favorite-btn')

    favoritebutton.addEventListener('click', async function() {
        try {
            const response = await fetch('/favoritos'); 

            if(response.ok) {
                window.location.href = 'favoritos.html';
            } else {
                alert('Erro ao carregar favoritos.');
            }
        } catch (error) {
            alert('Erro de conexão com a API.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contabutton = document.getElementById('conta-btn')

    contabutton.addEventListener('click', function() {
        window.location.href = 'home.html';

    })
    
});

document.addEventListener('DOMContentLoaded', function() {
    const especiebutton = document.getElementById('especie-btn')

    especiebutton.addEventListener('click', function() {
        window.location.href = 'cadastrar-especie.html';

    })
    
});

document.addEventListener('DOMContentLoaded', function() {
    const coletasbutton = document.getElementById('coletas-btn')

    coletasbutton.addEventListener('click', function() {
        window.location.href = 'coletas.html';

    })
    
});

document.addEventListener('DOMContentLoaded', function() { //alterei
    const sairbutton = document.getElementById('sair-btn')

    sairbutton.addEventListener('click', function() {
        window.location.href = 'index.html';

    })
    
});

document.addEventListener('DOMContentLoaded', function() { //alterei
    const fotoPrincipal = document.getElementById('foto-principal');
    const inputFotoPrincipal = document.getElementById('input-foto-principal');

    const fotoSecundaria1 = document.getElementById('foto-secundaria-1');
    const inputFotoSecundaria1 = document.getElementById('input-foto-secundaria-1');

    const fotoSecundaria2 = document.getElementById('foto-secundaria-2');
    const inputFotoSecundaria2 = document.getElementById('input-foto-secundaria-2');

    fotoPrincipal.addEventListener('click', function() {
        inputFotoPrincipal.click();
    });
    fotoSecundaria1.addEventListener('click', function() {
        inputFotoSecundaria1.click();
    });
    fotoSecundaria2.addEventListener('click', function() {
        inputFotoSecundaria2.click();
    });

    inputFotoPrincipal.addEventListener('change', function() {
        if(inputFotoPrincipal.files && inputFotoPrincipal.files[0]) {
            const reader = new FileReader;

            reader.onload = function(e) {
            fotoPrincipal.style.backgroundImage = `url(${e.target.result})`;
            fotoPrincipal.style.backgroundSize = 'cover';
            }
            reader.readAsDataURL(inputFotoPrincipal.files[0]);
        }
    });
    inputFotoSecundaria1.addEventListener('change', function() {
        if(inputFotoSecundaria1.files && inputFotoSecundaria1.files[0]) {
            const reader = new FileReader;

            reader.onload = function(e) {
            fotoSecundaria1.style.backgroundImage = `url(${e.target.result})`;
            fotoSecundaria1.style.backgroundSize = 'cover';
            }
            reader.readAsDataURL(inputFotoSecundaria1.files[0]);
        }
    });
    inputFotoSecundaria2.addEventListener('change', function() {
        if(inputFotoSecundaria2.files && inputFotoSecundaria2.files[0]) {
            const reader = new FileReader;

            reader.onload = function(e) {
            fotoSecundaria2.style.backgroundImage = `url(${e.target.result})`;
            fotoSecundaria2.style.backgroundSize = 'cover';
            }
            reader.readAsDataURL(inputFotoSecundaria2.files[0]);
        }
    });
});

// Selecionando elementos
const userName = document.getElementById('user-name');
const dropdown = document.getElementById('dropdown');
const registroLogo = document.getElementById('registro-logo'); //alterei

// A dropbar aparece quando clica no perfil
userName.addEventListener('click', function() {
  dropdown.classList.toggle('active'); // Toggle the active class
});

// Fecha a dropbar quando clica fora dela
window.onclick = function(event) {
  if (!event.target.matches('.user-name')) {
    if (dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
    }
  }
};

registroLogo.addEventListener('click', function() {
    window.location.href = 'home.html'; //alterei
})