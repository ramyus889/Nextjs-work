"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import UserResizable from "@/components-user/UserResizable";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Header />
      <div className="text-[20px] container mx-[600px] mt-20 font-['Permanent_Marker']  flex flex-col gap-10">
        <UserResizable />
        <div className="inline-block">
          <button
            className="border py-2 px-4 rounded-xl"
            onClick={() => router.push("/click")}
          >
            Click to Combobox
          </button>
        </div>
        <motion.div
          className="bg-red-600 rounded-xl w-[100px] h-[100px] pt-[1.5em] text-center"
          animate={{
            translateX: [0, 200, 200, 0, 0],
            translateY: [0, 0, 200, 200, 0],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          Box
        </motion.div>
      </div>
    </div>
  );
}
