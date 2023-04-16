import { PortableTextProps } from '@portabletext/react';
import { SanityImageAssetDocument } from '@sanity/client';
import Opaque from 'ts-opaque';

type TSanityId = Opaque<string, 'SanityId'>;
type TSanityDate = Opaque<string, 'SanityDate'>;
type TSanityRev = Opaque<string, 'SanityRev'>;

type TSanityEntity<T extends {}> = {
    "_createdAt": TSanityDate,
    "_id": TSanityId,
    "_rev": TSanityRev,
    "_type": string,
    "_updatedAt": TSanityDate,
} & T;

type TPostContent = PortableTextProps["value"];

export type TPost = TSanityEntity<{
    "intro": TPostContent,
    "content": TPostContent,
    "title": string,
    "cover": SanityImageAssetDocument
}>;