import { useEffect, useState } from "react";

function useInViewPort<T extends HTMLElement>(
  ref: React.RefObject<T>,
  options?: IntersectionObserverInit,
) {
  const [inViewport, setInViewport] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInViewport(entry.isIntersecting);
      if (entry.isIntersecting) {
        // Unobserve after loading
        observer.unobserve(ref.current!);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        // observer.disconnect();
      }
    };
  }, [options, ref]);
  return inViewport;
}
export default useInViewPort;
