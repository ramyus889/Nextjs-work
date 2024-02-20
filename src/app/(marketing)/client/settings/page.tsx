import Header from "@/components/Header";
import UserDialog from "@/components-user/UserDialog";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="text-[20px] container mx-[600px] mt-20  ">
        <UserDialog />
      </div>
    </div>
  );
}
