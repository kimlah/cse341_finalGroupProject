{
  "swagger": "2.0",
  "info": {
    "title": "My API",
    "description": "ToDos API",
    "version": "1.0.0"
  },
  "host": "cse341-finalproject-yq22.onrender.com",
  "basePath": "/",
  "schemes": [
    "https"
  ],
  "paths": {
    "/api-docs": {
      "get": {
        "description": "",
        "parameters": [],
        "responses": {}
      }
    },
    "/admin/": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/admin/{id}": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      },
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/employee/": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/employee/{id}": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      },
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/equipment/": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/equipment/{id}": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      },
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/workorder/": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/workorder/{id}": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      },
      "put": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "todaysDate": {
                  "example": "any"
                },
                "task": {
                  "example": "any"
                },
                "dueDate": {
                  "example": "any"
                },
                "class": {
                  "example": "any"
                },
                "appointment": {
                  "example": "any"
                },
                "activities": {
                  "example": "any"
                },
                "notes": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "412": {
            "description": "Precondition Failed"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "delete": {
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "400": {
            "description": "Bad Request"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    }
  }
}