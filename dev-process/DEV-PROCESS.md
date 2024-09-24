 Gestion de cliques

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

### Refactorisation nécessaire

La prochaine fonctionnalité "Incrémentation et décrémentation du compteur via la zone de cliques" étant proche des fonctionnalités différentes, il était nécessaire et judicieux de refactoriser le code, cela pour appliquer un principe de programmation bien connu <font color="#AB7349">**D.R.Y**</font> (Don't Repeat Yourself).

![Refactorisation du code pour l'incrémentation et la décrémentation](/dev-process/images/JS%20-%20Refactorisation%20du%20code%20incrémenter%20et%20décrémenter.png)


### Incrémentation et décrémentation du compteur via la zone de cliques

La fonctionnalité demandée ici est quelque peu différente. En effet, on demande ici d'agir sur le compteur via de simples cliques soit le clique droit de la souris pour décrémenter et le clique gauche pour incrémenter le compteur. 

#### Clic gauche : incrémenter

Pour l'incrémentation, aucune différence avec le code du bouton :

![Incrémentation via le clic gauche](/dev-process/images/JS%20-%20Incrémentation%20par%20clic%20gauche.png)

#### Clic droit : décrémenter

Pour décrémenter via le clic droit, la situation est un peu différente. Tout d'abord il faut checher l'évènement lié au clic droit. En recherchant sur le [MDN](https://developer.mozilla.org/fr/docs/Web/API/Element#%C3%A9v%C3%A8nements). Les évènements `mousedown`, `mouseup`, `auxclick` et `contextmenu` peuvent être utilisés. Pour fair un choix, il faut réfléchir sur les contraintes de chacun de ces évènements mais aussi de voir s'ils répondent à notre problèmatique.

Lors d'un clic droit, le navigateur ouvre un menu contextuel par défaut. L'affichage de ce menu est gênant et vient rompre le fonctionnement "normal" d'un clic. Ainsi, il s'en va de désactiver ce comportement par défaut en utilisant l'évènement `contextmenu` via la fonction `preventDefault()`. Ainsi, on optera pour cet évènement, sachant égalemnt qu'il s'agit de l'évènement qui nécessite le moins d'écriture de code comparé à d'autres évènements.

![Décrémentation via le clic droit](/dev-process/images/JS%20-%20Décrémentation%20par%20clic%20droit.png)

### BUG ! 🪳

En essayant de factoriser mon code, je me suis rendu compte que mes fonctionnalités ne fonctionnaient plus !😭

Les boutons ne fonctionnaient plus et la page affichait le compteur avec la valeur de 8 et non 12 comme initié dans le HTML. Après quelques recherche 🔍... Le problème venait des fonctions que j'utilisais comme callback :

![Fonctions inc et dec utilisées dans les callbacks](/dev-process/images/JS%20-%20Fonctions%20inc%20et%20dec%20utilisées%20dans%20les%20callbacks.png)

L'erreur ? Les parenthèses utilisées à la suite des fonctions. En effet, utiliser des parenthèses à la suite d'une fonction à pour conséquence d'appeler les fonctions, les exécuter. Ainsi, en chargant la page, les fonctions s'exécutaient et n'étaient plus vraiement des fonctions d'appel. La solution étant d'enlever ces parenthèses pour indiquer à l'interpréteur JS que ces fonctions doivent être utilisées lors du clic seulement.

### Création et affichage d'un message d'erreur lors de la limite atteinte

Le but est d'ajouter un message d'erreur qui devra apparaître lorsque les limites haute et basse seront atteinte puis de faire disparaître le message après 1s.

Il a fallut tout d'abord créer le code HTML du message d'erreur ainsi que le code CSS pour d'une part, styliser cet élément, puis d'une seconde part, styliser la classe qui va nous permettre de faire apparaître le message en cas de limite atteinte.

![Elements HTML du message d'erreur lorsque la limite est atteinte](/dev-process/images/HTML%20-%20Elemnt%20message%20d'erreur.png)

![CSS pour le message d'erreur lorsque la limite est atteinte](/dev-process/images/CSS%20-%20Message%20d'erreur.png)

![Classe CSS pour afficher le message d'erreur lorsque la limite est atteinte](/dev-process/images/CSS%20-%20Classe%20d'affichage%20pour%20le%20message%20d'erreur.png)

Pour se faire, il suffit d'ajouter dynamiquement une classe CSS à l'élément représentant le message d'erreur. Cette classe devra être ajoutée lorsque les limites seront atteintes. On pourra faire disparaître le message en retirant la classe précédemment ajoutée après trois secondes. L'exécution du code JS après un délai dans le navigateur peu se faire avec la méthode setTimeout fourni par l'API DOM sur l'objet global `window` (à noter que nous pouvons directement écrire la méthode sans la précéder de l'objet window. Lorsque l'interpréteur JS rencontre une fonction tel quel, il l'a relie à l'objet global et essaie de l'exécuter ainsi) :

![Code JS pour afficher le message d'erreur lorsque la limite est atteinte et le faire disparaître](/dev-process/images/JS%20-%20Afficher%20le%20message%20d'erreur.png)

Il faut maintenant lier cette fonction aux divers boutons et éléments permettant l'incrémentation et la décrémetation :

![Liaison de la fonction d'affichage du message d'erreur aux éléments d'incrémentation et de décrémentation](/dev-process/images/JS%20-%20Liaison%20de%20la%20fonction%20d'affichage%20du%20message%20d'erreur%20aux%20elements%20d'inc%20et%20de%20dec.png)

### Changer le texte du message d'erreur dynamiquement selon la limite haute ou basse atteinte

Souvent, développer une fonctionnalité nécessite de résoudre plusieurs sous problèmes. 

Le code que j'ai écris permettant d'afficher le message d'erreur n'affiche le message que s'il trouve que la valeur du compteur est égale à la valeur de la limite :

![Code JS montrant l'utilisation de la strict égalité pour afficher le message d'erreur lorsque la limite est atteinte](/dev-process/images/JS%20-%20Afficher%20le%20message%20d'erreur%20strict%20égalité.png)

Le problème est que je peux utiliser des step our incrémenter ou décrémenter mon compteur. C'est-à-dire que je peux augmenter de deux en deux mon compteur. Ainsi, avec une limite haute de 15 et un compteur à 12, si j'augmente de 5, le message d'erreur ne s'affiche pas car mon compteur dépasse la valeur limite et n'est pas égale à la limite :

Pour palier à ce problème, j'ai changer l'égalité strict par `<=` ou `>=` selon la limite. Pour se faire, j'ai crée un bloc d'instruction `switch` qui, selon l'action va effecter la comparaison qu'il faut. Par la même occasion, j'en ai profité pour factoriser le code. Une solution plus simple est certainement possible mais pour l'instant l'essentiel est de résoudre ce problème avec un code maintenable:

![Afficher le message d'erreur selon la limite atteinte](/dev-process/images/JS%20-%20Afficher%20le%20message%20d'erreur%20selon%20la%20limite%20atteinte.png)

Pour revenir à ma fonctionnnalité, voici le code que j'ai pu écrire afin d'afficher dynamiquement le contenu du message :

![Afficher d'un message dynamique](/dev-process/images/JS%20-%20Affichage%20d'un%20message%20dynamique.png)


### Bloquer le compteur à la valeur de la limite lorsque celle-ci est atteinte

Le code est sensiblement le même pour les deux limites. La différence va être sur les comparaisons :

![Atteinte du compteur dès la limite atteinte](/dev-process/images/JS%20-%20Blocage%20du%20compteur%20dès%20la%20limite%20atteinte.png)

### Ajouter un effet au compteur lorsque la limite est atteinte

Nous voulons ajouter un bel effet pour signaler à l'utilisateur que la limite est atteinte. Cet effet consiste à changer la couleur de la valeur du compteur et de le faire "vibrer". Il faut donc ajouter un peu de `CSS` puis d'ajouter la classe `CSS` au compteur dès que la limite est atteinte.

![Effet du compteur lorsque la limite est atteinte](/dev-process/video/JS%20-%20Effet%20compteur.gif)

![Code pour appliquer l'effet au compteur lorsque la limite est atteinte](/dev-process/images/JS%20-%20Code%20effet%20compteur%201.png)
![La fonction pour appliquer l'effet au compteur](/dev-process/images/JS%20-%20Code%20effet%20compteur%202.png)

### Bug 🪳: lorsque la limite basse est supérieure à 0

Je pensais que tout était bon... mais non. En effet, lorsque mon compteur est initialisé à 0 (valeur de départ) et que la valeur basse est supérieur à 0, on s'attend à ce que la valeur du compteur passe de 0 à la valeur de la limite basse directement mais là le compteur s'incrémente de un en un sans prendre en considération cette restriction de limite. Le compteur évolue donc en dehors de sa limite.

![Bug lorsque la limite basse est supérieure à 0](/dev-process/video/JS-Bug-incrémentation-de-0-avec-limite-basse-sup-à-0.gif)

Pour corriger ce comportement, il fallait simplement ajouter une condition venant contrôler si le compteur est inférieur à la limite basse et agir en conséquence.

![Code pour le bug lorsque la limite basse est supérieure à 0](/dev-process/images/JS%20-%20Fix%20bug%20incrémentation%20de%200%20avec%20limite%20basse%20sup%20à%200.png)

### Bug 🪳: lorsque la limite haute est inférieure à la limite basse (impossible !)

Nouvelle surprise lors des tests... Il est possible d'incrémenter la limite basse de sorte à ce que celle-ci soit supérieure à la limite haute ce qui ne devrait pas être possible. Il faudrait donc empêcher cela et (côté UX) ajouter un message d'erreur pour faire comprendre cela à l'utilisateur.

![Résultat après correction du bug lorsque la limite haute est inférieure à la limite basse](/dev-process/video/JS-Bug-incrémentation-de-0-avec-limite-basse-sup-à-0.gif)

### Bug 🪳: lorsqu'on veut modifier la limite par clavier

Avec le code actuel, il n'est pas possible de modifier la valeur directement par le clavier si le 1er chiffre du nombre est inférieur à la limite. Ce problème provient de l'écouteur utilisé. En effet, j'utilise ici l'évènement `input` qui écoute le moindre changement effectué sur la valeur de l'input sans même avoir besoin de valider (en appuyant sur la touche ENTREE par exemple). Il faudrait qu'on est la possibilité de changer la valeur sans que le navigateur écoute cela avant que l'on termine notre action.

Pour ce faire, il faut simplement changer l'écouteur avec l'évènement `input` par `change`. Cet évènement ne se déclenche que lorsque la saisie est validée. 

![Résultat après correction du bug lorsqu'on veut modifier la limite par clavier](/dev-process/video/JS-Bug-changer-la-limite-max-par-clavier-par-une-valeur-commencant-par-un-chiffre-inf-à-la-limite.gif)


### Bug 🪳: Dysfonctionnement du reset

Le réglage de ces bugs ont créés un effet de bord. Pour améilorer mon code, j'ai créé une variable global qui reflète la valeur de mon compteur et que j'utilise un peu partout. En cliquant sur le bouton Reset, je remets le compteur à 0 en assignant la valeur en dur. Ainsi le compteur se remet à 0 mais lorsque j'incrémente mon compteur, il prend comme valeur de départ la valeur avant le reset.

![Résultat après correction du bug lorsqu'on veut modifier la limite par clavier](/dev-process/video/JS-Bug-mauvais-reset.gif)

Il faut donc que je réinitialise ma variable globale à 0 étant donné que c'est elle qui est utilisé pour les autres boutons puis que j'affecte cette variable au compteur lors du reset. 

<!-- video -->

Je dois également enlever la classe utilisée en cas d'erreur si j'effectue un reset au même titre que la valeur du compteur :

<!-- video -->



!-- video -->