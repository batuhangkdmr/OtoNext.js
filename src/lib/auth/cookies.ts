import { cookies } from 'next/headers';

const TOKEN_NAME = 'auth_token';
const MAX_AGE = 60 * 60 * 24; // 1 day

// Set auth cookie
export async function setAuthCookie(token: string) {
  (await cookies()).set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE,
    path: '/',
  });
}

// Get auth cookie
export async function getAuthCookie(): Promise<string | undefined> {
  return (await cookies()).get(TOKEN_NAME)?.value;
}

// Delete auth cookie
export async function deleteAuthCookie() {
  (await cookies()).delete(TOKEN_NAME);
}

