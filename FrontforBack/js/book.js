document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, price }),
      });

      if (response.ok) {
        alert('Livro cadastrado com sucesso!');
      } else {
        throw new Error();
      }
    } catch {
      alert('Tente cadastrar o livro novamente');
    }
  });