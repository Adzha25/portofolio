// script.js

document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, {
    threshold: 0.1,
  });

  scrollElements.forEach(el => {
    observer.observe(el);
  });
});

// Scroll otomatis dengan offset jika pakai sticky header
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 70; // sesuaikan jika header menutupi konten
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.slide-up, .slide-down');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
});

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

function switchLanguage(lang) {
  const btnID = document.getElementById("btnDownloadID");
  const btnEN = document.getElementById("btnDownloadEN");

  if (lang === "id") {
    document.getElementById('judulAtas').innerText = 'Hello Saya';
    document.getElementById('judulBawah').innerText = 'Adzha Aji Pratama';
    document.getElementById('nama').innerText = 'Web Developer';

    btnID.style.display = "inline-block";
    btnEN.style.display = "none";
  } else {
    document.getElementById('judulAtas').innerText = 'Hello Im';
    document.getElementById('judulBawah').innerText = 'Adzha Aji Pratama';
    document.getElementById('nama').innerText = 'Web Developer';

    btnID.style.display = "none";
    btnEN.style.display = "inline-block";
  }

  const translations = {
    id: {
    nama: "Web Developer",
    judulAtas: "Hello Saya",
    judulBawah: "Adzha Aji Pratama",
    judulPorto: "Portofolio",
    judulTentang: "Tentang Saya",
    deskripsiTentang: "Halo! Saya adalah seorang fresh graduate S1 dari Universitas Banten Jaya, jurusan Teknik Informatika, yang memiliki minat besar dalam dunia pengembangan web. Selama masa studi, saya aktif mempelajari dan mengembangkan kemampuan dalam berbagai bahasa dan framework pemrograman seperti HTML, CSS, JavaScript, PHP (Laravel), serta pengelolaan database menggunakan MySQL. Saya percaya bahwa teknologi adalah alat yang kuat untuk menciptakan solusi nyata bagi banyak orang. Salah satu pengalaman yang sangat berkesan bagi saya adalah saat merancang dan membangun sistem informasi absensi berbasis web untuk SMAN 1 Bayah. Dari proyek tersebut, saya belajar banyak — mulai dari perencanaan sistem, pengkodean, hingga memahami kebutuhan pengguna secara langsung. Selain kemampuan teknis, saya juga memiliki beberapa soft skill yang saya banggakan seperti kemampuan komunikasi yang baik, kerja sama tim, adaptasi yang cepat, dan manajemen waktu. Saat ini, saya siap untuk melangkah ke dunia profesional, berkontribusi dalam tim pengembangan, dan terus belajar menjadi developer yang lebih baik.",
    judulProyek: "Proyek",
    daftar1Proyek: "Web E-Commerce",
    daftar2Proyek: "Website Portfolio",
    deskripsi1Proyek: "Website absensi siswa berbasis web yang memudahkan guru mencatat kehadiran secara digital. Dibekali fitur login, input absensi harian, rekap laporan, dan pencarian data. Dibangun dengan PHP Laravel, MySQL, HTML, CSS, dan JavaScript.",
    deskripsi2Proyek: "Website portofolio pribadi ini dibuat untuk menampilkan profil, proyek, dan keahlian saya sebagai Full Stack Developer. Dibangun dengan HTML, CSS, dan JavaScript, serta dilengkapi fitur bilingual (Indonesia–Inggris) dan desain responsif.",
    judulSkills: "Stack Teknologi",
    judulKontak: "Kontak",
    navTentang: "Tentang",
    navProyek: "Proyek",
    navSkills: "Stack Teknologi",
    navKontak: "Kontak",

    },
    en: {
    nama: "Web Developer",
    judulAtas: "Hello I'm",
    judulBawah: "Adzha Aji Pratama",
    judulPorto: "Portfolio",
    judulTentang: "About Me",
    deskripsiTentang: "Hi! I'm a fresh graduate with a Bachelor's degree in Informatics Engineering from Universitas Banten Jaya, and I have a strong interest in web development. During my studies, I developed skills in several programming languages and frameworks such as HTML, CSS, JavaScript, PHP (Laravel), and also database management using MySQL. I believe that technology is a powerful tool to solve real-world problems. One of my most meaningful experiences was designing and developing a web-based attendance information system for SMAN 1 Bayah. Through this project, I learned a lot — from system planning and coding to understanding user needs directly. In addition to technical skills, I’m also proud of my soft skills including strong communication, teamwork, adaptability, and time management. I’m now ready to take the next step into the professional world, contribute to development teams, and grow as a better developer every day.",
    judulProyek: "Project",
    daftar1Proyek: "Student Attendance Web",
    daftar2Proyek: "Portfolio Website",
    deskripsi1Proyek: "A web-based student attendance system that helps teachers record attendance digitally. Includes login, daily input, reports, and data search. Built using PHP Laravel, MySQL, HTML, CSS, and JavaScript.",
    deskripsi2Proyek: "This personal portfolio website showcases my profile, projects, and skills as a Full Stack Developer. Built using HTML, CSS, and JavaScript, it features a bilingual interface (Indonesian–English) and a responsive design.",
    judulSkills: "Tech Stack",
    judulKontak: "Contact",
    navTentang: "About",
    navProyek: "Project",
    navSkills: "Tech Stack",
    navKontak: "Contact",
    }
  };

  const data = translations[lang];

 const ids = ["nama", "judulAtas", "judulBawah", "judulPorto", "judulTentang", "deskripsiTentang", "judulProyek", "daftar1Proyek", "daftar2Proyek", "deskripsi1Proyek", "deskripsi2Proyek", "judulSkills", "judulKontak", "navTentang", "navProyek", "navSkills", "navKontak"];
  ids.forEach((id, index) => {
    const el = document.getElementById(id);
    el.classList.add("hidden"); // fade out
    setTimeout(() => {
      el.textContent = data[id];
      el.classList.remove("hidden"); // fade in
    }, 300 + index * 100); // waktu sinkron dengan CSS transition
  });


  // aktifkan highlight tombol bahasa
  document.getElementById('lang-id').classList.toggle('active', lang === 'id');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

const darkToggle = document.getElementById("darkModeToggle");

// Cek preferensi saat load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
  }
});

// Toggle dark mode saat diklik
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

