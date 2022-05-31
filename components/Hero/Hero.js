import HeroImage from "../../public/images/02.jpg";
import Button from "../UIElements/Button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto relative ">
      <div className="h-screen relative sm:overflow-hidden">
        <div className="  absolute inset-0 bg-gray-700">
          <Image
            src={HeroImage}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            alt="mountain"
            width="1920"
            height="1280"
          />

          <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl  xl:max-w-6xl lg:max-w-4xl md:max-w-4xl sm:max-w-4xl max-w-5xl mx-auto">
            <span className="block">Vous aimez un lieu ?</span>
            <span className="block">Partagez-le avec la communauté !</span>
          </h1>
          <div className="mt-10 flex justify-center">
            <div className="mt-2">
              <Button bgColor="bg-warning-500" textColor="white" size="xl">
                <Link href="/places"> Explorer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
