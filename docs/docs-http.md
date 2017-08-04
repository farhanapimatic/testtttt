# 

This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.



## Server Configuration for Base URLs

This section provides details on the environments available and lists down the servers in each of the environment. The default environment for this API is set to `production` while the default server is set to `default`.
### Environments

An environment consists of a set of servers with base URL values. The environment can be changed programatically allowing rapid switching between different environments e.g.the user can specify a Production and Testing Environment.The available environments for this API are: 

#### production
The environment comprises of the following servers: 

| Name | Base URL | 
|-----------|-------------|
| default | http://petstore.swagger.io/v2 |
| auth server | http://petstore.swagger.io/oauth |




## Authentication
The type of authentication used by this API is: `OAuth v2 Implicit Grant`



# <a name="api_reference"></a>API Reference

* [pet](#pet)
* [store](#store)
* [user](#user)

## <a name="pet"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "pet") pet


### <a name="update_pet"></a>![Endpoint: ](https://apidocs.io/img/method.png "updatePet") updatePet


**`PUT`** `/pet`

> Update an existing pet



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `pet` |  ``` Required ```  | Pet object that needs to be added to the store | 

 Example 
``` 
{
  "name": "name",
  "photoUrls": [
    "photoUrls"
  ],
  "id": "250",
  "category": {
    "id": "250",
    "name": "name"
  },
  "tags": [
    {
      "id": "250",
      "name": "name"
    }
  ],
  "status": "available"
}
``` 

#### Responses
**200** 



**400** 

> Invalid ID supplied
**404** 

> Pet not found
**405** 

> Validation exception


### <a name="add_pet"></a>![Endpoint: ](https://apidocs.io/img/method.png "addPet") addPet


**`POST`** `/pet`

> Add a new pet to the store



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `pet` |  ``` Required ```  | Pet object that needs to be added to the store | 

 Example 
``` 
{
  "name": "name",
  "photoUrls": [
    "photoUrls"
  ],
  "id": "250",
  "category": {
    "id": "250",
    "name": "name"
  },
  "tags": [
    {
      "id": "250",
      "name": "name"
    }
  ],
  "status": "available"
}
``` 

#### Responses
**200** 



**405** 

> Invalid input


### <a name="find_pets_by_status"></a>![Endpoint: ](https://apidocs.io/img/method.png "findPetsByStatus") findPetsByStatus


**`GET`** `/pet/findByStatus`

> Finds Pets by status



#### Query Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| status | `Status6` |  ``` Required ```  ``` Collection ```  | Status values that need to be considered for filter | `["available"]` | 

#### Responses
**200** 

> successful operation
Body (_Pet_) 
```
[
  {
    "name": "name",
    "photoUrls": [
      "photoUrls"
    ],
    "id": "250",
    "category": {
      "id": "250",
      "name": "name"
    },
    "tags": [
      {
        "id": "250",
        "name": "name"
      }
    ],
    "status": "available"
  }
]
```


**400** 

> Invalid status value


### <a name="find_pets_by_tags"></a>![Endpoint: ](https://apidocs.io/img/method.png "findPetsByTags") findPetsByTags


**`GET`** `/pet/findByTags`

> Finds Pets by tags



#### Query Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| tags | `string` |  ``` Required ```  ``` Collection ```  | Tags to filter by | `["tags"]` | 

#### Responses
**200** 

> successful operation
Body (_Pet_) 
```
[
  {
    "name": "name",
    "photoUrls": [
      "photoUrls"
    ],
    "id": "250",
    "category": {
      "id": "250",
      "name": "name"
    },
    "tags": [
      {
        "id": "250",
        "name": "name"
      }
    ],
    "status": "available"
  }
]
```


**400** 

> Invalid tag value


### <a name="get_pet_by_id"></a>![Endpoint: ](https://apidocs.io/img/method.png "getPetById") getPetById


**`GET`** `/pet/{petId}`

> Find pet by ID



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| petId | `long` |  ``` Required ```  | ID of pet to return | `250` | 

#### Responses
**200** 

> successful operation
Body (_Pet_) 
```
{
  "name": "name",
  "photoUrls": [
    "photoUrls"
  ],
  "id": "250",
  "category": {
    "id": "250",
    "name": "name"
  },
  "tags": [
    {
      "id": "250",
      "name": "name"
    }
  ],
  "status": "available"
}
```


**400** 

> Invalid ID supplied
**404** 

> Pet not found


### <a name="update_pet_with_form"></a>![Endpoint: ](https://apidocs.io/img/method.png "updatePetWithForm") updatePetWithForm


**`POST`** `/pet/{petId}`

> Updates a pet in the store with form data



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| petId | `long` |  ``` Required ```  | ID of pet that needs to be updated | `86` | 

#### Request Headers
>Content-Type=application/x-www-form-urlencoded;

#### Request Body
Url Encoded

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| name | `string` |  ``` Optional ```  | Updated name of the pet | `"name"` | 
| status | `string` |  ``` Optional ```  | Updated status of the pet | `"status"` | 

#### Responses
**200** 



**405** 

> Invalid input


### <a name="delete_pet"></a>![Endpoint: ](https://apidocs.io/img/method.png "deletePet") deletePet


**`DELETE`** `/pet/{petId}`

> Deletes a pet



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| petId | `long` |  ``` Required ```  | Pet id to delete | `86` | 

#### Request Headers
>api_key="api_key";

#### Responses
**200** 



**400** 

> Invalid ID supplied
**404** 

> Pet not found


### <a name="upload_file"></a>![Endpoint: ](https://apidocs.io/img/method.png "uploadFile") uploadFile


**`POST`** `/pet/{petId}/uploadImage`

> uploads an image



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| petId | `long` |  ``` Required ```  | ID of pet to update | `86` | 

#### Request Headers
>Content-Type=multipart/form-data;

#### Request Body
Multipart Form Data

| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| additionalMetadata | `string` |  ``` Optional ```  | Additional data to pass to server | `"additionalMetadata"` | 
| file | `file` |  ``` Optional ```  | file to upload | `` | 

#### Responses
**200** 

> successful operation
Body (_ApiResponse_) 
```
{
  "code": 86,
  "type": "type",
  "message": "message"
}
```


[Back to API Reference](#api_reference)

## <a name="store"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "store") store


### <a name="get_inventory"></a>![Endpoint: ](https://apidocs.io/img/method.png "getInventory") getInventory


**`GET`** `/store/inventory`

> Returns pet inventories by status



#### Responses
**200** 

> successful operation
Body (_number_) 
```
86
```


### <a name="place_order"></a>![Endpoint: ](https://apidocs.io/img/method.png "placeOrder") placeOrder


**`POST`** `/store/order`

> *Tags:*  ``` Skips Authentication ``` 

> Place an order for a pet



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `order` |  ``` Required ```  | order placed for purchasing the pet | 

 Example 
``` 
{
  "id": "86",
  "petId": "86",
  "quantity": 86,
  "shipDate": "2017-08-04T06:59:02.103764Z",
  "status": "placed",
  "complete": false
}
``` 

#### Responses
**200** 

> successful operation
Body (_Order_) 
```
{
  "id": "86",
  "petId": "86",
  "quantity": 86,
  "shipDate": "2017-08-04T06:59:02.103764Z",
  "status": "placed",
  "complete": false
}
```


**400** 

> Invalid Order


### <a name="get_order_by_id"></a>![Endpoint: ](https://apidocs.io/img/method.png "getOrderById") getOrderById


**`GET`** `/store/order/{orderId}`

> *Tags:*  ``` Skips Authentication ``` 

> Find purchase order by ID



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| orderId | `long` |  ``` Required ```  | ID of pet that needs to be fetched | `86` | 

#### Responses
**200** 

> successful operation
Body (_Order_) 
```
{
  "id": "86",
  "petId": "86",
  "quantity": 86,
  "shipDate": "2017-08-04T06:59:02.103764Z",
  "status": "placed",
  "complete": false
}
```


**400** 

> Invalid ID supplied
**404** 

> Order not found


### <a name="delete_order"></a>![Endpoint: ](https://apidocs.io/img/method.png "deleteOrder") deleteOrder


**`DELETE`** `/store/order/{orderId}`

> *Tags:*  ``` Skips Authentication ``` 

> Delete purchase order by ID



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| orderId | `long` |  ``` Required ```  | ID of the order that needs to be deleted | `86` | 

#### Responses
**200** 



**400** 

> Invalid ID supplied
**404** 

> Order not found


[Back to API Reference](#api_reference)

## <a name="user"></a>![Endpoint Group: ](https://apidocs.io/img/class.png "user") user


### <a name="create_user"></a>![Endpoint: ](https://apidocs.io/img/method.png "createUser") createUser


**`POST`** `/user`

> *Tags:*  ``` Skips Authentication ``` 

> Create user



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `user` |  ``` Required ```  | Created user object | 

 Example 
``` 
{
  "id": "86",
  "username": "username",
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email",
  "password": "password",
  "phone": "phone",
  "userStatus": 86
}
``` 

#### Responses
**200** 



**Default** 

> successful operation


### <a name="create_users_with_array_input"></a>![Endpoint: ](https://apidocs.io/img/method.png "createUsersWithArrayInput") createUsersWithArrayInput


**`POST`** `/user/createWithArray`

> *Tags:*  ``` Skips Authentication ``` 

> Creates list of users with given input array



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `user` |  ``` Required ```  ``` Collection ```  | List of user object | 

 Example 
``` 
[
  {
    "id": "86",
    "username": "username",
    "firstName": "firstName",
    "lastName": "lastName",
    "email": "email",
    "password": "password",
    "phone": "phone",
    "userStatus": 86
  }
]
``` 

#### Responses
**200** 



**Default** 

> successful operation


### <a name="create_users_with_list_input"></a>![Endpoint: ](https://apidocs.io/img/method.png "createUsersWithListInput") createUsersWithListInput


**`POST`** `/user/createWithList`

> *Tags:*  ``` Skips Authentication ``` 

> Creates list of users with given input array



#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `user` |  ``` Required ```  ``` Collection ```  | List of user object | 

 Example 
``` 
[
  {
    "id": "86",
    "username": "username",
    "firstName": "firstName",
    "lastName": "lastName",
    "email": "email",
    "password": "password",
    "phone": "phone",
    "userStatus": 86
  }
]
``` 

#### Responses
**200** 



**Default** 

> successful operation


### <a name="login_user"></a>![Endpoint: ](https://apidocs.io/img/method.png "loginUser") loginUser


**`GET`** `/user/login`

> *Tags:*  ``` Skips Authentication ``` 

> Logs user into the system



#### Query Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| username | `string` |  ``` Required ```  | The user name for login | `"username"` | 
| password | `string` |  ``` Required ```  | The password for login in clear text | `"password"` | 

#### Responses
**200** 

> successful operation
Body (_string_) 
```
"body"
```


**400** 

> Invalid username/password supplied


### <a name="logout_user"></a>![Endpoint: ](https://apidocs.io/img/method.png "logoutUser") logoutUser


**`GET`** `/user/logout`

> *Tags:*  ``` Skips Authentication ``` 

> Logs out current logged in user session



#### Responses
**200** 



**Default** 

> successful operation


### <a name="get_user_by_name"></a>![Endpoint: ](https://apidocs.io/img/method.png "getUserByName") getUserByName


**`GET`** `/user/{username}`

> *Tags:*  ``` Skips Authentication ``` 

> Get user by user name



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| username | `string` |  ``` Required ```  | The name that needs to be fetched. Use user1 for testing. | `"username"` | 

#### Responses
**200** 

> successful operation
Body (_User_) 
```
{
  "id": "86",
  "username": "username",
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email",
  "password": "password",
  "phone": "phone",
  "userStatus": 86
}
```


**400** 

> Invalid username supplied
**404** 

> User not found


### <a name="update_user"></a>![Endpoint: ](https://apidocs.io/img/method.png "updateUser") updateUser


**`PUT`** `/user/{username}`

> *Tags:*  ``` Skips Authentication ``` 

> Updated user



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| username | `string` |  ``` Required ```  | name that need to be updated | `"username"` | 

#### Request Headers
>Accept=application/json;
>Content-Type=application/json;

#### Request Body
Raw 

|  Type | Tags | Description |
| ------| ---- |-------------| 
| `user` |  ``` Required ```  | Updated user object | 

 Example 
``` 
{
  "id": "86",
  "username": "username",
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email",
  "password": "password",
  "phone": "phone",
  "userStatus": 86
}
``` 

#### Responses
**200** 



**400** 

> Invalid user supplied
**404** 

> User not found


### <a name="delete_user"></a>![Endpoint: ](https://apidocs.io/img/method.png "deleteUser") deleteUser


**`DELETE`** `/user/{username}`

> *Tags:*  ``` Skips Authentication ``` 

> Delete user



#### Path Parameters
| Parameter | Type | Tags | Description | Example |
|-----------|------| ---- |-------------| ------- |
| username | `string` |  ``` Required ```  | The name that needs to be deleted | `"username"` | 

#### Responses
**200** 



**400** 

> Invalid username supplied
**404** 

> User not found


[Back to API Reference](#api_reference)

