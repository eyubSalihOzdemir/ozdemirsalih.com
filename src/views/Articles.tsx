import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IconLoader2 } from "@tabler/icons-react";

interface Article {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  thumbnail: string;
}

function Articles() {
  const { t } = useTranslation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { setActiveNavbarButton } = useStateContext();
  setActiveNavbarButton("blog");

  useEffect(() => {
    const fetchArticles = () => {
      axios
        .get("http://127.0.0.1:8000/api/v1/articles")
        .then(({ data }) => {
          // console.log(data.data);
          setArticles(data.data);
          setIsLoading(false);
        })
        .catch((errors) => {
          console.log(errors);
          setIsError(true);
          setIsLoading(false);
        });
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex h-max flex-col pb-24 pt-24">
      <h1 className="animate-fade-down pb-2 text-4xl font-medium animate-duration-500 animate-ease-out">
        {t("articlesPage.title.articles")}
      </h1>
      <span className="animate-fade-down font-light animate-delay-100 animate-duration-500 animate-ease-out">
        {t("articlesPage.description")}
      </span>

      {isLoading ? (
        <div className="flex h-full items-center justify-center ">
          <h1 className=" animate-fade-down animate-delay-200 animate-duration-500 animate-ease-out">
            <IconLoader2 className="animate-spin" />
          </h1>
        </div>
      ) : (
        <>
          {isError ? (
            <div className="flex h-full items-center justify-center ">
              <h1 className="animate-fade-down animate-delay-200 animate-duration-500 animate-ease-out">
                {t("articlesPage.error.fetchingError")}
              </h1>
            </div>
          ) : (
            <div className="grid animate-fade-down grid-cols-1 gap-4 pt-8 animate-delay-200 animate-duration-500 animate-ease-out sm:grid-cols-2 lg:grid-cols-3">
              {articles.length ? (
                <>
                  {articles.map((article, index) => (
                    <Link to={`/articles/${article.id}`}>
                      <Card
                        key={index}
                        thumbnail={article.thumbnail}
                        title={article.title}
                        footer={format(
                          parseISO(article.createdAt),
                          "MMMM ii, yyyy",
                        )}
                        description={article.description}
                      />
                    </Link>
                  ))}
                </>
              ) : (
                <span className="flex animate-fade-down font-light animate-delay-200 animate-duration-500 animate-ease-out">
                  {t("articlesPage.noArticles")}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Articles;
