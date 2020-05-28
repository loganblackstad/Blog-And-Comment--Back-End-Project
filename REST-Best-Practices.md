# Best Practices for RESTful APIs

1. ## Use nouns but no verbs

   For an easy understanding of the APIs, use this type of structure for every resource:

   | Resource  | GET                        | POST                     | PUT                    | DELETE                 |
   | --------- | -------------------------- | ------------------------ | ---------------------- | ---------------------- |
   | /cars     | Returns a list of all cars | Create a new car         | Bulk update of cars    | Delete all cars        |
   | /cars/711 | Returns a specific car     | Method not allowed (405) | Updates a specific car | Deletes a specific car |

   Do not use verbs in API naming. Avoid the following:

   ```
   /getAllCars
   /createNewCar
   /deleteAllRedCars
   ```

1. ## Use HTTP Methods to Operate on your Resources

   Use URLs to specify the resources you want to work with. Use the HTTP methods to specify what to do with this resource. With the four HTTP methods GET, POST, PUT, DELETE you can provide CRUD functionality (Create, Read, Update, Delete).


    | Operation | Description |
    |--|--|
    | Read | Use GET for reading resources. GET requests never ever change the state of the resource. No side effects. GET is idempotent. The GET method has a read-only semantic. Consequently, you can cache the calls perfectly. |
    | Create | Use POST for creating new resources. |
    | Update | Use PUT for updating existing resources. |
    | Delete | Use DELETE for deleting existing resources. |

1.  ## Use Plural Nouns

    Do not mix up singular and plural nouns. Keep it simple and use only plural nouns for all resources

    ```
    /cars instead of /car
    /users instead of /user
    /products instead of /product
    /settings instead of /setting
    ```

1) ## Version your API

   Make the API Version mandatory and do not release an unversioned API. Use a simple ordinal number and avoid dot notation such as 2.5.

   We are using the URL for the API versioning starting with the letter ‘v’

   `api/v1/{microservice}/{controller}{id}`

1) ## Handle Errors with HTTP status codes

   RESTful Web Service should respond to a client’s request with a suitable HTTP status response code.

   | Status Code | Result                                                                                                         |
   | ----------- | -------------------------------------------------------------------------------------------------------------- |
   | 2xx         | success – everything worked as expected.                                                                       |
   | 4xx         | client error – the client did something wrong (e.g. the client sends an invalid request, or is not authorized) |
   | 5xx         | server error – the server did something wrong (e.g. error while trying to process the request)                 |

   ### Examples:

   - `200` – `OK` – Standard response for successful HTTP requests
   - `201` – `Created` – The request has been fulfilled, resulting in the creation of a new resource.
   - `204` – `No Content` – The resource was successfully deleted
   - `304` – `Not Modified` – The client can use cached data
   - `400` – `Bad Request` – The request was invalid or cannot be served. The exact error should be explained in the error payload. E.g. The JSON is invalid
   - `401` – `Unauthorized` – The request requires user authentication/authorization
   - `403` – `Forbidden` – The request was valid, but the server is refusing action
   - `404` – `Not found` – The requested resource could not be found but may be available in the future
   - `405` – `Method not allowed` - A request method is not supported for the requested resource.
   - `422` – `Unprocessable Entity` – Should be used if the server cannot process the resource, e.g mandatory fields are missing in the payload (body)
   - `500` – `Internal Server Error` – API developers should avoid this error. If an error occurs in the global catch blog, the stack trace should be logged and not returned as response.

1) ## Provide pagination

   It is almost never a good idea to return all resources from an API at once. Consequently, you should provide a pagination mechanism. Use index and count for all bulk read (GET) operations, typically combined with a search order

   `/cars?index={index}&count={count}&order={order}`
