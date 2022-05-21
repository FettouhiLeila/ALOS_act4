import express from 'express'
import validation from '../../outils/validation'
import DonneursController from './../DonneursController'

const router = express.Router()


router.get('/Donneurs', DonneursController.get_all)

router.get('/Donneurs/:id',
    ...validation.get_Donneurs,
    DonneursController.get)

router.post('/Donneurs',
    ...validation.create_Donneurs,
    DonneursController.create)

router.put('/Donneurs/:id',
    ...validation.update_Donneurs,
    DonneursController.update)
router.delete('/Donneurs/:id',
    ...validation.delete_Donneurs,
    DonneursController.delete) 

