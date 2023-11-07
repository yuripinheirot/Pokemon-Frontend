import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://172.17.0.1:8080/auth',
  realm: 'pokemon',
  clientId: 'pokemon-front',
})

export default keycloak
