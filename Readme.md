## 1. Create Database

```shell
myuser@localhost:~/soft-jobs-server$ psql < ./config/db/schema.sql myuser
```

## 2. Configure Environment

1. Copy `.env.example` to `.env`
2. Set the variables values in `.env` file

## 3. Run API

```shell
myuser@localhost:~/soft-jobs-server$ npm run dev
```
