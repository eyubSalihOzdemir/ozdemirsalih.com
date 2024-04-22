import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useStateContext } from "../contexts/ContextProvider";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const { setActiveNavbarButton } = useStateContext();

  setActiveNavbarButton("about");

  return (
    <div className="flex flex-col gap-10 pb-24 pt-24">
      <div className="flex animate-fade-down whitespace-pre-wrap text-4xl font-medium animate-duration-500 animate-ease-out">
        <Trans i18nKey={"aboutPage.title.aboutName"}>
          <h1>About</h1>
          <span className="animate-gradient bg-gradient-to-r from-rose-300 via-orange-300 to-rose-300 bg-[length:200%_auto] bg-clip-text font-medium text-transparent transition-all duration-500">
            Salih Ozdemir
          </span>
        </Trans>
      </div>

      {/* Introduction */}
      <div className="animate-fade-down space-y-4 text-lg font-light animate-delay-100 animate-duration-500">
        <span className="inline-block animate-jump animate-delay-1000">
          {t("aboutPage.greetings")}&nbsp;
        </span>
        <span>
          {t("aboutPage.introduction1")}
          <br />
        </span>
        <p>
          {t("aboutPage.introduction2")}
          <br />
        </p>
        <p>{t("aboutPage.introduction3")}</p>
      </div>

      <div className="animate-fade-down space-y-4 animate-delay-200 animate-duration-500 animate-ease-out">
        <div className="flex text-xl font-medium">
          {t("aboutPage.title.professional")}
        </div>
        <div className="space-y-4 text-lg font-light">
          <p>{t("aboutPage.professionalIntroduction1")}</p>
          <p>
            <Trans i18nKey={"aboutPage.professionalIntroduction2"}>
              I then transitioned to Flutter, where I created several mini-apps,
              one of which{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.SalihOzdemir.KeySMR&hl=nl&gl=US"
                rel="noopener noreferrer"
                target="_blank"
              >
                (KeySMR)
              </a>{" "}
              garnered almost 10K downloads on the PlayStore. In my senior year,
              I worked for a robotics and software startup, utilizing Flutter to
              build an app for an IoT device employed in predictive maintenance
              for wind farms.
            </Trans>
          </p>
          <p>{t("aboutPage.professionalIntroduction3")}</p>
          <p>{t("aboutPage.professionalIntroduction4")}</p>
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
