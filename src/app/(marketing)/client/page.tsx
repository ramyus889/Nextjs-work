import UserToast from "../../../components-user/UserToast";
import Header from "../../../components/Header";

export default function Client() {
  return (
    <div className="">
      <Header />
      <div className="text-[20px] container mx-[600px] mt-20  flex flex-col gap-10">
        <UserToast />
      </div>
    </div>
  );
}
