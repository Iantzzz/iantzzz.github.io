// Menunggu hingga semua konten dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false
    });

    // ===== FUNGSI LAYAR LOADING =====
    function tanganiLayarLoading() {
        const layarLoading = document.querySelector('.loading-screen');
        
        // Sembunyikan layar loading setelah konten dimuat
        window.addEventListener('load', function() {
            setTimeout(function() {
                layarLoading.classList.add('hide');
                // Aktifkan scroll setelah loading selesai
                document.body.style.overflow = 'auto';
            }, 1000);
        });
        
        // Nonaktifkan scroll selama loading
        document.body.style.overflow = 'hidden';
    }

    // ===== FUNGSI TEMA GELAP / TERANG =====
    function tanganiToggleTema() {
        const toggleTema = document.querySelector('.theme-toggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Cek local storage untuk tema yang disimpan
        const temaSaatIni = localStorage.getItem('theme');
        
        if (temaSaatIni === 'dark') {
            document.body.classList.add('dark-theme');
            toggleTema.innerHTML = '<i class="fas fa-sun"></i>';
        } else if (temaSaatIni === 'light') {
            document.body.classList.remove('dark-theme');
            toggleTema.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            // Gunakan preferensi sistem
            if (prefersDarkScheme.matches) {
                document.body.classList.add('dark-theme');
                toggleTema.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
        
        toggleTema.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                toggleTema.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                toggleTema.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // ===== FUNGSI NAVIGASI MOBILE =====
    function tanganiNavMobile() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navItems = document.querySelectorAll('.nav-item');
        
        hamburger.addEventListener('click', function() {
            // Toggle kelas aktif
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Tutup menu saat item navigasi diklik
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Tutup menu saat mengklik di luar
        document.addEventListener('click', function(event) {
            const klikDiDalam = navLinks.contains(event.target) || hamburger.contains(event.target);
            
            if (!klikDiDalam && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // ===== FUNGSI NAVIGASI AKTIF =====
    function tanganiNavAktif() {
        const bagianHalaman = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');
        
        window.addEventListener('scroll', function() {
            let saatIni = '';
            
            bagianHalaman.forEach(bagian => {
                const bagianAtas = bagian.offsetTop;
                const bagianTinggi = bagian.clientHeight;
                
                if (pageYOffset >= (bagianAtas - bagianTinggi / 3)) {
                    saatIni = bagian.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${saatIni}`) {
                    item.classList.add('active');
                }
            });
        });
    }

    // ===== FUNGSI TYPED.JS =====
    function inisiasiTyped() {
        const opsi = {
            strings: [
                'pengalaman web kreatif.',
                'aplikasi web responsif.',
                'antarmuka pengguna inovatif.',
                'solusi digital yang bermakna.'
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            cursorChar: '|'
        };
        
        const typed = new Typed('.typed-text', opsi);
    }

    // ===== FUNGSI TAB KEAHLIAN =====
    function tanganiTabKeahlian() {
        const kategoriKeahlian = document.querySelectorAll('.skill-category');
        const setKeahlian = document.querySelectorAll('.skill-set');
        
        kategoriKeahlian.forEach(kategori => {
            kategori.addEventListener('click', function() {
                const target = this.getAttribute('data-category');
                
                // Hapus kelas active dari semua kategori dan set
                kategoriKeahlian.forEach(c => c.classList.remove('active'));
                setKeahlian.forEach(s => s.classList.remove('active'));
                
                // Tambahkan kelas active ke kategori dan set yang dipilih
                this.classList.add('active');
                document.querySelector(`.skill-set.${target}`).classList.add('active');
            });
        });
    }

    // ===== FUNGSI FILTER PROYEK =====
    function tanganiFilterProyek() {
        const tombolFilter = document.querySelectorAll('.filter-btn');
        const kartuProyek = document.querySelectorAll('.project-card');
        
        tombolFilter.forEach(tombol => {
            tombol.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Hapus kelas active dari semua tombol
                tombolFilter.forEach(btn => btn.classList.remove('active'));
                
                // Tambahkan kelas active ke tombol yang diklik
                this.classList.add('active');
                
                // Filter proyek
                kartuProyek.forEach(kartu => {
                    const kategoriKartu = kartu.getAttribute('data-category');
                    
                    if (filter === 'all' || kategoriKartu === filter) {
                        kartu.style.display = 'flex';
                    } else {
                        kartu.style.display = 'none';
                    }
                });
            });
        });
    }

    // ===== FUNGSI SLIDER TESTIMONI =====
    function tanganiSliderTestimoni() {
        const itemTestimoni = document.querySelectorAll('.testimonial-item');
        const titik = document.querySelectorAll('.dot');
        const tombolSebelumnya = document.querySelector('.prev-btn');
        const tombolSelanjutnya = document.querySelector('.next-btn');
        let indeksSaatIni = 0;
        
        // Fungsi untuk menampilkan slide
        function tampilkanSlide(indeks) {
            // Hapus kelas active dari semua item dan titik
            itemTestimoni.forEach(item => item.classList.remove('active'));
            titik.forEach(dot => dot.classList.remove('active'));
            
            // Tambahkan kelas active ke item dan titik yang dipilih
            itemTestimoni[indeks].classList.add('active');
            titik[indeks].classList.add('active');
            
            indeksSaatIni = indeks;
        }
        
        // Event listener untuk titik
        titik.forEach((dot, indeks) => {
            dot.addEventListener('click', function() {
                tampilkanSlide(indeks);
            });
        });
        
        // Event listener untuk tombol sebelumnya
        tombolSebelumnya.addEventListener('click', function() {
            indeksSaatIni = (indeksSaatIni - 1 + itemTestimoni.length) % itemTestimoni.length;
            tampilkanSlide(indeksSaatIni);
        });
        
        // Event listener untuk tombol selanjutnya
        tombolSelanjutnya.addEventListener('click', function() {
            indeksSaatIni = (indeksSaatIni + 1) % itemTestimoni.length;
            tampilkanSlide(indeksSaatIni);
        });
        
        // Auto slide
        let intervalSlide = setInterval(function() {
            indeksSaatIni = (indeksSaatIni + 1) % itemTestimoni.length;
            tampilkanSlide(indeksSaatIni);
        }, 5000);
        
        // Hentikan auto slide saat hover
        const kontainerTestimoni = document.querySelector('.testimonial-container');
        kontainerTestimoni.addEventListener('mouseenter', function() {
            clearInterval(intervalSlide);
        });
        
        // Mulai kembali auto slide saat mouse keluar
        kontainerTestimoni.addEventListener('mouseleave', function() {
            intervalSlide = setInterval(function() {
                indeksSaatIni = (indeksSaatIni + 1) % itemTestimoni.length;
                tampilkanSlide(indeksSaatIni);
            }, 5000);
        });
    }

    // ===== FUNGSI VALIDASI FORMULIR =====
    function tanganiValidasiForm() {
        const formKontak = document.getElementById('contactForm');
        
        formKontak.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil nilai dari form
            const nama = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subjek = document.getElementById('subject').value.trim();
            const pesan = document.getElementById('message').value.trim();
            
            // Validasi email
            function emailValid(email) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
            }
            
            // Validasi input
            let valid = true;
            let pesanError = '';
            
            if (nama === '') {
                valid = false;
                pesanError += 'Mohon masukkan nama Anda.\n';
            }
            
            if (email === '') {
                valid = false;
                pesanError += 'Mohon masukkan email Anda.\n';
            } else if (!emailValid(email)) {
                valid = false;
                pesanError += 'Mohon masukkan alamat email yang valid.\n';
            }
            
            if (subjek === '') {
                valid = false;
                pesanError += 'Mohon masukkan subjek.\n';
            }
            
            if (pesan === '') {
                valid = false;
                pesanError += 'Mohon masukkan pesan Anda.\n';
            }
            
            // Tampilkan pesan error atau kirim form
            if (!valid) {
                alert(pesanError);
            } else {
                // Persiapkan parameter template - diperbarui untuk pengiriman ke email yang ditentukan
                const parameterTemplate = {
                    from_name: nama,
                    from_email: email,
                    to_email: "muhammadfiantoo13@gmail.com", // Email tujuan (penerima)
                    subject: subjek,
                    message: pesan
                };
                
                // Perubahan tampilan tombol saat loading
                const tombolKirim = formKontak.querySelector('.submit-btn');
                const teksTombol = tombolKirim.querySelector('.btn-text');
                const ikonTombol = tombolKirim.querySelector('.btn-icon');
                
                teksTombol.textContent = 'Mengirim...';
                ikonTombol.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                
                // Kirim email dengan EmailJS
                emailjs.send('SERVICE_ID', 'TEMPLATE_ID', parameterTemplate)
                    .then(function(response) {
                        // Reset form
                        formKontak.reset();
                        
                        // Tampilkan pesan sukses
                        const pesanSukses = document.createElement('div');
                        pesanSukses.className = 'success-message';
                        pesanSukses.innerHTML = `<i class="fas fa-check-circle"></i> Pesan Anda telah berhasil dikirim ke muhammadfiantoo13@gmail.com!`;
                        
                        formKontak.appendChild(pesanSukses);
                        
                        // Kembalikan tampilan tombol
                        teksTombol.textContent = 'Kirim Pesan';
                        ikonTombol.innerHTML = '<i class="fas fa-paper-plane"></i>';
                        
                        // Hapus pesan sukses setelah beberapa detik
                        setTimeout(() => {
                            pesanSukses.style.opacity = '0';
                            setTimeout(() => {
                                formKontak.removeChild(pesanSukses);
                            }, 300);
                        }, 3000);
                    })
                    .catch(function(error) {
                        console.error('Error mengirim email:', error);
                        
                        // Tampilkan pesan error
                        alert('Error saat mengirim email. Silakan coba lagi nanti.');
                        
                        // Kembalikan tampilan tombol
                        teksTombol.textContent = 'Kirim Pesan';
                        ikonTombol.innerHTML = '<i class="fas fa-paper-plane"></i>';
                    });
            }
        });
    }

    // ===== FUNGSI TOMBOL KEMBALI KE ATAS =====
    function tanganiKembaliKeAtas() {
        const tombolKeAtas = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                tombolKeAtas.classList.add('show');
            } else {
                tombolKeAtas.classList.remove('show');
            }
        });
        
        tombolKeAtas.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== FUNGSI ANIMASI PROGRES KEAHLIAN =====
    function tanganiProgresKeahlian() {
        const barKeahlian = document.querySelectorAll('.skill-bar');
        
        // Animasi progress bar saat masuk viewport
        const opsiObserver = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.progress');
                    const lebar = progressBar.style.width;
                    
                    // Reset lebar untuk animasi
                    progressBar.style.width = '0';
                    
                    // Trigger animasi
                    setTimeout(function() {
                        progressBar.style.width = lebar;
                    }, 100);
                    
                    // Unobserve setelah animasi
                    observer.unobserve(entry.target);
                }
            });
        }, opsiObserver);
        
        barKeahlian.forEach(bar => {
            observer.observe(bar);
        });
    }

    // ===== FUNGSI SCROLL HALUS =====
    function tanganiScrollHalus() {
        const linkScroll = document.querySelectorAll('a[href^="#"]');
        
        linkScroll.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const elemenTarget = document.querySelector(targetId);
                
                if (elemenTarget) {
                    const posisiAtas = elemenTarget.offsetTop;
                    
                    window.scrollTo({
                        top: posisiAtas,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== FUNGSI EFEK PARALLAX =====
    function tanganiParallax() {
        const elemenParallax = document.querySelectorAll('[data-speed]');
        
        window.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            elemenParallax.forEach(elemen => {
                const kecepatan = elemen.getAttribute('data-speed');
                const offsetX = (x - 0.5) * 100 * kecepatan;
                const offsetY = (y - 0.5) * 100 * kecepatan;
                
                elemen.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });
    }

    // ===== FUNGSI LIGHTBOX =====
    function tanganiLightbox() {
        // Buat elemen lightbox
        const htmlLightbox = `
            <div class="lightbox">
                <div class="lightbox-content">
                    <img src="" alt="" class="lightbox-img">
                    <div class="lightbox-title"></div>
                </div>
                <button class="lightbox-close"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        // Tambahkan lightbox ke body
        document.body.insertAdjacentHTML('beforeend', htmlLightbox);
        
        const lightbox = document.querySelector('.lightbox');
        const gambarLightbox = document.querySelector('.lightbox-img');
        const judulLightbox = document.querySelector('.lightbox-title');
        const tutupLightbox = document.querySelector('.lightbox-close');
        
        // Event listener untuk tombol lihat proyek
        const tombolLihatProyek = document.querySelectorAll('.view-project-btn');
        
        tombolLihatProyek.forEach(btn => {
            btn.addEventListener('click', function() {
                const sumberGambar = this.getAttribute('data-lightbox');
                const judulGambar = this.getAttribute('data-title');
                
                gambarLightbox.src = sumberGambar;
                judulLightbox.textContent = judulGambar;
                lightbox.classList.add('active');
                
                // Nonaktifkan scroll
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Event listener untuk tombol tutup
        tutupLightbox.addEventListener('click', function() {
            lightbox.classList.remove('active');
            
            // Aktifkan scroll kembali
            document.body.style.overflow = 'auto';
        });
        
        // Tutup lightbox saat mengklik di luar gambar
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ===== FUNGSI KURSOR KUSTOM =====
    function tanganiKursorKustom() {
        const kursorLuar = document.querySelector('.cursor-outer');
        const kursorDalam = document.querySelector('.cursor-inner');
        
        // Hindari menjalankan fungsi ini pada perangkat mobile
        if (window.innerWidth <= 768) return;
        
        // Update posisi kursor
        document.addEventListener('mousemove', function(e) {
            kursorLuar.style.left = e.clientX + 'px';
            kursorLuar.style.top = e.clientY + 'px';
            
            kursorDalam.style.left = e.clientX + 'px';
            kursorDalam.style.top = e.clientY + 'px';
        });
        
        // Efek hover
        const elemenHover = document.querySelectorAll('a, button, .filter-btn, .skill-category, .project-card, .social-icon, .social-link');
        
        elemenHover.forEach(elemen => {
            elemen.addEventListener('mouseenter', function() {
                document.body.classList.add('cursor-hover');
            });
            
            elemen.addEventListener('mouseleave', function() {
                document.body.classList.remove('cursor-hover');
            });
        });
    }

    // ===== INISIALISASI FUNGSI =====
    tanganiLayarLoading();
    tanganiToggleTema();
    tanganiNavMobile();
    tanganiNavAktif();
    inisiasiTyped();
    tanganiTabKeahlian();
    tanganiFilterProyek();
    tanganiSliderTestimoni();
    tanganiValidasiForm();
    tanganiKembaliKeAtas();
    tanganiProgresKeahlian();
    tanganiScrollHalus();
    tanganiParallax();
    tanganiLightbox();
    tanganiKursorKustom();

    // Konten keahlian backend (untuk diisi nanti)
    const kontenKeahlianBackend = `
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="100">
            <div class="skill-info">
                <span class="skill-name">Node.js</span>
                <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 85%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="200">
            <div class="skill-info">
                <span class="skill-name">Express.js</span>
                <span class="skill-percentage">80%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 80%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="300">
            <div class="skill-info">
                <span class="skill-name">MongoDB</span>
                <span class="skill-percentage">75%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 75%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="400">
            <div class="skill-info">
                <span class="skill-name">Firebase</span>
                <span class="skill-percentage">70%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 70%"></div>
            </div>
        </div>
    `;

    // Tambahkan konten keahlian backend
    const setKeahlianBackend = document.querySelector('.skill-set.backend');
    if (setKeahlianBackend) {
        setKeahlianBackend.innerHTML = kontenKeahlianBackend;
    }

    // Konten keahlian desain (untuk diisi nanti)
    const kontenKeahlianDesain = `
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="100">
            <div class="skill-info">
                <span class="skill-name">Adobe Photoshop</span>
                <span class="skill-percentage">80%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 80%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="200">
            <div class="skill-info">
                <span class="skill-name">Figma</span>
                <span class="skill-percentage">85%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 85%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="300">
            <div class="skill-info">
                <span class="skill-name">Adobe XD</span>
                <span class="skill-percentage">75%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 75%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="400">
            <div class="skill-info">
                <span class="skill-name">Illustrator</span>
                <span class="skill-percentage">70%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 70%"></div>
            </div>
        </div>
    `;

    // Tambahkan konten keahlian desain
    const setKeahlianDesain = document.querySelector('.skill-set.design');
    if (setKeahlianDesain) {
        setKeahlianDesain.innerHTML = kontenKeahlianDesain;
    }

    // Konten keahlian lainnya (untuk diisi nanti)
    const kontenKeahlianLainnya = `
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="100">
            <div class="skill-info">
                <span class="skill-name">Git & GitHub</span>
                <span class="skill-percentage">90%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 90%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="200">
            <div class="skill-info">
                <span class="skill-name">Docker</span>
                <span class="skill-percentage">65%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 65%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="300">
            <div class="skill-info">
                <span class="skill-name">AWS</span>
                <span class="skill-percentage">60%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 60%"></div>
            </div>
        </div>
        <div class="skill-bar" data-aos="fade-right" data-aos-delay="400">
            <div class="skill-info">
                <span class="skill-name">SEO</span>
                <span class="skill-percentage">75%</span>
            </div>
            <div class="skill-progress">
                <div class="progress" style="width: 75%"></div>
            </div>
        </div>
    `;

    // Tambahkan konten keahlian lainnya
    const setKeahlianLainnya = document.querySelector('.skill-set.other');
    if (setKeahlianLainnya) {
        setKeahlianLainnya.innerHTML = kontenKeahlianLainnya;
    }

    // Tambahkan fungsi untuk integrasi API GitHub
    function tanganiAPIGitHub() {
        const namapengguna = 'yourusername'; // Ganti dengan username GitHub Anda
        const kontainerRepo = document.getElementById('reposContainer');
        const loaderRepo = document.querySelector('.repo-loader');
        const hitungRepo = document.getElementById('repoCount');
        const hitungBintang = document.getElementById('starsCount');
        const hitungFork = document.getElementById('forksCount');
        
        // Fetch data pengguna
        fetch(`https://api.github.com/users/${namapengguna}`)
            .then(response => response.json())
            .then(data => {
                hitungRepo.textContent = data.public_repos;
                
                // Fetch repositori
                return fetch(`https://api.github.com/users/${namapengguna}/repos?sort=updated&per_page=6`);
            })
            .then(response => response.json())
            .then(repos => {
                // Sembunyikan loader
                loaderRepo.style.display = 'none';
                
                // Hitung total bintang dan fork
                let totalBintang = 0;
                let totalFork = 0;
                
                repos.forEach(repo => {
                    totalBintang += repo.stargazers_count;
                    totalFork += repo.forks_count;
                });
                
                hitungBintang.textContent = totalBintang;
                hitungFork.textContent = totalFork;
                
                // Buat kartu repositori
                repos.forEach(repo => {
                    const kartuRepo = document.createElement('div');
                    kartuRepo.className = 'repo-card';
                    
                    // Format tanggal
                    const tanggalDiperbarui = new Date(repo.updated_at);
                    const tanggalDiformat = tanggalDiperbarui.toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    });
                    
                    kartuRepo.innerHTML = `
                        <div class="repo-header">
                            <i class="fas fa-code-branch"></i>
                            <h3 class="repo-name">${repo.name}</h3>
                        </div>
                        <p class="repo-description">${repo.description || 'Tidak ada deskripsi tersedia'}</p>
                        <div class="repo-footer">
                            <div class="repo-stats">
                                <div class="repo-stat">
                                    <i class="fas fa-star"></i>
                                    <span>${repo.stargazers_count}</span>
                                </div>
                                <div class="repo-stat">
                                    <i class="fas fa-code-branch"></i>
                                    <span>${repo.forks_count}</span>
                                </div>
                            </div>
                            <div class="repo-updated">Diperbarui: ${tanggalDiformat}</div>
                        </div>
                        <a href="${repo.html_url}" target="_blank" class="repo-link">
                            Lihat Repositori <i class="fas fa-external-link-alt"></i>
                        </a>
                    `;
                    
                    kontainerRepo.appendChild(kartuRepo);
                });
            })
            .catch(error => {
                console.error('Error mengambil data GitHub:', error);
                loaderRepo.innerHTML = `<p>Gagal memuat repositori. Silakan coba lagi nanti.</p>`;
            });
    }

    // Tambahkan pemanggilan fungsi tanganiAPIGitHub di inisialisasi fungsi
    tanganiAPIGitHub();

    // Tambahkan fungsi untuk Counter Pencapaian
    function tanganiCounter() {
        const counter = document.querySelectorAll('.counter');
        const kecepatan = 200; // Kecepatan animasi (lebih rendah = lebih cepat)
        
        const updateHitung = (counter) => {
            const target = +counter.getAttribute('data-target');
            const hitung = +counter.innerText;
            const kenaikan = target / kecepatan;
            
            if (hitung < target) {
                counter.innerText = Math.ceil(hitung + kenaikan);
                setTimeout(() => updateHitung(counter), 1);
            } else {
                counter.innerText = target;
            }
        };
        
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    updateHitung(counter);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counter.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Tambahkan pemanggilan fungsi tanganiCounter di inisialisasi fungsi
    tanganiCounter();

    // Tambahkan fungsi untuk scroll horizontal
    function tanganiScrollHorizontal() {
        const kontainerScroll = document.querySelector('.projects-horizontal-scroll');
        const garisScroll = document.querySelector('.scroll-progress');
        const panahKiri = document.querySelector('.scroll-arrow.left');
        const panahKanan = document.querySelector('.scroll-arrow.right');
        
        if (!kontainerScroll) return;
        
        // Update indikator progres scroll
        function updateProgresScroll() {
            const lebarScroll = kontainerScroll.scrollWidth;
            const scrollKiri = kontainerScroll.scrollLeft;
            const lebarKontainer = kontainerScroll.clientWidth;
            
            const persentaseScroll = (scrollKiri / (lebarScroll - lebarKontainer)) * 100;
            garisScroll.style.width = `${persentaseScroll}%`;
        }
        
        // Scroll dengan panah
        panahKiri.addEventListener('click', () => {
            kontainerScroll.scrollBy({
                left: -350,
                behavior: 'smooth'
            });
        });
        
        panahKanan.addEventListener('click', () => {
            kontainerScroll.scrollBy({
                left: 350,
                behavior: 'smooth'
            });
        });
        
        // Update progres saat scroll
        kontainerScroll.addEventListener('scroll', updateProgresScroll);
        
        // Inisialisasi indikator progres
        updateProgresScroll();
        
        // Modifikasi pemfilteran proyek
        const tombolFilter = document.querySelectorAll('.filter-btn');
        
        tombolFilter.forEach(tombol => {
            tombol.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Hapus kelas active dari semua tombol
                tombolFilter.forEach(btn => btn.classList.remove('active'));
                
                // Tambahkan kelas active ke tombol yang diklik
                this.classList.add('active');
                
                // Filter proyek
                const kartuProyek = document.querySelectorAll('.project-card');
                
                kartuProyek.forEach(kartu => {
                    const kategoriKartu = kartu.getAttribute('data-category');
                    
                    if (filter === 'all' || kategoriKartu === filter) {
                        kartu.style.display = 'flex';
                    } else {
                        kartu.style.display = 'none';
                    }
                });
                
                // Reset posisi scroll dan update progres
                kontainerScroll.scrollLeft = 0;
                updateProgresScroll();
            });
        });
    }

    // Tambahkan pemanggilan fungsi tanganiScrollHorizontal di inisialisasi fungsi
    tanganiScrollHorizontal();

    // Service Worker dimatikan untuk pengembangan lokal
    // Aktifkan kembali sebelum deploy ke produksi
    /*
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Pendaftaran ServiceWorker berhasil dengan lingkup: ', registration.scope);
                })
                .catch(error => {
                    console.log('Pendaftaran ServiceWorker gagal: ', error);
                });
        });
    }
    */
}); 