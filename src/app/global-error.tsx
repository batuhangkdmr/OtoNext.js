'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log critical error
    console.error('Global Critical Error:', error);
  }, [error]);

  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #fef2f2 0%, #f3f4f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              width: '100%',
              background: 'white',
              borderRadius: '1.5rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}
          >
            {/* Error Icon */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: '#fee2e2',
                  borderRadius: '50%',
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a80000"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem',
              }}
            >
              Kritik Hata
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                marginBottom: '0.5rem',
              }}
            >
              Üzgünüz, beklenmedik bir hata oluştu.
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: '#9ca3af',
                marginBottom: '2rem',
              }}
            >
              Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.
            </p>

            {/* Actions */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              <button
                onClick={reset}
                style={{
                  background: '#a80000',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#8b0000';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#a80000';
                }}
              >
                🔄 Sayfayı Yenile
              </button>

              <a
                href="/"
                style={{
                  background: '#f3f4f6',
                  color: '#111827',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#e5e7eb';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                }}
              >
                🏠 Ana Sayfaya Dön
              </a>
            </div>

            {/* Contact */}
            <div
              style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid #e5e7eb',
              }}
            >
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                Sorun devam ederse:
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  alignItems: 'center',
                }}
              >
                <a
                  href="tel:05542597273"
                  style={{
                    color: '#a80000',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  📞 0554 259 72 73
                </a>
                <a
                  href="mailto:tokatyonelotoyedekparca@gmail.com"
                  style={{
                    color: '#a80000',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  ✉️ tokatyonelotoyedekparca@gmail.com
                </a>
              </div>
            </div>

            {/* Development Error Details */}
            {process.env.NODE_ENV === 'development' && (
              <div
                style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  background: '#f9fafb',
                  borderRadius: '0.5rem',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    color: '#374151',
                    wordBreak: 'break-all',
                  }}
                >
                  {error.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}

