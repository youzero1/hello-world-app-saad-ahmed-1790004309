import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16">
      <h1 className="text-4xl font-medium tracking-tight text-neutral-800 sm:text-5xl md:text-6xl">
        Hello, World!
      </h1>
    </main>
  );
}
