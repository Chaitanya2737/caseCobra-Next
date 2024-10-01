import MaxWithWrapper from "@/components/MaxWithWrapper";
import Image from "next/image";
import snake from "./public/snake-1.png";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWithWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 ">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src={snake} alt="image not found" className="w-full " />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2"> Custom</span> Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to proctrct ypur memories , not just your
                phone case
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality , durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iphone models supports
                  </li>
                </div>
                <div className="mt-12 flex  flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
                      src="/users/user-1.png"
                      alt="image not found"
                      width={500}
                      height={500}
                    ></Image>
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
                      src="/users/user-2.png"
                      alt="image not found"
                      width={500}
                      height={500}
                    ></Image>
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
                      src="/users/user-3.png"
                      alt="image not found"
                      width={500}
                      height={500}
                    ></Image>
                    <Image
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 "
                      src="/users/user-4.jpg"
                      alt="image not found"
                      width={500}
                      height={500}
                    ></Image>
                    <Image
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100 "
                      src="/users/user-5.jpg"
                      alt="image not found"
                      width={500}
                      height={500}
                    ></Image>
                  </div>

                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5 ">
                      <Star className="text-green-500 h-4 w-4 fill-green-500" />
                      <Star className="text-green-500 h-4 w-4 fill-green-500" />
                      <Star className="text-green-500 h-4 w-4 fill-green-500" />
                      <Star className="text-green-500 h-4 w-4 fill-green-500" />
                      <Star className="text-green-500 h-4 w-4 fill-green-500" />
                    </div>
                    <p>
                      <span className="font-semibold ">1.250</span>
                      happy customers
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="image not found"
                className="absolute w-40 lg:w-42 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                width={500}
                height={500}
              ></Image>
                <Image
                src="/line.png"
                alt="image not found"
                width={500}
                height={500}
                className="absolute w-20 -left-4 -bottom-4 select-none"
              ></Image>
              <Phone className="w-64" imgScr="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWithWrapper>
      </section>
    </div>
  );
}
