# M2 IAGL / TIIR - CLE 2018 - 2019 - Application web

## Equipe IAGL :

- Quentin Burg
- Alexia Omietanski
- Naim Harrat

## Equipe TIIR :

- Mehdi Malameli
- Hugo Alder
- Aurélien Sille

## PORTS :

- Web app écoute sur le port 3000
- Serveur REST écoute sur le port 5000

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

## Application web :

Le fichier qui contient la configuration (notamment l'url du serveur REST) est `src/config/index.js`;
On y retrouve les 3 environnements avec l'url du serveur (`SERVER`) ainsi que le port (`PORT_SERVER`).
