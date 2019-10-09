/**
 * Import modules
 */
const express = require('express')

/**
 * Starting the router
 */
const router = express.Router()

/**
 * Creating the routes
 */
// creating event
router.post('/evento', async (req, res) => {
    try {
        // saving on database
        const evento = await Eventos.create(req.body)
        const result = await evento.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting all events
router.get('/eventos', async (req, res) => {
    try {
        // getting data events
        const result = await Eventos.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single event
router.get('/evento/:id', async (req, res) => {
    try {
        // searching on dataset
        const evento = await Eventos.findById(req.params.id).exec()
        const result = await evento.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// updating a event
router.put('/evento/:id', async (req, res) => {
    try {
        // searching on database
        const evento = await Eventos.findById(req.params.id).exec()
        // updating...
        evento.set(req.body)
        const result = await evento.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a event
router.delete('/evento/:id', async (req, res) => {
    try {
        // deleting a event file if exists
        const evento = await Eventos.findById(req.params.id).exec()
        if (evento.imagem.url) {
            fs.unlink(evento.imagem.url, err => {
                if (err) throw err
            })
        }
        // deleting on database
        const result = await Eventos.deleteOne({ _id: req.params.id })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// creating message
routes.post('/conversa', async (req, res) => {
    try {
        // saving on database
        const conversa = await Conversa.create(req.body)
        const result = await conversa.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting all conversations
routes.get('/conversas', async (req, res) => {
    try {
        // getting data message
        const result = await Conversa.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single message
routes.get('/conversa/:id', async (req, res) => {
    try {
        // searching on dataset
        const conversa = await Conversa.findById(req.params.id).exec()
        const result = await conversa.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// sending a message
routes.put('/conversa/:id', async (req, res) => {
    try {
        // searching on database
        const conversa = await Conversa.findById(req.params.id).exec()
        // updating...
        conversa.set(req.body)
        const result = await conversa.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a message
routes.delete('/conversa/:id', async (req, res) => {
    try {
        // deleting on database
        const result = await Conversa.deleteOne({ _id: req.params.id })

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// creating musician data
routes.post('/musico', async (req, res) => {
    try {            
        // saving on dataset
        const musico = await Musicos.create(req.body)

        // setting the images
        const usuario = await Usuarios.findById({ _id: req.body.usuario_id })
        const imagens = {
            imagemPerfil: {
                url: usuario.imagemPerfil.url
            },
            imagemBanner: {
                url: usuario.imagemBanner.url
            }
        }
        musico.set(imagens)
        const result = await musico.save()

        return res.status(201).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting all musicians
routes.get('/musicos', async (req, res) => {
    try {            
        // getting on the database
        const result = await Musicos.find().exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// getting a single musician
routes.get('/musico/:id', async (req, res) => {
    try {            
        // searching on dataset
        const musicos = await Musicos.findById(req.params.id).exec()
        const result = await musicos.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// updating a musician
routes.put('/musico/:id', async (req, res) => {
    try {            
        // searching on dataset
        const musico = await Musicos.findById(req.params.id).exec()
        // updating...
        musico.set(req.body)
        const result = await musico.save()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// deleting a musician
routes.delete('/musico/:id', async (req, res) => {
    try {
        // deleting profile image
        const musico = await Musicos.findById(req.params.id).exec()
        if (musico.imagemPerfil.url) {
            fs.unlink(musico.imagemPerfil.url, err => {
                if (err) throw err
            })
        }
        if (musico.imagemBanner.url) {
            fs.unlink(musico.imagemBanner.url, err => {
                if (err) throw err
            })
        }

        // deleting on dataset
        const result = await Musicos.deleteOne({ _id: req.params.id }).exec()

        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error)
    }
})