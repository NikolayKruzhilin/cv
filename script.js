// === Translations ===
const translations = {
    ru: {
        nav_home: "Главная",
        nav_cv: "Резюме",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        chat_title: "Чат с nikol.AI",
        online_status: "В сети",
        welcome_message: "Привет! Я nikol.AI, ваш виртуальный ассистент. Как дела? Чем могу помочь?",
        input_placeholder: "Введите сообщение...",
        cv_title: "Резюме",
        cv_name: "Николай Кружилин",
        cv_position: "Менеджер продукта / Product Manager / Product Owner",
        cv_description: "Менеджер продукта с опытом развития цифровых продуктов в B2G, B2B и EdTech. Работаю с полным циклом развития продукта: исследование пользователей и рынка, формирование продуктовой стратегии, постановка целей и KPI, разработка roadmap, управление бэклогом, приоритизация, постановка требований, взаимодействие с разработкой, запуск и анализ результатов. Опыт развития web и mobile-продуктов, пользовательских сценариев, продуктовой аналитики и UX. Управляю кросс-функциональными командами разработки, дизайна, QA, технических писателей и поддержки. Работал с государственными заказчиками, B2B-клиентами, международными партнёрами и пользователями на русском, английском и китайском языках.",
        cv_skills: "Технические навыки",
        cv_experience: "Опыт работы",
        cv_exp_items: [
            { role: "Менеджер продукта / Product Owner", company: "Государство Детей", period: "Октябрь 2025 — настоящее время", body: "Развиваю два цифровых B2G-продукта: публичный web-сервис «Навигатор дополнительного образования» и административную платформу для организаций, муниципальных и региональных администраторов. Публичный сервис достигает нескольких миллионов MAU в 40+ регионах России.<br><br><strong>Стратегия и планирование</strong><br>• Формирую продуктовые направления на основе целей продукта, пользовательских проблем, обратной связи регионов и государственных заказчиков.<br>• Декомпозирую стратегические цели на измеримые продуктовые результаты; формирую и поддерживаю долгосрочный roadmap.<br>• Использую OKR/KPI, дерево продуктовых метрик и RICE/MoSCoW для постановки целей и приоритизации инициатив.<br><br><strong>Продуктовая аналитика</strong><br>• Анализирую продуктовые показатели в Яндекс Метрике: DAU, воронки, конверсию, поведение пользователей.<br>• За год снизил показатель отказов примерно на <strong>10%</strong>; сократил время от входа в сценарий до оформления заявки на <strong>~30%</strong>.<br>• Использую метрики до и после релиза для оценки результата изменений и определения следующих продуктовых гипотез.<br>• Провожу анализ результатов продуктовых изменений по отдельным регионам и использую результаты пилотных запусков для принятия решений о дальнейшем масштабировании.<br><br><strong>Discovery и UX</strong><br>• Провожу анализ пользовательских сценариев, собираю обратную связь от пользователей, региональных администраторов и поддержки.<br>• Использую CJM и анализ пути пользователя для поиска точек трения.<br>• Использую обращения в поддержку и AI-бот поддержки как дополнительный источник продуктовых данных.<br><br><strong>Развитие продукта</strong><br>• Руководил развитием поиска, каталога, фильтров и пользовательского пути.<br>• Разработал требования к режиму для слабовидящих, внедрённому в <strong>40+ регионах</strong>.<br>• Участвую в развитии AI-инструментов, аналитических дашбордов для администраторов.<br><br><strong>Delivery</strong><br>• Управляю бэклогом, координирую кросс-функциональную команду (backend/frontend, QA, дизайн, техписатели, поддержка, юристы).<br>• Работаю с интеграциями с ЕПГУ, РПГУ, СМЭВ, УНП и другими государственными системами." },
            { role: "Менеджер продукта / Product Manager", company: "Zhejiang Hongji New Energy Technology", period: "Май 2023 — Август 2025", body: "Развивал международный B2B-продукт в сфере thermal coating. Работал на стыке продукта, маркетинга, международных продаж и digital.<br><br>• Проводил анализ потенциальных рынков: размер и динамика рынка, конкуренты, целевые сегменты, барьеры входа и требования к продукту.<br>• Оценивал привлекательность рынков по совокупности критериев и определял приоритетные направления развития.<br>• Формировал предложения по развитию продукта на основе анализа рынка, обратной связи клиентов и конкурентной среды.<br>• Работал с международными клиентами, партнёрами и дистрибьюторами: собирал требования, согласовывал продуктовые решения.<br>• Проводил презентации и переговоры на английском и китайском языках.<br>• Отвечал за развитие корпоративного сайта как основного digital-инструмента: формировал требования к структуре, контенту и UX, координировал дизайнеров, разработчиков и подрядчиков.<br>• Работал одновременно с несколькими международными проектами и стейкхолдерами." },
            { role: "Менеджер продукта / Product Manager", company: "i2 International Education Center", period: "Октябрь 2021 — Март 2023", body: "Развивал два цифровых продукта в EdTech: внутреннюю CRM-платформу для преподавателей и мобильное приложение для изучения английского языка.<br><br>• Проводил интервью с преподавателями и пользователями, выявлял проблемы в основных сценариях и переводил результаты в требования к продукту.<br>• Работал над onboarding и пользовательским опытом: анализировал путь пользователя, выявлял точки отвалов.<br>• Участвовал в развитии мобильного приложения для изучения английского: формировал требования, собирал обратную связь.<br>• Координировал масштабирование продуктов на <strong>88 кампусов в 17 городах</strong>.<br>• Обучил более <strong>40 иностранных преподавателей</strong> работе с цифровыми продуктами.<br>• Работал с международными командами на английском языке; сотрудничал с Trinity College London." },
            { role: "Менеджер по продуктовому маркетингу / Product Marketing Manager", company: "Yangcai Information Consulting Co., Ltd", period: "Август 2018 — Май 2021", body: "Работал с digital-проектами китайских компаний, ориентированных на международные рынки. Вёл несколько проектов одновременно: сайты, мобильные приложения, digital-маркетинг, SEO и запуск продуктов.<br><br>• Проводил анализ проектов: требования заказчика, целевая аудитория, рынок, конкуренты.<br>• Формировал предложения по структуре digital-продуктов, пользовательским сценариям и контенту.<br>• Координировал кросс-функциональные команды: копирайтинг, перевод, дизайн, фото/видео, SEO, разработка.<br>• Презентовал решения китайским и международным заказчикам на английском и китайском языках.<br>• Работал с SEO: анализировал поисковый спрос, структуру сайтов и эффективность трафика.<br>• Участвовал в A/B-тестировании маркетинговых и продуктовых решений.<br>• Использовал Figma и Miro для проектирования сценариев; применял Scrum и RICE для планирования." }
        ],
        cv_education: "Образование",
        cv_edu_desc: "<p><strong>Специалист</strong> — Перевод и переводоведение (английский и китайский языки), Томский Государственный Университет (с отличием), 2013.</p> <p>Годичный курс, Ляонинский Педагогический Университет (2013–2014).</p>",
        projects_title: "Проекты",
        project1_title: "EdTech Web App",
        project1_desc: "Рабочее веб-приложение, используемое преподавателями для подготовки к занятиям и практики студентов.",
        project1_details: "Рабочее веб‑приложение, помогающее преподавателям оптимизировать подготовку уроков и планирование практических занятий. <a href=\"https://nikolaykruzhilin.github.io/lingua_prep/\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на приложение</a>",
        project1_media: [],
        project2_title: "Плагин для слабовидящих",
        project2_desc: "Плагин доступности, который я разработал — сейчас используется в Навигаторах ДО более чем в 40 регионах.",
        project2_details: "Плагин для слабовидящих: увеличивает шрифт, меняет контраст и упрощает навигацию по сайту. Внедрён в Навигаторах дополнительного образования детей более чем в 40 регионах России. <a href=\"https://github.com/NikolayKruzhilin/visually_impaired_plugin_v2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> · <a href=\"https://nikolaykruzhilin.github.io/visually_impaired_plugin_v2/\" target=\"_blank\" rel=\"noopener noreferrer\">Демо</a>",
        project2_media: [],
        project3_title: "BMW x BOLT",
        project3_desc: "Кампейн с BOLT studio — поддержка возвращения BMW на китайский рынок после локдауна: позитивный визуальный рассказ и кинематографичный ролик.",
        project3_details: "Работа над рекламной кампанией с BOLT production: концепция, съёмки и монтаж, фокус на позитивной истории и возрождении бренда на рынке.",
        project3_media: [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ],
        project4_title: "Tracy's Dog",
        project4_desc: "Продуктовая фотосъёмка, бренд‑стратегия и контент для соцсетей с фокусом на любви и интимности.",
        project4_details: "Разработка визуального стиля, фотосессии для e-commerce и создание контент-стратегии для Instagram и сайта. <a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Перейти на сайт</a>",
        project4_media: [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy's Dog" } ],
        project5_title: "Donner",
        project5_desc: "Фотография и видео для музыкальных инструментов — маркетинговые материалы и продуктовые видео.",
        project5_details: "Съёмки продуктов, пост‑продакшн видеороликов и создание ассетов для онлайн‑маркетинга.",
        project5_media: [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ],
        project6_title: "Kwan Yee Gor",
        project6_desc: "Кампейн для бренда геля для волос — концепция видео, режиссура и продакшн.",
        project6_details: "Режиссура и постановка рекламного видео, продакшн‑сопровождение; продуктовая фотосъёмка для listings.",
        project6_media: [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ],
        project7_title: "AIC Thermal Coating",
        project7_desc: "Продуктовый менеджмент и маркетинг для AIC — упаковка, сайт и координация команд.",
        project7_details: "Организация межкомандной работы, дизайн упаковки, материалы для продаж и веб‑презентация продукта.",
        project7_media: [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ],
        project8_title: "Zen & Zany",
        project8_desc: "Фриланс‑работы по фото и видео для различных брендов и кампаний.",
        project8_details: "Креативный контент, видеомонтаж и фотография для рекламных проектов.",
        project8_media: [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ],
        project9_title: "Cybersecurity",
        project9_desc: "Хобби: домашние серверы, SBC, автоматизация и инструментирование для мониторинга сети.",
        project9_details: "Эксперименты с ESP32 и Chameleon, развёртывание homelab и разработка инструментов для тестирования безопасности.",
        project9_media: [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ],
        project3_video_url: "https://vimeo.com/410880058",
        project5_video_url: "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4",
        project6_video_url: "https://www.youtube.com/watch?v=fdaAh7LNa6U",
        project8_video_url: "https://www.youtube.com/watch?v=efzwt1-cEug",
        project_video_link: "Ссылка на видео",
        nav_about: "Обо мне",
        about_title: "Обо мне",
        about_paragraph: "В прошлом я был профессиональным спортсменом, обладаю 2-м даном по карате и титулом чемпиона мира по версии IMGKA. Увлекаюсь уличной фотографией и преподаю фотографию и кинематографию. Активно занимаюсь волонтерством в приютах для животных и помогаю бездомным животным. Кроме того, я являюсь создателем проекта #createtodonate.",
        about_card_1_title: "Карате",
        about_card_1_desc: "Мой путь в карате начался в раннем возрасте. Я достиг 2-го дана, звание КМС и стал чемпионом мира по версии IMGKA. <br><a href=\"http://goju.tomsk.ru/%d0%b0%d1%80%d1%85%d0%b8%d0%b2/2009-2013/\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на сайт</a>",
        about_card_2_title: "Уличная фотография",
        about_card_2_desc: "Увлечение уличной фотографией позволяет мне захватывать моменты повседневной жизни. Вот некоторые из моих лучших работ.",
        about_card_3_title: "Преподавание",
        about_card_3_desc: "Провожу курсы по фотографии и кинематографии, помогая другим развивать свои творческие навыки. <br><a href=\"https://drive.google.com/file/d/1nT3mK1JcWLR3qKYz8srBitZair1Zzmep/view\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на видео</a>",
        about_card_4_title: "Волонтерство",
        about_card_4_desc: "Я регулярно помогаю в приютах для животных и ухаживаю за бездомными животными. <br><a href=\"https://www.youtube.com/watch?v=xkOxdTTbjfg\" target=\"_blank\" rel=\"noopener noreferrer\">Ссылка на видео</a>",
        about_card_5_title: "#createtodonate",
        about_card_5_desc: "#createtodonate - проект, где творчество используется для сбора средств на благотворительность.",
        about_card_6_title: "Блог в Instagram",
        about_card_6_desc: "Веду блог в инстаграм, где делюсь опытом, извлеченным из работы над разными проектами и экспериментах с ИИ. <br><a href=\"https://instagram.com/nikol.ai.kruzhilin\" target=\"_blank\" rel=\"noopener noreferrer\">@nikol.ai.kruzhilin</a>",
        cv_skill_sql: "SQL",
        cv_skill_linux: "Linux",
        cv_skill_jira: "Jira",
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "Кибербезопасность",
        cv_skill_6: "UX‑дизайн",
        cv_skill_7: "Управление проектами",
        cv_skill_8: "Интеграция API",
        cv_skill_10: "n8n автоматизация",
        cv_skill_11: "Контекстное проектирование",
        cv_skill_12: "Цифровой маркетинг",
        cv_skill_13: "Фотография",
        cv_skill_confluence: "Confluence",
        cv_skill_drawio: "Drawio",
        cv_skill_react: "React",
        contact_title: "Контактная информация",
        contact_email: "Электронная почта",
        contact_phone: "Телефон",
        bot_responses: [
            "Понимаю, интересный вопрос. Расскажите подробнее.",
            "Это действительно важная тема. Что вас больше всего беспокоит?",
            "Хороший вопрос! Позвольте подумать над этим.",
            "Звучит интересно. Какие у вас планы на этот счет?",
            "Я готов помочь. Есть ли еще что-то, что вас интересует?"
        ]
    },
    en: {
        nav_home: "Home",
        nav_cv: "Resume",
        nav_projects: "Projects",
        nav_contact: "Contact",
        chat_title: "Chat with nikol.AI",
        online_status: "Online",
        welcome_message: "Hello! I'm nikol.AI, your virtual assistant. How are you? How can I help?",
        input_placeholder: "Type a message...",
        cv_title: "Resume",
        cv_name: "Nikolay Kruzhilin",
        cv_position: "Product Manager / Product Owner",
        cv_description: "Product Manager with experience developing digital products in B2G, B2B, and EdTech. I work across the full product development cycle: user and market research, product strategy, goal-setting and KPIs, roadmap development, backlog management, prioritization, requirements, collaboration with engineering, launch, and results analysis. Experience with web and mobile products, user flows, product analytics, and UX. I lead cross-functional teams across engineering, design, QA, technical writing, and support. Worked with government clients, B2B customers, international partners, and users in Russian, English, and Chinese.",
        cv_skills: "Technical Skills",
        cv_experience: "Work Experience",
        cv_exp_items: [
            { role: "Product Manager / Product Owner", company: "Gosudarstvo Detey", period: "October 2025 — Present", body: "Developing two digital B2G products: the public web service \"Navigator of Supplementary Education\" and an administrative platform for organizations, municipal and regional administrators. The public service reaches several million MAU across 40+ regions of Russia.<br><br><strong>Strategy &amp; Planning</strong><br>• Build product directions based on product goals, user problems, regional and government stakeholder feedback.<br>• Decompose strategic goals into measurable product outcomes; maintain a long-term roadmap.<br>• Use OKR/KPI, product metrics tree, and RICE/MoSCoW for goal-setting and prioritization.<br><br><strong>Product Analytics</strong><br>• Analyze product metrics in Yandex Metrica: DAU, funnels, conversion, user behavior.<br>• Reduced bounce rate by ~<strong>10%</strong> over a year; cut time from funnel entry to enrollment by ~<strong>30%</strong>.<br>• Use pre- and post-release metrics to evaluate the impact of changes and define the next product hypotheses.<br>• Analyze product change results by individual region and use pilot launch outcomes to make decisions on further scaling.<br><br><strong>Discovery &amp; UX</strong><br>• Conduct user flow analysis, gather feedback from users, regional admins, and support.<br>• Use CJM and user journey analysis to identify friction points.<br>• Use support tickets and an AI support bot as additional sources of product insights.<br><br><strong>Product Development</strong><br>• Led development of search, catalog, filters, and user journey.<br>• Defined requirements for a visual accessibility mode deployed across <strong>40+ regions</strong>.<br>• Involved in AI tools development and analytics dashboards for administrators.<br><br><strong>Delivery</strong><br>• Manage the product backlog; coordinate a cross-functional team (backend/frontend, QA, design, technical writers, support, legal).<br>• Work with government system integrations: EPGU, RPGU, SMEV, UNP, and others." },
            { role: "Product Manager", company: "Zhejiang Hongji New Energy Technology", period: "May 2023 — August 2025", body: "Developed an international B2B product in the thermal coating space. Worked at the intersection of product, marketing, international sales, and digital.<br><br>• Analyzed potential markets: market size and dynamics, competitors, target segments, barriers to entry, and product requirements.<br>• Evaluated market attractiveness across multiple criteria and identified priority development directions.<br>• Shaped product development proposals based on market analysis, customer feedback, and competitive landscape.<br>• Worked with international clients, partners, and distributors: gathered requirements, aligned on product decisions.<br>• Conducted presentations and negotiations in English and Chinese.<br>• Owned the corporate website as the primary digital product: defined structural, content, and UX requirements; coordinated designers, developers, and contractors.<br>• Managed multiple international projects and stakeholders simultaneously." },
            { role: "Product Manager", company: "i2 International Education Center", period: "October 2021 — March 2023", body: "Developed two digital products in EdTech: an internal CRM platform for teachers and a mobile English learning app.<br><br>• Conducted interviews with teachers and users, identified friction in core flows, and translated findings into product requirements.<br>• Worked on onboarding and user experience: analyzed the user journey and identified drop-off points.<br>• Contributed to the mobile English learning app: defined requirements and gathered user feedback.<br>• Coordinated scaling of academic products across <strong>88 campuses in 17 cities</strong>.<br>• Trained more than <strong>40 foreign teachers</strong> to work with digital products and internal systems.<br>• Worked with international teams in English; collaborated with Trinity College London." },
            { role: "Product Marketing Manager", company: "Yangcai Information Consulting Co., Ltd", period: "August 2018 — May 2021", body: "Worked on digital projects for Chinese companies targeting international markets. Managed multiple concurrent projects: websites, mobile apps, digital marketing, SEO, and product launches.<br><br>• Conducted project analysis: client requirements, target audience, market, and competitors.<br>• Shaped proposals for digital product structure, user flows, and content.<br>• Coordinated cross-functional teams: copywriting, translation, design, photo/video, SEO, and development.<br>• Presented solutions to Chinese and international clients in English and Chinese.<br>• Worked with SEO: analyzed search demand, site structure, and traffic performance.<br>• Participated in A/B testing of marketing and product decisions.<br>• Used Figma and Miro for user flow design; applied Scrum and RICE for planning." }
        ],
        cv_education: "Education",
        cv_edu_desc: "<p><strong>Master's Degree in Linguistics and Translation</strong> (English & Chinese), Tomsk State University — with honors (2013).</p> <p>One-year course, Liaoning Pedagogical University (2013–2014).</p>",
        projects_title: "Projects",
        project1_title: "EdTech Web App",
        project1_desc: "A working web application used by teachers for class prep and student practice.",
        project1_details: "A working web application used by teachers to streamline lesson prep and student practice scheduling. <a href=\"https://nikolaykruzhilin.github.io/lingua_prep/\" target=\"_blank\" rel=\"noopener noreferrer\">View the app</a>",
        project1_media: [],
        project2_title: "Accessibility Plugin",
        project2_desc: "An accessibility plugin I built — now used in Supplementary Education Navigators across 40+ regions.",
        project2_details: "A plugin for the visually impaired: font scaling, contrast modes, and easier site navigation. Deployed in children's supplementary education Navigators across more than 40 regions of Russia. <a href=\"https://github.com/NikolayKruzhilin/visually_impaired_plugin_v2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> · <a href=\"https://nikolaykruzhilin.github.io/visually_impaired_plugin_v2/\" target=\"_blank\" rel=\"noopener noreferrer\">Demo</a>",
        project2_media: [],
        project3_title: "BMW x BOLT",
        project3_desc: "An uplifting campaign with BOLT studio supporting BMW's return to the Chinese market after COVID; cinematic visuals and optimistic storytelling.",
        project3_details: "Produced creative direction, filming and post‑production with BOLT — a campaign celebrating renewal and positivity for BMW's market reentry.",
        project3_media: [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ],
        project4_title: "Tracy's Dog",
        project4_desc: "Product photography and brand development emphasizing love and intimacy in place of crude imagery.",
        project4_details: "Photography for e-commerce, visual identity and social content strategy for Tracy's Dog. <a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Visit website</a>",
        project4_media: [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy's Dog" } ],
        project5_title: "Donner",
        project5_desc: "Photography and videography for Donner instruments; marketing assets and product videos.",
        project5_details: "Shot product visuals and produced video content to enhance Donner's online presence.",
        project5_media: [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ],
        project6_title: "Kwan Yee Gor",
        project6_desc: "Concept and direction for a hair pomade campaign — video direction and product photography.",
        project6_details: "Directed and produced campaign films, oversaw on‑set direction and delivered product photography for listings.",
        project6_media: [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ],
        project7_title: "AIC Thermal Coating",
        project7_desc: "Product management and marketing for AIC: packaging, website and cross‑team coordination.",
        project7_details: "Managed multi‑team execution, packaging design, web materials and marketing collateral to bring AIC to market.",
        project7_media: [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ],
        project8_title: "Zen & Zany",
        project8_desc: "Freelance creative work: photography, videography and editing for brand campaigns.",
        project8_details: "Produced creative content, edited video, and supported campaign rollouts for multiple clients.",
        project8_media: [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ],
        project9_title: "Cybersecurity",
        project9_desc: "Homelab experiments, SBC tinkering, automation and tools for network monitoring and testing.",
        project9_details: "Building tools on ESP32 and Chameleon boards, running homelab services and testing security tooling.",
        project9_media: [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ],
        project3_video_url: "https://vimeo.com/410880058",
        project5_video_url: "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4",
        project6_video_url: "https://www.youtube.com/watch?v=fdaAh7LNa6U",
        project8_video_url: "https://www.youtube.com/watch?v=efzwt1-cEug",
        project_video_link: "See the video here",
        nav_about: "About",
        about_title: "About me",
        about_paragraph: "In the past I was a professional athlete; I hold a 2nd dan in karate and the IMGKA world champion title. I enjoy street photography and teach photography and cinematography. I actively volunteer in animal shelters and help homeless animals. I am also the creator of the #createtodonate project.",
        about_card_1_title: "Karate",
        about_card_1_desc: "My karate journey started at an early age. I reached 2nd dan, the Candidate for Master of Sport (KMS) rank, and became IMGKA world champion. <br><a href=\"http://goju.tomsk.ru/%d0%b0%d1%80%d1%85%d0%b8%d0%b2/2009-2013/\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the website</a>",
        about_card_2_title: "Street Photography",
        about_card_2_desc: "Street photography allows me to capture everyday life moments. Here are some of my best works.",
        about_card_3_title: "Teaching",
        about_card_3_desc: "I run courses on photography and cinematography, helping others develop creative skills. <br><a href=\"https://drive.google.com/file/d/1nT3mK1JcWLR3qKYz8srBitZair1Zzmep/view\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the video</a>",
        about_card_4_title: "Volunteering",
        about_card_4_desc: "I regularly help at animal shelters and care for homeless animals. <br><a href=\"https://www.youtube.com/watch?v=xkOxdTTbjfg\" target=\"_blank\" rel=\"noopener noreferrer\">Link to the video</a>",
        about_card_5_title: "#createtodonate",
        about_card_5_desc: "#createtodonate — a project where creativity is used to raise funds for charity.",
        about_card_6_title: "Instagram Blog",
        about_card_6_desc: "I run an Instagram blog where I share insights gained from working on various projects and experimenting with AI. <br><a href=\"https://instagram.com/nikol.ai.kruzhilin\" target=\"_blank\" rel=\"noopener noreferrer\">@nikol.ai.kruzhilin</a>",
        cv_skill_sql: "SQL",
        cv_skill_linux: "Linux",
        cv_skill_jira: "Jira",
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "Cybersecurity",
        cv_skill_6: "UX Design",
        cv_skill_7: "Project Management",
        cv_skill_8: "API Integration",
        cv_skill_10: "n8n Automation",
        cv_skill_11: "Context Engineering",
        cv_skill_12: "Digital Marketing",
        cv_skill_13: "Photography",
        cv_skill_confluence: "Confluence",
        cv_skill_drawio: "Drawio",
        cv_skill_react: "React",
        contact_title: "Contact Information",
        contact_email: "Email",
        contact_phone: "Phone",
        bot_responses: [
            "I understand, interesting question. Tell me more.",
            "This is indeed an important topic. What's most concerning to you?",
            "Good question! Let me think about it.",
            "Sounds interesting. What are your plans regarding this?",
            "I'm ready to help. Is there anything else you're interested in?"
        ]
    },
    zh: {
        nav_home: "首页",
        nav_cv: "简历",
        nav_projects: "项目",
        nav_contact: "联系方式",
        chat_title: "与nikol.AI聊天",
        online_status: "在线",
        welcome_message: "你好！我是nikol.AI，你的虚拟助手。你好吗？我能帮什么？",
        input_placeholder: "输入消息...",
        cv_title: "简历",
        cv_name: "Nikolay Kruzhilin",
        cv_position: "产品经理 / Product Manager / Product Owner",
        cv_description: "具备B2G、B2B及EdTech领域数字产品开发经验的产品经理。覆盖产品全生命周期管理：用户与市场研究、产品战略制定、目标与KPI设定、roadmap规划、backlog管理、优先级排序、需求输出、研发协作、产品上线与结果分析。具备web与移动端产品、用户流程、产品数据分析及UX经验。带领跨职能团队，涵盖研发、设计、QA、技术写作与用户支持。曾服务于政府客户、B2B客户、国际合作伙伴，以俄语、英语和中文与用户沟通协作。",
        cv_skills: "技术技能",
        cv_experience: "工作经验",
        cv_exp_items: [
            { role: "产品经理 / Product Owner", company: "Gosudarstvo Detey（国家之子）", period: "2025年10月 — 至今", body: "负责两款B2G数字产品的开发：面向公众的「补充教育导航」web服务，以及面向机构、市级和区级管理员的行政管理平台。公众服务在俄罗斯40余个地区拥有数百万月活用户。<br><br><strong>战略与规划</strong><br>• 基于产品目标、用户问题、地方政府及各地区反馈构建产品方向。<br>• 将战略目标拆解为可衡量的产品成果；制定并维护长期roadmap。<br>• 运用OKR/KPI、产品指标树及RICE/MoSCoW进行目标设定与优先级排序。<br><br><strong>产品数据分析</strong><br>• 在Yandex Metrica分析产品指标：DAU、转化漏斗、用户行为等。<br>• 一年内将跳出率降低约 <strong>10%</strong>；将用户进入目标流程到完成报名的时间缩短约 <strong>30%</strong>。<br>• 使用上线前后的指标对比评估变更效果，并据此确定下一步产品假设。<br>• 按地区分析产品变更结果，利用试点上线数据做出是否进一步推广的决策。<br><br><strong>产品发现与UX</strong><br>• 分析用户流程、收集用户与区域管理员及客服支持的反馈。<br>• 运用CJM和用户旅程分析定位摩擦点。<br>• 将客服工单和AI客服机器人作为产品洞察的补充数据来源。<br><br><strong>产品开发</strong><br>• 主导搜索、目录、筛选器及用户路径的功能迭代。<br>• 制定无障碍视障模式需求，已在 <strong>40余个地区</strong> 完成落地。<br>• 参与AI工具开发及面向管理员的数据看板建设。<br><br><strong>交付管理</strong><br>• 管理产品backlog，协调跨职能团队（前/后端、QA、设计、技术写作、客服、法务）。<br>• 负责与ЕПГУ、РПГУ、СМЭВ、УНП等政府系统的对接工作。" },
            { role: "产品经理", company: "浙江宏基新能源科技有限公司", period: "2023年5月 — 2025年8月", body: "负责隔热涂层国际B2B产品的开发，工作横跨产品、市场、国际销售与数字化领域。<br><br>• 开展潜在市场分析：市场规模与动态、竞争格局、目标细分市场、进入壁垒及产品需求。<br>• 综合多维标准评估市场吸引力，确定优先发展方向。<br>• 基于市场分析、客户反馈及竞争环境提出产品发展建议。<br>• 与国际客户、合作伙伴和分销商协作：收集需求、对齐产品决策。<br>• 以英语和中文开展产品演示与商务谈判。<br>• 主导公司产品官网的建设：制定结构、内容及UX需求，协调设计师、开发人员及外部供应商。<br>• 同步推进多个国际项目与多方利益相关方的沟通管理。" },
            { role: "产品经理", company: "i2国际教育中心", period: "2021年10月 — 2023年3月", body: "负责EdTech领域两款数字产品的开发：面向教师的内部CRM平台及英语学习移动应用。<br><br>• 对教师和用户开展深度访谈，识别核心流程中的痛点，并将研究成果转化为产品需求。<br>• 开展onboarding优化与用户体验提升：分析用户旅程，定位流失节点。<br>• 参与英语学习移动应用的开发：输出需求，收集用户反馈。<br>• 协调教学产品扩展至 <strong>17个城市的88个校区</strong>。<br>• 培训超过 <strong>40名外籍教师</strong> 使用数字产品与内部系统。<br>• 以英语与国际团队协作；与伦敦圣三一学院开展联合项目。" },
            { role: "产品市场经理", company: "洋彩信息咨询有限公司", period: "2018年8月 — 2021年5月", body: "服务于面向国际市场的中国企业数字化项目，同步推进多个项目：网站、移动应用、数字营销、SEO及产品上市。<br><br>• 开展项目分析：客户需求、目标用户、市场与竞争对手调研。<br>• 制定数字产品结构、用户流程及内容方案。<br>• 协调跨职能团队：文案、翻译、设计、图片/视频制作、SEO及研发。<br>• 以英语和中文向中外客户汇报方案并进行商务演示。<br>• 开展SEO工作：分析搜索需求、网站架构及流量效果。<br>• 参与营销与产品决策的A/B测试。<br>• 使用Figma和Miro进行用户流程设计；运用Scrum和RICE方法论进行规划管理。" }
        ],
        cv_education: "教育背景",
        cv_edu_desc: "<p><strong>语言学与翻译硕士</strong>（英语和汉语），托木斯克国立大学，2013年（优等毕业）。</p> <p>一年制课程，辽宁师范大学（2013–2014）。</p>",
        projects_title: "项目",
        project1_title: "教育科技 Web 应用",
        project1_desc: "供教师使用的工作型网络应用，用于课程准备和学生练习。",
        project1_details: "一个供教师使用的工作型网络应用，用于简化课程准备和学生练习安排。 <a href=\"https://nikolaykruzhilin.github.io/lingua_prep/\" target=\"_blank\" rel=\"noopener noreferrer\">应用链接</a>",
        project1_media: [],
        project2_title: "视障辅助插件",
        project2_desc: "我开发的无障碍插件——现已在40多个地区的补充教育导航器中使用。",
        project2_details: "面向视障用户的无障碍插件：字体放大、对比度模式与更便捷的网站导航。已在俄罗斯40多个地区的儿童补充教育导航器中部署。 <a href=\"https://github.com/NikolayKruzhilin/visually_impaired_plugin_v2\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> · <a href=\"https://nikolaykruzhilin.github.io/visually_impaired_plugin_v2/\" target=\"_blank\" rel=\"noopener noreferrer\">演示</a>",
        project2_media: [],
        project3_title: "BMW x BOLT",
        project3_desc: "与BOLT工作室合作的振奋人心的活动，支持BMW在疫情后重返中国市场，展现乐观叙事与电影化影像。",
        project3_details: "与BOLT制作团队合作：创意方向、拍摄与后期，打造庆祝品牌复苏的活动。",
        project3_media: [ { type: "image", src: "imgs/BMW.png", alt: "BMW" } ],
        project4_title: "Tracy's Dog",
        project4_desc: "产品摄影与品牌建设，强调爱与亲密而非粗俗感。",
        project4_details: "为电商拍摄产品图，建立视觉风格并制定社交内容策略。<a href=\"https://www.tracysdog.com/\" target=\"_blank\" rel=\"noopener noreferrer\">访问网站</a>",
        project4_media: [ { type: "image", src: "imgs/tracysdog.jpg", alt: "Tracy's Dog" } ],
        project5_title: "Donner",
        project5_desc: "为Donner乐器提供摄影与视频制作，生成营销素材与产品视频。",
        project5_details: "拍摄产品视觉并制作视频内容以提升在线展示效果。",
        project5_media: [ { type: "image", src: "imgs/donner1.png", alt: "Donner 1" }, { type: "image", src: "imgs/donner2.png", alt: "Donner 2" }, { type: "image", src: "imgs/donner3.png", alt: "Donner 3" } ],
        project6_title: "Kwan Yee Gor",
        project6_desc: "为发蜡品牌提供概念与导演服务：视频制作与产品摄影。",
        project6_details: "导演并制作广告片，现场指导并完成产品摄影以供电商与宣传使用。",
        project6_media: [ { type: "image", src: "imgs/kwan yee gor.jpg", alt: "Kwan Yee Gor" } ],
        project7_title: "AIC Thermal Coating",
        project7_desc: "为AIC提供产品管理与市场支持：包装、网站与跨团队协调。",
        project7_details: "管理多团队执行、包装设计与营销资料，推动AIC产品上市。",
        project7_media: [ { type: "image", src: "imgs/AICpackage.jpg", alt: "AIC package" }, { type: "image", src: "imgs/AIC webpage.jpg", alt: "AIC webpage" }, { type: "image", src: "imgs/factoryQC.jpg", alt: "Factory QC" } ],
        project8_title: "Zen & Zany",
        project8_desc: "为多个品牌项目提供摄影、视频与剪辑等自由职业服务。",
        project8_details: "制作创意内容、视频编辑并支持活动发布。",
        project8_media: [ { type: "image", src: "imgs/z&z.png", thumbnail: "imgs/z&z.png" } ],
        project9_title: "网络安全（爱好）",
        project9_desc: "家庭实验室、SBC实验、自动化以及用于网络监控和测试的工具开发。",
        project9_details: "在ESP32和Chameleon板上开发工具，搭建homelab服务并进行安全测试。",
        project9_media: [ { type: "image", src: "imgs/esp32.png", alt: "ESP32" }, { type: "image", src: "imgs/chameleon.png", alt: "Chameleon" } ],
        project3_video_url: "https://vimeo.com/410880058",
        project5_video_url: "https://donner-web.oss-cn-guangzhou.aliyuncs.com/dm-cn/video/TPaV36XlMD4A.mp4",
        project6_video_url: "https://www.youtube.com/watch?v=fdaAh7LNa6U",
        project8_video_url: "https://www.youtube.com/watch?v=efzwt1-cEug",
        project_video_link: "在此查看视频",
        nav_about: "关于我",
        about_title: "关于我",
        about_paragraph: "过去我是职业运动员，拥有空手道二段并获得 IMGKA 世界冠军头衔。我喜欢街头摄影并教授摄影与电影学。积极参与动物收容所的志愿工作，帮助无家可归的动物。此外，我还是 #createtodonate 项目的创建者。",
        about_card_1_title: "空手道",
        about_card_1_desc: "我的空手道之路始于年幼时。我达到二段，获得候补运动员称号（KMS），并成为 IMGKA 世界冠军。",
        about_card_2_title: "街头摄影",
        about_card_2_desc: "街头摄影让我捕捉日常生活的瞬间。以下是我的一些代表作品。",
        about_card_3_title: "教学",
        about_card_3_desc: "我开设摄影和电影学课程，帮助他人发展创作技能。",
        about_card_4_title: "志愿服务",
        about_card_4_desc: "我定期在动物收容所提供帮助并照顾无家动物。",
        about_card_5_title: "#createtodonate",
        about_card_5_desc: "#createtodonate — 一个通过创意为慈善筹款的项目。",
        about_card_6_title: "Instagram 博客",
        about_card_6_desc: "我在Instagram上运营博客，分享从各种项目工作和AI实验中获得的经验。 <br><a href=\"https://instagram.com/nikol.ai.kruzhilin\" target=\"_blank\" rel=\"noopener noreferrer\">@nikol.ai.kruzhilin</a>",
        cv_skill_sql: "SQL",
        cv_skill_linux: "Linux",
        cv_skill_jira: "Jira",
        cv_skill_1: "Python",
        cv_skill_2: "HTML",
        cv_skill_3: "CSS",
        cv_skill_4: "JavaScript",
        cv_skill_5: "网络安全",
        cv_skill_6: "用户体验设计",
        cv_skill_7: "项目管理",
        cv_skill_8: "API集成",
        cv_skill_10: "n8n自动化",
        cv_skill_11: "上下文工程",
        cv_skill_12: "数字营销",
        cv_skill_13: "摄影",
        cv_skill_confluence: "Confluence",
        cv_skill_drawio: "Drawio",
        cv_skill_react: "React",
        contact_title: "联系信息",
        contact_email: "电子邮件",
        contact_phone: "电话",
        bot_responses: [
            "我理解，很有趣的问题。告诉我更多相关信息。",
            "这确实是一个重要话题。什么最让你担心？",
            "好问题！让我想想。",
            "听起来很有趣。你对此有什么计划？",
            "我准备好帮助你。还有其他感兴趣的事情吗？"
        ]
    }
};

let currentLang = 'ru';
const langOrder = ['ru', 'en', 'zh'];
const langLabels = { ru: 'RU', en: 'EN', zh: '中' };

// === Page Navigation ===
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
    }
    window.scrollTo(0, 0);
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === '#' + pageId);
    });
    window.location.hash = pageId;
    closeMobileMenu();
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('active');
}

