const bucketItems = [{ name: "test bucket" }, { name: "test bucket 2" }];
export default function BucketList() {
  return (
    <div className="py-8 md:py-8 outline outline-2 lg:py-20 mx-auto w-80 md:w-full max-w-lg px-2 md:px-6 shadow-[6px_6px_0px_6px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_10px_rgba(0,0,0,1)]">
      <div className="flex-col flex items-center px-8 gap-y-4 sm:gap-y-8 md:gap-y-10">
        {bucketItems.map((item, idx) => (
          <div
            className="flex cursor-pointer text-black justify-center font-bold outline outline-2 w-full max-w-sm py-6 bg-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none"
            key={idx}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
