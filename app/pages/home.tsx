import type { Route } from ".react-router/types/app/pages/+types/home.ts";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Homepage here</h1>
    </main>
  );
}
