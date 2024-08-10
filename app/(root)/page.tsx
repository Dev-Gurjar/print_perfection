import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
    return (
        <>
    <a href="/collections">
      <picture>
        <source media="(max-width: 768px)" srcSet="/commingsoonm.jpg" />
        <img src="/commingsoon.png" alt="banner" className="w-screen h-screen" />
      </picture>
    </a>        <div className="text-base-bold">
            Hii your are this <UserButton/>
        </div>
        </>
    )
}
export const dynamic = "force dynamic";