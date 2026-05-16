import {Router} from 'express';
import { createContact, getContact , updateContact , deleteContact} from '../controllers/contactController.js';
import { createContactSchema, updateContactSchema } from '../validators/contactValidators.js';
import { Validate } from '../middlewares/validate.js';


const router = Router();

router.route("/")
                .get(getContact)
                .post(Validate(createContactSchema), createContact)


router.route("/:id")
                .put(Validate(updateContactSchema), updateContact)
                .delete(deleteContact)



export default router