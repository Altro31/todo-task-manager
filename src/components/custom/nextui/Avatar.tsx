'use client'
import React from 'react'
import {Avatar as NextUIAvatar, AvatarProps} from "@nextui-org/avatar"

export function Avatar(props: AvatarProps) {

    const {alt, ...rest} = props

    return (
        <NextUIAvatar alt={alt??'User'} {...rest}/>
    )
}