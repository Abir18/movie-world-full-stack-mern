import {FiUser} from "react-icons/fi";
import {IoIosArrowDown} from "react-icons/io";

const navigation = [
  {name: "Get Pro", href: "#"},
  {name: "Movies", href: "#"},
  {name: "Watch-list", href: "#"}
];

const Navbar = () => {
  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between text-white p-6 lg:px-8"
    >
      <div className="flex ml-2 sm:ml-32">
        <a href="#" className="-m-1.5 p-1.5">
          <h1 className="font-archivo font-bold leading-none">
            <span className="text-[#0399FA] text-3xl leading-none">MOVIE</span>{" "}
            <br />
            {[...Array(18)].map((_, index) => (
              <span key={index}>&nbsp;</span>
            ))}
            World
          </h1>
        </a>
      </div>
      <div className="hidden lg:flex ">
        {/* <input
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-md leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm font-bold"
          type="text"
          aria-label="Filter projects"
          placeholder="Search movies"
        >
         
        </input> */}

        {/* ================== */}

        <form method="GET" action="">
          <div className="bg-white border-2  shadow p-2 relative rounded-xl flex w-[500px] ml-6">
            <span className="w-auto flex justify-end  items-center text-gray-500 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <input
              name="episodequery"
              id="title"
              className="border-white outline-none border-0 w-full rounded-xl text-slate-900"
              type="text"
              placeholder="Search movies"
            />
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 rounded-xl text-white text-xl px-6"
            >
              <p className="font-semibold text-xs">All</p>
            </button>
          </div>
        </form>
      </div>
      <div className="flex ">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
        </button>
      </div>
      <div className="hidden lg:flex justify-center items-center lg:gap-x-12 ml-16">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xl font-semibold leading-6 first:text-[#d6c810]"
          >
            {item.name}
          </a>
        ))}
        <button
          className="h-10 px-6 py-7 flex justify-center items-center gap-2 font-semibold rounded-[35px]  text-white bg-gradient-to-r from-cyan-500 to-blue-800"
          type="submit"
        >
          EN <IoIosArrowDown />
        </button>
      </div>
      <div className=" lg:flex lg:justify-end ml-8 mr-10">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          <FiUser size="30px" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// "use client";

// // import {Dialog, DialogPanel} from "@headlessui/react";
// // import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
// import {useState} from "react";

// const navigation = [
//   {name: "Product", href: "#"},
//   {name: "Features", href: "#"},
//   {name: "Marketplace", href: "#"},
//   {name: "Company", href: "#"}
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="text-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav
//           aria-label="Global"
//           className="flex items-center justify-between p-6 lg:px-8"
//         >
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <h1 className="">MOVIE LAND</h1>
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-semibold leading-6 "
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a
//               href="#"
//               className="text-sm font-semibold leading-6 text-gray-900"
//             >
//               Log in <span aria-hidden="true">&rarr;</span>
//             </a>
//           </div>
//         </nav>
//         {/* <Dialog
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//           className="lg:hidden"
//         >
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   alt=""
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                   className="h-8 w-auto"
//                 />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog> */}
//       </header>

//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//             }}
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//               Announcing our next round of funding.{" "}
//               <a href="#" className="font-semibold text-indigo-600">
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Read more <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>
//           <div className="text-center">
//             <h1 className="text-9xl font-roboto font-extrabold tracking-tight text-[#0399FA] sm:text-8xl uppercase">
//               Best Way of Entertaiment
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//               lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//               fugiat aliqua.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Get started
//               </a>
//               <a
//                 href="#"
//                 className="text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
