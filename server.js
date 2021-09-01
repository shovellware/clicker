const HMR = require('fastify-webpack-hmr')
const fastify = require('fastify')({
    logger: true
})
const { join } = require('path')

const config = join(__dirname, './webpack.config.js')

fastify.register(HMR, { config })

fastify.get('/', async (request, reply) => {
	return { hello: 'world' }
})

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (error) {
        await fastify.logger(error)
        process.exit(1)
    }
}

start()
