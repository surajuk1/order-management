define({ "api": [
  {
    "type": "delete",
    "url": "/v1/contact",
    "title": "Delete Contact",
    "description": "<p>Delete Contact</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"status\": true,\n    \"success\": \"contact_deleted\",\n    \"success_message\": \"Contact Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"contact_delete_failed\",\n   \"message\": \"Contact Delete Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Contact",
    "filename": "./server/controllers/contact.js",
    "groupTitle": "Contact",
    "name": "DeleteV1Contact"
  },
  {
    "type": "get",
    "url": "/v1/contact",
    "title": "Download Contact",
    "description": "<p>Download Contact</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"status\": true,\n    \"message\": \"Contact Download Success\",\n    \"data\": {\n        \"id\": \"597\",\n        \"storage_url\": \"http://13.229.240.142/vro-storage-api/uploads/contact_@surajuk.333.xml\",\n        \"enc_url\": \"d2e84646cf8c32c0e033fc2a80291bd5\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"contact_download_failed\",\n   \"message\": \"Contact Download Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Contact",
    "filename": "./server/controllers/contact.js",
    "groupTitle": "Contact",
    "name": "GetV1Contact"
  },
  {
    "type": "get",
    "url": "/v1/contactsync",
    "title": "Get Contact Details",
    "description": "<p>Get Contact Details</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": {\n        \"contact\": [\n            {\n                \"thumbnailPath\": {},\n                \"hasThumbnail\": \"false\",\n                \"phoneNumbers\": {\n                    \"id\": \"1\",\n                    \"label\": \"mobile\",\n                    \"number\": \"1 231-131-3131\"\n                },\n                \"note\": {},\n                \"recordID\": \"1\",\n                \"jobTitle\": {},\n                \"rawContactId\": \"1\",\n                \"familyName\": \"sa\",\n                \"middleName\": {},\n                \"prefix\": {},\n                \"suffix\": {},\n                \"company\": {},\n                \"givenName\": \"Test\",\n                \"department\": {},\n                \"name_\": \"Test sa\",\n                \"check\": \"true\"\n            },\n            {\n                \"thumbnailPath\": {},\n                \"hasThumbnail\": \"false\",\n               \"phoneNumbers\": {\n                   \"id\": \"3\",\n                   \"label\": \"mobile\",\n                   \"number\": \"94566885666\"\n               },\n               \"note\": {},\n               \"recordID\": \"2\",\n               \"jobTitle\": {},\n               \"rawContactId\": \"2\",\n               \"familyName\": \"sa\",\n               \"middleName\": {},\n               \"prefix\": {},\n               \"suffix\": {},\n               \"company\": {},\n               \"givenName\": \"Test1\",\n               \"department\": {},\n               \"name_\": \"Test1 sa\",\n               \"check\": \"true\"\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"message\": \"Failed to Contact Sync.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Contact",
    "filename": "./server/controllers/contact.js",
    "groupTitle": "Contact",
    "name": "GetV1Contactsync"
  },
  {
    "type": "post",
    "url": "/v1/contact",
    "title": "Contact File Upload",
    "description": "<p>Contact File Upload</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>File Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "storage_url",
            "description": "<p>Storage URL</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mime_type",
            "description": "<p>MIME Type (Eg: text/xml)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "file_size",
            "description": "<p>File Size (Eg : 2048)</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"status\": true,\n    \"message\": \"Contact Updated Successfully\",\n    \"data\": {\n        \"contact\": [\n            {\n                \"thumbnailPath\": {},\n                \"hasThumbnail\": \"false\",\n                \"phoneNumbers\": {\n                    \"id\": \"1\",\n                    \"label\": \"mobile\",\n                    \"number\": \"1 231-131-3131\"\n                },\n                \"note\": {},\n                \"recordID\": \"1\",\n                \"jobTitle\": {},\n                \"rawContactId\": \"1\",\n                \"familyName\": \"sa\",\n                \"middleName\": {},\n                \"prefix\": {},\n                \"suffix\": {},\n                \"company\": {},\n                \"givenName\": \"Test\",\n                \"department\": {},\n                \"name_\": \"Test sa\",\n                \"check\": \"true\"\n            },\n            {\n               \"thumbnailPath\": {},\n               \"hasThumbnail\": \"false\",\n               \"phoneNumbers\": {\n                   \"id\": \"3\",\n                   \"label\": \"mobile\",\n                   \"number\": \"94566885666\"\n               },\n               \"note\": {},\n               \"recordID\": \"2\",\n               \"jobTitle\": {},\n               \"rawContactId\": \"2\",\n               \"familyName\": \"sa\",\n               \"middleName\": {},\n               \"prefix\": {},\n               \"suffix\": {},\n               \"company\": {},\n               \"givenName\": \"Test1\",\n               \"department\": {},\n               \"name_\": \"Test1 sa\",\n               \"check\": \"true\"\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"message\": \"Failed to Contact Sync.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Contact",
    "filename": "./server/controllers/contact.js",
    "groupTitle": "Contact",
    "name": "PostV1Contact"
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
    "group": "D__wamp_www_vro_storage_api_doc_main_js",
    "groupTitle": "D__wamp_www_vro_storage_api_doc_main_js",
    "name": ""
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
    "filename": "./server/doc/main.js",
    "group": "D__wamp_www_vro_storage_api_server_doc_main_js",
    "groupTitle": "D__wamp_www_vro_storage_api_server_doc_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/v1/favourite",
    "title": "Remove Favourite",
    "description": "<p>Remove Favourite</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_file_id",
            "description": "<p>Primary Key</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "type",
            "description": "<p>1=&gt;Folders,2=&gt;Files</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"status\": true,\n  \"success\": \"favourite_remove_success\",\n  \"success_message\": \"Favourite Remove Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"status\": false,\n  \"error\": \"favourite_remove_failed\",\n  \"message\": \"Favourite Remove Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Favourite",
    "filename": "./server/controllers/favourite.js",
    "groupTitle": "Favourite",
    "name": "DeleteV1Favourite"
  },
  {
    "type": "get",
    "url": "/v1/favourite?offset=0&limit=30&sort=1",
    "title": "List Favourite",
    "description": "<p>Favourite List</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC, Default=&gt;Sort By created date DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n          \"id\": \"597\",\n          \"name\": \"Ford\",\n          \"type\": \"File\",\n          \"mime_type\": \"text/xml\",\n          \"storage_url\": \"https://s3-ap-southeast-1.amazonaws.com/mediafiles-vro-storage/development/6afc78ad-e0bf-49bb-ae20-494f8696be63-contact.xml\",\n          \"parent_id\": \"0\",\n          \"parent_name\": \"Root\",\n          \"updated_at\": \"2019-02-11T07:45:21.900Z\"\n          \"created_at\": \"2019-02-11T07:45:21.900Z\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 5,\n        \"limit\": 6,\n        \"count\": \"6\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Limit:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"limit_failed\",\n    \"message\": \"Limit Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Offset:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"offset_failed\",\n    \"message\": \"Offset Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Sort:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"sort_failed\",\n    \"message\": \"Sort Should be a Number\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Favourite",
    "filename": "./server/controllers/favourite.js",
    "groupTitle": "Favourite",
    "name": "GetV1FavouriteOffset0Limit30Sort1"
  },
  {
    "type": "post",
    "url": "/v1/favourite",
    "title": "Create Favourite",
    "description": "<p>Create Favourite</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_file_id",
            "description": "<p>Primary Key</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "type",
            "description": "<p>1=&gt;Folders,2=&gt;Files</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n {\n   \"data\": [\n       {\n           \"id\": \"4\",\n           \"name\": \"folder3\",\n           \"type\": \"Folder\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\"\n       {\n           \"id\": \"2\",\n           \"name\": \"file-data\",\n           \"type\": \"File\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\"\n       }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"status\": false,\n  \"error\": \"create_favourite_failed\",\n  \"message\": \"Failed to Add Favourite.Try Again!\"\n}",
          "type": "json"
        },
        {
          "title": "Validation-Response:",
          "content": "HTTP 403\n{\n  \"status\": false,\n  \"error\": \"favourite_exist\",\n  \"message\": \"Already Added As Favourite\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Favourite",
    "filename": "./server/controllers/favourite.js",
    "groupTitle": "Favourite",
    "name": "PostV1Favourite"
  },
  {
    "type": "delete",
    "url": "/v1/files/:file_id",
    "title": "Delete File",
    "description": "<p>Delete File</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"status\": true,\n    \"success\": \"file_deleted\",\n    \"success_message\": \"File Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_delete_failed\",\n   \"message\": \"File Delete Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "DeleteV1FilesFile_id"
  },
  {
    "type": "get",
    "url": "/v1/files/audio?offset=0&limit=30&sort=1",
    "title": "List Audio",
    "description": "<p>List Audio Files</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC, Default=&gt;Sort By created date DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"id\": \"4\",\n           \"name\": \"lyrics.mp3\",\n           \"type\": \"File\",\n           \"file_type\": \"audio/mp3\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\"\n       }\n   ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 30,\n        \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"media_list_failed\",\n    \"message\": \"Media List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1FilesAudioOffset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/files/dashview",
    "title": "Dashboard List",
    "description": "<p>List 5 Recent, Favourite and Share</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"recent\": [\n       {\n           \"id\": \"3\",\n           \"name\": \"file3.jpg\",\n           \"type\": \"File\",\n           \"favourite\": 1,\n           \"mime_type\": \"\",\n           \"file_size\": \"2051\",\n           \"total_files\": \"1\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\",\n           \"created_at\": \"2019-01-14T15:29:53.240Z\"\n       }\n   ],\n   \"favourite\": [\n       {\n           \"id\": \"3\",\n           \"name\": \"file3.jpg\",\n           \"type\": \"File\",\n           \"favourite\": 1,\n           \"mime_type\": \"\",\n           \"file_size\": \"2051\",\n           \"total_files\": \"1\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\",\n           \"created_at\": \"2019-01-14T15:29:53.240Z\"\n       }\n   ],\n   \"share\": [\n       {\n           \"id\": \"3\",\n           \"name\": \"file3.jpg\",\n           \"type\": \"File\",\n           \"favourite\": 1,\n           \"mime_type\": \"\",\n           \"file_size\": \"2051\",\n           \"total_files\": \"1\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\",\n           \"created_at\": \"2019-01-14T15:29:53.240Z\"\n       }\n   ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"dashboard_failed\",\n    \"message\": \"Dashboard Recent Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1FilesDashview"
  },
  {
    "type": "get",
    "url": "/v1/files/media?offset=0&limit=30&sort=1",
    "title": "List Media",
    "description": "<p>List Media Files</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC, Default=&gt;Sort By created date DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"id\": \"4\",\n           \"name\": \"lyrics.mp4\",\n           \"type\": \"File\",\n           \"file_type\": \"audio/mp4\",\n           \"favourite\": 1,\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\"\n       }\n   ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 2,\n        \"count\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"media_list_failed\",\n    \"message\": \"Media List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1FilesMediaOffset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/files/video?offset=0&limit=30&sort=1",
    "title": "List Video",
    "description": "<p>List Video Files</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC, Default=&gt;Sort By created date DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"id\": \"5\",\n           \"name\": \"video.mp4\",\n           \"type\": \"File\",\n           \"file_type\": \"video/mp4\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_name\": \"folder_sub1\"\n       }\n   ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 30,\n        \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"media_list_failed\",\n    \"message\": \"Media List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1FilesVideoOffset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/getdefaultmediaformat/:id",
    "title": "Get Default Media Format",
    "description": "<p>Video Format to MP4</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": {\n      \"status\": \"true\",\n      \"message\":\"Convert File Successfully'\",\n      \"storage_url\": \"https://www.vrostorage.com/media/4534534345345.mp4\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"message\": \"Failed to Get Folder Details.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1GetdefaultmediaformatId"
  },
  {
    "type": "get",
    "url": "/v1/getfiledetail/:folder_id",
    "title": "Get File Details",
    "description": "<p>Get File Details</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": {\n      \"id\": \"532\",\n      \"name\": \"Ssdsdsd\",\n      \"enc_url\": \"8f9d130787fcf54f70a8d3b3b48a8b8a\",\n      \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n      \"created_at\": \"2019-02-01T06:48:44.139Z\",\n      \"updated_at\": \"2019-02-01T06:48:44.139Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"message\": \"Failed to Get Folder Details.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1GetfiledetailFolder_id"
  },
  {
    "type": "get",
    "url": "/v1/listallfiles?parent_id=0&offset=0&limit=30&sort=1",
    "title": "List all File and Folder",
    "description": "<p>List all Files and Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Default full list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC,3=&gt;Sort By created date DESC,4=&gt;Sort By created date ASC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n           \"id\": \"3\",\n           \"name\": \"Folder1\",\n           \"type\": \"Folder\",\n           \"mime_type\": \"\",\n           \"file_size\": \"2051\",\n           \"favourite\": 0,\n           \"total_files\": \"2\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_directory_name\": \"Root\",\n           \"created_at\": \"2018-08-04T05:43:48.238Z\"\n       },\n       {\n           \"id\": \"4\",\n           \"name\": \"Car.jpg\",\n           \"type\": \"File\",\n           \"mime_type\": \"image/jpeg\",\n           \"file_size\": \"3051\",\n           \"favourite\": 0,\n           \"total_files\": \"1\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_directory_name\": \"Root\",\n           \"created_at\": \"2018-08-04T05:43:48.238Z\"\n        }\n    ],\n   \"meta\": {\n     \"offset\": 0,\n     \"limit\": 30,\n     \"count\": \"17\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1ListallfilesParent_id0Offset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/listfiles?parent_directory=0&offset=0&limit=30&sort=1",
    "title": "List File",
    "description": "<p>List File</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_directory",
            "description": "<p>Default show all File list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC,3=&gt;Sort Created Date By DESC(recent file list),4=&gt;Sort Created Date By ASC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n          \"id\": \"499\",\n          \"name\": \"products\",\n          \"storage_url\": \"https://s3-ap-southeast-1.amazonaws.com/mediafiles-vro-storage/development/d442ecee-3a04-4b53-9f4d-8d9e6b78ced7-benefit5.png\",\n          \"file_size\": \"44681\",\n          \"favourite\": 1,\n          \"mime_type\": \"image/png\",\n          \"parent_directory_name\": \"Root\",\n          \"updated_at\": \"2019-01-31T13:31:20.202Z\"\n       },\n       {\n           \"id\": \"4\",\n           \"name\": \"Ford1.jpg\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"file_size\": \"2048\",\n           \"favourite\": 0,\n           \"mime_type\":\"image/jpeg\",\n           \"parent_directory_name\": \"Folder1\",\n           \"updated_at\": \"2018-12-18T06:42:25.566Z\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 2,\n        \"count\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Limit:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"limit_failed\",\n    \"message\": \"Limit Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Offset:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"offset_failed\",\n    \"message\": \"Offset Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Sort:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"sort_failed\",\n    \"message\": \"Sort Should be a Number\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1ListfilesParent_directory0Offset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/recentlist?offset=0&limit=30&sort=1",
    "title": "Recent List",
    "description": "<p>Recent List</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC, Default=&gt;Sort By created date DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"id\": \"6\",\n            \"name\": \"Ford2.jpg\",\n            \"type\": \"File\",\n            \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n            \"parent_id\": \"2\",\n            \"parent_name\": \"folder_sub1\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 5,\n        \"limit\": 6,\n        \"count\": \"6\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Limit:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"limit_failed\",\n    \"message\": \"Limit Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Offset:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"offset_failed\",\n    \"message\": \"Offset Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Sort:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"sort_failed\",\n    \"message\": \"Sort Should be a Number\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "GetV1RecentlistOffset0Limit30Sort1"
  },
  {
    "type": "post",
    "url": "/v1/files",
    "title": "Create File",
    "description": "<p>Create File</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>File Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "storage_url",
            "description": "<p>Storage URL</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mime_type",
            "description": "<p>MIME Type (Eg: image/jpeg)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "file_size",
            "description": "<p>File Size (Eg : 2048)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "parent",
            "description": "<p>Default 0</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"message\": \"File Created Successfully\",\n   \"data\": {\n       \"id\": \"3\",\n       \"name\": \"File.jpg\",\n       \"enc_url\": \"9aece140f446e498e260b073b51bbb54\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"message\": \"Failed to Create File.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PostV1Files"
  },
  {
    "type": "post",
    "url": "/v1/files/bulk",
    "title": "Create File Bulk",
    "description": "<p>Create File Bulk</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file_data",
            "description": "<p>Format:{ &quot;files&quot;: [{ &quot;name&quot;:&quot;Ford.jpg&quot;, &quot;mime_type&quot;:&quot;image/jpeg&quot;, &quot;storage_url&quot;:&quot;test_url&quot;, &quot;file_size&quot;:&quot;2048&quot; },{ &quot;name&quot;:&quot;Ford1.jpg&quot;, &quot;mime_type&quot;:&quot;image/jpeg&quot;, &quot;storage_url&quot;:&quot;test_url&quot;, &quot;file_size&quot;:&quot;2048&quot; },{ &quot;name&quot;:&quot;Ford2.jpg&quot;, &quot;mime_type&quot;:&quot;image/jpeg&quot;, &quot;storage_url&quot;:&quot;test_url&quot;, &quot;file_size&quot;:&quot;2048&quot; }]}</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "parent",
            "description": "<p>Default 0</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"message\": \"File Bulk Upload Completed Successfully\",\n   \"data\": {\n       \"res_array\": [\n           {\n               \"id\": \"4\",\n               \"name\": \"Ford.jpg\",\n               \"enc_url\": \"3b476f353e4f00bf9ccbf8c8bc6439ed\",\n               \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\"\n           },\n           {\n               \"id\": \"5\",\n               \"name\": \"Ford1.jpg\",\n               \"enc_url\": \"eb106798e6a115677f3363152e867f09\",\n               \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\"\n           },\n           {\n               \"id\": \"6\",\n               \"name\": \"Ford2.jpg\",\n               \"enc_url\": \"c013c59413ba7d37774ea2c210832803\",\n               \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\"\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"message\": \"File Bulk Upload Filed. Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PostV1FilesBulk"
  },
  {
    "type": "post",
    "url": "/v1/files/search",
    "title": "Search File",
    "description": "<p>Search File</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search_string",
            "description": "<p>Search Keyword</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"id\": \"3\",\n           \"name\": \"File.jpg\",\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"2\",\n           \"parent_directory_name\": \"folder_sub1\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"search_failed\",\n    \"message\": \"Search Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PostV1FilesSearch"
  },
  {
    "type": "post",
    "url": "/v1/files/search_all",
    "title": "Search File And Folder",
    "description": "<p>File And Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search_string",
            "description": "<p>Search Keyword</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n      {\n         \"id\": \"3\",\n         \"name\": \"file3\",\n         \"type\": \"File.jpg\",\n         \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n         \"parent_id\": \"2\",\n         \"parent_name\": \"folder_sub1\"\n      },\n      {\n         \"id\": \"3\",\n         \"name\": \"folder2\",\n         \"type\": \"Folder\",\n         \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n         \"parent_id\": \"0\",\n         \"parent_name\": \"Root\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"search_failed\",\n    \"message\": \"Search Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PostV1FilesSearch_all"
  },
  {
    "type": "put",
    "url": "/v1/copyfile",
    "title": "Copy File",
    "description": "<p>Copy File</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>File Name</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "file_id",
            "description": "<p>Current File ID</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "destination_directory",
            "description": "<p>New Destination Directory ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"file_copy_success\",\n   \"success_message\": \"File Copy Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_copy_failed\",\n   \"message\": \"File Copy Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Already-Copy:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_already_copy\",\n   \"message\": \"File Already Copy\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PutV1Copyfile"
  },
  {
    "type": "put",
    "url": "/v1/copysharefile",
    "title": "Copy Share File",
    "description": "<p>Copy Share File</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>File Name</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "file_id",
            "description": "<p>Current File ID</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "destination_directory",
            "description": "<p>New Destination Directory ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"file_copy_success\",\n   \"success_message\": \"File Copy Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_copy_failed\",\n   \"message\": \"File Copy Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Already-Copy:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_already_copy\",\n   \"message\": \"File Already Copy\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PutV1Copysharefile"
  },
  {
    "type": "put",
    "url": "/v1/files/:file_id",
    "title": "Update File",
    "description": "<p>Update File</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>File Name</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"file_name_updated\",\n   \"success_message\": \"File Name Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_name_update_failed\",\n   \"message\": \"File Name Update Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PutV1FilesFile_id"
  },
  {
    "type": "put",
    "url": "/v1/movefile",
    "title": "Move File",
    "description": "<p>Move File</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "file_id",
            "description": "<p>Current File ID</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "destination_directory",
            "description": "<p>New Destination Directory ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"file_move_success\",\n   \"success_message\": \"File Move Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_move_failed\",\n   \"message\": \"File Move Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Already-Move:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"file_already_move\",\n   \"message\": \"File Already Move\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Files",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Files",
    "name": "PutV1Movefile"
  },
  {
    "type": "delete",
    "url": "/v1/folders/:folder_id",
    "title": "Delete Folder",
    "description": "<p>Delete Folder</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"status\": true,\n    \"success\": \"folder_deleted\",\n    \"success_message\": \"Folder Deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_delete_failed\",\n   \"message\": \"Folder Delete Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "DeleteV1FoldersFolder_id"
  },
  {
    "type": "get",
    "url": "/v1/folderlist?exclude_id=5",
    "title": "Select List Folder",
    "description": "<p>Select List Folder</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n           \"id\": \"3\",\n           \"name\": \"folder_sub1\",\n       },\n       {\n           \"id\": \"4\",\n            \"name\": \"folder_sub2\",\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "GetV1FolderlistExclude_id5"
  },
  {
    "type": "get",
    "url": "/v1/folders?parent_id=1&limit=30&offset=0&sort=1",
    "title": "Get Folder Content",
    "description": "<p>Get Folder Content</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By DESC, 3=&gt;Sort Created By DESC Default=&gt;Sort Name By DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n {\n   \"data\": [\n       {\n         \"id\": \"525\",\n         \"name\": \"AAA\",\n         \"type\": \"Folder\",\n         \"favourite\": 0,\n         \"mime_type\": \"\",\n         \"file_size\": \"1902890\",\n         \"total_files\": \"7\",\n         \"storage_url\": \"Folder_Placeholder\",\n         \"parent_id\": \"520\",\n         \"parent_name\": \"test 7yy\",\n         \"created_at\": \"2019-01-28T12:31:54.331Z\"\n       }\n   ],\n   \"meta\": {\n       \"offset\": 0,\n       \"limit\": 30,\n       \"count\": \"2\"\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_content_failed\",\n   \"message\": \"Failed to show folder content\",\n   \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "GetV1FoldersParent_id1Limit30Offset0Sort1"
  },
  {
    "type": "get",
    "url": "/v1/getfolderdetail/:folder_id",
    "title": "Get Folder Details",
    "description": "<p>Get Folder Details</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": {\n      \"id\": \"532\",\n      \"name\": \"Ssdsdsd\",\n      \"enc_url\": \"8f9d130787fcf54f70a8d3b3b48a8b8a\",\n      \"description\": \"description\",\n      \"created_at\": \"2019-02-01T06:48:44.139Z\",\n      \"updated_at\": \"2019-02-01T06:48:44.139Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"message\": \"Failed to Get Folder Details.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "GetV1GetfolderdetailFolder_id"
  },
  {
    "type": "get",
    "url": "/v1/listfolder?parent_id=3&offset=0&limit=30&sort=1",
    "title": "List Folder",
    "description": "<p>List Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Default show all folder list</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC, 3=&gt;Sort created date DESC, 4=&gt;Sort created date ASC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n           \"id\": \"17\",\n           \"name\": \"folder5\",\n           \"description\": \"folder for image\",\n           \"favourite\": 1,\n           \"parent_directory_name\": \"Root\",\n           \"updated_at\": \"2018-12-26T06:58:10.434Z\"\n       },\n       {\n           \"id\": \"18\",\n           \"name\": \"folder6\",\n           \"description\": \"folder for image\",\n           \"favourite\": 0,\n           \"parent_directory_name\": \"Root\",\n           \"updated_at\": \"2018-12-26T06:58:10.434Z\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 2,\n        \"count\": 4\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Limit:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"limit_failed\",\n    \"message\": \"Limit Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Offset:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"offset_failed\",\n    \"message\": \"Offset Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Sort:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"sort_failed\",\n    \"message\": \"Sort Should be a Number\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "GetV1ListfolderParent_id3Offset0Limit30Sort1"
  },
  {
    "type": "post",
    "url": "/v1/folderremovebyid",
    "title": "Select List Folder By Id removed",
    "description": "<p>Select List Folder By Id removed</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Current Folder ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n           \"id\": \"3\",\n           \"name\": \"folder_sub1\",\n       },\n       {\n           \"id\": \"4\",\n            \"name\": \"folder_sub2\",\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "PostV1Folderremovebyid"
  },
  {
    "type": "post",
    "url": "/v1/folders",
    "title": "Create Folder",
    "description": "<p>Create Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Folder Description</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent Folder ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"status\": true,\n  \"message\": \"Folder Created Successfully\",\n  \"data\": {\n       \"id\": \"5\",\n       \"name\": \"Folder1\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"message\": \"Failed to Create Folder.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "PostV1Folders"
  },
  {
    "type": "post",
    "url": "/v1/folders/search",
    "title": "Search Folder",
    "description": "<p>Search Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search_string",
            "description": "<p>Search Keyword</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"id\": \"4\",\n           \"name\": \"folder3\",\n          \"enc_url\": \"b6bba7ada80e6936b51159bb9b093cec\",\n           \"description\": \"Folder 3\",\n           \"parent\": \"2\",\n           \"category\": 1\n       },\n       {\n           \"id\": \"3\",\n           \"name\": \"folder2\",\n           \"enc_url\": \"f7626bd7bb1b9fb84dcd4e693ac47653\",\n           \"description\": \"Folder 2\",\n          \"parent\": \"0\",\n           \"category\": 1\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"search_failed\",\n    \"message\": \"Search Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "PostV1FoldersSearch"
  },
  {
    "type": "put",
    "url": "/v1/copyfolder",
    "title": "Copy Folder",
    "description": "<p>Copy Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Current Folder ID</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent Folder ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"folder_copy_success\",\n   \"success_message\": \"Folder Copy Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_copy_failed\",\n   \"message\": \"Folder Copy Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Already-Copy:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_already_copy\",\n   \"message\": \"Folder Already Copy\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "PutV1Copyfolder"
  },
  {
    "type": "put",
    "url": "/v1/copysharefolder",
    "title": "Copy Share Folder",
    "description": "<p>Copy Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Current Folder ID</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent Folder ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"folder_copy_success\",\n   \"success_message\": \"Folder Copy Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_copy_failed\",\n   \"message\": \"Folder Copy Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Already-Copy:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_already_copy\",\n   \"message\": \"Folder Already Copy\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "PutV1Copysharefolder"
  },
  {
    "type": "put",
    "url": "/v1/folders/:folder_id",
    "title": "Update Folder",
    "description": "<p>Update Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Folder Name</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"folder_name_updated\",\n   \"success_message\": \"Folder Name Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_name_update_failed\",\n   \"message\": \"Folder Name Update Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "PutV1FoldersFolder_id"
  },
  {
    "type": "put",
    "url": "/v1/movefolder",
    "title": "Move Folder",
    "description": "<p>Move Folder</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_id",
            "description": "<p>Current Folder ID</p>"
          },
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "parent",
            "description": "<p>Parent Folder ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"folder_move_success\",\n   \"success_message\": \"Folder Move Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_move_failed\",\n   \"message\": \"Folder Move Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Already-Move:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"folder_already_move\",\n   \"message\": \"Folder Already Move\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Folders",
    "filename": "./server/controllers/folders.js",
    "groupTitle": "Folders",
    "name": "PutV1Movefolder"
  },
  {
    "type": "get",
    "url": "/v1/getinvoice/:invoice_id",
    "title": "Get Invoice Details",
    "description": "<p>Get Invoice Details</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": {\n        \"id\": 12,\n        \"ref_id\": \"INV-20190502586767\",\n        \"user_id\": 428,\n        \"date_from\": \"2019-05-02T00:00:00.000Z\",\n        \"date_to\": \"2019-04-30T00:00:00.000Z\",\n        \"amount\": \"10.000\",\n        \"pay_due_date\": \"2019-05-12T00:00:00.000Z\",\n        \"pay_due_amount\": \"10.000\",\n        \"paid_status\": 1,\n        \"payment_date_time\": null,\n        \"usage\": \"2030\",\n        \"payment_response\": null,\n        \"created_at\": \"2019-05-02T09:15:13.274Z\",\n        \"updated_at\": \"2019-05-02T09:15:13.274Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"invoice_details_failed\",\n   \"message\": \"Invoice Details Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Invoice",
    "filename": "./server/controllers/invoice.js",
    "groupTitle": "Invoice",
    "name": "GetV1GetinvoiceInvoice_id"
  },
  {
    "type": "get",
    "url": "/v1/getinvoicelist?offset=0&limit=30&sort=1",
    "title": "List Invoice",
    "description": "<p>List Invoice of user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": [\n        {\n            \"id\": 12,\n            \"ref_id\": \"INV-20190502586767\",\n            \"user_id\": 428,\n            \"date_from\": \"2019-05-02T00:00:00.000Z\",\n            \"date_to\": \"2019-04-30T00:00:00.000Z\",\n            \"amount\": \"10.000\",\n            \"pay_due_date\": \"2019-05-12T00:00:00.000Z\",\n            \"pay_due_amount\": \"10.000\",\n            \"paid_status\": 1,\n            \"payment_date_time\": null,\n            \"usage\": \"2030\",\n            \"payment_response\": null,\n            \"created_at\": \"2019-05-02T09:15:13.274Z\",\n            \"updated_at\": \"2019-05-02T09:15:13.274Z\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 30,\n        \"count\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"invoice_list_failed\",\n    \"message\": \"Invoice List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Invoice",
    "filename": "./server/controllers/invoice.js",
    "groupTitle": "Invoice",
    "name": "GetV1GetinvoicelistOffset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/getlatestinvoiceofuser",
    "title": "Get Latest Invoice Details of User",
    "description": "<p>Get Latest Invoice Details of User</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": {\n        \"id\": 12,\n        \"ref_id\": \"INV-20190502586767\",\n        \"user_id\": 428,\n        \"date_from\": \"2019-05-02T00:00:00.000Z\",\n        \"date_to\": \"2019-04-30T00:00:00.000Z\",\n        \"amount\": \"10.000\",\n        \"pay_due_date\": \"2019-05-12T00:00:00.000Z\",\n        \"pay_due_amount\": \"10.000\",\n        \"paid_status\": 1,\n        \"payment_date_time\": null,\n        \"usage\": \"2030\",\n        \"payment_response\": null,\n        \"created_at\": \"2019-05-02T09:15:13.274Z\",\n        \"updated_at\": \"2019-05-02T09:15:13.274Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"invoice_details_failed\",\n   \"message\": \"Invoice Details Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Invoice",
    "filename": "./server/controllers/invoice.js",
    "groupTitle": "Invoice",
    "name": "GetV1Getlatestinvoiceofuser"
  },
  {
    "type": "post",
    "url": "/v1/create_notification",
    "title": "Create Notification",
    "description": "<p>Initiate Socket &amp; Push Notification</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventType",
            "description": "<p>Socket event type (Eg: &quot;STORAGE_FILE_CREATE&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>Socket data (Eg: {&quot;user_id&quot; : &quot;4&quot;, &quot;action&quot; : &quot;File uploaded&quot;})</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "socket_users",
            "description": "<p>Socket users (Eg : [{&quot;uId&quot;: 542},{&quot;uId&quot;: 500}])</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "users",
            "description": "<p>Push users (Eg: [{&quot;uId&quot;: 34,&quot;dId&quot;: &quot;4a30143fdbf65eb55d88dd13ee0d1d515216026c703ce61ac42511c0d002fc44&quot;,&quot;os&quot; : &quot;ios&quot;},{&quot;uId&quot;: 542,&quot;dId&quot;: &quot;6c68b2bbe59b6e5f8532e01ecd5eaae35d401fd7dc3aa452acaadcfa7d794ba7&quot;,&quot;os&quot; : &quot;ios&quot;}])</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "push_data",
            "description": "<p>(Eg: {&quot;notification_type&quot; : &quot;STORAGE_FILE_CREATE&quot;,&quot;notification_message&quot; : &quot;<font color='#00A4EE'>Suraj</font> created a file. &quot;,&quot;notification_message_ar&quot; : &quot;<font color='#00A4EE'>Suraj</font>  ارسل طلب التحقق &quot;,&quot;notification_data&quot; : &quot;{&quot;user_id&quot;:1525,&quot;full_name&quot;:&quot;Suraj&quot;,&quot;profile_pic&quot;:&quot;default\\/user_profile_pic.png&quot;,&quot;reject_or_revert_reason&quot;:null,&quot;user_authentication_status&quot;:&quot;1&quot;}&quot;,&quot;user_id&quot; : 1525,&quot;notification_to&quot; : 1644,&quot;created_at&quot; : &quot;2019-01-24 06:08:25&quot;,&quot;updated_at&quot; : &quot;2019-01-24 06:08:25&quot;})</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"message\": \"Notification Send Successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"message\": \"Failed to Create Notification.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Notification",
    "filename": "./server/controllers/files.js",
    "groupTitle": "Notification",
    "name": "PostV1Create_notification"
  },
  {
    "type": "get",
    "url": "/v1/getpayment/:payment_id",
    "title": "Get Payment Details",
    "description": "<p>Get Payment Details</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": {\n        \"id\": 1,\n        \"user_id\": 423,\n        \"invoice_id\": 1,\n        \"invoice_ref_id\": \"INV-20190503485630\",\n        \"payment_currency_code\": \"SAR  \",\n        \"amount\": \"5180.00\",\n        \"payable_amount\": \"5180.00\",\n        \"payment_merchant_reference\": \"\",\n        \"payment_url\": \"https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=92FD56A88C59A3F28DD1D341040BB239.uat01-vm-tx01\",\n        \"payment_status\": 2,\n        \"payment_result_code\": \"000.200.100\",\n        \"payment_result_description\": \"successfully created checkout\",\n        \"payment_date_time\": null,\n        \"payment_user_comment\": \"\",\n        \"payment_bank_response_checkout\": {\n            \"id\": \"92FD56A88C59A3F28DD1D341040BB239.uat01-vm-tx01\",\n            \"ndc\": \"92FD56A88C59A3F28DD1D341040BB239.uat01-vm-tx01\",\n            \"result\": {\n                \"code\": \"000.200.100\",\n                \"description\": \"successfully created checkout\"\n            },\n            \"timestamp\": \"2019-05-03 14:00:15+0000\",\n            \"buildNumber\": \"33ee72b29c129ddd5a37c156e074f45020691f79@2019-05-03 03:42:17 +0000\"\n        },\n        \"created_at\": \"2019-05-03T14:00:14.907Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"invoice_details_failed\",\n   \"message\": \"Invoice Details Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Payment",
    "filename": "./server/controllers/payment.js",
    "groupTitle": "Payment",
    "name": "GetV1GetpaymentPayment_id"
  },
  {
    "type": "get",
    "url": "/v1/paymentinvoice/:invoice_id",
    "title": "Create Payment Via mail",
    "description": "<p>Create Payment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "invoice_id",
            "description": "<p>Invoice ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": [\n        {\n            \"id\": 12,\n            \"ref_id\": \"INV-20190502586767\",\n            \"user_id\": 428,\n            \"date_from\": \"2019-05-02T00:00:00.000Z\",\n            \"date_to\": \"2019-04-30T00:00:00.000Z\",\n            \"amount\": \"10.000\",\n            \"pay_due_date\": \"2019-05-12T00:00:00.000Z\",\n            \"pay_due_amount\": \"10.000\",\n            \"paid_status\": 1,\n            \"payment_date_time\": null,\n            \"usage\": \"2030\",\n            \"payment_response\": null,\n            \"created_at\": \"2019-05-02T09:15:13.274Z\",\n            \"updated_at\": \"2019-05-02T09:15:13.274Z\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 30,\n        \"count\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"invoice_list_failed\",\n    \"message\": \"Invoice List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Payment",
    "filename": "./server/controllers/payment.js",
    "groupTitle": "Payment",
    "name": "GetV1PaymentinvoiceInvoice_id"
  },
  {
    "type": "get",
    "url": "/v1/paymentlist?offset=0&limit=30&status=1",
    "title": "List Payment Of User",
    "description": "<p>List Payment Of User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"id\": 1,\n           \"user_id\": 423,\n           \"invoice_id\": 1,\n           \"invoice_ref_id\": \"INV-20190503485630\",\n           \"payment_currency_code\": \"SAR  \",\n           \"amount\": \"5180.00\",\n           \"payable_amount\": \"5180.00\",\n           \"payment_merchant_reference\": \"\",\n           \"payment_url\": \"https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=92FD56A88C59A3F28DD1D341040BB239.uat01-vm-tx01\",\n           \"payment_status\": 2,\n           \"payment_result_code\": \"000.200.100\",\n           \"payment_result_description\": \"successfully created checkout\",\n           \"payment_date_time\": null,\n           \"payment_user_comment\": \"\",\n           \"payment_bank_response_checkout\": {\n               \"id\": \"92FD56A88C59A3F28DD1D341040BB239.uat01-vm-tx01\",\n               \"ndc\": \"92FD56A88C59A3F28DD1D341040BB239.uat01-vm-tx01\",\n               \"result\": {\n                   \"code\": \"000.200.100\",\n                   \"description\": \"successfully created checkout\"\n               },\n               \"timestamp\": \"2019-05-03 14:00:15+0000\",\n               \"buildNumber\": \"33ee72b29c129ddd5a37c156e074f45020691f79@2019-05-03 03:42:17 +0000\"\n           },\n           \"created_at\": \"2019-05-03T14:00:14.907Z\"\n       }\n   ],\n   \"meta\": {\n       \"offset\": 0,\n       \"limit\": 30,\n       \"count\": \"0\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"invoice_list_failed\",\n    \"message\": \"Invoice List Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Payment",
    "filename": "./server/controllers/payment.js",
    "groupTitle": "Payment",
    "name": "GetV1PaymentlistOffset0Limit30Status1"
  },
  {
    "type": "post",
    "url": "/v1/paymentcreate",
    "title": "Create Payment",
    "description": "<p>Create Payment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>Invoice Amount</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "invoice_id",
            "description": "<p>Invoice ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  <script src=\"https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=EE783DD06F6142EBC32D3F664F323600.uat01-vm-tx04\"></script>\n  <form action=\"https://www.vrovault.com/vro_storage/v1/paymentcheckstatus/\" class=\"paymentWidgets\" data-brands=\"VISA MASTER\"></form>\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"invoice_payment_complete\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Payment",
    "filename": "./server/controllers/payment.js",
    "groupTitle": "Payment",
    "name": "PostV1Paymentcreate"
  },
  {
    "type": "delete",
    "url": "/v1/removeshare",
    "title": "Remove Share By Id",
    "description": "<p>Remove Share By Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "share_id",
            "description": "<p>Primary Key</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"status\": true,\n  \"success\": \"share_remove_success\",\n  \"success_message\": \"Share Remove Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"status\": false,\n  \"error\": \"share_remove_failed\",\n  \"message\": \"Share Remove Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "DeleteV1Removeshare"
  },
  {
    "type": "delete",
    "url": "/v1/share",
    "title": "Remove Share",
    "description": "<p>Remove Share</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_file_id",
            "description": "<p>Primary Key</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "type",
            "description": "<p>1=&gt;Folders,2=&gt;Files</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"status\": true,\n  \"success\": \"share_remove_success\",\n  \"success_message\": \"Share Remove Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"status\": false,\n  \"error\": \"share_remove_failed\",\n  \"message\": \"Share Remove Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "DeleteV1Share"
  },
  {
    "type": "get",
    "url": "/v1/getmyshare?offset=0&limit=30&sort=1",
    "title": "Get My Share Files",
    "description": "<p>Get My Shared Files</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort By created date DESC, 2=&gt;Sort By created date ASC, Default=&gt;Sort By created date DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"sharedbyme\": [\n        {\n            \"id\": \"4\",\n            \"name\": \"Ford.jpg\",\n           \"type\": \"File\",\n           \"share_id\": 175,\n           \"favourite\": 1,\n           \"share_type\": \"P\",\n           \"share_users\": [],\n           \"share_period\": [\n               \"2019-01-29\",\n               \"2019-02-01\"\n           ],\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"0\",\n           \"parent_name\": \"Root\"\n       }\n   ],\n   \"sharedbyother\": [\n       {\n           \"id\": \"6\",\n           \"name\": \"Ford2.jpg\",\n           \"type\": \"File\",\n           \"share_id\": 175,\n           \"share_type\": \"P\",\n           \"share_users\": [],\n           \"share_period\": [\n               \"2019-01-29\",\n               \"2019-02-01\"\n           ],\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"0\",\n           \"parent_name\": \"Root\"\n       },\n       {\n           \"id\": \"5\",\n           \"name\": \"Ford1.jpg\",\n           \"type\": \"File\",\n           \"share_type\": \"P\",\n           \"share_users\": [],\n           \"share_period\": [\n               \"2019-01-29\",\n               \"2019-02-01\"\n           ],\n           \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"parent_id\": \"0\",\n           \"parent_name\": \"Root\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 6,\n        \"count\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"share_details_failed\",\n   \"message\": \"Failed to Show Shared Details\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "GetV1GetmyshareOffset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/share/:share_id",
    "title": "Get Shared Details",
    "description": "<p>Get Shared Details</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": {\n       \"id\": 2,\n       \"folder_file_id\": \"1\",\n       \"type\": 2,\n       \"share_type\": \"I\",\n       \"share_users\": [\n           4,\n           5\n       ],\n      \"share_period\": [\n           2018-12-05,\n           2018-12-25\n       ],\n       \"share_link\": \"5c877da4e9b40ce34f0400bb494f0bae\",\n       \"share_status\": \"A\",\n       \"user_id\": \"1\",\n       \"created_at\": \"2018-12-05T10:05:36.011Z\",\n       \"updated_at\": \"2018-12-05T10:05:36.011Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"share_details_failed\",\n   \"message\": \"Failed to Show Shared Details\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "GetV1ShareShare_id"
  },
  {
    "type": "get",
    "url": "/v1/sharelist?offset=0&limit=30&sort=1",
    "title": "Share List",
    "description": "<p>Share List from Dashboard</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sort",
            "description": "<p>1=&gt;Sort Name By DESC, 2=&gt;Sort Name By ASC, Default=&gt;Sort By created date DESC</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n          \"id\": \"511\",\n          \"name\": \"folder4\",\n          \"type\": \"Folder\",\n          \"mime_type\": \"\",\n          \"file_size\": null,\n          \"share_id\": 172,\n          \"share_type\": \"P\",\n          \"share_users\": [\n              4,\n              5,\n              1\n          ],\n          \"share_period\": [\n              \"2018-12-05\",\n              \"2019-12-05\"\n          ],\n          \"share_link\": \"9ddb034826a40e2aee07f97cccb30d4e\",\n          \"sharebystatus\": 2, (1=others, 2=me, 3= public)\n          \"user_id\": \"428\",\n          \"share_status\": \"A\",\n          \"share_email\": \"surajuk1@gmail.com\",\n          \"total_files\": \"0\",\n          \"storage_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n          \"parent_name\": \"folder3\",\n          \"created_at\": \"2019-01-30T05:23:15.302Z\"\n        }\n    ],\n    \"meta\": {\n        \"offset\": 0,\n        \"limit\": 6,\n        \"count\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"Limit Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-List:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"list_failed\",\n    \"message\": \"List Failed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Limit:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"limit_failed\",\n    \"message\": \"Limit Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Offset:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"offset_failed\",\n    \"message\": \"Offset Should be a Number\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Sort:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"sort_failed\",\n    \"message\": \"Sort Should be a Number\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "GetV1SharelistOffset0Limit30Sort1"
  },
  {
    "type": "get",
    "url": "/v1/viewsharedfile/56f8a26d996e04cda45190ac5823009b",
    "title": "Get External Share",
    "description": "<p>Get External Share</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "share_link",
            "description": ""
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\nhttp://13.229.240.142/vro-storage-api/uploads/share/share_F9BAa1Eoo1NVJ3BEp99IwsQDLcVp50mStAixQDfLOulLp5nfVr.jpg",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"share_details_failed\",\n   \"message\": \"Failed to Show Shared Details\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "GetV1Viewsharedfile56f8a26d996e04cda45190ac5823009b"
  },
  {
    "type": "post",
    "url": "/v1/share",
    "title": "Create Share",
    "description": "<p>Create Share</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bigint",
            "optional": false,
            "field": "folder_file_id",
            "description": "<p>Primary Key</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "type",
            "description": "<p>1=&gt;Folders,2=&gt;Files</p>"
          },
          {
            "group": "Parameter",
            "type": "char",
            "optional": false,
            "field": "share_type",
            "description": "<p>P=&gt;Public,I=&gt;Individual</p>"
          },
          {
            "group": "Parameter",
            "type": "jsonb",
            "optional": false,
            "field": "share_period",
            "description": "<p>Example: [&quot;2018-12-05&quot;,&quot;2019-12-05&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "jsonb",
            "optional": false,
            "field": "share_users",
            "description": "<p>Example: [4,5]</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "share_email",
            "description": "<p>example@gmail.com</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"data\": {\n       \"id\": 26,\n       \"folder_file_id\": \"1\",\n       \"type\": 2,\n       \"share_type\": \"I\",\n       \"share_email\": \"surajuk1@gmail.com\",\n       \"share_users\": [\n           4,\n           5\n       ],\n       \"share_period\": [\n           \"2018-12-05\",\n           \"2019-12-05\"\n       ],\n       \"share_link\": \"9ff403e52f466637c28d13585b8b9a0a\",\n       \"share_email\": \"surajuk1@gmail.com\",\n       \"user_id\": \"1\",\n       \"share_status\": \"A\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"message\": \"Failed to Add Share.Try Again!.\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "PostV1Share"
  },
  {
    "type": "put",
    "url": "/v1/share",
    "title": "Update Share Status",
    "description": "<p>Update Share Status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "char",
            "optional": false,
            "field": "share_status",
            "description": "<p>A=&gt;Active,D=&gt;Disable</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"status\": true,\n   \"success\": \"share_status_updated\",\n   \"success_message\": \"Share Status Updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n   \"status\": false,\n   \"error\": \"share_status_update_failed\",\n   \"message\": \"Share Update Failed\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "Share",
    "filename": "./server/controllers/share.js",
    "groupTitle": "Share",
    "name": "PutV1Share"
  },
  {
    "type": "get",
    "url": "/v1/getnotification?parent_id=1&limit=30&offset=0&status=0",
    "title": "Get Notification",
    "description": "<p>Get Notification</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "offset",
            "description": "<p>Default 0</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>Default 30</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>1=&gt;Not viewed, 2=&gt;viewed, 0=&gt;All</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": {\n        \"count\": 1,\n        \"rows\": [\n            {\n                \"id\": 1,\n                \"ref_id\": 26,\n                \"type\": 1,\n                \"title\": \"Invoice Ref: #INV-20190410707157\",\n                \"description\": \"Your usage invoice generated\",\n                \"view_status\": 1,\n                \"created_at\": \"2019-05-10T08:33:57.358Z\",\n                \"updated_at\": \"2019-05-10T08:33:57.358Z\"\n            }\n       ]\n },\n \"meta\": {\n   \"offset\": 0,\n   \"limit\": 30,\n   \"count\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"notification_failed\",\n    \"message\": \"Failed to show Notification\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1GetnotificationParent_id1Limit30Offset0Status0"
  },
  {
    "type": "get",
    "url": "/v1/getpreviousdayusage",
    "title": "Get Previous Day Usage",
    "description": "<p>Get Usage Of Previous four Day</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n      {\n          \"usage\": \"3000\",\n          \"day\": \"24\"\n      },\n      {\n          \"usage\": \"2000\",\n          \"day\": \"25\"\n      },\n      {\n          \"usage\": \"2048\",\n          \"day\": \"26\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_usage_failed\",\n    \"message\": \"Failed To Get Usage\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Getpreviousdayusage"
  },
  {
    "type": "get",
    "url": "/v1/getprevioususage",
    "title": "Get Previous Usage",
    "description": "<p>Get Usage Of Previous Six Months</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n      {\n          \"usage\": \"3000\",\n          \"month\": \"10\"\n      },\n      {\n          \"usage\": \"2000\",\n          \"month\": \"09\"\n      },\n      {\n          \"usage\": \"2048\",\n          \"month\": \"08\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_usage_failed\",\n    \"message\": \"Failed To Get Usage\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Getprevioususage"
  },
  {
    "type": "get",
    "url": "/v1/getpreviousweekusage",
    "title": "Get Previous Week Usage",
    "description": "<p>Get Usage Of Previous four Week</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n      {\n          \"usage\": \"3000\",\n          \"week\": \"1\"\n      },\n      {\n          \"usage\": \"2000\",\n          \"week\": \"2\"\n      },\n      {\n          \"usage\": \"2048\",\n          \"week\": \"4\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_usage_failed\",\n    \"message\": \"Failed To Get Usage\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Getpreviousweekusage"
  },
  {
    "type": "get",
    "url": "/v1/getstorageusers",
    "title": "Get Storage Users",
    "description": "<p>Get Storage Users</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"user_id\": \"5\",\n           \"user_name\": \"anoop\",\n           \"first_name\": \"anoop\",\n           \"last_name\": \"ak\",\n           \"subscription_plan\": 1,\n           \"profile_image_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"dob\": null\n       },\n       {\n           \"user_id\": \"3\",\n           \"user_name\": \"sukesh\",\n           \"first_name\": \"sukesh\",\n           \"last_name\": \"j\",\n           \"subscription_plan\": 1,\n           \"profile_image_url\": \"http://13.229.240.142/vro-storage-api/public/storage/\",\n           \"dob\": null\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_info_failed\",\n    \"message\": \"Failed To Get User Info\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Getstorageusers"
  },
  {
    "type": "get",
    "url": "/v1/getusage",
    "title": "Get Total Usage",
    "description": "<p>Get Total Usage</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"usage\": 8198\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_usage_failed\",\n    \"message\": \"Failed To Get Usage\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Getusage"
  },
  {
    "type": "get",
    "url": "/v1/getusage_payinfo",
    "title": "Get Usage Pay Info",
    "description": "<p>Get Usage Pay Info</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": {\n       \"from_date\": \"2018-12-01\",\n       \"to_date\": \"2018-12-30\",\n       \"usage\": \"2048\",\n       \"amount_payable\": \"200\",\n       \"pay_by_date\": \"2019-01-15\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"pay_info_failed\",\n    \"message\": \"Failed To Get Pay Info\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Getusage_payinfo"
  },
  {
    "type": "get",
    "url": "/v1/getuserinfo",
    "title": "Get User Info",
    "description": "<p>Get User Info</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"data\": {\n        \"user_id\": \"428\",\n        \"user_name\": \"@surajuk.333\",\n        \"reg_type\": \"email\",\n        \"email\": \"surajuknaga@gmail.com\",\n        \"gender\": 0,\n        \"full_name\": \"suraj UK\",\n        \"mobile\": null,\n        \"mobile_country_code\": null,\n        \"profile_pic\": \"\",\n        \"profile_pic_thumb\": \"\",\n        \"subscription_plan\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_info_failed\",\n    \"message\": \"Failed To Get User Info\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Getuserinfo"
  },
  {
    "type": "get",
    "url": "/v1/notificationdisable",
    "title": "Disable All Notification",
    "description": "<p>Disable All Notification</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"success\": \"notification_view_success\",\n   \"success_message\": \"Notification View Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"notification_failed\",\n    \"message\": \"Failed to show Notification\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "GetV1Notificationdisable"
  },
  {
    "type": "post",
    "url": "/v1/getfilterusage",
    "title": "Get Usage B/w Dates",
    "description": "<p>Get Usage B/w Dates</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "from_date",
            "description": "<p>From-Date Example: 2018-12-10</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "to_date",
            "description": "<p>To-Date Example: 2018-12-20</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"usage\": \"443926\",\n           \"created_at\": \"2019-01-24T14:12:14.898Z\"\n       },\n       {\n           \"usage\": \"44681\",\n           \"created_at\": \"2019-01-31T13:31:20.202Z\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_usage_failed\",\n    \"message\": \"Failed To Get Usage\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "PostV1Getfilterusage"
  },
  {
    "type": "post",
    "url": "/v1/getusagebydate",
    "title": "Get Total Usage B/w Dates",
    "description": "<p>Get Total Usage B/w Dates</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "from_date",
            "description": "<p>From-Date Example: 2018-12-10</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "to_date",
            "description": "<p>To-Date Example: 2018-12-20</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n    \"usage\": 8198\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"user_usage_failed\",\n    \"message\": \"Failed To Get Usage\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "PostV1Getusagebydate"
  },
  {
    "type": "put",
    "url": "/v1/viewnotification",
    "title": "View notification",
    "description": "<p>View notification</p>",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "notification_id",
            "description": "<p>Notification ID</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer access_token</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"success\": \"notification_view_success\",\n   \"success_message\": \"Notification View Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n    \"status\": false,\n    \"error\": \"notification_failed\",\n    \"message\": \"Failed to show Notification\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User",
    "name": "PutV1Viewnotification"
  },
  {
    "type": "get",
    "url": "/mobile/country_codes",
    "title": "Mobile Country Code",
    "description": "<p>Mobile Country Code</p>",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n   \"data\": [\n       {\n           \"country_code\": \"0093\",\n           \"country_name\": \"Afghanistan\"\n       },\n       {\n           \"country_code\": \"00355\",\n           \"country_name\": \"Albania\"\n       },\n       {\n           \"country_code\": \"00213\",\n           \"country_name\": \"Algeria\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "GetMobileCountry_codes"
  },
  {
    "type": "post",
    "url": "/device_register",
    "title": "Device register",
    "description": "<p>Device register</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_token",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "voip_token",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"device_register_success\",\n  \"success_message\": \"Device successfully registered!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"device_register_failed\",\n  \"error_message\": \"Failed to register device. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostDevice_register"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "User logout",
    "description": "<p>User logout</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "logout_all",
            "description": "<p>1 or 0. default is 0</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n{\n  \"success\": \"logout_success\",\n  \"success_message\": \"Successfully logged out!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"logout_failed\",\n  \"error_message\": \"Logout failed. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostLogout"
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
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_secret",
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
            "optional": true,
            "field": "mobile_country_code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "account_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reg_type",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"otp_success\",\n  \"success_message\": \"You should receive a SMS with One-Time Password (OTP) for Verification shortly. Please enter the OTP below and press Verify\"\n}",
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
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_users"
  },
  {
    "type": "post",
    "url": "/v1/common_users/change_password",
    "title": "Change password Using mobile OTP",
    "description": "<p>Change password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_otp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"password_update_success\",\n  \"success_message\": \"Password successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"password_update_failed\",\n  \"error_message\": \"Failed to update password. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "Verfication failed Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"otp_verification_failed\",\n  \"error_message\": \"OTP verification failed. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "Wrong OTP Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"wrong_mobile_otp\",\n  \"error_message\": \"Wrong mobile OTP you've entered\"\n}",
          "type": "json"
        },
        {
          "title": "User not found Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"user_not_found\",\n  \"error_message\": \"User not found. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_usersChange_password"
  },
  {
    "type": "post",
    "url": "/v1/common_users/forgot_password",
    "title": "Forgot password",
    "description": "<p>Forgot password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reg_type",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"forgot_password_otp_sent_success\",\n  \"success_message\": \"OTP sent successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"send_otp_failed\",\n  \"error_message\": \"Failed to resend OTP. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "User not found Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"user_not_found\",\n  \"error_message\": \"User not found. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_usersForgot_password"
  },
  {
    "type": "post",
    "url": "/v1/common_users/login",
    "title": "User login",
    "description": "<p>User login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_secret",
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
            "type": "string",
            "optional": false,
            "field": "email",
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
            "type": "boolean",
            "optional": true,
            "field": "is_confirm",
            "description": "<p>default 0 1 - confirm reactivation request 0 - for all other request</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "account_id",
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
          "content": "HTTP 200 OK\n{\n \"access_token\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VyX25hbWUiOiJzYXNpcyIsImlhdCI6MTQ5MzcyOTk4NCwiZXhwIjoxNDkzNzczMTg0fQ.Ni5Gkt-jLL_vGuOlgy_--63umjUpe1lAd2hWT7kCKWI\",\n \"token_type\": \"Bearer\",\n \"refresh_token\": \"bf90508043fcca0833203b2fa9bcf87cfb9a159b258a8b3512006d91af18edc635bba2e7c8194b1c\",\n \"resource_server\": \"https://s3.amazonaws.com/test-vro/\",\n \"account_id\": 410,\n \"reg_type\": \"mobile\",\n \"premium_membership_type\": 1,\n \"membership_packages\": [\n     {\n         \"id\": 1,\n         \"package_id\": 2,\n         \"name\": \"yearly\",\n         \"started_at\": \"2017-12-04T00:54:41.000Z\",\n         \"ended_at\": \"2017-12-20T00:54:41.000Z\",\n         \"is_recurring\": 1\n     },\n     {\n         \"id\": 2,\n         \"package_id\": 3,\n         \"name\": \"monthly\",\n         \"started_at\": \"2017-12-04T00:54:41.000Z\",\n         \"ended_at\": \"2017-12-20T00:54:41.000Z\",\n         \"is_recurring\": 1\n     }\n ],\n \"user\": {\n   //user details\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"login_failed\",\n  \"error_message\": \"Failed to login. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "Verfication failed Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"incorrect_password\",\n  \"error_message\": \"Incorrect password. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "User not found Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"user_not_found\",\n  \"error_message\": \"User not found. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_usersLogin"
  },
  {
    "type": "post",
    "url": "/v1/common_users/resend_email",
    "title": "Resend mail for user registration",
    "description": "<p>Resend mail for user registration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"email_success\",\n  \"success_message\": \"Verification email has been sent to your registered mailid. Please check your mail\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"resend_email_failed\",\n  \"error_message\": \"Failed to resend mail. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_usersResend_email"
  },
  {
    "type": "post",
    "url": "/v1/common_users/resend_otp",
    "title": "Resend OTP for user registration",
    "description": "<p>Resend OTP for user registration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_country_code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"otp_success\",\n  \"success_message\": \"You should receive a SMS with One-Time Password (OTP) for Verification shortly. Please enter the OTP below and press Verify\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"resend_otp_failed\",\n  \"error_message\": \"Failed to resend OTP. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "User not found Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"user_not_found\",\n  \"error_message\": \"User not found. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_usersResend_otp"
  },
  {
    "type": "post",
    "url": "/v1/common_users/reset_password",
    "title": "Logged User Reset password",
    "description": "<p>Login User Reset password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "new_password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"password_update_success\",\n  \"success_message\": \"Password successfully updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"password_update_failed\",\n  \"error_message\": \"Failed to update password. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_usersReset_password"
  },
  {
    "type": "post",
    "url": "/v1/common_users/verify_otp",
    "title": "Verify OTP for user registration",
    "description": "<p>Verify OTP for user registration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_country_code",
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
            "type": "string",
            "optional": false,
            "field": "mobile_otp",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"otp_verification_success\",\n  \"success_message\": \"OTP verified successfully\"\n  \"data\":{ \"user_id\": 1, \"user_name_check_token\": \"8721bGV76\" }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"otp_verification_failed\",\n  \"error_message\": \"OTP verification failed. Try again!\"\n}",
          "type": "json"
        },
        {
          "title": "Wrong OTP Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"wrong_mobile_otp\",\n  \"error_message\": \"Wrong mobile OTP you've entered\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PostV1Common_usersVerify_otp"
  },
  {
    "type": "put",
    "url": "/v1/updateprofile",
    "title": "User profile Update",
    "description": "<p>User profile Update</p>",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "profile_pic",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "profile_pic_thumb",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
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
          "content": "HTTP 200 OK\n{\n  \"success\": \"user_update_success\",\n  \"success_message\": \"Profile Updated Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP 403\n{\n  \"error\": \"user_update_failed\",\n  \"error_message\": \"Profile Updated Failed. Try again!\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User_Management",
    "filename": "./server/controllers/users.js",
    "groupTitle": "User_Management",
    "name": "PutV1Updateprofile"
  },
  {
    "type": "post",
    "url": "/v1/common_users/deactivate",
    "title": "Deactivate account",
    "description": "<p>Deactivate account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "optional": true,
            "field": "mobile",
            "description": "<p>required if reg_type = mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>required if reg_type = email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reg_type",
            "description": "<p>email,mobile</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP 200 OK \n{ \n  \"success\": \"deactivation_success\", \n  \"success_message\": \"Your account has been successfully deactivated!\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User not found Error-Response: ",
          "content": "HTTP 403 \n{ \n  \"error\": \"user_not_found\", \n  \"error_message\": \"User not found. Try again!\" \n}",
          "type": "json"
        }
      ]
    },
    "group": "Users",
    "filename": "./server/controllers/users.js",
    "groupTitle": "Users",
    "name": "PostV1Common_usersDeactivate"
  }
] });
