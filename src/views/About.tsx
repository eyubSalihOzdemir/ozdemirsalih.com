import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useStateContext } from "../contexts/ContextProvider";

function About() {
  const { setActiveNavbarButton } = useStateContext();

  setActiveNavbarButton("about");

  return (
    <div className="flex flex-col gap-10 pb-24 pt-24">
      <div className="flex animate-fade-down text-4xl  font-medium animate-duration-500 animate-ease-out">
        <h1 className="">About&nbsp;</h1>
        <span className="animate-gradient bg-gradient-to-r from-rose-300 via-orange-300 to-rose-300 bg-[length:200%_auto] bg-clip-text font-medium text-transparent transition-all duration-500">
          Salih Ozdemir
        </span>
      </div>

      {/* Introduction */}
      <div className="animate-fade-down space-y-4 text-lg font-light animate-delay-100 animate-duration-500">
        <span className="inline-block animate-jump animate-delay-1000">
          Hello.&nbsp;
        </span>
        <span>
          I studied Computer Science and began my career with mobile app
          development. Currently, I'm expanding my skills in web development,
          and this website is a live project reflecting my learning journey.
          <br />
        </span>
        <p>
          Originally from Turkey, I'm currently pursuing additional Computer
          Science courses at the University of Antwerp in Belgium.
          <br />
        </p>
        <p>
          Here, I'll be sharing a mix of personal and professional content,
          including projects, code samples, writings on various topics, stories,
          and notes.
        </p>
      </div>

      <div className="animate-fade-down space-y-4 animate-delay-200 animate-duration-500 animate-ease-out">
        <div className="flex text-xl">Professional Background</div>
        <div className="space-y-4 text-lg font-light">
          <p>
            During my university days, navigating through multiple university
            websites daily was a challenge for students. To solve this problem
            -not just for myself but for everyone-, I developed a mobile app
            using Java (it was a popular technology for mobile development at
            the time), which proved successful and was well-received by users.
          </p>
          <p>
            I then transitioned to Flutter, where I created several mini-apps,
            one of which{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.SalihOzdemir.KeySMR&hl=nl&gl=US"
              rel="noopener noreferrer"
              target="_blank"
            >
              (KeySMR)
            </a>{" "}
            garnered almost 10K downloads on the PlayStore. In my senior year, I
            worked for a robotics and software startup, utilizing Flutter to
            build an app for an IoT device employed in predictive maintenance
            for wind farms.
          </p>
          <p>
            Subsequently, I met with Swift & SwiftUI, and it was love at first
            sight. However, I found the framework, while brilliant, to be less
            mature at the time.
          </p>
          <p>
            After realizing the significance of web development for broadening
            my skills as a developer, I delved into this field as soon as I had
            the opportunity. This exploration ultimately led me to create the
            website you're currently browsing.
          </p>
        </div>
        <div className="flex animate-fade-down gap-6 font-light text-gray-400 animate-delay-300 animate-duration-500 animate-ease-out">
          <a
            href="https://github.com/eyubSalihOzdemir"
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-1 p-1 transition-transform hover:scale-105"
          >
            <IconBrandGithub></IconBrandGithub>
            <h1>GitHub</h1>
          </a>
          <a
            href="https://www.linkedin.com/in/eyubsalihozdemir/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-1 p-1 transition-transform hover:scale-105"
          >
            <IconBrandLinkedin></IconBrandLinkedin>
            <h1>LinkedIn</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
