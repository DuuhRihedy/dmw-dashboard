import { createAuthClient } from '@neondatabase/auth'; const authClient = createAuthClient('http://localhost:3000'); console.log('session in authClient:', 'session' in authClient);  
