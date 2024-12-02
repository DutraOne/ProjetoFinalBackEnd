document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert('Bem vindo!');
      window.location.href = 'books.html';
    } else {
      throw new Error();
    }
  } catch {
    alert('Usuário ou Senha incorretos, tente novamente');
  }
});