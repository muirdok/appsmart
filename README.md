# appsmart

# Install
```
cd appsmart/
npm init  
npm install cypress --save-dev  
npm install cypress-image-snapshot --save-dev
npm install @nuintun/qrcode
```

# RUN

    ./node_modules/cypress/bin/cypress run -record --spec "./cypress/integration/tests/smoke.js"
    ./node_modules/cypress/bin/cypress run -record --spec "./cypress/integration/tests/functional.js"

# Open

    ./node_modules/cypress/bin/cypress open
