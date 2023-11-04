import { ReactNode } from "react";
import { HeaderOptions } from "../interfaces";
import ContainerHeader from "./ContainerHeader";

export default function MainContainer({ children, headerOptions }: {children: ReactNode; headerOptions?: HeaderOptions}) {
  return (
    <>
      <div className="flex items-center flex-col justify-center mt-16 bg-background">
        <div className="flex flex-col items-center py-8 md:py-8 outline outline-2 rounded-md relative bg-accent mx-auto w-80 md:w-full max-w-lg px-2 md:px-6 shadow-[6px_6px_0px_6px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_10px_rgba(0,0,0,1)]">
          <ContainerHeader options={headerOptions}/>
          <div className="pt-8 px-8 gap-y-4 sm:gap-y-8 md:gap-y-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
