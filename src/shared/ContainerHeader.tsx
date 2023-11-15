import { useNavigate } from "react-router-dom";
import { HeaderOptions } from "../types";
import { MdArrowForwardIos, MdUndo } from "react-icons/md";

/** ContainerHeader - Renders headerOptions passed down with corresponding functionality
 *
 * State: none
 * Props: options<HeaderOptionsType>
 *
 * MainContainer -> ContainerHeader
 */
export default function ContainerHeader({
  options,
  handleClick,
  isMenuOpen,
}: {
  options: HeaderOptions;
  handleClick: () => void;
  isMenuOpen: boolean;
}) {
  const navigate = useNavigate();

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
      {options?.buttons.length ? (
        <div
          className="absolute top-2 right-2 bg-primary cursor-pointer rounded-full outline outline-2 w-20 px-2 font-bold text-center"
          onClick={handleClick}
        >
          <div className="flex items-center justify-center">
            menu{" "}
            <MdArrowForwardIos
              className="ml-1 h-4 transition-transform ease-in-out"
              style={{ transform: `rotate(${isMenuOpen ? "180deg" : "0"})` }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
