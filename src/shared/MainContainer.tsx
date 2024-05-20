import { ReactNode, useState } from "react";
import { HeaderOptions } from "../types";
import ContainerHeader from "./ContainerHeader";
import SidebarMenu from "./SidebarMenu";

const defaultHeaderOptions: HeaderOptions = {
  title: "welcome",
  buttons: [],
};

/** Main Container - Styled container shared across application
 *
 * State: none
 * Props: children<ReactNode>, headerOptions
 *
 * MainContainer -> { ContainerHeader, children }
 */
export default function MainContainer({
  children,
  headerOptions = defaultHeaderOptions,
}: {
  children: ReactNode;
  headerOptions?: HeaderOptions;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { buttons } = headerOptions;

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="flex relative items-center flex-col z-10 justify-center mt-16 bg-background">
        <div className="relative">
          <div className="flex flex-col items-center justify-center py-8 outline outline-2 rounded-md relative bg-secondAccent overflow-y-scroll mx-auto w-[40rem] min-h-min px-2 md:px-6 shadow-base">
            <ContainerHeader
              options={headerOptions}
              handleClick={handleClick}
              isMenuOpen={isMenuOpen}
            />
            <div className="mt-10 gap-y-4">
              {children}
            </div>
          </div>
          <SidebarMenu buttons={buttons} isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </>
  );
}
