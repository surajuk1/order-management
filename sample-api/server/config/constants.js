const config = require('../config/config');
module.exports = {
    'privacy': {
        'enabled': 1,
        'disabled': 0,
    },
    'deactivated_by': {
        'user': 'U',
        'admin': 'A',
    },
    'languages': {
        'english': 'en',
        
    },
    'response_codes': {
        'success': 200,
        'error': 200,
        'unauthorized': 401,
        'forbidden': 403,
        'not_found': 404,
        'internal_server_error': 500,
    },
    'user_roles':{
        'supervisor':1,
        'staff':2

    },

};
