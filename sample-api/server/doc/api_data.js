define({ "api": [
  {
    "type": "get",
    "url": "/v1/store_types",
    "title": "Get Payment Modes",
    "description": "<p>Get Payment Modes</p>",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": [\n        {\n            \"id\": \"1\",\n            \"name\": \"Snacks & Cool Bar\",\n            \"description\": \"Snacks & Cool Bar\",\n            \"status\": \"true\",\n           \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n \"status\": false,\n \"error\": \"failed_to_list_store_types\",\n \"message\": \"Failed to list Store Types\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Store",
    "filename": "./controllers/users.js",
    "groupTitle": "Store",
    "name": "GetV1Store_types"
  },
  {
    "type": "post",
    "url": "/v1/common_users",
    "title": "User registration",
    "description": "<p>User registration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "full_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "user_role",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "store_id",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"success\": \"otp_success\",\n  \"success_message\": \"User registered successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"user_registration_failed\",\n  \"error_message\": \"User registration failed. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "Verification pending Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"mobile_verification_pending\",\n  \"error_message\": \"Mobile no: has been used once and verification pending\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Users",
    "filename": "./controllers/users.js",
    "groupTitle": "Users",
    "name": "PostV1Common_users"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_var_www_html_nextgencia_server_doc_main_js",
    "groupTitle": "_var_www_html_nextgencia_server_doc_main_js",
    "name": ""
  }
] });
