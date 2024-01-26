const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    allowedHosts: [
      'localhost',
      'example.com',
      '192.168.1.1',
      '6a0d-2804-3b38-3b41-b10-a1ab-dbb7-f0ac-f33b.ngrok-free.app',
    ],
  },
  transpileDependencies: true
})
