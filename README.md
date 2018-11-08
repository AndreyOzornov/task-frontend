# Frontend Task

## prerequisites
######use command to setup project:

npm install -g json-server concurrently

(it will connect to test server with database, cause you don't have backend project)


## task
There is Rest Endpoint in Real Backend:

public ResponseEntity<List<Smartwatch>> getAllSmartwatches(@RequestParam(value = "showOwnerLess"))

you need to create the possibility to choose 3 options in frontend and send it to backend:

1) To Get Smartwatches with only null owners;

2) To Get Smartwatches with only not null owners;

3) To Get Smartwatches with all owners;
