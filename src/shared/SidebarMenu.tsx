import { Link } from "react-router-dom";
import { OptionButtonType } from "../types";

export default function SidebarMenu({
  buttons,
  isMenuOpen,
}: {
  buttons: OptionButtonType[];
  isMenuOpen: boolean;
}) {


  return (
    <div
      className="absolute top-11 left-full duration-500 -z-10 outline outline-2 outline-black bg-primary rounded-r-md rounded-l-md w-44 shadow-base"
      style={{
        marginLeft: `${isMenuOpen ? "3" : "-20"}rem`,
        visibility: `${isMenuOpen ? "visible" : "hidden"}`,
      }}
    >
        <div className="text-center text-lg font-bold py-2 cursor-default bg-accent">
            actions
        </div>
        <hr className="border-black border-2 border-x-8"></hr>
      {buttons.map((button) =>
        button.type === "Link" ? (
          <>
            <Link to={button.path} onClick={button.function}>
              <div className="text-center font-bold py-2">{button.text}</div>
            </Link>
            <hr className="border-black border-2 border-x-8"></hr>
          </>
        ) : button.type === "Toggle" ? (
          <>
            <button
              className="text-center font-bold py-2 w-full"
              onClick={button.function}
            >
              {button.text}
            </button>
            <hr className="border-black border-2 border-x-8"></hr>
          </>
        ) : null
      )}
    </div>
  );
}
