import { Request, Response } from 'express'
import { db } from '../config/firebase'

// Create a Product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category } = req.body

    if (!name || !description || !price || !category) {
      return res.status(400).send('All fields are required.')
    }

    const newProduct = {
      name,
      description,
      price,
      category,
      createdAt: new Date()
    }

    const productRef = db.collection('products').doc()
    await productRef.set(newProduct)

    return res.status(201).json({ id: productRef.id, ...newProduct })
  } catch (error) {
    return res.status(500).send('Error creating product: ' + error.message)
  }
};

// Get all Products
export const getProducts = async (_req: Request, res: Response) => {
  try {
    const productsSnapshot = await db.collection("products").get()
    const products: any[] = []

    productsSnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() })
    })

    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).send('Error fetching products: ' + error.message)
  }
};

// Get a single Product by ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id
    const productDoc = await db.collection('products').doc(productId).get()

    if (!productDoc.exists) {
      return res.status(404).send('Product not found')
    }

    return res.status(200).json({ id: productDoc.id, ...productDoc.data() })
  } catch (error) {
    return res.status(500).send('Error fetching product: ' + error.message)
  }
};
