const crypto = require('crypto')

const start = Date.now()
const threads = process.argv[2]

for (let i = 0; i < threads; i++) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        const finish = Date.now() - start
        console.log(`${i} -> ${finish}`)
    })
}