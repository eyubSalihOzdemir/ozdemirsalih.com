import Card from "../components/Card";
import { useStateContext } from "../contexts/ContextProvider";

function Articles() {
  const { setActiveNavbarButton } = useStateContext();
  setActiveNavbarButton("blog");

  return (
    <div className="flex flex-col pt-24 pb-24">
      <h1 className="animate-fade-down pb-2 text-4xl font-medium animate-duration-500 animate-ease-out">
        Articles
      </h1>
      <span className="animate-fade-down font-light animate-delay-100 animate-duration-500 animate-ease-out">
        Description for articles.
      </span>

      <div className="grid animate-fade-down grid-cols-1 gap-4 pt-8 animate-delay-200 animate-duration-500 animate-ease-out sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Article Title" footer="01.01.2024" description="Lorem, ipsum dolor sit amet consectetur adipis elit. Sit, amet.
          Lorem, ipsum."/>
        <Card title="Article Title" footer="01.01.2024" description="Lorem, ipsum dolor sit amet consectetur adipis elit. Sit, amet.
          Lorem, ipsum."/>
        <Card title="Article Title" footer="01.01.2024" description="Lorem, ipsum dolor sit amet consectetur adipis elit. Sit, amet.
          Lorem, ipsum."/>
        <Card title="Article Title" footer="01.01.2024" description="Lorem, ipsum dolor sit amet consectetur adipis elit. Sit, amet.
          Lorem, ipsum."/>
        <Card title="Article Title" footer="01.01.2024" description="Lorem, ipsum dolor sit amet consectetur adipis elit. Sit, amet.
          Lorem, ipsum."/>
        <Card title="Article Title" footer="01.01.2024" description="Lorem, ipsum dolor sit amet consectetur adipis elit. Sit, amet.
          Lorem, ipsum."/>
        <Card title="Article Title" footer="01.01.2024" description="Lorem, ipsum dolor sit amet consectetur adipis elit. Sit, amet.
          Lorem, ipsum."/>
      </div>
    </div>
  );
}

export default Articles;
