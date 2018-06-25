let backendUrl;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'unscramble-it.herokuapp.com') {
  backendUrl = 'https://word-scramble-rails-api.herokuapp.com';
} else {
  backendUrl = 'http://localhost:3001';
}

export const API_ROOT = `${backendUrl}/api/${apiVersion}`;
