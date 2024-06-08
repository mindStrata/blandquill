import Image from "next/image";

type Props = {
  title: string;
  description?: string;
  image?: string | any;
};

const WorkingPage = ({ title, description, image }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-[75vh] space-y-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
        <p className="text-md">{description}</p>
      </div>
      <div>
        <Image src={image} alt="error" width={250} height={250} />
      </div>
    </div>
  );
};
export default WorkingPage;
