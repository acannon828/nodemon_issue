start:
	docker-compose up --build

shell:
	# Just for convenience when debugging
	docker-compose exec server sh

copy:
	# Trigger the nodemon reload (or at least try to), by copying index.js into the
	# directory watched by nodemon
	docker-compose exec server cp ./src/index.js ./bin/
