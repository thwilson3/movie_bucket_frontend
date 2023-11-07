import { Link, useNavigate } from "react-router-dom";
import { HeaderOptions } from "../types";
import { MdUndo } from "react-icons/md";

export default function ContainerHeader({
  options,
}: {
  options: HeaderOptions;
}) {
  const navigate = useNavigate();

  function calculateButtonSpacing(index: number) {
    return index === 0 ? { right: "1rem" } : { right: `${index * 6 + 1}rem` };
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <div className="flex py-2 md:py-2 lg:py-2 font-bold bg-accent h-10 rounded-t-md justify-center outline outline-2 top-0 left-0 absolute w-full">
        {options?.title ? options.title : "welcome"}
      </div>
      <MdUndo
        className="absolute left-2 top-2 h-6 w-10 cursor-pointer rounded-full bg-primary outline outline-2"
        onClick={goBack}
      />
      {options?.buttons.length
        ? options?.buttons.map((button, index) => (
            <div
              className="absolute top-2 text-center"
              style={calculateButtonSpacing(index)}
              key={index}
            >
              {button.type === "Link" ? (
                <Link to={button.path} onClick={button.function}>
                  <div className="bg-primary font-bold outline w-20 outline-2 px-2 cursor-pointer rounded-full">
                    {button.text}
                  </div>
                </Link>
              ) : button.type === "Toggle" ? (
                <button
                  className="bg-primary font-bold outline w-20 outline-2 px-2 cursor-pointer rounded-full"
                  onClick={button.function}
                >
                  {button.text}
                </button>
              ) : null}
            </div>
          ))
        : null}
    </>
  );
}
