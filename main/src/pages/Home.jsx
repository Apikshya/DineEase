import bg1 from "../images/last.png";

import "../App.css";

const Home = () => {
  return (
    <div className="bg-yellow-100 h-screen grid grid-cols-2">
      <div className="col-span-1 m-20 mt-72">
        <content className="">
          <div className="text-4xl font-righteous font-lg text-transparent bg-clip-text bg-[conic-gradient(from_150deg,#E07A5F,_#E07A5F,_#E07A5F,_#7D3C98,_#7D3C98,_#7D3C98,_#7D3C98)]">Dine In Style,<br/>Reserve Your Spot Today</div>
          <div className="text-base font-righteous font-lg text-transparent bg-clip-text bg-[conic-gradient(from_180deg,#E07A5F,_#7D3C98,_#7D3C98)] mt-6">Craving for food?</div>
          <div className="text-sm font-poppins mt-1">
            Reserve a table for a relaxed dine-in experience <br/>or order online and
            enjoy your favorites at home.<br/> Fresh flavors, fast service — all just
            a click away.
          </div>
        </content>
      </div>

      <div className="flex justify-end z-30 col-span-1">
        <img src={bg1} className="h-screen"></img>
      </div>
    </div>
  );
};

export default Home;
