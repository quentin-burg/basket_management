# M2 IAGL - CLE 2018 - 2019

05/09

Fonctionnalités :

- Ajouter un article
- Supprimer un article
- Valider le panier => facturer
- Générer une facture
- Vider le panier

Définition des modèles de la base de données :

FACTURE :

- Id
- Date
- Numéro de commande

COMMANDE :

- Id (= numéro de commande facture)
- Id article
- Name
- Quantité
- Prix unitaire
- userId

Branches :

- master
- dev
