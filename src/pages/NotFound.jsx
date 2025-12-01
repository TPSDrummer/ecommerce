export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
        </div>
    );
}