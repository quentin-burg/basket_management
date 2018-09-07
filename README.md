# M2 IAGL - CLE 2018 - 2019

## Fonctionnalités :

- Ajouter un article
- Supprimer un article
- Valider le panier => facturer
- Générer une facture
- Vider le panier

## Définition des modèles de la base de données :

### FACTURE :

- Id
- Date
- Numéro de commande

### COMMANDE :

- Id (= numéro de commande facture)
- Id article
- Name
- Quantité
- Prix unitaire
- userId

## Branches :

- master
- dev

## Utilisation de styled-components :

Pour écrire le css, nous allons utiliser la librairie `styled-components`. Cela permet de declarer un component avec le style que l'on veut lui donner et l'utiliser dans la methode `render` sans avoir à faire d'import de quoi que ce soit.
NB sur React : il faut obligatoirement avoir une balise qui englobe le reste dans la methode render (souvent un styled component appelé Container).

## Pour développer l'UI :

J'ai repris la façon de faire que j'utilise tous les jours c'est à dire pour créer un nouveau component :

- créer un nouveau dossier dans `src/components` avec le nom du component en minuscule
- créer un fichier `index.js` qui contiendra le code
  Comme ça, avec le plugin `babel-plugin-module-resolver` de babel, on peut importer directement le "nom du dossier" sans se préoccuper du chemin. Et comme par défaut le fichier importer en JS est index.js, c'est simple à écrire et à lire.

## Pour générer un build et run la version build :

- npm run build
- npm run server

## To implements API

https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

## TODO : Mettre Prettier et Eslint pour aider à l'écriture et formattage du code JS
