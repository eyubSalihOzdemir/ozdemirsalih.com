interface Props {
  onClick?: () => void;
  title: string;
  description: string;
  footer: string;
}

function CompactCard({ title, footer, description }: Props) {
  // max-w-[26rem]
  return (
    <div className="flex h-full w-full min-w-52 flex-col overflow-hidden rounded-md border border-secondary text-left transition-transform hover:scale-[102%]">
      <div className="p-4">
        <h1 className="line-clamp-2 text-lg font-medium">{title}</h1>
        <h1 className="pb-4 text-sm text-secondary">{footer}</h1>
        <span className="font-light">{description}</span>
      </div>
    </div>
  );
}

export default CompactCard;
