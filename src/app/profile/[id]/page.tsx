"use client"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import getUser from "@/utils/getUser"

export default async function Profile({ params }: { params: { id: string } }) {
    const { user } = useUser()
    if (!user) return <div>404</div>

    return (
        <div>
            <div>{user?.fullName}</div>
            <div>@{user?.username}</div>
                <Image
                    src={user.imageUrl}
                    alt="user image"
                    className="rounded-full xl:mr-2 w-11 h-11"
                    width="150"
                    height="150"
                />
        </div>
    )
}