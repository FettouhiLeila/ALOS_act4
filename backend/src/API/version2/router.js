import express from 'express'
import validation from '../../outils/validation'
import DonneursController from './DonneurController'


const router = express.Router()

// podcasts

router.get('/Donneurs', DonneursController.get_all)

router.get('/Donneurs/:id',
    ...validation.get_Donneurs,
    DonneurController.get)

router.post('/Donneurs',
    ...validation.create_Donneur,
    DonneursController.create)

router.put('/Donneurs/:id',
    ...validation.update_Donneurs,
    DonneursController.update)
router.delete('/Donneurs/:id',
    ...validation.delete_Donneurs,
    DonneursController.delete)

export default router;
