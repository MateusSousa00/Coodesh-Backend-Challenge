include .env

.PHONY: up

#inicializa os containers
up:
	docker-compose up -d

.PHONY: down

#derruba os containers
down:
	docker-compose down

.PHONY: logs

#verifica os logs dos containers
logs:
	docker-compose logs -f