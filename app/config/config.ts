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
    redis: {
        port: {
            doc: 'Port in which redis wil run',
            default: 6379,
            format: 'nat',
            env: 'REDIS_PORT',
        },
        host: {
            doc: 'Host in which redis wil run',
            default: 'redis',
            env: 'REDIS_HOST',
        }
    }
})

config.validate({
    allowed: 'strict',
})
