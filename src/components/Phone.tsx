import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDListElement> {
    imgScr: string;
    dark?: boolean; // Make dark optional
}

const Phone = ({ className, imgScr, dark = false, ...props }: PhoneProps) => {
    return (<>
        <div className={cn("relative z-50 overflow-hidden", className)} {...props}>
            <Image
                src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
                className="pointer-events-none z-50 select-none"
                alt="phone image"
                width={500} 
                height={1000} 
                layout="responsive"
            />
            </div> 
            <div className="absolute inset-0">
                <Image
                    src={imgScr}
                    className="object-cover min-w-full min-h-full" 
                    alt=""
                    width={500}
                    height={500}
                    layout="responsive"
                />
            </div>
    </>
    );
};

export default Phone;
