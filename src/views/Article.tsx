// import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { parseISO, format } from "date-fns";

interface Article {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

function Article() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({
    id: null,
    title: "",
    body: "",
    createdAt: "",
  });

  const getArticle = () => {
    setIsLoading(true);

    // delete later, testing the depoloyment
    if (isLoading) {
    }

    axios
      .get(`http://127.0.0.1:8000/api/v1/articles/${id}`)
      .then(({ data }) => {
        console.log(data.data);
        setIsLoading(false);
        setArticle(data.data);
        // set data
      })
      .catch(() => {
        setIsLoading(false);
        console.log("error");
        // handle errors
      });
  };

  if (id) {
    useEffect(() => {
      getArticle();
    }, []);
  }

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col overflow-auto px-16 pb-16">
      <div className="pb-4">
        <h1 className="text-base font-medium sm:text-lg md:text-xl">
          {article.title}
        </h1>
        <h1 className="text-xs text-dark-secondary/60 sm:text-sm md:text-base">
          {format(parseISO(article.createdAt), "MMMM ii, yyyy")}
        </h1>
      </div>
      <p>{article.body}</p>
    </div>
  );
}

export default Article;