// === CV Accordion Builder ===
function buildExpAccordion(lang) {
    var container = document.getElementById('expAccordion');
    if (!container) return;
    var dict = translations[lang];
    var items = dict && dict.cv_exp_items;
    if (!items || !items.length) return;
    container.innerHTML = '';
    items.forEach(function(exp) {
        var item = document.createElement('div');
        item.className = 'exp-item';

        var header = document.createElement('div');
        header.className = 'exp-header';

        var left = document.createElement('div');
        left.className = 'exp-header-left';

        var title = document.createElement('span');
        title.className = 'exp-title';
        title.textContent = exp.role + ' · ' + exp.company;

        var meta = document.createElement('span');
        meta.className = 'exp-meta';
        meta.textContent = exp.period;

        left.appendChild(title);
        left.appendChild(meta);

        var chevron = document.createElement('span');
        chevron.className = 'exp-chevron';
        chevron.innerHTML = '&#9660;';

        header.appendChild(left);
        header.appendChild(chevron);

        var body = document.createElement('div');
        body.className = 'exp-body';
        var p = document.createElement('p');
        p.innerHTML = exp.body;
        body.appendChild(p);

        item.appendChild(header);
        item.appendChild(body);
        container.appendChild(item);

        header.addEventListener('click', function() {
            var isOpen = item.classList.contains('open');
            // Close all
            container.querySelectorAll('.exp-item.open').forEach(function(el) {
                el.classList.remove('open');
            });
            if (!isOpen) item.classList.add('open');
        });
    });
}

