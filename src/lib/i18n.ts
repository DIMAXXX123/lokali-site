export type Lang = "cg" | "en" | "ru";

export const translations = {
  nav: {
    home: { cg: "Početna", en: "Home", ru: "Главная" },
    portfolio: { cg: "Portfolio", en: "Portfolio", ru: "Портфолио" },
    services: { cg: "Paketi", en: "Pricing", ru: "Пакеты" },
    about: { cg: "O nama", en: "About", ru: "О нас" },
    howItWorks: { cg: "Kako funkcioniše", en: "How it works", ru: "Как это работает" },
    contact: { cg: "Kontakt", en: "Contact", ru: "Контакт" },
  },
  hero: {
    headline: {
      cg: "Vaši gosti čekaju odgovor.\nMi se pobrinemo da ga dobiju — odmah.",
      en: "Your guests are waiting for a reply.\nWe make sure they get one — instantly.",
      ru: "Ваши гости ждут ответа.\nМы позаботимся, чтобы они его получили — мгновенно.",
    },
    subheadline: {
      cg: "Automatizujemo komunikaciju, rezervacije i recenzije za restorane, hotele i apartmane u Crnoj Gori. Vi se fokusirajte na goste — mi brinemo o ostatku.",
      en: "We automate communication, bookings, and reviews for restaurants, hotels, and rentals across Montenegro. You focus on your guests — we handle the rest.",
      ru: "Автоматизируем коммуникацию, бронирования и отзывы для ресторанов, отелей и аренды в Черногории. Вы занимаетесь гостями — мы берём на себя остальное.",
    },
    cta: {
      cg: "Zakažite besplatan poziv",
      en: "Book a free call",
      ru: "Записаться на бесплатный звонок",
    },
  },
  benefits: [
    {
      icon: "clock",
      title: {
        cg: "Odgovor za 30 sekundi, 24/7",
        en: "30-second replies, 24/7",
        ru: "Ответ за 30 секунд, 24/7",
      },
      description: {
        cg: "Vaši gosti dobijaju trenutni odgovor — čak i u 3 ujutru. Bez propuštenih poruka, bez izgubljenih rezervacija.",
        en: "Your guests get instant answers — even at 3 AM. No missed messages, no lost bookings.",
        ru: "Ваши гости получают мгновенный ответ — даже в 3 часа ночи. Ни одного потерянного сообщения, ни одной упущенной брони.",
      },
    },
    {
      icon: "chart",
      title: {
        cg: "Do 40% više direktnih rezervacija",
        en: "Up to 40% more direct bookings",
        ru: "До 40% больше прямых бронирований",
      },
      description: {
        cg: "Automatski odgovarajte na upite, predlažite slobodne termine i zaključujte rezervacije — bez posrednika.",
        en: "Automatically respond to inquiries, suggest available dates, and close reservations — no middleman needed.",
        ru: "Автоматически отвечайте на запросы, предлагайте свободные даты и закрывайте брони — без посредников.",
      },
    },
    {
      icon: "globe",
      title: {
        cg: "Govori jezik vaših gostiju",
        en: "Speaks your guests' language",
        ru: "Говорит на языке ваших гостей",
      },
      description: {
        cg: "Automatska komunikacija na crnogorskom, engleskom, ruskom, njemačkom i drugim jezicima. Bez barijera.",
        en: "Automatic communication in Montenegrin, English, Russian, German, and more. Zero language barriers.",
        ru: "Автоматическая коммуникация на черногорском, английском, русском, немецком и других языках. Никаких языковых барьеров.",
      },
    },
    {
      icon: "wrench",
      title: {
        cg: "Spremno za 3-5 dana",
        en: "Ready in 3–5 days",
        ru: "Готово за 3–5 дней",
      },
      description: {
        cg: "Bez komplikovanih integracija. Postavimo, obučimo i pokrenemo — vi vidite rezultate odmah.",
        en: "No complex integrations. We set it up, train it, and launch — you see results right away.",
        ru: "Никаких сложных интеграций. Настраиваем, обучаем и запускаем — вы видите результат сразу.",
      },
    },
  ],
  services: {
    packages: [
      {
        icon: "chat",
        name: {
          cg: "Automatski Chat & Rezervacije",
          en: "AI Chat & Booking",
          ru: "Умный Чат и Бронирования",
        },
        description: {
          cg: "Vaš digitalni asistent koji odgovara gostima non-stop — na bilo kojem jeziku. Prima upite, predlaže termine i zaključuje rezervacije umjesto vas.",
          en: "Your digital assistant that replies to guests around the clock — in any language. It handles inquiries, suggests availability, and closes bookings for you.",
          ru: "Ваш цифровой ассистент, который отвечает гостям круглосуточно — на любом языке. Принимает запросы, предлагает свободные даты и закрывает бронирования за вас.",
        },
        features: {
          cg: [
            "Pametni chat na vašem sajtu (widget)",
            "Automatski odgovori na WhatsApp i Instagram DM",
            "Rezervacije i potvrde bez vašeg učešća",
            "Odgovori na najčešća pitanja",
            "Podrška za 10+ jezika",
            "Mjesečni izvještaj o upitima i rezervacijama",
          ],
          en: [
            "Smart chat widget on your website",
            "Automated replies on WhatsApp and Instagram DM",
            "Bookings and confirmations without your involvement",
            "Answers to common questions",
            "Support for 10+ languages",
            "Monthly report on inquiries and bookings",
          ],
          ru: [
            "Умный чат-виджет на вашем сайте",
            "Автоматические ответы в WhatsApp и Instagram DM",
            "Бронирования и подтверждения без вашего участия",
            "Ответы на частые вопросы",
            "Поддержка 10+ языков",
            "Ежемесячный отчёт по запросам и бронированиям",
          ],
        },
        price: "149",
        cta: {
          cg: "Želim automatske rezervacije",
          en: "I want automated bookings",
          ru: "Хочу автоматические бронирования",
        },
      },
      {
        icon: "qr",
        name: {
          cg: "QR Meni & Sadržaj",
          en: "QR Menu & Content",
          ru: "QR-Меню и Контент",
        },
        description: {
          cg: "Digitalni meni sa QR kodom koji vaši gosti skeniraju za sekundu. Višejezični, sa slikama, opisima i alergenima.",
          en: "A digital menu with a QR code your guests scan in a second. Multilingual, with photos, descriptions, and allergen info.",
          ru: "Цифровое меню с QR-кодом, которое гости сканируют за секунду. Мультиязычное, с фото, описаниями и информацией об аллергенах.",
        },
        features: {
          cg: [
            "Digitalni meni sa QR kodom",
            "Automatski prevod na 5+ jezika",
            "Profesionalni opisi jela",
            "Panel za samostalno ažuriranje",
            "Prilagođen dizajn za vaš brend",
          ],
          en: [
            "Digital menu with QR code",
            "Automatic translation into 5+ languages",
            "Professional dish descriptions",
            "Self-service update panel",
            "Custom design matching your brand",
          ],
          ru: [
            "Цифровое меню с QR-кодом",
            "Автоматический перевод на 5+ языков",
            "Профессиональные описания блюд",
            "Панель самостоятельного обновления",
            "Индивидуальный дизайн под ваш бренд",
          ],
        },
        price: "79",
        cta: {
          cg: "Hoću digitalni meni",
          en: "I want a digital menu",
          ru: "Хочу цифровое меню",
        },
      },
      {
        icon: "message",
        name: {
          cg: "Komunikacija sa Gostima",
          en: "Guest Communication",
          ru: "Коммуникация с Гостями",
        },
        description: {
          cg: "Automatske poruke gostima prije, tokom i poslije boravka. Check-in instrukcije, preporuke za restorane, obavještenja o odjavi.",
          en: "Automated messages to guests before, during, and after their stay. Check-in instructions, restaurant tips, checkout reminders.",
          ru: "Автоматические сообщения гостям до, во время и после пребывания. Инструкции по заселению, рекомендации ресторанов, напоминания о выезде.",
        },
        features: {
          cg: [
            "Automatska poruka dobrodošlice",
            "Check-in instrukcije sa mapom",
            "Lokalne preporuke",
            "Poruka za check-out i zahvalnica",
            "WhatsApp, Viber, SMS ili email",
            "Personalizovano za svaki objekat",
          ],
          en: [
            "Automatic welcome message",
            "Check-in instructions with map",
            "Local recommendations",
            "Check-out message and thank-you note",
            "WhatsApp, Viber, SMS, or email",
            "Personalized for each property",
          ],
          ru: [
            "Автоматическое приветственное сообщение",
            "Инструкции по заселению с картой",
            "Локальные рекомендации",
            "Сообщение при выезде и благодарность",
            "WhatsApp, Viber, SMS или email",
            "Персонализировано для каждого объекта",
          ],
        },
        price: "99",
        cta: {
          cg: "Želim bolju komunikaciju sa gostima",
          en: "I want better guest communication",
          ru: "Хочу лучшую коммуникацию с гостями",
        },
      },
      {
        icon: "star",
        name: {
          cg: "Recenzije & Reputacija",
          en: "Reviews & Reputation",
          ru: "Отзывы и Репутация",
        },
        description: {
          cg: "Automatski tražimo recenzije od zadovoljnih gostiju i pomažemo vam da odgovorite na svaku — brzo i profesionalno.",
          en: "We automatically ask happy guests to leave a review and help you respond to every one — quickly and professionally.",
          ru: "Автоматически просим довольных гостей оставить отзыв и помогаем вам ответить на каждый — быстро и профессионально.",
        },
        features: {
          cg: [
            "Automatski zahtjev za recenziju",
            "Usmjeravanje na Google, TripAdvisor, Booking",
            "Generisani odgovori na recenzije",
            "Obavještenje o novim recenzijama",
            "Mjesečni izvještaj o reputaciji",
          ],
          en: [
            "Automatic review request after checkout",
            "Smart routing to Google, TripAdvisor, Booking",
            "Pre-written review responses",
            "Real-time notifications for new reviews",
            "Monthly reputation report",
          ],
          ru: [
            "Автоматический запрос отзыва после выезда",
            "Перенаправление на Google, TripAdvisor, Booking",
            "Готовые ответы на отзывы",
            "Уведомления о новых отзывах",
            "Ежемесячный отчёт по репутации",
          ],
        },
        price: "89",
        cta: {
          cg: "Želim više pozitivnih recenzija",
          en: "I want more positive reviews",
          ru: "Хочу больше положительных отзывов",
        },
      },
    ],
    combo: {
      name: {
        cg: "Sve u jednom — Kompletno rješenje",
        en: "All-in-One — Complete Solution",
        ru: "Всё включено — Полное решение",
      },
      description: {
        cg: "Sva 4 paketa zajedno po posebnoj cijeni. Za one koji žele potpunu automatizaciju od prvog kontakta do posljednje recenzije.",
        en: "All 4 packages bundled at a special price. For those who want full automation from first contact to last review.",
        ru: "Все 4 пакета вместе по специальной цене. Для тех, кто хочет полную автоматизацию — от первого контакта до последнего отзыва.",
      },
      price: "349",
      oldPrice: "416",
      cta: {
        cg: "Hoću kompletno rješenje",
        en: "I want the full package",
        ru: "Хочу полное решение",
      },
    },
  },
  howItWorks: {
    headline: {
      cg: "Kako to funkcioniše?",
      en: "How does it work?",
      ru: "Как это работает?",
    },
    subheadline: {
      cg: "Četiri koraka od prvog poziva do prvih rezultata.",
      en: "Four steps from first call to first results.",
      ru: "Четыре шага от первого звонка до первых результатов.",
    },
    steps: [
      {
        icon: "phone",
        title: { cg: "Javite nam se", en: "Get in touch", ru: "Свяжитесь с нами" },
        description: {
          cg: "Popunite formu ili nas pozovite. Razgovaramo 15 minuta — besplatno, bez obaveza.",
          en: "Fill out the form or give us a call. We chat for 15 minutes — free, no strings attached.",
          ru: "Заполните форму или позвоните. Поговорим 15 минут — бесплатно, без обязательств.",
        },
      },
      {
        icon: "search",
        title: { cg: "Analiziramo vaš biznis", en: "We analyze your business", ru: "Анализируем ваш бизнес" },
        description: {
          cg: "Pogledamo vaš sajt, socijalne mreže, način komunikacije sa gostima. Predlažemo tačno rješenje koje vam treba.",
          en: "We review your website, social media, and how you communicate with guests. We propose the exact solution you need.",
          ru: "Смотрим ваш сайт, соцсети, как вы общаетесь с гостями. Предлагаем именно то решение, которое вам нужно.",
        },
      },
      {
        icon: "gear",
        title: { cg: "Postavljamo za 3-5 dana", en: "We set up in 3–5 days", ru: "Настраиваем за 3–5 дней" },
        description: {
          cg: "Konfigurišemo sve: odgovore, ton komunikacije, jezike, integracije. Vi samo odobrite — mi radimo.",
          en: "We configure everything: replies, communication tone, languages, integrations. You approve — we do the work.",
          ru: "Конфигурируем всё: ответы, тон общения, языки, интеграции. Вы одобряете — мы делаем.",
        },
      },
      {
        icon: "rocket",
        title: { cg: "Pokrećemo + podržavamo", en: "Launch + ongoing support", ru: "Запуск + поддержка" },
        description: {
          cg: "Puštamo u rad i pratimo rezultate. Ako nešto treba prilagoditi — prilagodimo. Podrška je uključena, uvijek.",
          en: "We go live and monitor results. If something needs tweaking — we tweak it. Support is always included.",
          ru: "Запускаем и отслеживаем результаты. Если что-то нужно подкрутить — подкрутим. Поддержка включена всегда.",
        },
      },
    ],
  },
  about: {
    headline: {
      cg: "Digitalna rješenja za vaš biznis u Crnoj Gori.",
      en: "Digital solutions for your business in Montenegro.",
      ru: "Цифровые решения для вашего бизнеса в Черногории.",
    },
    text: {
      cg: "SmartBay je agencija koja pomaže restoranima, hotelima i apartmanima u Crnoj Gori da automatizuju komunikaciju sa gostima. Znamo kako izgleda sezona — gužva, milion poruka, gosti koji čekaju odgovor, a vi jedva stižete.\n\nZato smo napravili nešto praktično: digitalne alate koji odgovaraju umjesto vas, primaju rezervacije i traže recenzije. Bez komplikacija, bez skupih sistema — samo ono što vam treba da radite manje, a zaradite više.\n\nPoznajemo crnogorski turizam iznutra i koristimo najnoviju tehnologiju da vam pomognemo da rastete.",
      en: "SmartBay is an agency that helps restaurants, hotels, and rentals in Montenegro automate their guest communication. We know what the season looks like — the rush, a thousand messages, guests waiting for a reply while you can barely keep up.\n\nThat's why we built something practical: digital tools that reply on your behalf, take bookings, and collect reviews. No complexity, no expensive systems — just what you need to work less and earn more.\n\nWe know Montenegrin hospitality inside out and use the latest technology to help you grow.",
      ru: "SmartBay — это агентство, которое помогает ресторанам, отелям и апартаментам в Черногории автоматизировать коммуникацию с гостями. Мы знаем, как выглядит сезон — суета, тысяча сообщений, гости ждут ответа, а вы едва успеваете.\n\nПоэтому мы создали кое-что практичное: цифровые инструменты, которые отвечают за вас, принимают бронирования и собирают отзывы. Без сложностей, без дорогих систем — только то, что нужно, чтобы работать меньше, а зарабатывать больше.\n\nМы знаем черногорский туризм изнутри и используем новейшие технологии, чтобы помочь вам расти.",
    },
    whyUs: {
      headline: { cg: "Zašto mi?", en: "Why us?", ru: "Почему мы?" },
      reasons: [
        {
          icon: "home",
          title: { cg: "Lokalni smo.", en: "We're local.", ru: "Мы местные." },
          description: {
            cg: "Govorimo vaš jezik, znamo vaše probleme, razumijemo sezonu.",
            en: "We speak your language, know your challenges, and understand the season.",
            ru: "Говорим на вашем языке, знаем ваши проблемы, понимаем сезон.",
          },
        },
        {
          icon: "zap",
          title: { cg: "Brzi smo.", en: "We're fast.", ru: "Мы быстрые." },
          description: {
            cg: "Postavljamo za 3-5 dana, ne za 3 mjeseca.",
            en: "Set up in 3–5 days, not 3 months.",
            ru: "Настройка за 3–5 дней, а не за 3 месяца.",
          },
        },
        {
          icon: "coins",
          title: { cg: "Pristupačni smo.", en: "We're affordable.", ru: "Мы доступные." },
          description: {
            cg: "Bez velikih unaprijed troškova. Plaćate mjesečno, otkazujete kad hoćete.",
            en: "No big upfront costs. Pay monthly, cancel anytime.",
            ru: "Без больших предоплат. Платите помесячно, отменяете когда хотите.",
          },
        },
        {
          icon: "handshake",
          title: { cg: "Lični pristup.", en: "Personal touch.", ru: "Личный подход." },
          description: {
            cg: "Nismo korporacija. Radimo direktno sa vama. Kad pozovete — javimo se mi.",
            en: "We're not a corporation. We work directly with you. When you call — we pick up.",
            ru: "Мы не корпорация. Работаем напрямую с вами. Когда звоните — отвечаем мы.",
          },
        },
      ],
    },
  },
  faq: {
    headline: { cg: "Česta pitanja", en: "Frequently asked questions", ru: "Часто задаваемые вопросы" },
    items: [
      {
        question: {
          cg: "Da li trebam tehničko znanje da koristim vaše usluge?",
          en: "Do I need technical knowledge to use your services?",
          ru: "Нужны ли мне технические знания для использования ваших услуг?",
        },
        answer: {
          cg: "Ne. Mi postavljamo sve za vas. Vi samo odobrite sadržaj i ton komunikacije — ostatak je na nama.",
          en: "No. We set up everything for you. You just approve the content and communication tone — the rest is on us.",
          ru: "Нет. Мы настраиваем всё за вас. Вы только утверждаете контент и тон общения — остальное на нас.",
        },
      },
      {
        question: {
          cg: "Koliko traje postavljanje?",
          en: "How long does setup take?",
          ru: "Сколько длится настройка?",
        },
        answer: {
          cg: "Obično 3-5 radnih dana. Za složenije projekte može trajati do 7 dana.",
          en: "Usually 3–5 business days. For more complex projects, it can take up to 7 days.",
          ru: "Обычно 3–5 рабочих дней. Для более сложных проектов — до 7 дней.",
        },
      },
      {
        question: {
          cg: "Mogu li otkazati pretplatu?",
          en: "Can I cancel my subscription?",
          ru: "Могу ли я отменить подписку?",
        },
        answer: {
          cg: "Da, možete otkazati bilo kada. Nema ugovora na duži period — plaćate mjesečno.",
          en: "Yes, you can cancel anytime. There are no long-term contracts — you pay monthly.",
          ru: "Да, вы можете отменить в любое время. Нет долгосрочных контрактов — платите помесячно.",
        },
      },
      {
        question: {
          cg: "Na kojim jezicima funkcioniše AI asistent?",
          en: "What languages does the AI assistant support?",
          ru: "На каких языках работает AI-ассистент?",
        },
        answer: {
          cg: "Podržava 10+ jezika uključujući crnogorski, engleski, ruski, njemački, italijanski, francuski i druge.",
          en: "It supports 10+ languages including Montenegrin, English, Russian, German, Italian, French, and more.",
          ru: "Поддерживает 10+ языков, включая черногорский, английский, русский, немецкий, итальянский, французский и другие.",
        },
      },
      {
        question: {
          cg: "Da li AI stvarno zvuči prirodno?",
          en: "Does the AI really sound natural?",
          ru: "AI действительно звучит естественно?",
        },
        answer: {
          cg: "Da. Prilagođavamo ton komunikacije vašem brendu. Gosti neće znati da razgovaraju sa automatom.",
          en: "Yes. We customize the communication tone to match your brand. Guests won't know they're talking to an automated system.",
          ru: "Да. Мы настраиваем тон общения под ваш бренд. Гости не поймут, что разговаривают с автоматом.",
        },
      },
    ],
  },
  ctaBanner: {
    headline: {
      cg: "Spremni da prestanete gubiti goste?",
      en: "Ready to stop losing guests?",
      ru: "Готовы перестать терять гостей?",
    },
    subheadline: {
      cg: "Besplatan poziv od 15 minuta. Bez obaveza. Kažemo vam tačno šta možemo uraditi za vas.",
      en: "Free 15-minute call. No strings attached. We'll tell you exactly what we can do for you.",
      ru: "Бесплатный 15-минутный звонок. Без обязательств. Расскажем, что конкретно можем сделать для вас.",
    },
    cta: {
      cg: "Zakažite poziv",
      en: "Book a call",
      ru: "Записаться на звонок",
    },
  },
  contact: {
    headline: { cg: "Hajde da pričamo.", en: "Let's talk.", ru: "Давайте поговорим." },
    subheadline: {
      cg: "Popunite formu ili nam pišite direktno. Odgovaramo u roku od 2 sata — obećavamo.",
      en: "Fill out the form or message us directly. We reply within 2 hours — promise.",
      ru: "Заполните форму или напишите нам напрямую. Отвечаем в течение 2 часов — обещаем.",
    },
    form: {
      name: { cg: "Ime i prezime", en: "Full name", ru: "Имя и фамилия" },
      email: { cg: "Email", en: "Email", ru: "Email" },
      phone: { cg: "Telefon (opciono)", en: "Phone (optional)", ru: "Телефон (необязательно)" },
      businessType: { cg: "Tip biznisa", en: "Business type", ru: "Тип бизнеса" },
      businessOptions: {
        cg: ["Restoran", "Hotel", "Apartmani", "Drugo"],
        en: ["Restaurant", "Hotel", "Apartments", "Other"],
        ru: ["Ресторан", "Отель", "Апартаменты", "Другое"],
      },
      message: { cg: "Poruka", en: "Message", ru: "Сообщение" },
      submit: { cg: "Pošalji upit", en: "Send inquiry", ru: "Отправить заявку" },
    },
  },
  footer: {
    copy: {
      cg: "SmartBay. Digitalna rješenja za turizam i ugostiteljstvo u Crnoj Gori.",
      en: "SmartBay. Digital solutions for hospitality and tourism in Montenegro.",
      ru: "SmartBay. Цифровые решения для туризма и гостеприимства в Черногории.",
    },
  },
} as const;
