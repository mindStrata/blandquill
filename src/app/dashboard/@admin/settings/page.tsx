import WorkingPage from "@/components/fixed/working-page";
import SVG from "@/../../public/working.svg";

const page = () => {
  return (
    <div>
      <WorkingPage
        title="Working on it!"
        description="Stay tuned"
        image={SVG}
      />
    </div>
  );
};
export default page;
