type DividerProps = {
  visible?: boolean;
};

export default function Divider({
  visible = true,
}: DividerProps) {
  return (
    <div
      className={`${
        visible ? "bg-gradient-to-r to-primary from-tertiary my-10" : "my-5"
      } w-full h-px`}
    ></div>
  );
}
