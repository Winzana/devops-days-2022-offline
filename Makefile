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

build-webapp:
	docker build -t ${REGISTRY}${REPOSITORY}/webapp:${TAG} -f docker/webapp/Dockerfile --target webapp --build-arg BUILD_BIN="webapp" .
push-webapp:
	docker push ${REGISTRY}${REPOSITORY}/webapp:${TAG}

deploy:
	kubectl apply -f k8s/knative/yamay/${NAMESPACE}/api-echo.yaml

destroy:
	kubectl delete -f k8s/knative/yamay/${NAMESPACE}/api-echo.yaml
