'use client'
import React from 'react'
import {useDecider} from "@/utils/hooks/menu/use_decider";
import {motion} from 'framer-motion'

interface Props {

}

export function DeciderButtonGroup({}: Props) {

    return (
        <div className='flex w-full justify-center border rounded-md mt-3 bg-gray-100 lg:pr-1'>
            <DeciderButton>
                To Do
            </DeciderButton>
            <DeciderButton completed>
                Done
            </DeciderButton>
        </div>
    )
}

interface DeciderButtonProps {
    children: React.ReactNode
    completed?: boolean
}

function DeciderButton({children, completed = false}: DeciderButtonProps) {

    const {style, handler} = useDecider(completed)

    return style ?
        (
            <motion.button
                layoutId='decider'
                onClick={handler}
                className={`flex-1 font-semibold text-gray-600 p-1 rounded-md decider-active`}>
                {children}
            </motion.button>
        ) : (
            <button
                onClick={handler}
                className='flex-1 font-semibold text-gray-600 p-1 rounded-md'>
                {children}
            </button>
        )

}