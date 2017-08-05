let WeebServices = require('./index.js');

let token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJIMWZGNWZNd2IiLCJ0b2tlbklkIjoiQnlZNXFHelBaIiwiaWF0IjoxNTAxODYyNTQ0fQ.ZXbDaHCLZ1mwJvVmqjS0QE6Ati51xFgiiz7JmjwPJMDTZhWwHS7t2BZ_uFNp8eYLGo9-UUF6dUdJSOI1wie6irunXGpkfHO6tukcYyR0_Ec3KloDGBlQnRvTqdI1fq4N49UiPaXX0aO-g_0L_sihnYlpKzjmfxSxLuaUVxI5F6zF8_dfw5kuWX_iQwnuXZ6kdcPQcXOKX279iDAKtrYLO42laLX_adj1BCjAaW1gEiGVzzNFbYpDMUUaQYeojXqEPytGLH69GhGeAoASTqp3WPrd8L07PixWaKfst5-rP5xdjdUX6-MRRj3dc0SoQ0iaiN0CTQgVLAL3YGDdehh2dQ';

let weebservices = new WeebServices(null, WeebServices.APIS.STAGING);

weebservices.Accounts.validate(token).then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
});
