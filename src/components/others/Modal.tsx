'use client'
import React, {MouseEventHandler, useRef} from 'react'
import {useRouter} from "next/navigation";

interface Props {
    children: React.ReactNode
    className?: string
}

export function Modal({children, className}: Props) {

    const modalRef = useRef(null);
    const router = useRouter()
    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (modalRef.current === e.target) {
            router.back()
        }
    }

    return (
        <div className={`modal ${className ? className : ''}`}
             onClick={handleClick} ref={modalRef}
        >
            <button onClick={router.back}
                    className='absolute top-2 right-4 bg-white rounded-full w-10 h-10 shadow-xl'
            >x
            </button>
            {children}
        </div>
    )
}