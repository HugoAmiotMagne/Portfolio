<template>
  <div class="container">
    <!-- Header -->
    <header class="header">
      <h1>Hugo Amiot Magne</h1>
      <h2>Développeur Web & Étudiant en BTS SIO</h2>
      <p>
        Passionné par le développement web et les nouvelles technologies, je
        crée des solutions web modernes et performantes.
      </p>
    </header>

    <!-- À propos -->
    <section class="about">
      <h2>À propos de moi</h2>
      <p>
        Je suis Hugo Amiot Magne, passionné par le développement web et les
        nouvelles technologies.
      </p>
      <p>
        Actuellement étudiant en BTS SIO (Services Informatiques aux
        Organisations), je me spécialise dans la création de sites web modernes
        et performants. Curieux et motivé, je suis toujours à la recherche de
        nouveaux défis pour améliorer mes compétences et contribuer à des
        projets innovants.
      </p>
      <p>
        Mon objectif est de concevoir des expériences utilisateur intuitives et
        d'apporter des solutions techniques adaptées aux besoins des clients.
      </p>
    </section>

    <!-- Langues -->
    <section class="languages">
      <h2>Langues</h2>
      <ul>
        <li>Français : Langue maternelle</li>
        <li>Anglais : Niveau intermédiaire (B2)</li>
        <li>Espagnol : Niveau débutant (B1)</li>
      </ul>
    </section>

    <!-- CV -->
    <section class="cv">
      <h2>Mon CV</h2>
      <p>Expériences, formations et compétences</p>
      <p>
        Découvrez mon parcours professionnel et scolaire complet dans mon CV.
        Vous pouvez le consulter directement sur cette page ou le télécharger au
        format PDF.
      </p>
      <a href="" download="CV_Hugo_Amiot_Magne.pdf" class="btn"
        >Télécharger mon CV</a
      >
    </section>

    <!-- Contact -->
    <section class="contact">
      <h2>Contactez-moi</h2>
      <p>
        Vous avez un projet en tête ou souhaitez simplement échanger ? N'hésitez
        pas à me contacter !
      </p>
      <p>
        Email : <a href="mailto:hugo463324@gmail.com">hugo463324@gmail.com</a>
      </p>
      <p>
        GitHub :
        <a href="https://github.com/HugoAmiotMagne" target="_blank"
          >HugoAmiotMagne</a
        >
      </p>
      <p>
        LinkedIn :
        <a href="https://www.linkedin.com/in/hugo-amiot-magne/" target="_blank"
          >Mon Profil LinkedIn</a
        >
      </p>
    </section>
  </div>
</template>

<style scoped>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

header.header {
  text-align: center;
  margin-bottom: 3rem;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

header h2 {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1rem;
}

header p {
  font-size: 1.1rem;
  color: #666;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.3rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  background: #eaeaea;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.cv .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.cv .btn:hover {
  background-color: #0056b3;
}

.contact a {
  color: #007bff;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}
</style>
