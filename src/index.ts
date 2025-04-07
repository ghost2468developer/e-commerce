import express from 'express'
import productRoutes from './routes/products'
import userRoutes from './routes/users'

const app = express()

// Use built-in body parser
app.use(express.json())

// Routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})