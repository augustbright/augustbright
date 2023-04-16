/* eslint-disable @next/next/no-img-element */
import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { PortableTextComponentProps } from "@portabletext/react"
import { SanityImageAssetDocument } from '@sanity/client'
import { client } from '@/lib/sanilty'

type TProps = {
    image: SanityImageAssetDocument;
    isInline?: boolean
};

export const SanityImage = ({ image, isInline }: TProps) => {
    const { width, height } = getImageDimensions(image)
    return (
        <img
            className="mx-auto rounded-md"
            src={urlBuilder(client)
                .image(image)
                .width(isInline ? 100 : 800)
                .fit('max')
                .auto('format')
                .url()}
            alt={image.alt || ' '}
            loading="lazy"
            style={{
                // Display alongside text if image appears inside a block text span
                display: isInline ? 'inline-block' : 'block',

                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: width / height,
            }}
        />
    )
}
