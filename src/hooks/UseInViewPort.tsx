import { useEffect, useState } from "react";

function useInViewPort<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [ inViewport, setInViewport ] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([ entry ]) => {
      setInViewport(entry.isIntersecting);
      console.log("1")
      if (entry.isIntersecting) {
        // Unobserve after loading
        observer.unobserve(ref.current!)
      }
    }, options);
    
    const currentRef = ref.current;
    if (currentRef) {
      console.log("2")
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        console.log("3")
        observer.unobserve(currentRef);
        // observer.disconnect();
      }
    };
  }, [ options, ref ]);
  return inViewport;
}
export default useInViewPort;