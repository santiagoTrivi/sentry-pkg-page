import { personalInfo } from "@/shared";

export const Intro = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            {personalInfo.greeting}
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            {personalInfo.description}
          </p>
          {/*
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center p-2">
              <ButtonATag
                className="bg-gray-50 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 ml-2"
                href={networkLinks.github}
              >
                <FaGithub />
              </ButtonATag>
            </div>
          </div>
          */}
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="sentry_slogan-removebg-preview.png"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
            <h2 className="text-xl font-bold tracking-[1px] flex items-center justify-center text-gray-800">
              <a href="https://github.com/santiagoTrivi/sentry-pkg/releases/tag/v1.6.1">
                Version v1.6.1
              </a>
            </h2>

            <div className="absolute -right-12 -bottom-12 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
