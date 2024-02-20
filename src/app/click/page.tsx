import Header from "../../components/Header";
import UserCombobox from "../../components-user/UserCombobox";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="text-[20px] container mx-[600px] mt-20 font-['Permanent_Marker']  ">
        <UserCombobox />
      </div>
    </div>
  );
}
