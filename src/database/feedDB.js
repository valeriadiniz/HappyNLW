const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

//Arquivo criado para alimentar o DB com duas instituições fictícias para caso necessite reinicializá-lo

Database.then(async db => {
    //inserir dados na tabela
    /*
    await saveOrphanage(
            db, {
            lat: "-22.6601832",
            lng: "-50.4138977",
            name: "Casa da Menina São Francisco de Assis",
            about: "O Casa Da Menina Sao Francisco De Assis oferece toda a estrutura necessária para o conforto e desenvolvimento educacional dos seus alunos, como por exemplo: Internet, Banda Larga, Parque Infantil, Refeitório, Quadra Esportiva, Sala de Leitura, Pátio Coberto, Pátio Descoberto, Sala do Professor e Alimentação.",
            whatsapp: "00000-0000",
            description: "Escola com projetos sociais.",
            images: [
                "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1600720642653-529b16872835?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1570473546427-50ca517710b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ],
            instructions: "Venha trazer alegria para crianças. Elas adoram receber visitas todos os dias!",
            opening_hours: "Fechado temporariamente devido a pandemia COVID-19",
            open_on_weekends: "0"
        });

    await saveOrphanage(
            db, {
            lat: "-22.6666476",
            lng: "-50.4213463",
            name: "Assoc.Filantrópica Nosso Lar",
            about: "A Associação Filantrópica NOSSO LAR foi fundada em 1949, inicialmente, para atender uma situação de saúde. A prioridade foi substituída depois que o serviço foi implantado pelo poder público. Então, a entidade passou a investir em demandas no contexto social, com cursos profissionalizantes e assistência familiar. Atualmente, se firmou como uma Instituição que desenvolve diversos projetos e atua em diversas áreas.",
            whatsapp: "00000-0000",
            images: [
                "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Fechado temporariamente devido a pandemia COVID-19.",
            opening_hours: "Horário de visitas das 9h às 19h",
            open_on_weekends: "0"
        });
        
        await saveOrphanage(
            db, {
            lat: "-22.6387108",
            lng: "-50.4195037",
            name: "Casa da Criança D. Antônio José dos Santos-ASVP",
            about: "A Casa da Criança “Dom Antônio José dos Santos” foi criada no município de Assis em 15 de maio de 1951. A partir da articulação de senhoras católicas da comunidade assisense, juntamente o Srº Bispo Dom Antônio José dos Santos e com as Irmãs Filhas da Caridade, a instituição foi construída. O objetivo era abrigar meninos abandonados por suas famílias em regime de internato. Contudo, a legislação que norteia o atendimento a crianças e adolescentes foi alterada e passou a estabelecer as diretrizes para a realização das atividades voltadas a esta faixa etária, Desta forma, a instituição vem acompanhando as mudanças necessárias para adequação aos requisitos legais. Com o passar dos anos, a instituição foi sofrendo modificações e atualmente direciona o seu atendimento a crianças na Educação Infantil, envolvendo o segmento creche e no contraturno da pré escola e ensino fundamental.",
            whatsapp: "00000-0000",
            images: [
                "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Fechado temporariamente devido a pandemia COVID-19",
            open_on_weekends: "0"
        });
    //*/
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");

    console.log(selectedOrphanages);

    //deletar dados da tabela
    console.log(await db.run('DELETE FROM orphanages WHERE id = "6"'));
});