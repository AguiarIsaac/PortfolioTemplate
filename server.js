// Importa a função
const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data') //Importa arquivo externo

const server = express()

//Abertura de porta
server.listen(5000, function(){
    console.log('Server is Runnin!')
})

//inportação de arquivos estaticos
server.use(express.static('public'))

//Configuração template engine
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false, //Habilita Htmls dentro de variaveis
    noCache: true
})

//Criação de rota
server.get('/', function(req, res){
    const data = {
        avatar_url: 'https://avatars2.githubusercontent.com/u/37755163?s=460&u=6953bac7835b8b306013b853d83a3ebabc8c9196&v=4',
        name: 'Isaac Aguiar',
        role: 'Desenvolvedor Web | Aluno Rocketseat',
        description: 'Programador Full-stack com foco em aprender novas tecnologias. e alcançar o proximo nivel. Aluno da <a href="https://www.rocketeas.com.br" target="_blanck">Rocketseat</a>',
        link: [
            {name: 'Github', url: 'https://github.com/AguiarIsaac'},
            {name: 'Instagran', url:'https://www.instagram.com/isaac_aguiarp/'},
            {name: 'Linkedin', url:'https://www.linkedin.com/in/isaac-aguiar-2b9039121/'}
        ]
    }

    return res.render('about', { about: data })
})

server.get('/portfolio', function(req, res){
    return res.render('portfolio', { items: videos })
})

server.get('/video', function(req, res){
    const id = req.query.id

    const video = videos.find(function(video) {
        if (video.id == id) {
            return true
        }
    })

    if (!video){
        return send.send('Video not found!')
    }

    return res.render('video', { item: video })
})