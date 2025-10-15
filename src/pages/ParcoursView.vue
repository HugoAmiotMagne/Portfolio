<template>
  <!-- Header Section -->
  <header class="academic-header">
    <div class="container text-center">
      <h1 class="display-4 fw-bold mb-3 animate-up">MON PARCOURS ACADÉMIQUE</h1>
      <p class="lead col-lg-8 mx-auto mb-4 animate-up">
        Un aperçu de ma formation et de mes compétences acquises
      </p>
    </div>
  </header>

  <main class="flex-shrink-0 py-5">
    <div class="container">
      <!-- Introduction -->
      <section class="mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card p-4">
              <div class="card-body">
                <p class="lead text-center mb-4">
                  De mes débuts au collège jusqu'à ma spécialisation en
                  développement.
                </p>
                <p class="text-justify">
                  Passionné d'informatique depuis mon plus jeune âge, j'ai
                  construit un parcours académique cohérent qui m'a permis de
                  développer des compétences solides en programmation et en
                  développement d'applications. Au fil de mon apprentissage,
                  j'ai découvert une affinité particulière pour le
                  <span class="highlight">développement front end</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="mb-5">
        <h2 class="section-title">Chronologie de mon parcours</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">2016-2020</div>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>Brevet des Collèges</h3>
              <h5>Collège Jean Auriac</h5>
              <p>
                Obtention du Brevet des Collèges avec mention Très Bien, malgré
                la période Covid.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">2020-2023</div>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>Baccalauréat Général</h3>
              <h5>Lycée Max Linder</h5>
              <p>
                Obtention du Baccalauréat Général avec mention Assez Bien.
                Spécialités en Mathématiques et Physique.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">2023-2025</div>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>BTS SIO option SLAM</h3>
              <h5>Lycée Elie Vinet</h5>
              <p>
                Formation en cours de Services Informatiques aux Organisations,
                spécialité Solutions Logicielles et Applications Métiers.
              </p>
              <div class="mt-3">
                <span class="badge-custom">Java</span>
                <span class="badge-custom">PHP</span>
                <span class="badge-custom">HTML/CSS</span>
                <span class="badge-custom">JavaScript</span>
                <span class="badge-custom">SQL</span>
                <span class="badge-custom">Python</span>
                <span class="badge-custom">Symfony</span>
                <span class="badge-custom">Android Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mes Établissements -->
      <section class="mb-5">
        <h2 class="section-title">Mes Établissements</h2>
        <div class="row">
          <div v-for="school in schools" :key="school.name" class="col-md-4">
            <div class="card school-card h-100">
              <div class="overflow-hidden">
                <img
                  :src="school.image"
                  :alt="school.name"
                  class="card-img-top school-img"
                />
              </div>
              <div class="school-info">
                <h4>{{ school.name }}</h4>
                <p>
                  <i class="fas fa-map-marker-alt me-2"></i>{{ school.city }}
                </p>
                <p>{{ school.diploma }}</p>
                <p>
                  <i class="fas fa-calendar-alt me-2"></i>{{ school.years }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mon Parcours détaillé, Compétences, Outils & Environnements -->
      <section class="mb-5">
        <h2 class="section-title">Mon Parcours en détail</h2>
        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="card-title">
                  <i class="fas fa-school me-2 text-primary"></i>De mes débuts à
                  aujourd'hui
                </h3>
                <p class="text-justify">
                  J'ai commencé mon parcours scolaire au
                  <strong>Collège Jean Auriac</strong>, où j'ai passé mon brevet
                  des collèges. Bien que la période ait été marquée par le
                  Covid, j'ai réussi à obtenir la
                  <strong>mention Très Bien</strong>.
                </p>
                <p class="text-justify">
                  Par la suite, j'ai intégré le
                  <strong>Lycée Max Linder</strong>, où j'ai passé mon Bac
                  Général avec l'option <strong>Mathématiques</strong> et
                  <strong>Physique</strong>, et j'ai obtenu la
                  <strong>mention Assez Bien</strong>.
                </p>
                <p class="text-justify">
                  Aujourd'hui, je suis en formation <strong>BTS SIO</strong> au
                  <strong>Lycée Elie Vinet</strong>, où je découvre et
                  approfondis mes connaissances en développement informatique.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  <i class="fas fa-laptop-code me-2 text-primary"></i>BTS SIO -
                  SLAM
                </h3>
                <p class="text-justify">
                  Durant ma formation en BTS, j'ai découvert les langages de
                  base du développement, tels que <strong>Python</strong> et
                  <strong>SQL</strong>, ainsi que les bases du développement web
                  avec <strong>HTML</strong>, <strong>CSS</strong> et
                  <strong>JavaScript</strong>. C'est d'ailleurs grâce à cela que
                  j'ai choisi cette voie.
                </p>
                <p class="text-justify">
                  En première année, j'ai revu les bases de la programmation et
                  approfondi mes compétences en développement web, tout en
                  découvrant les systèmes et réseaux. En janvier, j'ai opté pour
                  l'option
                  <strong
                    >SLAM (Solutions Logicielles et Applications
                    Métiers)</strong
                  >, que je souhaitais choisir depuis le début. En fin de
                  première année, j'ai appris des langages plus poussés, comme
                  <strong>PHP</strong> et <strong>Java</strong>.
                </p>
                <p class="text-justify">
                  En deuxième année, j'ai étudié le Framework
                  <strong>PHP Symfony</strong> et l'environnement de
                  développement <strong>Java</strong> avec
                  <strong>Android Studio</strong>, ce qui a renforcé mon désir
                  de me spécialiser en développement
                  <strong>front end</strong> car le design était très important
                  pour moi.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="card-title">
                  <i class="fas fa-code me-2 text-primary"></i>Mes Compétences
                </h3>
                <h5 class="mt-4">Langages de programmation</h5>
                <div class="mb-3">
                  <span
                    v-for="lang in skills.languages"
                    :key="lang"
                    class="badge-custom"
                    >{{ lang }}</span
                  >
                </div>
                <h5 class="mt-4">Développement Web</h5>
                <div class="mb-3">
                  <span
                    v-for="web in skills.web"
                    :key="web"
                    class="badge-custom"
                    >{{ web }}</span
                  >
                </div>
                <h5 class="mt-4">Autres compétences</h5>
                <div class="mb-3">
                  <span
                    v-for="other in skills.others"
                    :key="other"
                    class="badge-custom"
                    >{{ other }}</span
                  >
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">
                  <i class="fas fa-tools me-2 text-primary"></i>Outils &
                  Environnements
                </h3>

                <div class="row">
                  <div
                    v-for="tool in tools"
                    :key="tool.name"
                    class="col-6 col-md-4"
                  >
                    <div class="tool-card">
                      <div class="tool-icon">
                        <i :class="tool.icon"></i>
                      </div>
                      <h5>{{ tool.name }}</h5>
                      <p>{{ tool.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card bg-primary text-white p-4 text-center">
              <div class="card-body">
                <p>
                  N'hésitez pas à consulter mes projets ou à me contacter pour
                  discuter de potentielles collaborations.
                </p>
                <div class="mt-4">
                  <a href="project" class="btn btn-light me-2">
                    <i class="fas fa-project-diagram me-2"></i>Voir mes projets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

// Données dynamiques
const schools = ref([
  {
    name: "Collège Jean Auriac",
    city: "Arveyres",
    diploma: "Brevet des Collèges",
    years: "2016 - 2020",
    image: "images/collegejeanauriac.jpg",
  },
  {
    name: "Lycée Max Linder",
    city: "Libourne",
    diploma: "Baccalauréat Général",
    years: "2020 - 2023",
    image: "images/lyceemaxlinder.jpg",
  },
  {
    name: "Lycée Elie Vinet",
    city: "Barbezieux",
    diploma: "BTS SIO - Option SLAM",
    years: "2023 - 2025",
    image: "images/lyceeelievinet.jpg",
  },
]);

const skills = ref({
  languages: ["PHP", "Java", "SQL", "Python"],
  web: ["HTML/CSS", "JavaScript", "Symfony", "Bootstrap"],
  others: [
    "Android Studio",
    "Git/GitHub",
    "Bases de données",
    "Gestion de projet",
  ],
});

const tools = ref([
  { name: "VS Code", desc: "Éditeur principal", icon: "fas fa-code" },
  { name: "Android Studio", desc: "Dev mobile", icon: "fab fa-android" },
  { name: "Eclipse", desc: "Dev Java", icon: "fas fa-coffee" },
  { name: "GitHub", desc: "Versioning", icon: "fab fa-github" },
  { name: "GitLab", desc: "Versioning CI/CD", icon: "fab fa-gitlab" },
  { name: "Adminer", desc: "Gestion BDD", icon: "fas fa-database" },
]);
</script>

<style scoped>
.academic-header {
  background: #f8f9fa;
  color: #00bcd4;
  padding: 5rem 1rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.academic-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
}

.academic-header h1,
.academic-header p {
  position: relative;
  z-index: 1;
}

.section-title {
  color: #00bcd4;
  margin-bottom: 2rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #00bcd4, #0097a7);
  border-radius: 2px;
}

.highlight {
  color: #00bcd4;
  font-weight: 600;
  position: relative;
  padding: 0 4px;
}

.card {
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 188, 212, 0.15);
  transform: translateY(-2px);
}

.timeline {
  position: relative;
  margin: 2rem 0;
  padding-left: 3rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #00bcd4, #0097a7);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  animation: fadeInLeft 0.6s ease forwards;
  opacity: 0;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.1s;
}
.timeline-item:nth-child(2) {
  animation-delay: 0.2s;
}
.timeline-item:nth-child(3) {
  animation-delay: 0.3s;
}

.timeline-year {
  font-weight: 700;
  color: #00bcd4;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.timeline-dot {
  position: absolute;
  left: 11px;
  top: 5px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #00bcd4, #00acc1);
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow:
    0 0 0 4px rgba(0, 188, 212, 0.1),
    0 2px 8px rgba(0, 188, 212, 0.3);
  z-index: 1;
}

.timeline-content {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.08);
  border-left: 4px solid #00bcd4;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  box-shadow: 0 6px 20px rgba(0, 188, 212, 0.15);
  transform: translateX(5px);
}

.school-card {
  border: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.school-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 12px 28px rgba(0, 188, 212, 0.25);
}

.school-img {
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.school-card:hover .school-img {
  transform: scale(1.1);
}

.school-info {
  padding: 1.5rem;
  text-align: center;
  background: linear-gradient(180deg, #ffffff, #f8fdfe);
}

.school-info h4 {
  color: #00bcd4;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.badge-custom {
  display: inline-block;
  background: linear-gradient(135deg, #00bcd4, #0097a7);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  margin: 0.3rem;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 188, 212, 0.2);
  transition: all 0.3s ease;
}

.badge-custom:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.3);
}

.tool-card {
  text-align: center;
  padding: 1.5rem;
  border: 2px solid transparent;
  border-radius: 12px;
  margin-bottom: 1rem;
  background: #00bcd4 border-box;
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 188, 212, 0.2);
  border-color: #00bcd4;
}

.tool-icon {
  font-size: 2.5rem;
  background: #00bcd4;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
  transition: transform 0.3s ease;
}

.tool-card:hover .tool-icon {
  transform: scale(1.2) rotate(5deg);
}

.bg-primary {
  background: #00bcd4 !important;
  box-shadow: 0 8px 24px rgba(0, 188, 212, 0.25);
  border-radius: 16px;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 2rem;
  }
  .timeline::before {
    left: 10px;
  }
  .timeline-dot {
    left: 1px;
  }
  .academic-header {
    padding: 3rem 1rem;
  }
}

.animate-up {
  animation: slideUp 1s ease-out;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.btn-primary {
  background: linear-gradient(135deg, #00bcd4, #0097a7);
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 188, 212, 0.4);
}

.btn-light {
  background-color: #ffffff;
  border: 2px solid #ffffff;
  color: #00bcd4;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-light:hover {
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
  transform: translateY(-2px);
}
</style>
