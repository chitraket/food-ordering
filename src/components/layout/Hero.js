import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <>
    <section className="bg-white">
                <div className="container flex items-center justify-between py-24">
                    <div>
                        <h1 className="text-7xl font-black font-sans leading-2">
                            Super Delicious Pizza in <br />
                            <span className="text-primary">Only 45 Minutes!</span>
                        </h1>
                        <p className="text-2xl mt-8 max-w-lg leading-snug">
                            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
                        </p>
                        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
                    </div>
                    <div>
                        <Image alt="pizza-main" src={'/pizza.png'} width={400} height={400} />
                    </div>
                </div>
            </section>
    </>
  );
}