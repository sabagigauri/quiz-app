import Image from "next/image";
import { QuizHeaderProps } from "../Common/types";



export default function QuizHeader({ title, icon }: QuizHeaderProps) {
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={40}
          height={40}
          priority
        />
        <h1 className="ml-2 text-xl font-medium bg-[#313E51)]">{title}</h1>{" "}
      </div>

      <div className="flex justify-end gap-2">
        <Image src="/sun.svg" alt="sun image" width={16} height={16} priority />
        <button className="bg-[#A729F5] rounded-full w-8 h-5 p-1">
          <Image
            src="/Ellipse.svg"
            alt="ellipse image"
            width={12}
            height={12}
            priority
          />
        </button>
        <Image
          src="/moon.svg"
          alt="Moon image"
          width={16}
          height={16}
          priority
        />
      </div>
    </div>
  );
}
