class Auth {
  static authenticateToken(token) {
    sessionStorage.setItem('token', token);
  }

  static isUserAuthenticated() {
    return sessionStorage.getItem('token') !== null
  }

  static deauthenticateUser() {
    sessionDtorage.removeItem('token');
  }

  static getToken() {
    return sessionStorage.getItem('token')
  }
}
