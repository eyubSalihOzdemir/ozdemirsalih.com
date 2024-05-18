import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="mt-10 font-light">
      <hr className="h-px border-0 dark:bg-gray-700" />
      <div className="flex h-24 items-center justify-between text-gray-500">
        <h1>© Salih Ozdemir 2024</h1>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/eyubsalihozdemir/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-1 p-1 transition-transform hover:scale-105"
          >
            <IconBrandLinkedin></IconBrandLinkedin>
          </a>
          <a
            href="https://github.com/eyubSalihOzdemir"
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-1 p-1 transition-transform hover:scale-105"
          >
            <IconBrandGithub></IconBrandGithub>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
