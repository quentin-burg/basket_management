import express from 'express';

import orderRoutes from 'server/routes/order';

// bundle our routes for API
const apiRoutes = express.Router();
apiRoutes.use('/order', orderRoutes);

export default apiRoutes;
