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

## PORTS :

- app listen on port 3000
- server API listen on port 5000

## Pour démarrer le server en mode "dev":

- npm run dev:server

# Info Tests :

- https://hackernoon.com/api-testing-with-jest-d1ab74005c0a

# WORKFLOW GIT :

master <------ test <------ dev -------> someBranch

## Explications :

- la branche master est la branche de production. Il est interdit de push directement dessus (sauf pour hotfix critique).
  Les modifications de la branche master seront apportées par la branche test, une fois que les différents tests seront passés et validés.

- la branche test est la branche de pré-production. Il est interdit de push directement dessus.
  Cette branche sert pour les TIIR pour exécuter les différents tests. Elle sera déployé sur le serveur de test.

- la branche dev est la branche de développement. C'est à partir de cette branche que les IAGL tirent une branche pour développer la feature. Une fois terminée, testée localement, ils mergent la branche dans dev. On refait des tests en dev pour identifier potentiellement des régressions. Une fois les tests OK, on peut merger dev dans test.

# Commandes npm :

- npm install : installe toutes les dépendances du projet. A exécuter après un pull pour prévenir tout changement de dépendances.

- npm run build : génère un build de l'application dans le bon environnement (production ou preprod). Le dossier de build généré est `dist` pour l'app frontend et `build` pour le serveur.

- npm run test : permet d'exécuter les tests du projet.

- npm run start:"environnement" (ou npm start) : permet d'exécuter l'app buildée (donc qui se trouve dans `dist` ou `build`) dans le bon environnement (production ou preprod)

- npm run dev : permet d'exécuter l'app dans un contexte de développement (permet le hot reload par exemple)

# Fichiers de configuration :

## Serveur :

Le fichier de configuration pour le serveur se trouve dans le dossier `src/config/index.js`.

// TODO
UTILISER LA VARIABLE d'environnement ENV
// TODO

## Application web :

// TODO
