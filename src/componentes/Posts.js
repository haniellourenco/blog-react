export default function Posts() {

    const posts = [
        {
            id: 1,
            texto: "Olá mundo!",
            tempo: "1 minuto atrás",
            autor: {
                usuario: "Paulo",
                apelido: "Penadinho",
            },
        },
        {
            id: 2,
            texto: "Salve galera!",
            tempo: "2 minutos atrás",
            autor: {
                usuario: "Xunda",
                apelido: "Legalzão",
            },
        }
    ];

    return (
        <>
        {posts.length === 0 ?
            <p>Nenhuma postagem foi feita até o momento</p>
        :
            posts.map(post => {
                return (
                    <p key={post.id}>
                    <b>{post.autor.usuario}</b> - {post.tempo}
                    <br />
                    {post.texto}
                    </p>
                );
            })
        }
        </>
    );


}
