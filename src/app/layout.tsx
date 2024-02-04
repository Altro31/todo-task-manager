import "@/styles/tailwind.css"
import {Metadata} from "next";
import {Aside} from "components/aside/Aside";
import Menu from "components/menu/Menu";
import React from "react";

export const metadata: Metadata = {
    title: "ToDo Task Manager",
    description: "Manage your ToDos at any time",
    manifest: 'ToDo Task Manager'
}

interface Props {
    children: React.ReactNode
    modal: React.ReactNode
}
export default function RootLayout({children, modal}: Props) {

    return (
        <html lang='en'>
        <body className=''>
        <div className='lg:flex lg:px-16 lg:pt-4 lg:pb-10 lg:h-full lg:gap-2'>
            {children}
            <Aside/>
            <Menu/>
        </div>
        {modal}
        </body>
        </html>
    )
}