<!-- TODO: AUTH kısmında üye kaydı olurken rol giriliyor. bu saçma, girilmemeli sıkıntı çıkabilir. insanlar farklı amaçlarla kaydolaiblr -->

## API Reference

(POST methods are closed for use. However, it will work correctly when you run it on your computer)

### API Token

It is required to include `X-Auth-Token` in the header for all requests.
| Header | Type | Description |
| :-------- | :------- | :------------------------- |
| `X-Auth-Token` | `string` | **required**. Your api token |

### Supplements

#### Fetch All Supplements

```http
  GET /api/supplement
```

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/supplement/
```

##### Axios Usage

```js
axios
  .get("https://vitamins-and-supplements.vercel.app/api/supplement/", {
    headers: { "X-Auth-Token": YOUR_API_KEY },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Fetch Supplements by Tag

```http
  GET /api/supplement/:tag
```

| Parameter | Type     | Description                                            |
| :-------- | :------- | :----------------------------------------------------- |
| `tag`     | `string` | **required**. Tag information of the item to be called |

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/supplement/tag

```

##### Axios Usage

```js
axios
  .get("https://vitamins-and-supplements.vercel.app/api/supplement/tag", {
    headers: { "X-Auth-Token": YOUR_API_KEY },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Create Supplement

_post requests are unavailable_

```http
  POST /api/supplement/create
```

| Body             | Type       |
| :--------------- | :--------- |
| `name`           | `string`   |
| `rating`         | `number`   |
| `recommendation` | `string`   |
| `tags`           | `string[]` |
| `benefits`       | `string[]` |
| `whoShouldUse`   | `string[]` |
| `dose`           | `string`   |
| `timing`         | `string`   |
| `suggestions`    | `string[]` |

##### cURL Usage
```bash
curl -X POST -H "Content-Type: application/json" -H "X-Auth-Token: YOUR_API_KEY" -d '{YOUR_BODY_VALUES}' https://vitamins-and-supplements.vercel.app/api/supplement/create
```

##### Axios Usage
```js
axios
  .post(
    "https://vitamins-and-supplements.vercel.app/api/supplement/create",
    {
      YOUR_BODY_VALUES,
    },
    { headers: { "X-Auth-Token": YOUR_API_KEY } }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Update Supplement

_post requests are unavailable_

```http
  PUT /api/supplement/update?name=
```

| Query String | Type     | Description                                             |
| :----------- | :------- | :------------------------------------------------------ |
| `name`       | `string` | **required**. The `name` value of the item to be updated |

##### cURL Usage
```bash
curl -X PUT -H "Content-Type: application/json" -H "X-Auth-Token: YOUR_API_KEY" -d '{"updatedValue": "Updated description"}' https://vitamins-and-supplements.vercel.app/api/supplement/update?name=supplement
```
##### Axios Usage
```js
axios
  .put(
    "ttps://vitamins-and-supplements.vercel.app/api/supplement/update?name=supplement",
    {
      updatedValue: "Updated description",
    },
    { headers: { "X-Auth-Token": YOUR_API_KEY } }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Delete Supplement

_post requests are unavailable_

```http
  DELETE /api/supplement/delete?name=
```
| Query String | Type     | Description                                             |
| :----------- | :------- | :------------------------------------------------------ |
| `name`       | `string` | **required**. The `name` value of the item to be deleted |

##### cURL Usage
```bash
curl -X DELETE -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/supplement/delete?name=supplement
```
##### Axios Usage
```js
axios
  .delete(
    "https://vitamins-and-supplements.vercel.app/api/supplement/delete?name=supplement",
    {
      headers: { "X-Auth-Token": YOUR_API_KEY },
    }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### Vitamins

#### Fetch All Vitamins

```http
  GET /api/vitamin
```

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/vitamin/
```

##### Axios Usage

```js
axios
  .get("https://vitamins-and-supplements.vercel.app/api/vitamin/", {
    headers: { "X-Auth-Token": YOUR_API_KEY },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Fetch Vitamins by Tag

```http
  GET /api/vitamin/:tag
```

| Parameter | Type     | Description                                            |
| :-------- | :------- | :----------------------------------------------------- |
| `tag`     | `string` | **required**. Tag information of the item to be called |

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/vitamin/tag

```

##### Axios Usage

```js
axios
  .get("https://vitamins-and-supplements.vercel.app/api/vitamin/tag", {
    headers: { "X-Auth-Token": YOUR_API_KEY },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Create Vitamin

_post requests are unavailable_

```http
  POST /api/vitamin/create
```

| Body             | Type       |
| :--------------- | :--------- |
| `name`           | `string`   |
| `rating`         | `number`   |
| `recommendation` | `string`   |
| `tags`           | `string[]` |
| `benefits`       | `string[]` |
| `whoShouldUse`   | `string[]` |
| `dose`           | `string`   |
| `timing`         | `string`   |
| `suggestions`    | `string[]` |

##### cURL Usage
```bash
curl -X POST -H "Content-Type: application/json" -H "X-Auth-Token: YOUR_API_KEY" -d '{YOUR_BODY_VALUES}' https://vitamins-and-supplements.vercel.app/api/vitamin/create
```
##### Axios Usage
```js
axios
  .post(
    "https://vitamins-and-supplements.vercel.app/api/vitamin/create",
    {
      YOUR_BODY_VALUES,
    },
    { headers: { "X-Auth-Token": YOUR_API_KEY } }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Update Vitamin

_post requests are unavailable_

```http
  PUT /api/vitamin/update?name=
```

| Query String | Type     | Description                                             |
| :----------- | :------- | :------------------------------------------------------ |
| `name`       | `string` | **required**. The `name` value of the item to be called |

##### cURL Usage
```bash
curl -X PUT -H "Content-Type: application/json" -H "X-Auth-Token: YOUR_API_KEY" -d '{"updatedValue": "Updated description"}' https://vitamins-and-supplements.vercel.app/api/vitamin/update?name=vitamin
```
##### Axios Usage
```js
axios
  .put(
    "ttps://vitamins-and-supplements.vercel.app/api/vitamin/update?name=vitamin",
    {
      updatedValue: "Updated description",
    },
    { headers: { "X-Auth-Token": YOUR_API_KEY } }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Delete Vitamin

_post requests are unavailable_

```http
  DELETE /api/vitamin/delete?name=
```

| Query String | Type     | Description                                             |
| :----------- | :------- | :------------------------------------------------------ |
| `name`       | `string` | **required**. The `name` value of the item to be deleted |

##### cURL Usage
```bash
curl -X DELETE -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/vitamin/delete?name=vitamin
```

##### Axios Usage
```js
axios
  .delete(
    "https://vitamins-and-supplements.vercel.app/api/vitamin/delete?name=vitamin",
    {
      headers: { "X-Auth-Token": YOUR_API_KEY },
    }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### Categories

#### Fetch All Categories

```http
  GET /api/category
```

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/category/
```

##### Axios Usage

```js
axios
  .get("https://vitamins-and-supplements.vercel.app/api/category/", {
    headers: { "X-Auth-Token": YOUR_API_KEY },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Fetch All Supplement Categories

```http
  GET /api/category/supplements
```

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/category/supplements/
```

##### Axios Usage

```js
axios
  .get(
    "https://vitamins-and-supplements.vercel.app/api/category/supplements/",
    {
      headers: { "X-Auth-Token": YOUR_API_KEY },
    }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Fetch All Vitamin Categories

```http
  GET /api/category/vitamins
```

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/category/vitamins/
```

##### Axios Usage

```js
axios
  .get("https://vitamins-and-supplements.vercel.app/api/category/vitamins/", {
    headers: { "X-Auth-Token": YOUR_API_KEY },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### Search

#### Search All Supplements

```http
  GET /api/search/supplement?name=
```

| Query String | Type     | Description                                             |
| :----------- | :------- | :------------------------------------------------------ |
| `name`       | `string` | **required**. The `name` value of the item to be called |

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/search/supplement?name=supplement
```

##### Axios Usage

```js
axios
  .get(
    "https://vitamins-and-supplements.vercel.app/api/search/supplement?name=supplement",
    {
      headers: { "X-Auth-Token": YOUR_API_KEY },
    }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

#### Search All Vitamins

```http
  GET /api/search/vitamin?name=
```

| Query String | Type     | Description                                             |
| :----------- | :------- | :------------------------------------------------------ |
| `name`       | `string` | **required**. The `name` value of the item to be called |

##### cURL Usage

```bash
curl -X GET -H "X-Auth-Token: YOUR_API_KEY" https://vitamins-and-supplements.vercel.app/api/search/vitamin?name=vitamin
```

##### Axios Usage

```js
axios
  .get(
    "https://vitamins-and-supplements.vercel.app/api/search/vitamin?name=vitamin",
    {
      headers: { "X-Auth-Token": YOUR_API_KEY },
    }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

### Auth

#### Kayıt Oluştur

_post requests are unavailable_

```http
  POST /api/auth/register
```

| Body       | Type     |
| :--------- | :------- |
| `username` | `string` |
| `email`    | `number` |
| `password` | `string` |

##### cURL Usage
```bash
curl -X POST -H "Content-Type: application/json" -H "X-Auth-Token: YOUR_API_KEY" -d '{YOUR_BODY_VALUES}' https://vitamins-and-supplements.vercel.app/api/auth/register
```
##### Axios Usage
```js
axios
  .post(
    "https://vitamins-and-supplements.vercel.app/api/auth/register",
    {
      YOUR_BODY_VALUES,
    },
    { headers: { "X-Auth-Token": YOUR_API_KEY } }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```
