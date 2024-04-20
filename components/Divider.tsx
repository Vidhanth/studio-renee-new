import FadeAnimation from "./FadeAnimation";

type DividerProps = {
  visible?: boolean;
};

export default function Divider({ visible = true }: DividerProps) {
  return (
    <FadeAnimation overrideDirection="up" animateOnVisibility>
      <div
        className={`${
          visible
            ? "bg-gradient-to-r to-primary from-tertiary my-8 md:my-10"
            : "my-5"
        } w-full h-px`}
      ></div>
    </FadeAnimation>
  );
}