// === Language Switching ===
function switchLanguage(lang) {
    currentLang = lang;
    const htmlKeys = new Set(['cv_edu_desc']);
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        const dict = translations[lang];
        if (dict && dict[key] !== undefined) {
            if (el.tagName === 'INPUT') {
                el.placeholder = dict[key];
            } else if (htmlKeys.has(key) || el.dataset.format === 'html') {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });
    buildExpAccordion(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const mobileToggle = document.querySelector('.lang-toggle-mobile');
    if (mobileToggle) {
        mobileToggle.textContent = langLabels[lang] || lang.toUpperCase();
        mobileToggle.setAttribute('data-lang', lang);
    }
    document.documentElement.lang = lang;
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
}

function cycleLanguage() {
    const idx = langOrder.indexOf(currentLang);
    const next = langOrder[(idx + 1) % langOrder.length];
    switchLanguage(next);
}

// === Chat helpers ===
function addMessage(content, isUser) {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'message' + (isUser ? ' user' : '');
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? 'YOU' : 'AI';
    const bubble = document.createElement('div');
    bubble.className = 'message-content';
    bubble.textContent = content;
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
}

function simulateBotResponse() {
    const dict = translations[currentLang];
    if (!dict || !dict.bot_responses) return;
    const responses = dict.bot_responses;
    const msg = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(function() { addMessage(msg, false); }, 900);
}

// === Skill Marquee ===
function initSkillMarquee() {
    var marquee = document.getElementById('skillMarquee');
    var track = document.getElementById('skillTrack');
    if (!marquee || !track) return;

    // Clone items for seamless infinite loop
    var items = track.querySelectorAll('.skill-item');
    items.forEach(function(item) {
        track.appendChild(item.cloneNode(true));
    });

    var baseSpeed = 0.15; // pixels per frame (~9px/s at 60fps)
    var currentSpeed = baseSpeed;
    var offset = 0;
    var paused = false;
    var touchActive = false;
    var touchOffset = 0;
    var trackHalfWidth = 0;

    function updateWidth() {
        trackHalfWidth = track.scrollWidth / 2;
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);

    function loop() {
        if (!paused && !touchActive) {
            offset -= currentSpeed;
            if (offset <= -trackHalfWidth) {
                offset += trackHalfWidth;
            }
        }
        track.style.transform = 'translateX(' + (offset + touchOffset) + 'px)';
        requestAnimationFrame(loop);
    }

    // Hover pause
    marquee.addEventListener('mouseenter', function() { paused = true; });
    marquee.addEventListener('mouseleave', function() { paused = false; });

    // Wheel speed control (desktop)
    marquee.addEventListener('wheel', function(e) {
        e.preventDefault();
        var delta = e.deltaY || e.detail || 0;
        if (Math.abs(delta) > 3) {
            if (delta > 0) {
                currentSpeed = Math.max(0.05, currentSpeed - 0.15);
            } else {
                currentSpeed = Math.min(3, currentSpeed + 0.15);
            }
        }
        clearTimeout(marquee._speedTimeout);
        marquee._speedTimeout = setTimeout(function() {
            currentSpeed = baseSpeed;
        }, 1500);
    }, { passive: false });

    // Touch direct drag (mobile)
    var touchStartX = 0;
    var touchStartOffset = 0;
    marquee.addEventListener('touchstart', function(e) {
        touchActive = true;
        touchStartX = e.touches[0].clientX;
        touchStartOffset = touchOffset;
        e.preventDefault();
    }, { passive: false });
    marquee.addEventListener('touchmove', function(e) {
        if (!touchActive) return;
        var dx = e.touches[0].clientX - touchStartX;
        touchOffset = touchStartOffset + dx;
        e.preventDefault();
    }, { passive: false });
    marquee.addEventListener('touchend', function() {
        touchActive = false;
        offset += touchOffset;
        touchOffset = 0;
        while (offset <= -trackHalfWidth) offset += trackHalfWidth;
        while (offset > 0) offset -= trackHalfWidth;
    });

    requestAnimationFrame(loop);
}

// === About Modal Logic ===
function initAboutModal() {
    var cards = document.querySelectorAll('.about-card');
    if (cards.length === 0) return;
    var modal = document.getElementById('aboutModal');
    var closeModal = document.getElementById('aboutCloseModal');
    var modalTitle = document.getElementById('aboutModalTitle');
    var modalDescription = document.getElementById('aboutModalDescription');
    var modalMedia = document.getElementById('aboutModalMedia');
    var lightbox = document.getElementById('aboutLightbox');
    var lightboxImg = document.getElementById('aboutLightboxImg');
    var prevBtn = document.getElementById('aboutPrevBtn');
    var nextBtn = document.getElementById('aboutNextBtn');
    var closeLightbox = document.getElementById('aboutCloseLightbox');

    var currentImages = [];
    var currentIndex = 0;

    function openModal() {
        modal.style.display = 'flex';
        document.body.classList.add('about-modal-open');
        var dialog = modal.querySelector('.modal-dialog');
        if (dialog) dialog.scrollTop = 0;
        modal.scrollTop = 0;
    }
    function hideModal() {
        modal.style.display = 'none';
        document.body.classList.remove('about-modal-open');
        modalMedia.querySelectorAll('iframe, video').forEach(function(el) { el.remove(); });
    }
    function openLightbox(images, index) {
        currentImages = images;
        currentIndex = index;
        lightboxImg.src = images[index] || '';
        lightbox.style.display = 'flex';
    }
    function closeLightboxFn() { lightbox.style.display = 'none'; }

    cards.forEach(function(card) {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
        });
        card.addEventListener('click', function() {
            var title = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').trim();
            var details = (card.querySelector('p') ? card.querySelector('p').innerHTML : '').trim();
            modalTitle.textContent = title;
            modalDescription.innerHTML = details;
            modalMedia.innerHTML = '';

            var mediaItems = [];
            try { if (card.dataset.media) mediaItems = JSON.parse(card.dataset.media); } catch (e) {}
            var imageList = mediaItems.filter(function(m) { return m.type === 'image'; }).map(function(m) { return m.src; });
            mediaItems.forEach(function(item) {
                if (item.type === 'image') {
                    var img = document.createElement('img');
                    img.src = item.src; img.alt = item.alt || '';
                    img.onclick = function() { openLightbox(imageList, imageList.indexOf(item.src)); };
                    modalMedia.appendChild(img);
                }
            });
            openModal();
        });
    });
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) { if (e.target === modal) hideModal(); });
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex' && e.key === 'Escape') hideModal();
    });
    closeLightbox.addEventListener('click', closeLightboxFn);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightboxFn(); });
    prevBtn.addEventListener('click', function() {
        if (currentImages.length) {
            currentIndex = (currentIndex > 0 ? currentIndex - 1 : currentImages.length - 1);
            lightboxImg.src = currentImages[currentIndex];
        }
    });
    nextBtn.addEventListener('click', function() {
        if (currentImages.length) {
            currentIndex = (currentIndex < currentImages.length - 1 ? currentIndex + 1 : 0);
            lightboxImg.src = currentImages[currentIndex];
        }
    });
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'Escape') closeLightboxFn();
        }
    });
}

