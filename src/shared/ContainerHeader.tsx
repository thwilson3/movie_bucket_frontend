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
  handleClick
}: {
  options: HeaderOptions;
  handleClick: () => void
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
        <div className="absolute top-2 right-2 bg-primary cursor-pointer rounded-full outline outline-2 w-20 px-2 font-bold text-center"
        onClick={handleClick}>
          <div className="flex items-center justify-center">menu <MdArrowForwardIos className="ml-1 h-4"/></div>
        </div>
      ) : null}
      <div className="absolute left-full top-0 ml-6 outline outline-2 outline-black bg-primary drop-shadow-lg rounded-r-md h-10 w-36 z-40 shadow-[3px_3px_0px_3px_rgba(0,0,0,1)]">
            test
      </div>
    </>
  );
}
