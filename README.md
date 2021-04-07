# Endpoints de Estado

## Registrar um estado

### POST `/states/register`

#### request - body:

```
{
	"name": "Paraná",
	"abbreviation": "pr"
}
```

O campo de abreviação espera exatamente dois caracteres e eles serão registrados sempre em caixas altas.

#### resposta:

```
{
  "state": {
    "createdAt": "2021-04-07T12:16:38.831Z",
    "updatedAt": "2021-04-07T12:16:38.831Z",
    "_id": "606da2b9e48f1f3fadd99fd7",
    "name": "Paraná",
    "abbreviation": "PR"
  }
}
```

## Listar todos os estados

### GET `/states/list`

#### resposta:

```
{
  "states": [
    {
      "createdAt": "2021-04-06T16:37:47.556Z",
      "updatedAt": "2021-04-06T16:37:47.556Z",
      "_id": "606c8e84429ced2443e1004a",
      "name": "Santa Catarina",
      "abbreviation": "SC",
    },
    {
      "createdAt": "2021-04-06T20:08:26.002Z",
      "updatedAt": "2021-04-06T20:08:26.002Z",
      "_id": "606cbfdf2ba8f4315c5bccd4",
      "name": "São Paulo",
      "abbreviation": "SP"
    },
    ...
  ]
}
```

## Pegar um estado

### GET `/states/get/?`<query_parameters>

É possível pegar um estado pela sua abreviação (`abbreviation`), nome (`name`) e pelo seu id (`_id`), através dos query parameters.

#### url de request: `/states/get/?abbreviation=SP`

#### resposta:

```
{
  "state": {
    "createdAt": "2021-04-06T20:08:26.002Z",
    "updatedAt": "2021-04-06T20:08:26.002Z",
    "_id": "606cbfdf2ba8f4315c5bccd4",
    "name": "São Paulo",
    "abbreviation": "SP"
  }
}
```

## Editar um estado

### PUT `/states/edit/:id`

#### request - body:

```
{
	"name": "SãoPaulo",
	"abbreviation": "SP"
}
```

#### resposta:

```
{
  "state": {
    "createdAt": "2021-04-06T20:08:26.002Z",
    "updatedAt": "2021-04-07T12:39:43.548Z",
    "_id": "606cbfdf2ba8f4315c5bccd4",
    "name": "SãoPaulo",
    "abbreviation": "SP"
  }
}
```

## Deletar um estado

### DELETE `/states/edit/:id`

#### resposta:

```
{
  "deleted": {
    "createdAt": "2021-04-06T19:30:09.414Z",
    "updatedAt": "2021-04-06T19:30:09.414Z",
    "_id": "606cb6f65796d926acbfef04",
    "name": "São Paulo",
    "abbreviation": "SP"
  }
}
```

# Endpoints de Cidade

## Registrar uma cidade

### POST `/cities/register`

#### request - body:

```
{
	"name": "Florianopolis",
	"stateId": "606c8e84429ced2443e1004a"
}
```

#### resposta:

```
{
  "city": {
    "createdAt": "2021-04-07T12:16:38.826Z",
    "updatedAt": "2021-04-07T12:16:38.826Z",
    "_id": "606daa02e48f1f3fadd99fd8",
    "name": "Florianopolis",
    "stateId": "606c8e84429ced2443e1004a"
  }
}
```

## Listar as cidades

### GET `/cities/list/?state=`<id_do_estado>

Neste endpoint o `state` é um query parameter opcional. É usado para reunir todas as cidades de um determinado estado. Caso omitido, obtém-se todas as cidades armazenadas no banco de dados.

#### resposta:

```
{
  "cities": [
    {
      "createdAt": "2021-04-06T20:15:11.134Z",
      "updatedAt": "2021-04-06T20:15:11.134Z",
      "_id": "606cc152f6bda233de52ed24",
      "name": "Capital",
      "stateId": "606cbfdf2ba8f4315c5bccd4"
    },
    {
      "createdAt": "2021-04-06T22:01:23.068Z",
      "updatedAt": "2021-04-06T22:01:23.068Z",
      "_id": "606cda6e5f368a4c9010ff0c",
      "name": "Caraguatatuba",
      "stateId": "606cbfdf2ba8f4315c5bccd4"
    },
    ...
  ]
}
```

## Pegar uma cidade

### PUT `/cities/get/?`<query_parameters>

É possível pegar uma cidade pelo seu nome (`name`) e pelo seu id (`_id`), através dos query parameters.

#### url de request: `/cities/get/?name=Ubatuba`

#### resposta:

```
{
  "city": {
    "createdAt": "2021-04-06T22:06:23.144Z",
    "updatedAt": "2021-04-06T22:06:23.144Z",
    "_id": "606cdb6699a84f4e02a79c88",
    "name": "Ubatuba",
    "stateId": "606cbfdf2ba8f4315c5bccd4"
  }
}
```

## Editar uma cidade

### PUT `/cities/edit/:id`

#### request - body:

```
{
	"name": "Florianópolis",
	"stateId": "606c8e84429ced2443e1004a"
}
```

#### resposta:

```
{
  "city": {
    "createdAt": "2021-04-07T12:16:38.826Z",
    "updatedAt": "2021-04-07T13:15:57.806Z",
    "_id": "606daa02e48f1f3fadd99fd8",
    "name": "Florianópolis",
    "stateId": "606c8e84429ced2443e1004a"
  }
}
```

## Deletar uma cidade

### DELETE `/cities/delete/:id`

#### resposta:

```
{
  "deleted": {
    "createdAt": "2021-04-06T20:15:11.134Z",
    "updatedAt": "2021-04-06T20:15:11.134Z",
    "_id": "606cc152f6bda233de52ed24",
    "name": "Capital",
    "stateId": "606cbfdf2ba8f4315c5bccd4"
  }
}
```
