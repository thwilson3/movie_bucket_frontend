import { Link } from "react-router-dom";
import { OptionButtonType } from "../types";

export default function SidebarMenu({ buttons }: {buttons: OptionButtonType[]}) {
  return (
    <div className="absolute top-11 left-full ml-6 outline outline-2 outline-black bg-primary drop-shadow-lg rounded-r-md w-36 shadow-[3px_3px_0px_3px_rgba(0,0,0,1)]">
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
