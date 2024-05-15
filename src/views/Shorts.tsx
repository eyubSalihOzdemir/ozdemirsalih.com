import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { IconLoader2 } from "@tabler/icons-react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import CompactCard from "../components/CompactCard";

interface Short {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  description: string;
}

function Shorts() {
  const [shorts, setShorts] = useState<Short[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { setActiveNavbarButton } = useStateContext();
  setActiveNavbarButton("dev");

  useEffect(() => {
    const fetchShorts = () => {
      axios
        .get("http://127.0.0.1:8000/api/v1/shorts")
        .then(({ data }) => {
          // console.log(data.data);
          setShorts(data.data);
          setIsLoading(false);
        })
        .catch((errors) => {
          console.log(errors);
          setIsError(true);
          setIsLoading(false);
        });
    };

    fetchShorts();
  }, []);

  return (
    <div className="flex h-max flex-col pb-24 pt-24">
      <h1 className="animate-fade-down pb-2 text-4xl font-medium animate-duration-500 animate-ease-out">
        Shorts
      </h1>
      <span className="animate-fade-down font-light animate-delay-100 animate-duration-500 animate-ease-out">
        Description for shorts page.
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
                There is a fetching error
              </h1>
            </div>
          ) : (
            <div className="grid animate-fade-down grid-cols-1 gap-4 pt-8 animate-delay-200 animate-duration-500 animate-ease-out sm:grid-cols-2 lg:grid-cols-3">
              {shorts.length ? (
                <>
                  {shorts.map((short, index) => (
                    <Link to={`/shorts/${short.id}`}>
                      <CompactCard
                        key={index}
                        title={short.title}
                        footer={format(
                          parseISO(short.createdAt),
                          "MMMM ii, yyyy",
                        )}
                        description={short.description}
                      ></CompactCard>
                    </Link>
                  ))}
                </>
              ) : (
                <span className="flex animate-fade-down font-light animate-delay-200 animate-duration-500 animate-ease-out">
                  There are no shorts
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Shorts;
