const Button = ({ link, text, icon, content }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-white/40 hover:bg-white/10 w-full rounded-2xl border border-gray-300 flex flex-col px-2 py-3 justify-center items-center"
    >
      <div className="flex items-center gap-1">
        <img src={icon} alt={text} width={28} />
        <p className="text-[#1A7177] font-sans text-sm font-semibold">{text}</p>
      </div>
      {content}
    </a>
  );
};

export default Button;
