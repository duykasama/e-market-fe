import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Index from "../pages/Index";

function DefaultLayout() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 min-h-screen">
      <div className="bg-slate-700 col-span-1 row-span-full">
        <SideBar />
      </div>
      <div className="bg-red-700 row-span-1 col-end-7 row-start-1 col-start-2">
        <Header />
      </div>
      <main className="row-start-2 col-start-2 col-end-7 row-end-7">
        <Index />
      </main>
    </div>
  );
}

export default DefaultLayout;
