import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoryController } from "./ListCetegoryController";
import { CategoriesRepository } from "../../respositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoriesUseCase);

export { listCategoryController };