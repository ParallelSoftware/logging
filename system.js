// Define the system topology here. The topolgy should reference 
// containers defined in definitions/services.js

exports.name = 'logging';
exports.namespace = 'logging';
exports.id = '51c68be3-9eee-41ed-80fd-a331108f086c';

exports.topology = {
  development: {
    root: ['configs']
    //root: ['elk', 'logspout', 'web', 'configs']
  }
};

// Example
//
// exports.topology = {
//   development: {
//     root: ['web']
//   }
// };
