.PHONY: deploy-beta
deploy-beta:
	# replace build favor and output
	sed -i "" -e "s:\.dev\.:.beta.:g" $(shell ls ./dist/app.*.js)

.PHONY: deploy-prod
deploy-prod:
	sed -i "" -e "s:\.dev\.:.prod.:g" $(shell ls ./dist/app.*.js)
