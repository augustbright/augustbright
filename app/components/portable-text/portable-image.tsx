/* eslint-disable @next/next/no-img-element */
import { PortableTextComponentProps } from "@portabletext/react"
import { SanityImageAssetDocument } from '@sanity/client'
import { SanityImage } from '../sanity/sanity-image'

export const PortableImage = ({ value, isInline }: PortableTextComponentProps<SanityImageAssetDocument>) => {
    return (        
        <SanityImage image={value} isInline={isInline} />
    )
}
