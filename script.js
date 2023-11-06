document.getElementById('registerModal').style.display = 'none';

document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('registerModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('registerModal').style.display = 'none';
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para processar o formulário de cadastro

    // Fecha o modal após o envio bem-sucedido do formulário
    document.getElementById('registerModal').style.display = 'none';

});

$(document).ready(function() {
    // Adicione as máscaras de entrada com jQuery Mask Plugin
    $("#cpf").mask("000.000.000-00");
    $("#phone").mask("(00) 00000-0000");

    // Ação ao clicar no botão de registro
    $("#registerButton").click(function() {
        // Abra o modal de registro
        $("#registerModal").show();
    });

    // Ação ao clicar no botão de fechar no modal de registro
    $("#closeModal").click(function() {
        // Feche o modal de registro
        $("#registerModal").hide();
    });

    // Ação ao clicar no botão de login
    $("#loginButton").click(function() {
        var login = $("#login").val();
        var password = $("#password").val();
        // Verificar as credenciais
        var storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.password === password) {
            alert("Login bem-sucedido!");
            // Redirecionar para a página inicial após o login
            window.location.href = "/Tela-1/inicial.html"; // Substitua 'pagina_inicial.html' pelo URL da página inicial
        } else {
            alert("Credenciais incorretas. Tente novamente.");
        }
    });

    // Ação ao enviar o formulário de registro
    $("#registrationForm").submit(function(event) {
        event.preventDefault();

        // Validação dos campos do formulário
        var fullname = $("#fullname").val();
        var cpf = $("#cpf").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var password = $("#registerPassword").val();
        var confirmPassword = $("#confirmPassword").val();
        var sexo = $("#sexo").val();

        // Verificar se o CPF já foi cadastrado
        var existingUser = JSON.parse(localStorage.getItem("user"));
        if (existingUser && existingUser.cpf === cpf) {
            alert("CPF já cadastrado. Não é possível se cadastrar novamente com o mesmo CPF.");
            return;
        }

        // Validação básica, você pode adicionar validações mais complexas aqui
        if (password.length < 8) {
            alert("A senha deve conter pelo menos 8 caracteres.");
            return;

        // Validação básica, você pode adicionar validações mais complexas aqui
        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        // Armazenamento local para o novo usuário
        var newUser = {
            fullname: fullname,
            cpf: cpf,
            phone: phone,
            email: email,
            password: password,
            sexo: sexo
        };

        // Armazenar o novo usuário no armazenamento local (pode ser melhorado)
        localStorage.setItem("user", JSON.stringify(newUser));

        // Limpar o formulário e fechar o modal
        $("#registrationForm")[0].reset();
        $("#registerModal").hide();

        alert("Cadastro realizado com sucesso!");
    });
});
