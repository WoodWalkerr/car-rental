/* eslint-disable react/no-unescaped-entities */
// pages/about.tsx
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className='hero max-w-[1440px] h-screen mx-auto' id="/about">
      <div className="sm:px-16 px-6 py-10 flex flex-col sm:flex-row">
        <div className="flex-1 flex flex-col justify-center mb-6 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="mb-4">
            Welcome to Car Rental, your one-stop destination for all your car rental needs.
            Whether you need a vehicle for a business trip, a family vacation, or simply
            to get around town, we've got you covered.
          </p>
          <p className="mb-4">
            Our mission is to provide convenient, reliable, and affordable car rental
            services to our customers. With a wide selection of vehicles ranging from
            compact cars to SUVs and luxury sedans, you're sure to find the perfect
            vehicle for your needs.
          </p>
          {/* <p className="mb-4">
            Thank you for choosing Car Rental. We look forward to serving you and
            helping you get on the road to your next adventure.
          </p> */}
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" className="object-contain" width={400} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
