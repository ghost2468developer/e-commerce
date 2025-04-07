import { Router } from 'express'
import { createProduct, getProductById, getProducts } from '../controllers/productController'

const router = Router()

router.get('/', getProducts)
router.post('/', createProduct)
router.get('/:id', getProductById)

export default router // ✅ This is what your import in index.ts is expecting
