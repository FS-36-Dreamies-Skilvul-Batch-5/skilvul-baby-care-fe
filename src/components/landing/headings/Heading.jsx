export default function Heading({ title, description, align }) {
  let contentAlignment = "text-center";

  if (align === "left") {
    contentAlignment = "text-left";
  } else if (align === "right") {
    contentAlignment = "text-right";
  }

  return (
    <div className={`flex flex-col ${contentAlignment} gap-y-2.5`}>
      <h1 className="font-opensans text-[32px] text-[#272C49] font-extrabold">{title}</h1>
      <p className="text-[#36455B]">{description}</p>
    </div>
  );
}