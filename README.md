
# Viadex - L'IA accessible pour les PME, TPE et ETI

Viadex est une plateforme dédiée à l'accompagnement des PME, TPE et ETI dans leur transformation numérique grâce à l'intelligence artificielle. Notre approche se distingue par sa simplicité, son accessibilité et son pragmatisme.

## À propos du projet

Ce site web présente les services de Viadex, une entreprise spécialisée dans l'accompagnement des PME, TPE et ETI pour l'adoption de l'intelligence artificielle. Le site met en avant l'approche sans jargon technique et les solutions accessibles proposées par Viadex.

## Fonctionnalités principales

- **Page d'accueil** : Présentation générale de Viadex et de sa mission
- **Services** : Détails sur les offres d'accompagnement (diagnostic IA, accompagnement stratégique, formations, veille)
- **Pourquoi Viadex** : Ce qui différencie notre approche (clarté, accessibilité, personnalisation)
- **À propos** : Présentation de l'équipe et de l'histoire de Viadex
- **Contact** : Formulaire et coordonnées pour échanger avec l'équipe Viadex

## Technologies utilisées

Ce projet est construit avec :

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## API Documentation

### Base URL
```
https://api.viadex.fr
```

### Endpoints

#### 📌 BlogPost

**GET `/blogpost`**  
Récupère tous les articles de blog avec leurs catégories, statuts et sources.

**GET `/blogpost/{id}`**  
Récupère un article spécifique par son ID.

**POST `/blogpost`**  
Crée un nouvel article de blog.

**PUT `/blogpost/{id}`**  
Met à jour un article de blog existant.

**DELETE `/blogpost/{id}`**  
Supprime un article de blog.

#### 📌 Contact

**GET `/contact`**  
Récupère tous les contacts avec les informations associées.

**GET `/contact/{id}`**  
Récupère un contact spécifique par son ID.

**POST `/contact`**  
Crée une nouvelle entrée de contact. Utilisé par tous les formulaires du site avec différentes sources.

Exemple de structure pour les requêtes de contact :
```json
{
  "nom": "Nom du contact",
  "email": "email@exemple.com",
  "message": "Message de la demande",
  "entreprise": "Nom de l'entreprise",
  "telephone": "0123456789",
  "source": "formulaire_accueil | formulaire_contact | formulaire_service"
}
```

**DELETE `/contact/{id}`**  
Supprime une entrée de contact.

#### 📌 User

**GET `/user`**  
Récupère tous les utilisateurs.

**GET `/user/{id}`**  
Récupère un utilisateur spécifique par son ID.

**POST `/user`**  
Crée un nouvel utilisateur.

**DELETE `/user/{id}`**  
Supprime un utilisateur.

### Format des requêtes et réponses

Toutes les requêtes et réponses sont au format JSON. Assurez-vous de définir l'en-tête `Content-Type` de manière appropriée :

```
Content-Type: application/json
```

### Contrôle d'accès

Cette API n'accepte que les requêtes provenant du domaine :
```
https://viadex.fr
```

Les requêtes cross-origin provenant d'autres domaines seront bloquées.

### Gestion des erreurs

Les erreurs renverront une réponse JSON avec un message d'erreur.

Exemple :
```json
{
  "error": "Method Not Allowed"
}
```

## Public cible

Le site s'adresse principalement aux dirigeants et décideurs de PME et ETI qui souhaitent explorer les possibilités offertes par l'intelligence artificielle pour leur entreprise, sans être experts en technologie.

## Valeurs véhiculées

- **Accessibilité** : L'IA à la portée de toutes les entreprises
- **Clarté** : Communication sans jargon technique
- **Pragmatisme** : Focus sur des solutions concrètes avec un ROI mesurable
- **Personnalisation** : Accompagnement adapté aux besoins spécifiques de chaque entreprise

## Comment démarrer

Pour lancer le projet en local :

```sh
# Installer les dépendances
npm i

# Démarrer le serveur de développement
npm run dev
```

## Déploiement

Le site peut être déployé facilement via la plateforme GPT Engineer ou via des services comme Netlify.
