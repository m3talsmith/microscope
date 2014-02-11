test:
	# ./node_modules/mocha/bin/_mocha test/**/*.js
	./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha --reporter=mocha-istanbul test/**/*.js

.PHONY: test
