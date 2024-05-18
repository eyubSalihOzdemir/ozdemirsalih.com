import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import { parseISO, format } from "date-fns";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSpace as highlightStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconLoader2 } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

interface Article {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  thumbnail: string;
  bodyMdFilepath: string;
}

// There was an issue with SyntaxHighlighter, made some changes and created a custom interface to fix it:
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/479
interface CodeProps {
  node?: any;
  inline?: any;
  className?: any;
  children?: any;
}

function Article() {
  const { setActiveNavbarButton } = useStateContext();
  setActiveNavbarButton("blog");

  const { t } = useTranslation();
  const [article, setArticle] = useState<Article | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // const markdownResponse = await axios.get(data.data.body_md_filepath);
    // setMarkdownContent(markdownResponse.data);

    const fetchArticle = async () => {
      try {
        const articleResponse = await axios.get(
          `http://127.0.0.1:8000/api/v1/articles/${id}`,
        );
        console.log(articleResponse.data.data.bodyMdFilepath);
        const mdDataResponse = await axios.get(
          articleResponse.data.data.bodyMdFilepath,
        );
        // console.log(articleResponse.data.data);
        setMarkdownContent(mdDataResponse.data);
        setArticle(articleResponse.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, []);

  return (
    <div className="flex h-max flex-col pb-24 pt-24">
      {isLoading ? (
        <div className="flex h-full items-center justify-center ">
          <h1 className=" animate-fade-down animate-delay-200 animate-duration-500 animate-ease-out">
            <IconLoader2 className="animate-spin" />
          </h1>
        </div>
      ) : (
        <>
          {isError || article === null ? (
            <>
              <h1 className="animate-fade-down pb-2 text-4xl font-medium animate-duration-500 animate-ease-out">
                Oops..
              </h1>
              <span className="animate-fade-down font-light animate-delay-100 animate-duration-500 animate-ease-out">
                {t("articlePage.error.fetchingError")}
              </span>
            </>
          ) : (
            <>
              <h1 className="animate-fade-down pb-2 text-4xl font-medium animate-duration-500 animate-ease-out">
                {article.title}
              </h1>
              <span className="animate-fade-down font-light animate-delay-100 animate-duration-500 animate-ease-out">
                {article.description}
              </span>
              <span className="animate-fade-down pt-4 font-light animate-delay-200 animate-duration-500 animate-ease-out">
                {format(parseISO(article.createdAt), "dd MMMM yyyy")}
              </span>
              <div className="animate-fade-down pt-8 font-light animate-delay-300 animate-duration-500 animate-ease-out">
                <Markdown
                  className="markdown"
                  children={markdownContent}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, className, children, ...props }: CodeProps) {
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          PreTag="div"
                          language={match[1]}
                          style={highlightStyle}
                          {...props}
                        />
                      ) : (
                        <code {...props} className={className}>
                          {children}
                        </code>
                      );
                    },
                    a: (props) => {
                      return (
                        <a
                          className="text-orange-500 underline"
                          href={props.href}
                        >
                          {props.children}
                        </a>
                      );
                    },
                  }}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Article;
