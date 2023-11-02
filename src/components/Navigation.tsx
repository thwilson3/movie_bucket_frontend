
import { useState } from "react";
import { TbAlignRight } from "react-icons/tb"

const navItems = [
  { link: `example.com`, text: "login" },
  { link: "example2.com", text: "account" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section>
      <div className="h-auto w-screen bg-background py-2 text-black">
        <nav className="mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0 ">
          <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
            <a href="/">
              <div>moviebucket</div>
            </a>
            <div
              className={`mt-8 flex flex-col items-end space-y-8 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {navItems.map((item, idx) => (
                <div key={idx} className="flex items-center font-semibold text-black">
                  <a
                    href={item.link}
                    key={idx}
                    className="flex cursor-pointer items-center border-2 border-black bg-primary px-3 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
            <TbAlignRight
            className="cursor-pointer absolute right-5 lg:hidden"
            onClick={toggleMenu}
            />
          </div>
        </nav>
      </div>
    </section>
  );
}