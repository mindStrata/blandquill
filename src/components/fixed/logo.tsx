import { GeistMono } from "geist/font/mono";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return <div className={`${className}`}>BlandQuill</div>;
};
export default Logo;
