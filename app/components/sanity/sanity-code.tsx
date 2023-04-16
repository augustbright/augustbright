import { PortableTextComponentProps } from '@portabletext/react'
import Refractor from 'react-refractor'

import tsx from 'refractor/lang/tsx';
import { CopyButton } from '../copy-button';

Refractor.registerLanguage(tsx);


export const SanityCode = ({ value }: PortableTextComponentProps<{ code: string, language: string }>) => {
    return (
        <div className='relative group'>
            <CopyButton className='group-hover:block hidden' content={value.code} />
            <Refractor
                // In this example, `props` is the value of a `code` field
                language={value.language}
                value={value.code}
            />
        </div>
    )
}
