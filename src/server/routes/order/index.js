import express from 'express';
import { Order } from 'server/models';
// Setup routes with express

const apiRoutes = express.Router();
apiRoutes.post('/', (req, res, next) => {
  // Need all field for create nex entry
  const { articleId, nom, quantite, prixUnitaire, userId } = req.body;
  Order.create({
    articleId,
    nom,
    quantite,
    prixUnitaire,
    userId,
  })
    .then(order => {
      return res.status(200).send({
        success : true,
        msg     : 'Order created',
        order,
      });
    })
    .catch(next);
});

export default apiRoutes;
