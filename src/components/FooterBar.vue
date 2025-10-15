<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 MonSite. Tous droits réservés.</p>
      <ul class="footer-links">
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/project">Projets</RouterLink></li>
        <li><RouterLink to="/parcours">Parcours</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1a1a; /* fond sombre */
  color: #f5f5f5;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 2px solid #2a2a2a;
  margin-top: 3rem;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
}

.footer p {
  font-size: 0.95rem;
  color: #bfbfbf;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
}

.footer-links li a {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
  transition:
    color 0.3s,
    transform 0.2s;
}

.footer-links li a:hover {
  color: #4db6ff; /* couleur d’accent */
  transform: scale(1.05);
}

/* ✅ Responsive : sur mobile, les liens passent en colonne */
@media (max-width: 600px) {
  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
