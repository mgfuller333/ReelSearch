import admin from "firebase-admin"

interface FirebaseAdminAppParams {
  projectId: string
  clientEmail: string
  storageBucket: string
  privateKey: string
}
function formatFirebasePrivateKey(key: string) {
  return key.replace(/\\n/g, "\n")
}

export function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
  const privateKey = formatFirebasePrivateKey(params.privateKey)

  // if already created, return the same instance
  if (admin.apps.length > 0) {
    return admin.app()
  }

  // create certificate
  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  })

  // initialize admin app
  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  })
}

async function initializeAdmin() {
  const params = {
    projectId: process.env.projectId!,
    clientEmail: process.env.client_email!,
    storageBucket: process.env.storageBucket!,
    privateKey: process.env.private_key!,
  }

  return createFirebaseAdminApp(params)
}

export default initializeAdmin
