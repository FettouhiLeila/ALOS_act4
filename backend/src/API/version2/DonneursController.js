import Podcast from '../Donneur'

export default {
    get_all: (req, res) => {
        res.status(200).json(Donneur.get_all())
    },

    get: (req, res) => {
        const podcast = Donneur.get(req.params.id)
        if (podcast)
            res.status(200).json(Donneur)
        else res.status(404).json({
            error: 'Donneur Not Found'
        })
    },

    create: (req, res) => {

        const new_Donneurs = Donneurs.add(req.body)

        res.status(201).json(new_Donneurs)
    },

    update: (req, res) => {

        const id = req.params.id

        const new_Donneurs = Donneur.update(id, req.body)

        res.status(200).json(new_Donneurs)
    },

    delete: (req, res) => {

        const id = req.params.id

        const new_podcasts = Donneur.delete(id)

        res.status(200).json(new_Donneurs)
    },

    get_reviews: (req, res) => {
        const reviews = Donneur.get_reviews(req.params.id)
        if (reviews != [])
            res.status(200).json(reviews)
        else res.status(404).json({
            error: 'Donneur Reviews Not Found'
        })
    }
}
