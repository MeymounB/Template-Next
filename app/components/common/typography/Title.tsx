export const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 border-b-2 border-black pb-4">
      <h2 className="text-4xl font-bold font-light text-black">{title}</h2>
    </div>
  );
};
