import ContainerHeader from "./ContainerHeader";

export default function MainContainer({ children }) {
  return (
    <>
      <div className="flex items-center flex-col justify-center h-screen bg-background">
        <div className="py-8 md:py-8 outline outline-2 relative bg-cyan-100 mx-auto w-80 md:w-full max-w-lg px-2 md:px-6 shadow-[6px_6px_0px_6px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_10px_rgba(0,0,0,1)]">
        <ContainerHeader />
          <div className="flex-col flex items-center pt-8 px-8 gap-y-4 sm:gap-y-8 md:gap-y-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
