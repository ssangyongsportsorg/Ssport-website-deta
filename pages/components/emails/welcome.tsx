/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h0cBzSGO1zZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "flowbite-react";

interface WelcomeEmailProps {
  name: string | null | undefined;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  const previewText = `Welcome to Papermark, ${name}!`;

  
  return (
    <div className="relative w-full max-w-3xl p-6 mx-auto rounded-lg border shadow-md bg-white dark:bg-gray-900">
      <header className="flex items-center gap-4 pb-6">
        <img
          alt="Logo"
          className="rounded-lg"
          height="48"
          src="https://ssangyongsports.eu.org/logo.png"
          style={{
            aspectRatio: "48/48",
            objectFit: "cover",
          }}
          width="48"
        />
        <div className="text-xl font-bold">Welcome to Shadcn</div>
      </header>
      <main className="prose max-w-none space-y-4">
        <p>
          Hi there, thanks for signing up! We're thrilled to have you on board. You've just taken the first step towards
          supercharging your web development workflow.
        </p>
        <p>
          To help you get started, we've put together a quick guide to navigating the platform and making the most of
          its features.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Dashboard:</strong>
            This is your command center. It gives you an overview of your projects, deployments, and more.
          </li>
          <li>
            <strong>Creating a Project:</strong>
            Click the "New Project" button to kick off a new web project.
          </li>
          <li>
            <strong>Deploying:</strong>
            Once you've built your project, deploy it to the web with a single click.
          </li>
        </ul>
      </main>
      <footer className="mt-8">
        <Button className="w-full">Go to my dashboard</Button>
      </footer>
    </div>
    );
};


