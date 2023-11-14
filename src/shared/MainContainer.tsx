import { ReactNode } from "react";
import { HeaderOptions } from "../types";
import ContainerHeader from "./ContainerHeader";

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
  return (
    <>
      <div className="flex relative items-center flex-col justify-center mt-16 bg-background">
        <div className="absolute -right-4 top-0 outline outline-2 outline-black rounded-md h-10 w-32 z-30">
              test
        </div>
        <div className="flex flex-col items-center py-8 md:py-8 mb-6 outline outline-2 rounded-md relative bg-secondAccent overflow-y-scroll max-h-screen mx-auto w-80 md:w-full max-w-2xl px-2 md:px-6 shadow-[6px_6px_0px_6px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_6px_rgba(0,0,0,1)]">
          <ContainerHeader options={headerOptions} />
          <div className="pt-8 px-8 gap-y-4 sm:gap-y-8 md:gap-y-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
