import { PortableTextComponentProps } from '@portabletext/react'
import Refractor from 'react-refractor'

import tsx from 'refractor/lang/tsx';

Refractor.registerLanguage(tsx);


export const SanityCode = ({ value }: PortableTextComponentProps<{ code: string, language: string }>) => {
    return (
        <Refractor
            // In this example, `props` is the value of a `code` field
            language={value.language}
            value={value.code}
        />
    )
}
