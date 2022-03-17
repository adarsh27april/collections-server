## Collections Server

Server of the Collections Project.


After cloning the Project, run the following commands in terminal at the root location of the project.

`Linux`
```bash
touch .env
nano .env
```
then paste the following in there
```env
client_port=8430

mongoURI=mongodb://localhost:27017/collections
```
`mongoURI=****` place here the URI of the mongoDB Database.

