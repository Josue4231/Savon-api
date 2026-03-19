# 📦 Savon‑API

**Savon‑API** est une application front‑end développée avec **Angular**, servant de base pour créer une interface web moderne et prête à l’intégration avec des API.  

---

## 🚀 Description

Cette application fournit une structure Angular complète avec :

- Composants modulaires
- Routes configurées
- Styles et assets prêts à l’emploi
- Intégration facile avec des API REST ou SOAP à venir  

C’est une base solide pour développer des interfaces web dynamiques et réactives.  

---

## 🛠️ Prérequis

Avant d’installer le projet, assurez-vous d’avoir :

- **Node.js** (version compatible Angular 21 ou plus récente)  
- **npm** (gestionnaire de paquets)  
- **Angular CLI** (optionnel mais recommandé)

  ---

Vérifiez vos versions :

```bash
node -v
npm -v
ng version
```

---

## 📥 Installation

Clonez le dépôt :

```git clone https://github.com/Josue4231/Savon-api.git```

Déplacez-vous dans le dossier :

```cd Savon-api```

Installez les dépendances :

```npm install```

---

## 🚀 Lancer l’application en développement

Démarrez le serveur Angular :

```ng serve```

Ouvrez ensuite votre navigateur à l’adresse :

```http://localhost:4200/```

L’application se rechargera automatiquement à chaque modification du code.

---

## 🛠️ Génération de composants et modules

Angular CLI permet de créer facilement de nouveaux composants et modules :

Créer un composant :

```ng generate component nom-du-composant```

Créer un module :

ng generate module nom-du-module

Liste complète des commandes :

```ng generate --help```

---

## 📦 Build pour production

Pour générer une version optimisée de l’application :

```ng build```

Les fichiers compilés seront placés dans le dossier dist/. Cette version est prête à être déployée sur un serveur web.

---
## 🧪 Tests

Le projet utilise Vitest pour les tests unitaires :

```ng test```

Cette commande exécute tous les tests et affiche les résultats dans la console.

---

## 📁 Structure du projet

```src/ – code source Angular```

```src/app/ – composants et modules de l’application```

```.vscode/ – configuration de l’éditeur```

```angular.json, package.json, tsconfig.json – fichiers de configuration du projet```

---

## 📚 Ressources utiles

```Documentation Angular CLI

Guide Angular```

---

## 💡 Remarques

Ce dépôt correspond uniquement à la partie front‑end Angular.

Il n’inclut pas encore de documentation pour la connexion avec un service SOAP ou l’API Savon côté serveur.

Le projet est prêt à être étendu et intégré à une API backend.
