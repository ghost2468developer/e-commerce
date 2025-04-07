import admin from 'firebase-admin'
import serviceAccount from '../../serviceAccount.json.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
})

export const db = admin.firestore()