# Parking API

## Requirements
* Have docker installed
## Installation
Use docker-compose to build the container

```bash
  docker-compose up -d --build
```
 <br />
 
Access to the list of running containers to obtain the `CONTAINER ID`


```````bash
  docker ps
```````
 <br />
You will get a table like the following one:

| CONTAINER ID | IMAGE              | COMMAND                | CREATED       | STATUS       | PORTS                   | NAMES                  |
|--------------|--------------------|------------------------|---------------|--------------|-------------------------|------------------------|
| 013aa1a0daac | parking-api-server | "docker-entrypoint.s…" | 5 minutes ago | Up 5 minutes | 0.0.0.0:14000->4000/tcp | parking-api-server-1   |
| 16b093195c86 | postgres:15.2      | "docker-entrypoint.s…" | 5 minutes ago | Up 5 minutes | 0.0.0.0:15432->5432/tcp | parking-api-postgres-1 |

<br /> <br />

Copy the CONTAINER ID of the parking-api-server and use it in the next command <br />
```````bash
  docker logs 013aa1a0daac --follow
```````

With that you will get the logs! <br />

```text
> parking-api@1.0.0 start
> node ./build

🚀  Server ready at: http://localhost:4000/
```
## Run project 

Make sure you have a .env file with the next environment variables:

```
DB_URL=postgresql://postgres:password@localhost:5432/parking
LOCAL_PORT=4000
MAX_SPOTS_ALLOWED=1500
MIN_SPOTS_ALLOWED=50
JWT_SECRET=52f29867439f77a04459002a4bc7ffb0df5fb3fea1a2e3deea9f1bc0a91e96c0
```

and run the project with the script

```````bash
  npm run dev
```````
