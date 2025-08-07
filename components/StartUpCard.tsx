import { formatString } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    _createdAt: Date;
    views: number;
    author: { _id: number, name: string };
    _id: number;
    description: string;
    image: string;
    category: string;
    title: string;
}

const StartUpCard = ({ post }: { post: Props } ) => {
    const { _createdAt, views, author: { _id: authorId, name }, _id,  description, image, category, title } = post;

    return (
        <li
            className="group bg-white border-[5px] border-b-8 border-r-8 border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary/20">
            <div className="flex justify-between items-center">
                <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
                    {formatString(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary"/>
                    <span className="font-medium text-[16px] text-black">{views}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-black font-medium text-[16px] line-clamp-1">{name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="font-semibold text-[26px] text-black">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image
                        src="https://placehold.co/48x48"
                        alt="Placeholder"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className="font-normal text-[16px] line-clamp-1 my-3 text-black-10 break-all">
                    {description}
                </p>
                <Image src={image} alt="placeholder" width={350} height={164} className="w-full h-[164px] rounded-[10px] object-cover"/>
            </Link>


            <footer>
                <div className="flex justify-between items-center gap-3 mt-5">
                    <Link href={`/?query=${category.toLowerCase()}`}>
                        <p className="text-[16px] font-medium text-black">
                            {category}
                        </p>
                    </Link>
                    <Button className="rounded-full bg-black font-medium text-[16px] text-white px-5 py-3 !important" asChild>
                        <Link href={`/startup/${_id}`}>
                            Details
                        </Link>
                    </Button>
                </div>
            </footer>
        </li>
    )
}
export default StartUpCard