export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-4">
          Page not found
        </p>
        <a 
          href="/" 
          className="text-primary-blue hover:underline"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}