// === MAIN INIT ===
document.addEventListener('DOMContentLoaded', function() {
    // Restore language
    var lang = 'ru';
    try { lang = localStorage.getItem('siteLang') || 'ru'; } catch (e) { lang = 'ru'; }
    switchLanguage(lang);

    // Bind desktop language buttons
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() { switchLanguage(btn.dataset.lang); });
    });

    // Bind mobile language toggle
    var mobileToggle = document.querySelector('.lang-toggle-mobile');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', cycleLanguage);
    }

    // Bind nav links for SPA navigation
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var pageId = link.getAttribute('data-page');
            if (pageId) navigateTo(pageId);
        });
    });

    // Hamburger toggle
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Handle initial hash
    var hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        navigateTo(hash);
    }

    // Handle hash changes (browser back/forward)
    window.addEventListener('hashchange', function() {
        var newHash = window.location.hash.replace('#', '');
        if (newHash && document.getElementById(newHash)) {
            navigateTo(newHash);
        }
    });

    // Chat init
    var chatInput = document.getElementById('chatInput');
    var sendBtn = document.getElementById('sendBtn');
    if (chatInput && sendBtn) {
        var send = function() {
            var value = chatInput.value.trim();
            if (!value) return;
            addMessage(value, true);
            chatInput.value = '';
            simulateBotResponse();
        };
        sendBtn.addEventListener('click', send);
        chatInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') send(); });
    }

    // === Projects Modal ===
    var projectCards = document.querySelectorAll('.project-card');
    var modal = document.getElementById('projectModal');
    var closeModal = document.getElementById('closeModal');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');
    var modalMedia = document.getElementById('modalMedia');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var closeLightbox = document.getElementById('closeLightbox');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');

    if (lightboxImg) {
        lightboxImg.onerror = function() {
            lightboxImg.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="#ddd"/><polygon points="320,150 320,300 480,225" fill="#777"/></svg>');
        };
    }

    var currentImages = [];
    var currentIndex = 0;

    if (projectCards.length > 0) {
        projectCards.forEach(function(card, index) {
            card.addEventListener('click', function() {
                var projectKey = 'project' + (index + 1);
                var dict = translations[currentLang];
                modalTitle.textContent = dict[projectKey + '_title'];
                modalDescription.innerHTML = dict[projectKey + '_details'];

                try {
                    var videoUrl = dict[projectKey + '_video_url'];
                    if (videoUrl) {
                        var p = document.createElement('p');
                        p.style.marginTop = '0.5rem';
                        var a = document.createElement('a');
                        a.href = videoUrl;
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                        a.textContent = dict['project_video_link'] || 'See the video here';
                        p.appendChild(a);
                        modalDescription.appendChild(p);
                    }
                } catch (e) {}

                modalMedia.innerHTML = '';

                var mediaItems = dict[projectKey + '_media'] || [];
                mediaItems.forEach(function(item) {
                    if (item.type === 'image') {
                        var thumb = document.createElement('img');
                        thumb.src = item.src;
                        thumb.alt = item.alt || '';
                        thumb.style.width = '100px';
                        thumb.style.height = '100px';
                        thumb.style.objectFit = 'cover';
                        thumb.style.cursor = 'pointer';
                        thumb.onerror = function() {
                            thumb.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" viewBox="0 0 160 100"><rect width="160" height="100" fill="#f3f3f3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="12">Image</text></svg>');
                        };
                        thumb.onclick = function() {
                            var imageSrcs = mediaItems.filter(function(m) { return m.type === 'image'; }).map(function(m) { return m.src; });
                            var idx = imageSrcs.indexOf(item.src);
                            openLightbox(imageSrcs, idx >= 0 ? idx : 0);
                        };
                        modalMedia.appendChild(thumb);
                    } else if (item.type === 'video') {
                        var thumb = document.createElement('img');
                        thumb.src = item.thumbnail || '';
                        thumb.alt = item.alt || 'Video Thumbnail';
                        thumb.style.width = '100px';
                        thumb.style.height = '100px';
                        thumb.style.objectFit = 'cover';
                        thumb.style.cursor = 'pointer';
                        thumb.onerror = function() {
                            thumb.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100" viewBox="0 0 160 100"><rect width="160" height="100" fill="#ddd"/><polygon points="60,30 60,70 95,50" fill="#777"/></svg>');
                        };
                        thumb.onclick = function() {
                            modalMedia.querySelectorAll('iframe, video').forEach(function(el) { el.remove(); });
                            var src = item.src || '';
                            if (src.endsWith('.mp4')) {
                                var vid = document.createElement('video');
                                vid.src = src;
                                vid.controls = true;
                                vid.autoplay = true;
                                vid.style.width = '100%';
                                modalMedia.appendChild(vid);
                            } else if (src.indexOf('youtube.com') !== -1 || src.indexOf('youtu.be') !== -1) {
                                var id = '';
                                if (src.indexOf('watch?v=') !== -1) {
                                    id = src.split('watch?v=')[1].split('&')[0];
                                } else {
                                    id = src.split('/').pop();
                                }
                                var iframe = document.createElement('iframe');
                                iframe.src = 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1';
                                iframe.width = '100%';
                                iframe.height = '360';
                                iframe.frameBorder = '0';
                                iframe.allow = 'autoplay; fullscreen; picture-in-picture';
                                modalMedia.appendChild(iframe);
                            } else if (src.indexOf('vimeo.com') !== -1) {
                                var vid = src.split('/').pop();
                                var iframe = document.createElement('iframe');
                                iframe.src = 'https://player.vimeo.com/video/' + vid + '?autoplay=1';
                                iframe.width = '100%';
                                iframe.height = '360';
                                iframe.frameBorder = '0';
                                iframe.allow = 'autoplay; fullscreen; picture-in-picture';
                                modalMedia.appendChild(iframe);
                            } else {
                                window.open(src, '_blank');
                            }
                        };
                        modalMedia.appendChild(thumb);
                    }
                });

                modal.style.display = 'flex';
                document.body.classList.add('modal-open');
                var dialog = modal.querySelector('.modal-dialog');
                if (dialog) dialog.scrollTop = 0;
                modal.scrollTop = 0;
            });
        });

        function closeProjectModal() {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }

        closeModal.addEventListener('click', closeProjectModal);
        modal.addEventListener('click', function(e) { if (e.target === modal) closeProjectModal(); });
        document.addEventListener('keydown', function(e) {
            if (modal.style.display === 'flex' && e.key === 'Escape' && lightbox.style.display !== 'flex') {
                closeProjectModal();
            }
        });

        function openLightbox(images, index) {
            currentImages = images;
            currentIndex = index;
            lightboxImg.src = images[index];
            lightbox.style.display = 'flex';
        }

        closeLightbox.addEventListener('click', function() { lightbox.style.display = 'none'; });
        lightbox.addEventListener('click', function(e) { if (e.target === lightbox) lightbox.style.display = 'none'; });
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
            lightboxImg.src = currentImages[currentIndex];
        });
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
            lightboxImg.src = currentImages[currentIndex];
        });
    }

    // Init skill marquee
    initSkillMarquee();

    // Init about modal
    initAboutModal();
});
