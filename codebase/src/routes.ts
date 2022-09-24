import { Router } from 'express';
import { validateAuthenticated } from './middlewares/validateAuthenticated';
import {
  CreateUserController,
  CreateAdoptionController,
  CreateLoginController,
  CreateDisappearanceController,
  CreateFindingController,
  ListDisappearancesController,
  ListFindingsController,
  ListAdptionsController,
  UpdateSituacaoController,
  UpdatePetController
} from './controllers';


const router = Router();

const createAdoptionController = new CreateAdoptionController();
const createUserController = new CreateUserController();
const createLoginController = new CreateLoginController();
const createDisappearanceController = new CreateDisappearanceController();
const createFindingController = new CreateFindingController();
const listDisappearancesController = new ListDisappearancesController();
const listFindingsController = new ListFindingsController();
const listAdptionsController = new ListAdptionsController();
const updateSituacaoController = new UpdateSituacaoController();
const updatePetController = new UpdatePetController();

router.post("/usuarios", createUserController.handler);
router.post("/adocaos", validateAuthenticated, createAdoptionController.handler);
router.post("/login", createLoginController.handler);
router.post("/desaparecidos", validateAuthenticated, createDisappearanceController.handler);
router.post("/achados", validateAuthenticated, createFindingController.handler);

router.get("/desaparecidos", listDisappearancesController.handler);
router.get("/achados", listFindingsController.handler);
router.get("/adocoes", listAdptionsController.handler);

router.put("/situacao", validateAuthenticated, updateSituacaoController.handler);
router.put("/pet", validateAuthenticated, updatePetController.handler)
/* router.post("/disappearance")
router.post("/fidings") */

export { router }