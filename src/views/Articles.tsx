import axios from "axios";
import React, { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  body: string;
}

function Articles() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = () => {
    setIsLoading(true);

    axios
      .get("http://127.0.0.1:8000/api/v1/articles")
      .then(({ data }) => {
        console.log("succ");
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
    <div className="flex h-[calc(100vh-64px)] flex-col overflow-auto">
      {isLoading && (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-lg">Loading...</h1>
        </div>
      )}
      {!isLoading && (
        <div className="flex h-full w-full flex-col items-center">
          {articles.map((article, index) => (
            <h1 key={index}>{article.title}</h1>
          ))}
        </div>
      )}
    </div>
  );
}

export default Articles;
