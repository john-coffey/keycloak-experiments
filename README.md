# keycloak-experiments
Experiments securing Angular apps with Keycloak

You'll need to install -

* `docker`
* `docker-compose`
* `node` & `npm`
* `@angular/cli`

The docker-compose file will spin up `keycloak` and a fake API server.  To start these run `docker-compose up -d`

The two Angular apps use two different libs to secure them -

* App1 uses [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc)
* App2 uses [keycloak-angular](https://github.com/mauriciovigolo/keycloak-angular)

The keycloak instance has been configured with two users -

1. user/1234
2. admin/1234

To change the keycloak config go to the [admin console](http://localhost:8080/auth/admin/).  The username/password are in the docker-compose file.

To play with the apps you will need to install the dependencies (`npm i`) and run `npm start` in each directory.  Only one app can be running at the same time as they both bind to the default 4200 port.  To access the running app hit [http://localhost:4200](http://localhost:4200).  For App1 you will be asked to log in as soon as you access the app.  App2 has certain routes protected and you will be asked to log in when you access them. 
