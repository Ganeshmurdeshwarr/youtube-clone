import React from "react";

const Categories = () => {
  const catogories = ["react js", "angulr", "node",'html', 'css', 'redux', 'python', 'java', 'DiMysql', 'object'];

  return (
    <section className=" mx-3 md:mx-2  w-full overflow-x-auto  text-white transition flex items-center gap-x-3 flex-nowrap fixed z-20 bg-[#0f0f0f]  catagoryScollBar ">
      {catogories.map((item, id) => {
        return (
          <span key={id} className="w-fit px-6 py-2 text-center  rounded-2xl my-3 whitespace-nowrap bg-[#2e2e2e] active:bg-white active:text-black">
            {item}
          </span>
        );
      })}
    </section>
  );
};

export default Categories;
