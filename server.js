const HMR = require('fastify-webpack-hmr')
const fastify = require('fastify')()
const { join } = require('path')

const config = join(__dirname, './webpack.config.js')

fastify.register(HMR, { config })

fastify.get('/*', (request, reply) => {
	reply.send({ hello: 'world' })
})

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (error) {
        await fastify.log(error)
        process.exit(1)
    }
}

start()
