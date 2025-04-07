import { json } from 'body-parser'
import express from 'express'
import productRoutes from './routes/products'
import userRoutes from './routes/users'

const app = express()
app.use(json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.listen(3000, () => {
    console.log(('Server running on llocalhost:3000'))
})