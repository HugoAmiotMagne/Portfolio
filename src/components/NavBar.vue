<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="navbar">
    <nav class="nav-container">
      <h1 class="logo">HugoDev</h1>
      <ul class="nav-links">
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/project">Projets</RouterLink></li>
        <li><RouterLink to="/parcours">Parcours</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* --- Structure générale --- */
.navbar {
  background-color: #1e1e1e;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* --- Conteneur principal --- */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* --- Logo --- */
.logo {
  color: #00bcd4;
  font-size: 1.4rem;
  font-weight: bold;
}

/* --- Liens --- */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #00bcd4;
}

/* --- Contenu principal --- */
.content {
  padding: 2rem;
}

/* ✅ Responsive : sur mobile, les liens passent en colonne */
@media (max-width: 600px) {
  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
