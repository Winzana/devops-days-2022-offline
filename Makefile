include .env
export $(shell sed 's/=.*//' .env)

default: start

up:
	docker-compose -f docker-compose.yml up -d

stop:
	docker-compose -f docker-compose.yml stop

purge:
	docker-compose -f docker-compose.yml stop && docker-compose -f docker-compose.yml rm -fv

restart:
	$(MAKE) stop
	$(MAKE) up

build:
	$(MAKE) build-analytics

push:
	$(MAKE) push-auth

build-and-push:
	$(MAKE) build
	$(MAKE) push

build-api:
	docker build --platform linux/amd64 -t ${REGISTRY}${REPOSITORY}/api:${TAG} -f docker/api/Dockerfile --target node_dist --build-arg BUILD_BIN="api" .
push-api:
	docker push ${REGISTRY}${REPOSITORY}/api:${TAG}

build-website:
	docker build --platform linux/amd64 -t ${REGISTRY}${REPOSITORY}/website:${TAG} -f docker/website/Dockerfile --target website --build-arg BUILD_BIN="website" .
push-website:
	docker push ${REGISTRY}${REPOSITORY}/website:${TAG}

deploy-api:
	kubectl apply -f deploy/services/api.yml

destroy-api:
	kubectl delete -f deploy/services/api.yml

deploy-website:
	kubectl apply -f deploy/services/website.yml

destroy-website:
	kubectl delete -f deploy/services/website.yml
