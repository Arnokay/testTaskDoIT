# testTaskDoIT

### Installation BackEnd

Open your favorite Terminal and run these commands.

```sh
$ cd backend
$ npm i
```

Then create `.env` file with such contents:

```
MONGO_URL=mongodb://localhost/YOUR_DATABASE
MONGO_URL_TEST=mongodb://localhost/YOUR_DATABASE_TEST
JWT_SECRET=YOUR_SECRET
```

Excellent, for start server use command:

```sh
npm run dev
```

### Installation FrontEnd

Open Second Tab and run a couple more commands.

```sh
$ cd frontend
$ npm i
$ ng serve
```

Now everything is ready.
