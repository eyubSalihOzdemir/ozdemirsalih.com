import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { format, parseISO } from "date-fns";

interface Article {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  description: string;
  thumbnail: string;
}

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { setActiveNavbarButton } = useStateContext();
  setActiveNavbarButton("blog");

  const getArticles = () => {
    // setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/v1/articles")
      .then(({ data }) => {
        console.log(data.data);
        // setIsLoading(false);
        setArticles(data.data);
        // set data
      })
      .catch(() => {
        // setIsLoading(false);
        console.log("error");
        // handle errors
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="flex flex-col pt-24 pb-24">
      <h1 className="animate-fade-down pb-2 text-4xl font-medium animate-duration-500 animate-ease-out">
        Articles
      </h1>
      <span className="animate-fade-down font-light animate-delay-100 animate-duration-500 animate-ease-out">
        Description for articles.
      </span>

      <div className="grid animate-fade-down grid-cols-1 gap-4 pt-8 animate-delay-200 animate-duration-500 animate-ease-out sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
            <Card key={index} thumbnail={article.thumbnail} title={article.title} footer={format(parseISO(article.createdAt), "MMMM ii, yyyy")} description={article.description}/>
          ))}
      </div>
    </div>
  );
}

export default Articles;
