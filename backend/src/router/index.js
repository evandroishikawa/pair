const { Router } = require('express');

const router = Router();

router.get('/', (request, response) => response.json({ message: 'Hello World' }));

module.exports = router;
