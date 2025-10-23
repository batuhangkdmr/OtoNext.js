// JWT Auth with jose (Next.js recommended)
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'yonel-secret-key-change-in-production'
);

export interface TokenPayload {
  username: string;
  role: string;
  [key: string]: string | unknown; // Index signature for JWTPayload compatibility
}

// Generate JWT Token
export async function generateToken(payload: TokenPayload): Promise<string> {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .setIssuer(process.env.JWT_ISSUER || 'https://yonelotoyedekparca.com')
    .setAudience(process.env.JWT_AUDIENCE || 'https://yonelotoyedekparca.com')
    .sign(JWT_SECRET);

  return token;
}

// Verify JWT Token
export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      issuer: process.env.JWT_ISSUER || 'https://yonelotoyedekparca.com',
      audience: process.env.JWT_AUDIENCE || 'https://yonelotoyedekparca.com',
    });

    return payload as TokenPayload;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
}

