interface Props {
  text: string;
}

function SidebarTitle({ text }: Props) {
  return (
    <h1 className="flex items-center px-2 text-xl font-semibold">{text}</h1>
  );
}

export default SidebarTitle;
