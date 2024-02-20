import Header from "../../../components/Header";
import UserDatePicker from "../../../components-user/UserDatePicker";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="text-[20px] container mx-[600px] mt-20   ">
        <UserDatePicker />
      </div>
    </div>
  );
}
