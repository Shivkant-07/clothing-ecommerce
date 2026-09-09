import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            VELORA
          </h1>

          <p className="mt-4 text-gray-500">
            Modern fashion, made for you.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;