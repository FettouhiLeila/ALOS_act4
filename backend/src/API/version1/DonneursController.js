import {
    validationResult
} from 'express-validator'

import {
    get_Donneurs,
    get_Donneurs,
    add_Donneurs,
    update_Donneurs,
    delete_Donneurs
} from '../../../outils/database'

export default {
    get_all: (req, res) => {
        res.status(200).json(get_Donneurs())
    },
    get: (req, res) => {
        const Donneurs = get_Donneurs(req.params.id)
        if (Donneurs)
            res.status(200).json(podcast)
        else res.status(404).json({
            error: 'Donneurs Not Found'
        })
    },

    create: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_Donneurs = add_Donneurs(req.body)

        res.status(201).json(new_Donneurs)
    },

    update: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_Donneurs = update_Donneurs(id, req.body)

        res.status(200).json(new_Donneurs)
    },

    delete: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_Donneurs = delete_Donneurs(id)

        res.status(200).json(new_Donneurs)
    }
}
