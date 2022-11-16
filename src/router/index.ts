import express, {Request, response, Response} from 'express';
import {
    tanksPage,
    apartmentsRender,
    clubRender,
    scheduled,
    getMain,
    landingCreateOne,
    landingGetMany,
    leadCreateOne,
    leadGetMany
} from '../handlers'

const router = express.Router()

router.get('/', getMain)
router.get('/agradecimientos', tanksPage)
router.get('/torre3/', getMain )

/** Landing pages endpoints */
router.get('/landing', landingGetMany)
router.post('/landing', landingCreateOne)
/** 
router.get('/agradecimientos', (req: Request, res: Response) => {
    res.render('home/agradecimientos')
})

router.get('/torre3', (req: Request, res: Response) => {
    return res.render('scheduled')
})
*/
/** Leads endpoint */
router.get('/lead', leadGetMany)
router.post('/lead', leadCreateOne)
router.get('/admin/leads', (req: Request, res: Response) => res.render('admin/leads'))

/** Tours */
router.get('/tour-clubikonia', clubRender)
router.get('/tour-apartamentos', apartmentsRender)

export default router