import { archivo } from "@/fonts";
import { FadeIn, FadeInWhenVisible } from "@/transitions";
import { FadeInUpWhenVisible } from "@/transitions/FadeInUpWhenVisible";

type HeaderProps = {
  preheader?: string;
  title: string;
  subtitle: string;
  bgTexture?: string;
};

export default function Header({
  preheader,
  title,
  subtitle,
  bgTexture,
}: HeaderProps) {
  return (
    <FadeIn>
      <div className={`bg-${bgTexture}`}>
        <div
          className={`${
            bgTexture?.length || 0 > 0
              ? "bg-black bg-opacity-50 text-white py-16 px-6"
              : ""
          }`}
        >
          <div className="max-w-6xl text-center mx-auto p-0 flex flex-col items-center justify-center gap-y-4">
            {preheader && (
              <FadeInWhenVisible delay={0.1}>
                <p className="font-bold">{preheader}</p>
              </FadeInWhenVisible>
            )}
            <FadeInUpWhenVisible delay={0.3}>
              <h1 className={archivo.className + " text-5xl font-bold"}>
                {title}
              </h1>
            </FadeInUpWhenVisible>
            <FadeInUpWhenVisible delay={0.5}>
              <p>{subtitle}</p>
            </FadeInUpWhenVisible>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
