export const environment = {
  production: true,
  //"http://jsonplaceholder.typicode.com/users";
    backend: {
        protocol: 'http',
        host: 'jsonplaceholder.typicode.com',
        port: '',
        endpoints: {
            allUsers: 'users'
        }
    }
};
