import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { format, parseISO } from "date-fns";

interface Article {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

function Articles() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  const getArticles = () => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/v1/articles")
      .then(({ data }) => {
        console.log(data.data);
        setIsLoading(false);
        setArticles(data.data);
        // set data
      })
      .catch(() => {
        setIsLoading(false);
        console.log("error");
        // handle errors
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col overflow-auto">
      {isLoading && (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-lg">Loading...</h1>
        </div>
      )}
      <h1 className="pb-4 text-center text-2xl font-medium">Articles</h1>
      {!isLoading && (
        <div className="mx-auto grid grid-cols-1 gap-3 px-12 pb-12 sm:grid-cols-2">
          {articles.map((article, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(`/articles/${article.id}`);
              }}
            >
              <Card
                title={article.title}
                footer={format(parseISO(article.createdAt), "MMMM ii, yyyy")}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Articles;
