const ProxyChain = require('../build/index');
const PROXY_PORT = 7892
let socksProxyUrl = 'socks://localhost:7777'

const server = new ProxyChain.Server({
    port: PROXY_PORT,
    // Enables verbose logging
    verbose: true,
    socksMode: true,
    prepareRequestFunction: (args) => {
        return {
            socksProxyUrl
        }
    }
});

server.listen(() => {
    console.log(`Router Proxy server is listening on port ${PROXY_PORT}`);
});

// Dynamically modify the socks proxy address after 5 seconds
setTimeout(() => {
    socksProxyUrl = 'socks://localhost:7890'
}, 5000)

