"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6 min-h-screen  pt-20" id="about">
     
<div className="py-16 ">  
  <div className="container m-auto px-6  md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <Image  src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width={1000} height={1000}/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl  font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
          <p className="mt-6 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p className="mt-4 "> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
</div>
    </div>
  );
};

export default About;
