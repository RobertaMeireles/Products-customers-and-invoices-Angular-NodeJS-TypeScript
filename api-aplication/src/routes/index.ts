import { Router } from 'express'
import AuthController from '../controllers/auth.controller'
import CustomersController from '../controllers/customers.controller'
import ProductsController from '../controllers/products.controller'
import InvoicesController from '../controllers/invoices.controller'

const router = Router()

// Auth
router.post('/api/auth/login', AuthController.login)
router.post('/api/auth/signup', AuthController.signUp)

// Products
router.post('/api/products', ProductsController.add)
router.put('/api/products/update/:id', ProductsController.update)
router.put('/api/products/delete/:id', ProductsController.delete)
router.get('/api/products', ProductsController.getAll)
router.get('/api/products/id/:id', ProductsController.getById)

// Customers
router.post('/api/customers', CustomersController.add)
router.put('/api/customers/update/:id', CustomersController.update)
router.put('/api/customers/delete/:id', CustomersController.delete)
router.get('/api/customers', CustomersController.getAll)
router.get('/api/customers/id/:id', CustomersController.getById)

// Invoices
router.post('/api/invoices', InvoicesController.add)
router.get('/api/invoices', InvoicesController.getAll)
router.get('/api/invoices/id/:id', InvoicesController.getById)

export default router
