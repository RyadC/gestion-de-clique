# Gestion de cliques

Le but de ce fichier est de montrer les différentes étapes de développement, fonctionnalité par fonctionnalité, étape par étape. Il à également pour but d'exposer les problèmes rencontrés au fur et à mesure de l'avancement du projet ainsi que les moyens mis en oeuvre pour les résoudre. 

## Intégration

La première étape du projet est de prendre connaissance du projet ainsi que de la maquette. Après avoir analysé cette dernière je dois commencé à l'implémenter en HTML et CSS tout en ayant à l'esprit le code JS éventuel qui va être mis en place. En effet, écrire du HTML et CSS sans réfléchir au JS qui sera écrit pour manipuler le DOM peut causer problème et engendrer des coûts de maintenance plus ou moins élevé.

### Création des branches de développement

J'ai rajouté les dossiers *integration* et *assets* contenant les divers ressources dont j'ai besoin pour commencer l'integration de la maquette.

Ensuite, j'ai pu créer une branche de développement dédiée à l'intégration sur laquelle j'ai crée une branche dédiée au développement du HTML.

![La branche html-integration sur GITLENS](./images/Git%20-%20Branche%20html-integration.png)

### Structure de base HTML

J'ai commencé à travailler sur le code HTML, à y faire le squelette principal selon ce que j'ai compris de la maquette. Evidemment, iml est fort probable que j'en vienne à modifier certains éléments lorsque je vais attaquer le CSS et le JS mais le but et d'y réfléchir afin de modifier au moins la structure HTML.

Voulant travailler avec SCSS, j'ai écris les noms de classe selon la convention de nommage BIM ce qui me permettra d'optimiser le temps de code sur le css en nestant les éléments dans le fichier scss. (image)

### Structure de base CSS

Après avoir créé la structure HTML, j'ai créé une branche de développement pour le CSS.

Concernant mon arborescence de fichiers, je me suis basé sur l'architecture 7-1.

![Architecture 7-1 SCSS](./images/SCSS%20-%20Architecture%207-1.png)

En écrivant le CSS, je me suis rendu compte que certains noms de classe n'étaient pas pertinents, je les ai donc changés. J'ai également changé mes entrées de chiffres en input afin que ces champs soient directement modifiables par l'utilisateur.

Etant donné que j'ai modifié mon fichier HTML, un bon git merge pour rassembler le tout. 
