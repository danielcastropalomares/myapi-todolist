# How to use

To get all todos:
```
curl -v localhost:3000/todos/ | jq
```
To get a to do by id:
```
curl -v localhost:3000/todos/63239c566f939a3829044fe3
```

To get a to do by name 
```
curl -v localhost:3000/todos/name/play%20football
```

To post a new to do:
```
curl -H 'Content-Type: application/json' -d '{"name":"play tenis"}' -X POST http://localhost:3000/todos
```

# How to execute locally with docker compose

The variable of DATABASE_URL is defined inside of file docker-compose.yml. The default option is configured to container mongodb-compose.

```
docker-compose up -d --build
```

After this you can acces trough localhost via 80 port:
```
curl -v localhost/todos/ 
```


From: https://www.youtube.com/watch?v=M44umyYPiuo
