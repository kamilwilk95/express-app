import convict, { Format } from 'convict'
import { url } from 'convict-format-with-validator'

export type Config = typeof config

convict.addFormat(url as Format)
convict.addFormat({
    name: 'Required',
    validate: (val) => {
        if (!val) {
            throw new Error('is required')
        }
    },
    coerce: (val) => {
        return val + ''
    },
})

export const config = convict({
    port: {
        doc: 'Port in which application wil run',
        default: 3000,
        format: 'nat',
        env: 'PORT',
    },
})

config.validate({
    allowed: 'strict',
})
