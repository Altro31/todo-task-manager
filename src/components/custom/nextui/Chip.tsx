"use client"
import React from 'react'
import {Chip as NextUIChip, ChipProps} from "@nextui-org/chip";

export function Chip(props: ChipProps) {

    return (
        <NextUIChip {...props}/>
    )
}