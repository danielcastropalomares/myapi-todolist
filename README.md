This code is generated by:
```
npx express-generator --no-view myap_express_generator
cd myapp_express_generator
npm install
DEBUG=myap-express-generator:* npm start
```

For the tests:
```
npm install -D jest supertest
```

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



From: https://www.youtube.com/watch?v=M44umyYPiuo