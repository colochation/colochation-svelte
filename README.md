# 🐈 Colochation - front

![git_cat](https://media.giphy.com/media/129NVCr1UfsGTS/giphy.gif)

Colochation est une web application qui permet d'avoir une vue d'ensemble sur la vie de sa colocation.

Ce repository est le front utilisant [Svelte](https://svelte.dev/) en TypeScript.

## Installation 🛌

Le front devra communiquer avec l'api REST de colochation.
Assurez vous de l'installer avant de commencer.
Voir [colochation-spring](https://github.com/colochation/colochation-spring)

### 1. Seulement Colochation Front 
> Il faudra lancer l'api REST indépendamment

Renommer le fichier `.env.exemple` par `.env` et remplacer les variables.
Puis lancer l'installation via npm :

```bash
npm install
```

### 2. ...ou avec Docker Compose 🐳

Cloner l'[api colochation](https://github.com/colochation/colochation-spring).
Renommer le fichier `.env.exemple` par `.env` et remplacer les variables.

Mettre le chemin (relatif ou absolu) du projet colochation-spring dans la variable `COLOCHATION_API_PATH`.
Par exemple si vous avez cloné le projet dans le même dossier que colochation-svelte :
```
.
├── colochation-svelte
└── colochation-spring
```
Vous aurez dans le fichier `.env`: `COLOCHATION_API_PATH=../colochation-spring`

## Démarrage

### Développement

Après avoir installé les dépendances avec `npm install` et l'api REST (voir installation) lancer un serveur de développement :

```bash
npm run dev

# ou ouvrir l'application dans le navigateur
npm run dev -- --open
```
### Docker compose

Après avoir suivit l'étape d'installation `2. ...ou avec Docker Compose`, lancer docker compose
```bash
docker compose up 
```

### Production

Construire une version de production :

```bash
npm run build && node build/index.js
```

## Fonctionnalités de l’application

- [x] Lister les tâches ménagères à effectuer
- [x] Obtenir la liste des courses à faire
- [x] Visualiser les prochains invités
- [ ] Ajouter une tâche ménagère à réaliser

## Versioning

Aucun workflow n'est imposé. La seule branche protégée est `main` pour laquelle il doit y avoir une Pull Request avant
de merge.

## Auteurs 🪶

- Théo - [@NightTheo](https://github.com/NightTheo)
- [@nathan-dev-dot](https://github.com/nathan-dev-dot)
