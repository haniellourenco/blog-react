
function App() {
  const posts = [
    {
      id: 1,
      texto: 'Olha a picanha!',
      tempo: '1 minuto atrás',
      autor: {
        usuario: 'haniellohn',
        nomeReal: 'Haniel Lohn'
      },
    },
    {
      id: 2,
      texto: 'Ta chegando o fim de semana',
      tempo: '2 minuto atrás',
      autor: {
        usuario: 'haniellohn',
        nomeReal: 'Haniel Lohn'
      },
    },
    {
      id: 3,
      texto: 'Testando',
      tempo: '5 minuto atrás',
      autor: {
        usuario: 'haniellohn',
        nomeReal: 'Haniel Lohn'
      },
    }
  ];

  return (
    
    <>
      <h1>Blog do Manseirismo</h1>


      {posts.length === 0 ?
        <p>Nenhuma postagem foi realizada ainda</p>
        :
        posts.map(post => {
          return (
            <p>
              {post.autor.usuario} - {post.tempo}
              <br/>
              {post.texto}
            </p>

          );
      })}

    
    </>



  );
}

export default App;
