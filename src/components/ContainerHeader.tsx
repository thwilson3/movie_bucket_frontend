import { Link } from "react-router-dom";
import { HeaderOptions } from "../interfaces";

export default function ContainerHeader({
  options,
}: {
  options?: HeaderOptions;
}) {
  function calculateButtonSpacing(index: number) {
    return index === 0 ? { right: "1rem" } : { right: `${index + 6}rem` };
  }
  return (
    <>
      <div className="flex py-2 md:py-2 lg:py-2 font-bold bg-accent rounded-t-md justify-center outline outline-2 top-0 left-0 absolute w-full">
        {options?.title ? options.title : "welcome"}
      </div>
      {options?.buttons.length
        ? options?.buttons.map((button, index) => (
            <div
              className="absolute top-2 w-20 text-center"
              style={calculateButtonSpacing(index)}
              key={index}
            >
              <Link to={button.path} onClick={button.function}>
                <div className="bg-primary font-bold outline outline-2 px-2 cursor-pointer rounded-full">
                  {button.text}
                </div>
              </Link>
            </div>
          ))
        : null}
    </>
  );
}
