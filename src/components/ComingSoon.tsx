import Link from "next/link";
// import { Linkedin } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-neuePlak bg-white text-[#15234E] z-10">
      {/* Animated gradient background */}
      <div className="blur-3xl absolute inset-0 -z-10">
        <div
          className="absolute blur-3xl inset-0 -z-10 w-[50vw] h-[110vh]"
          style={{
            background:
              "linear-gradient(-45deg, #FFC0CF, #C3AEFF, #9CD5FF, #95D1FC, transparent)",
            backgroundSize: "200% 200%",
            animation: "gradient 10s ease infinite",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div
          className="absolute blur-3xl inset-0 ml-auto -z-10 w-[50vw] h-[110vh]"
          style={{
            background:
              "linear-gradient(-45deg, #95D1FC, #9CD5FF, #C3AEFF, #FFC0CF, transparent)",
            backgroundSize: "200% 200%",
            animation: "gradient 10s ease infinite",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div
          className="absolute inset-0 -z-9"
          style={{
            background: "linear-gradient(to bottom, transparent 10%, white )",
          }}
        />
        {/* Additional fade-out overlay */}
      </div>

      {/* Header */}
      <header className="mt-10 lg:mt-12 xl:mt-14 3xl:mt-20">
        <div className="flex items-center justify-center">
          <Logo className="w-[85px] lg:w-[100px] xl:w-[126px] 3xl:w-[142px]" />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-[#15234E] max-[430px]:text-[14vw]  max-sm:text-[58px] xs:text-[43.5px] sm:text-[70px] lg:text-[62px] xl:text-[82px] 3xl:text-[100px] mb-6 sm:mb-12 lg:mb-14 xl:mb-16 3xl:mb-20 max-w-4xl font-medium leading-none tracking-[-2px]">
          Grow Infinite. <br /> Explore More Soon.
        </h2>
        <p className="text-[16.5px] xs:text-[16.5px] sm:text-[22px] lg:text-[24px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[28px] leading-tight mb-5 xs:mb-5 sm:mb-8 lg:mb-14 xl:mb-16 3xl:mb-20 max-w-[74rem] ">
          Horizon is the world's first Super Engagement Platform, enabling
          enterprises to deliver big-tech-level engagement at scale and drive
          unparalleled growth. Stay tuned for our official website launch!
        </p>

        <Link
          href="https://youtu.be/3ZTu_MomC5Y"
          target="_blank"
          className="inline-flex h-8 xs:h-[38px] sm:h-10 lg:h-12 xl:h-12 2xl:h-12 3xl:h-14 items-center justify-center bg-[#15234E] text-white max-md:w-full px-8 text-[16.5px] xs:text-[16.5px] sm:text-[22px] lg:text-[22px] 2xl:text-[22px] 3xl:text-[22px]transition-colors duration-100 hover:bg-transparent hover:text-[#15234E] border border-[#15234E] rounded-full mb-5 xs:mt-10 lg:mb-10 xl:mb-12 3xl:mb-20 font-normal"
        >
          Watch the intro
        </Link>
      </main>

      {/* Footer */}
      <footer className="py-[28px] max-md:text-center bg-white">
        <div className="max-w-[1800px] px-8 mx-auto relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="https://www.linkedin.com/company/horizonera"
            target="_blank"
            aria-label="LinkedIn"
            className="md:hidden"
          >
            <LinkedIn />
          </Link>
          <div className="w-full mx-auto relative flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 text-[13.5px] xs:text-[13.5px] sm:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[18px]">
            <p>© 2025 Horizon</p>
            <Link
              href="https://www.linkedin.com/company/horizonera"
              target="_blank"
              aria-label="LinkedIn"
              className="lg:absolute max-md:hidden mx-auto block w-fit inset-0 font-bold"
            >
              <LinkedIn />
            </Link>
            <div className="flex items-center gap-4">
              <p>All rights reserved by Flagship Technology Inc.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const LinkedIn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.72217 0.323608C1.61759 0.323608 0.722168 1.21904 0.722168 2.32361V22.3236C0.722168 23.4281 1.61759 24.3236 2.72217 24.3236H22.7222C23.8267 24.3236 24.7222 23.4281 24.7222 22.3236V2.32361C24.7222 1.21904 23.8267 0.323608 22.7222 0.323608H2.72217ZM8.08318 5.66057C8.09069 6.93557 7.13631 7.7212 6.00381 7.71557C4.93693 7.70994 4.00693 6.86057 4.01255 5.66245C4.01818 4.53557 4.90881 3.62994 6.06569 3.6562C7.23943 3.68245 8.09069 4.54308 8.08318 5.66057ZM13.0951 9.33929H9.73512H9.73323V20.7524H13.2844V20.4861C13.2844 19.9796 13.284 19.4729 13.2836 18.9661C13.2826 17.6144 13.2814 16.2612 13.2883 14.9099C13.2902 14.5817 13.3051 14.2405 13.3895 13.9273C13.7063 12.7573 14.7583 12.0017 15.932 12.1875C16.6858 12.3055 17.1844 12.7424 17.3944 13.4531C17.5239 13.8973 17.582 14.3755 17.5876 14.8387C17.6028 16.2355 17.6007 17.6323 17.5986 19.0292C17.5978 19.5223 17.597 20.0156 17.597 20.5087V20.7505H21.1595V20.4768C21.1595 19.8741 21.1592 19.2716 21.1588 18.6691C21.1582 17.1631 21.1574 15.6571 21.1614 14.1505C21.1632 13.4699 21.0902 12.7987 20.9232 12.1405C20.6739 11.1617 20.1583 10.3517 19.3202 9.76681C18.7258 9.35053 18.0732 9.08241 17.3439 9.05241C17.2608 9.04896 17.1771 9.04444 17.093 9.03989C16.72 9.01973 16.341 8.99925 15.9844 9.07116C14.9644 9.27553 14.0683 9.74241 13.3914 10.5655C13.3127 10.6599 13.2358 10.7557 13.121 10.8988L13.0951 10.9312V9.33929ZM4.29769 20.7561H7.83206V9.34672H4.29769V20.7561Z"
        fill="#15234E"
      />
    </svg>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="142"
      height="40"
      viewBox="0 0 142 40"
      fill="none"
      className={className}
    >
      <path
        d="M3.20508 35C2.9019 35 2.72865 34.8268 2.72865 34.5236V4.29182C2.72865 3.98864 2.9019 3.81539 3.20508 3.81539H8.22927C8.48914 3.81539 8.66239 3.98864 8.66239 4.29182V15.8561H8.87895C10.3516 13.7338 12.6471 12.5211 15.549 12.5211C20.6165 12.5211 23.3885 15.8561 23.3885 22.3962V34.5236C23.3885 34.8268 23.1719 35 22.912 35H17.8878C17.5847 35 17.4114 34.8268 17.4114 34.5236V22.3962C17.4114 18.8446 16.0687 17.1988 13.0802 17.1988C10.0484 17.1988 8.66239 18.8446 8.66239 22.3962V34.5236C8.66239 34.8268 8.48914 35 8.22927 35H3.20508ZM36.3732 35.3032C29.4866 35.3032 24.8956 30.7554 24.8956 23.9555C24.8956 17.1122 29.4866 12.5211 36.3732 12.5211C43.3032 12.5211 47.8942 17.1122 47.8942 23.9555C47.8942 30.7554 43.2598 35.3032 36.3732 35.3032ZM30.9592 23.9555C30.9592 28.33 32.9083 30.8421 36.3732 30.8421C39.7949 30.8421 41.8305 28.33 41.8305 23.9555C41.8305 19.4943 39.8382 16.9822 36.3732 16.9822C32.9083 16.9822 30.9592 19.4943 30.9592 23.9555ZM50.0893 35C49.7861 35 49.6128 34.8268 49.6128 34.5236V19.451C49.6128 15.1631 51.9517 12.8243 56.2396 12.8243H62.9096C63.2128 12.8243 63.386 12.9975 63.386 13.3007V17.1122C63.386 17.4153 63.2128 17.5886 62.9096 17.5886H55.5466V34.5236C55.5466 34.8268 55.3733 35 55.1134 35H50.0893ZM65.6521 35C65.3489 35 65.1757 34.8268 65.1757 34.5236V13.3007C65.1757 12.9975 65.3489 12.8243 65.6521 12.8243H70.6763C70.9362 12.8243 71.1094 12.9975 71.1094 13.3007V34.5236C71.1094 34.8268 70.9362 35 70.6763 35H65.6521ZM64.9158 8.70964V3.29565C64.9158 3.03578 65.0891 2.81922 65.3489 2.81922H70.9795C71.2394 2.81922 71.4559 3.03578 71.4559 3.29565V8.70964C71.4559 8.96952 71.2394 9.18608 70.9795 9.18608H65.3489C65.0891 9.18608 64.9158 8.96952 64.9158 8.70964ZM73.9981 35C73.6949 35 73.5217 34.8268 73.5217 34.5236V32.0981C73.5217 31.8382 73.565 31.7083 73.7383 31.535L85.6057 17.372V17.1555H74.6911C74.3879 17.1555 74.2147 16.9822 74.2147 16.679V13.3007C74.2147 12.9975 74.3879 12.8243 74.6911 12.8243H92.7955C93.0987 12.8243 93.272 12.9975 93.272 13.3007V15.7262C93.272 15.9861 93.2286 16.116 93.0554 16.2892L81.1879 30.4522V30.6688H93.2286C93.5318 30.6688 93.7051 30.8421 93.7051 31.1452V34.5236C93.7051 34.8268 93.5318 35 93.2286 35H73.9981ZM105.199 35.3032C98.312 35.3032 93.721 30.7554 93.721 23.9555C93.721 17.1122 98.312 12.5211 105.199 12.5211C112.129 12.5211 116.72 17.1122 116.72 23.9555C116.72 30.7554 112.085 35.3032 105.199 35.3032ZM99.7846 23.9555C99.7846 28.33 101.734 30.8421 105.199 30.8421C108.62 30.8421 110.656 28.33 110.656 23.9555C110.656 19.4943 108.664 16.9822 105.199 16.9822C101.734 16.9822 99.7846 19.4943 99.7846 23.9555ZM119.175 35C118.871 35 118.698 34.8268 118.698 34.5236V13.3007C118.698 12.9975 118.871 12.8243 119.175 12.8243H123.896C124.199 12.8243 124.372 12.9975 124.372 13.3007V16.0727H124.545C126.104 13.7771 128.53 12.5211 131.518 12.5211C136.586 12.5211 139.358 15.8561 139.358 22.3962V34.5236C139.358 34.8268 139.141 35 138.881 35H133.857C133.554 35 133.381 34.8268 133.381 34.5236V22.3962C133.381 18.8446 132.038 17.1988 129.05 17.1988C126.018 17.1988 124.632 18.8446 124.632 22.3962V34.5236C124.632 34.8268 124.459 35 124.199 35H119.175Z"
        fill="#15234E"
      />
    </svg>
  );
};
