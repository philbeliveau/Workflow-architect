import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-lg mb-4">
              Page not found
            </p>
            <Link 
              href="/" 
              className="text-blue-600 hover:underline"
            >
              Go back home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}