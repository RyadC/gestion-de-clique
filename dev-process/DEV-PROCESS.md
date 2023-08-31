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

### Conclusion

J'en suis venu à finir l'intégration en me rapprochant au maximum de la maquette. Je peux désormais commencer côté JS !

## Fonctionnalités

Avant tout, il faut créer notre fichier JS dans lequel sera écrit tout notre code JS puis le lier à notre page HTML.

### Incrémentation du compteur

Le but est de pouvoir incrémenter le compteur en appuyant sur le bouton '+' selon la valeur visible en dessous du bouton.

Je récupère tout d'abord les éléments HTML : 
![Récupération des éléments HTML pour l'incrémentation du compteur](/dev-process/images/HTML%20-%20Nom%20des%20éléments%20HTML.png)

Je peux ensuite mettre un `addEventListener` pour incrémenter le compteur lors du clique sur le bouton.

![addEventListener pour incrémenter le compteur](/dev-process/images/JS%20-addEventListener%20pour%20l'incrémentation.png)

Voilà le résultat :

![Simulation de clique sur le bouton "incrémenter"](/dev-process/video/Incrémentation-du-compteur.gif)

### Décrémentation du compteur

Cette fonctionnalité est identique à la précédente sauf que le but est ici de pouvoir décrémenter le compteur. Le code sera donc identique mais cette fois en soustrayant la valeur.

![Simulation de clique sur le bouton "décrémenter"](/dev-process/video/Decrémentation-du-compteur.gif)


### Remettre le compteur à 0 avec le bouton "Reset"

Il suffit de récupérer l'élément HTML du bouton "Reset" puis de remettre à 0 son contenu lors du clique via un addEventListener :

![addEventListener pour incrémenter le compteur](/dev-process/images/JS%20-%20addEventListener%20du%20reset.png)

Et voici :

![Simulation de clique sur le bouton "reset"](/dev-process/video/Reset-du-compteur.gif)