/**
 * Fusion 360 Restaurant & Lounge (Clifton, Karachi)
 * Action-First Local UI/UX Design Blueprint - script.js
 * Pure Vanilla JavaScript · Zero Dependencies
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. VERIFIED MENU DATA (40+ dishes across 10 categories)
     ========================================================================== */
  const MENU = [
    // Starters
    {
      id: 'st-1',
      category: 'Starters',
      name: 'Classic Wings',
      description: '6 Pcs fried wings & dip sauce',
      price: 629,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775684.jpg',
      verified: true
    },
    {
      id: 'st-2',
      category: 'Starters',
      name: 'Buffalo Wings',
      description: 'Crispy fried chicken wings coated with spicy and savory buffalo glaze.',
      price: 705,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970079/ea362672-f1ce-4b52-a147-04b842784e5f.jpg',
      verified: true
    },
    {
      id: 'st-3',
      category: 'Starters',
      name: 'BBQ Wings',
      description: '6 Pcs fried wings coated with rich smoky BBQ sauce.',
      price: 796,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970080/e68fdc79-c01f-41fa-a2f9-e3974bec768a.jpg',
      verified: true
    },
    {
      id: 'st-4',
      category: 'Starters',
      name: 'Chicken Tenders',
      description: 'Deep fried crispy chicken strips with a savory flavor and dip.',
      price: 970,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970081/796614d2-e2b9-4609-ba69-ecd999f6a6aa.jpg',
      verified: true
    },
    {
      id: 'st-5',
      category: 'Starters',
      name: 'Nuggets & Fries',
      description: 'Deep fried battered chicken and golden potatoes with a crispy texture.',
      price: 561,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775688.jpg',
      verified: true
    },
    {
      id: 'st-6',
      category: 'Starters',
      name: 'Fusion Dynamite Chicken',
      description: '8 Pcs pan-fried crispy chicken tossed in signature spicy dynamite sauce.',
      price: 630,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970083/02f0a990-0cbd-447c-87d7-6020a9a2cc46.jpg',
      verified: true
    },

    // Burgers
    {
      id: 'bg-1',
      category: 'Burgers',
      name: 'Crispy Zinger',
      description: 'Golden crispy chicken patty topped with fresh lettuce, mayo sauce, and American cheese slice on a soft toasted bun.',
      price: 625,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970085/571ec062-5ba2-49ac-b8cf-cc1ecf8db6f7.jpg',
      verified: true
    },
    {
      id: 'bg-2',
      category: 'Burgers',
      name: 'Crunchi Jelapeno Burger',
      description: 'Juicy & crunchy patty topped with crispy jalapeno slices, fresh lettuce, and melted cheese served with special sauce.',
      price: 943,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970086/72432061-53f4-4995-ba7e-9f2f42536231.jpg',
      verified: true
    },
    {
      id: 'bg-3',
      category: 'Burgers',
      name: 'Double Beef Smash',
      description: '2x80g smashed beef patties, signature sauce, lettuce, American cheese slices & toasted brioche-style bun.',
      price: 1130,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775693.jpg',
      verified: true
    },
    {
      id: 'bg-4',
      category: 'Burgers',
      name: 'C3 Burger',
      description: 'Pan-fried gourmet chicken patty with a juicy and savory signature flavor.',
      price: 1466,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970088/639f98dd-9c67-4412-98e5-46ca0e104ccb.jpg',
      verified: true
    },
    {
      id: 'bg-5',
      category: 'Burgers',
      name: 'Grilled Chicken Burger',
      description: '2x100g flame-grilled chicken fillets, American cheese slices, signature sauce & bun.',
      price: 1105,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970089/785ee822-46cb-4b2d-b5e9-f4c3732b7890.jpg',
      verified: true
    },
    {
      id: 'bg-6',
      category: 'Burgers',
      name: 'Grilled Chipotle',
      description: 'Grilled juicy fillet served in a toasted bun with a spicy chipotle infusion.',
      price: 1105,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775696.jpg',
      verified: true
    },

    // Sandwiches
    {
      id: 'sw-1',
      category: 'Sandwiches',
      name: 'C3 Club Sandwich',
      description: 'Toasted triple-layered bread sandwich filled with tender spiced chicken, egg, and fresh greens.',
      price: 944,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970071/574a4a0c-a0a0-470d-b7ff-85de7c1aa7b4.jpg',
      verified: true
    },
    {
      id: 'sw-2',
      category: 'Sandwiches',
      name: 'Butter Chick & Cheese',
      description: 'Grilled style tender chicken sandwich loaded with butter-infused cheese and herbs.',
      price: 1414,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970073/354f39cc-2616-4c33-9b83-8a10f85e3cc9.jpg',
      verified: true
    },

    // Chicken Mains
    {
      id: 'cm-1',
      category: 'Chicken Mains',
      name: 'Flaming Chicken',
      description: 'Tender half chicken cooked in a fiery blend of spices and aromatic seasonings with bold smoky flavor and vibrant red sauce.',
      price: 1829,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970114/fc7c80eb-1a5a-4c63-8eb0-269692fd4bc5.jpg',
      verified: true
    },
    {
      id: 'cm-2',
      category: 'Chicken Mains',
      name: 'Grilled Chicken Steaks',
      description: 'Succulent chicken steaks grilled to perfection with golden crust, seasoned with aromatic spices, served with fresh vegetables and choice of sauce.',
      price: 1440,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970115/60392ccb-4b49-4526-9b5a-f1ff53e5960b.jpg',
      verified: true
    },
    {
      id: 'cm-3',
      category: 'Chicken Mains',
      name: 'Chicken Parmesan',
      description: 'Tender chicken breast breaded and baked with rich tomato sauce and melted mozzarella cheese.',
      price: 1990,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970116/f9c2468b-ac5e-4e55-8077-21695bd7530e.jpg',
      verified: true
    },

    // BBQ and Kababs
    {
      id: 'bbq-1',
      category: 'BBQ and Kababs',
      name: 'Chicken Flaming Boti',
      description: 'South Asian barbecued chicken skewers with an intense fiery glaze.',
      price: 1109,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970107/66f30d33-d89b-4b9a-9133-9f01afe3226f.jpg',
      verified: true
    },
    {
      id: 'bbq-2',
      category: 'BBQ and Kababs',
      name: 'Chicken Malai Boti',
      description: 'South Asian style grilled tender chicken marinated in rich fresh cream and mild aromatic spices.',
      price: 966,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970108/282fdbfa-13b0-4a09-9c5d-b4584dba4ba0.jpg',
      verified: true
    },
    {
      id: 'bbq-3',
      category: 'BBQ and Kababs',
      name: 'Beef Seekh Kabab',
      description: 'Two succulent beef seekh kababs (each 125g) expertly seasoned with signature marination and grilled over open charcoal.',
      price: 1104,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970109/3a081d8c-a37e-4096-bc33-0d888a44419e.jpg',
      verified: true
    },
    {
      id: 'bbq-4',
      category: 'BBQ and Kababs',
      name: 'Chicken Seekh Kabab',
      description: 'Two succulent chicken seekh kababs (each 125g) grilled with signature spice blend delivering smoky charred flavor.',
      price: 742,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970110/02ebcd96-3ac6-4974-8c20-29aba5ddbc10.jpg',
      verified: true
    },

    // Platters
    {
      id: 'pl-1',
      category: 'Platter',
      name: 'Fusion Grand Platter',
      description: 'Grilled. Loaded. Built for sharing. Fragrant rice, chicken kabab, beef kabab, liver tikka, flaming chicken, malai boti, chicken tikka boti, fresh salad, red sauce & green chutney.',
      price: 5750,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/99777494-parent/af860c5f-1fe6-45c3-b239-ab5fceaa168b.jpg',
      verified: true
    },
    {
      id: 'pl-2',
      category: 'Platter',
      name: 'Chicken Platter',
      description: 'Perfect for sharing. Fragrant rice, signature flaming chicken, malai boti, chicken tikka boti, fresh salad, and dual sauces.',
      price: 4255,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/99777491-parent/a664b238-bd6e-4463-8bb3-e91ddd2e1180.jpg',
      verified: true
    },
    {
      id: 'pl-3',
      category: 'Platter',
      name: 'Kabab Platter',
      description: 'Loaded with beef & chicken seekh kababs, grilled liver tikka, seasoned rice, crisp salad and dipping sauces.',
      price: 2717,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/99777493-parent/c01ba18b-6a92-481d-88e3-3ab4ddbaba95.jpg',
      verified: true
    },

    // Chinese
    {
      id: 'ch-1',
      category: 'Chinese',
      name: 'Chicken Chowmein',
      description: 'Wok-tossed noodles, signature seasoned chicken, onion, capsicum, and julienne carrots.',
      price: 812,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970091/20abc5ef-9ef9-4940-9171-52ac9a5dc00f.jpg',
      verified: true
    },
    {
      id: 'ch-2',
      category: 'Chinese',
      name: 'Chicken Chilli Dry',
      description: 'Sliced chicken stir-fried with green chillies, onions, and bell peppers, served alongside egg fried rice.',
      price: 739,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970092/11b2031c-158f-488c-a774-167b99be388e.jpg',
      verified: true
    },

    // Pastas
    {
      id: 'pa-1',
      category: 'Pastas',
      name: 'Fettuccine Alfredo',
      description: 'Creamy Alfredo pasta featuring tender fettuccine coated in rich velvety sauce made from butter, cream, and Parmesan cheese, finished with parsley and black pepper.',
      price: 1207,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970074/f0a1c6cc-35f3-424e-86e7-e492a571965d.jpg',
      verified: true
    },
    {
      id: 'pa-2',
      category: 'Pastas',
      name: 'Safroni Pasta',
      description: 'Delicate saffron-infused pasta prepared with aromatic spices and served in a rich creamy orange sauce.',
      price: 1407,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970075/63569ba9-02b8-4cad-afd7-323a541fb9bd.jpg',
      verified: true
    },
    {
      id: 'pa-3',
      category: 'Pastas',
      name: 'Lemon Creamy Pasta',
      description: 'Silky smooth pasta tossed in a velvety lemon cream sauce with fresh herbs and a touch of garlic.',
      price: 1400,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970076/9aaf12ac-8b76-4fe8-be94-7a158505c257.jpg',
      verified: true
    },
    {
      id: 'pa-4',
      category: 'Pastas',
      name: 'Penne Arbiata',
      description: 'Italian style boiled pasta tossed in spicy tomato herb sauce with cracked chili flakes.',
      price: 1092,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775683.jpg',
      verified: true
    },

    // Beverages & Shakes
    {
      id: 'bv-1',
      category: 'Beverages',
      name: 'Pina Colada',
      description: 'Icy blend of sweet pineapple, coconut cream, and chilled milk.',
      price: 875,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775722.jpg',
      verified: true
    },
    {
      id: 'bv-2',
      category: 'Beverages',
      name: 'Mint Margarita',
      description: 'Crushed fresh mint leaves, zesty lemon juice, and sparkling soda served ice-cold.',
      price: 475,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775723.jpg',
      verified: true
    },
    {
      id: 'bv-3',
      category: 'Beverages',
      name: 'Blue Lagoon Mocktail',
      description: 'Curacao lagoon syrup shaken with lemon and chilled soda.',
      price: 730,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775724.jpg',
      verified: true
    },
    {
      id: 'bv-4',
      category: 'Beverages',
      name: 'Tropical Fruit Mocktail',
      description: 'A refreshing blend of mixed tropical fruits served ice-cold.',
      price: 650,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970120/ecd90eff-e2ae-409c-9f2d-ba8f9720ed91.jpg',
      verified: true
    },
    {
      id: 'bv-5',
      category: 'Beverages',
      name: 'Fresh Lime Soda',
      description: 'Freshly squeezed lemon juice with soda and crushed ice.',
      price: 390,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775726.jpg',
      verified: true
    },
    {
      id: 'bv-6',
      category: 'Beverages',
      name: 'Vanilla Ice-Cream Shake',
      description: 'Premium vanilla ice cream churned with chilled milk.',
      price: 650,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775727.jpg',
      verified: true
    },
    {
      id: 'bv-7',
      category: 'Beverages',
      name: 'Oreo Ice-Cream Shake',
      description: 'Vanilla ice cream blended with crushed Oreo cookies and cold milk.',
      price: 660,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775728.jpg',
      verified: true
    },
    {
      id: 'bv-8',
      category: 'Beverages',
      name: 'Chocolate Ice-Cream Shake',
      description: 'Rich chocolate ice cream whipped with milk and cocoa drizzle.',
      price: 650,
      image: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/rujh/product/102970124/e45816e8-8b96-4be2-bc60-751c7423ae5e.jpg',
      verified: true
    },
    {
      id: 'bv-9',
      category: 'Beverages',
      name: 'Mocha Coffee Shake',
      description: 'Chilled blend of chocolate and espresso coffee ice cream with milk.',
      price: 650,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775730.jpg',
      verified: true
    },
    {
      id: 'bv-10',
      category: 'Beverages',
      name: 'KitKat Ice-Cream Shake',
      description: 'Chocolate ice cream blended with real KitKat wafer bars and chilled milk.',
      price: 980,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775731.jpg',
      verified: true
    },

    // Breads
    {
      id: 'br-1',
      category: 'Breads',
      name: 'Golden Paratha',
      description: 'Aromatic and comforting crisp flatbread prepared fresh on tawa.',
      price: 120,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775717.jpg',
      verified: true
    },
    {
      id: 'br-2',
      category: 'Breads',
      name: 'Extra Bread Slice',
      description: 'Toasted bakery slice for sandwiches or steak sides.',
      price: 60,
      image: 'https://images.deliveryhero.io/image/fd-pk/Products/99775718.jpg',
      verified: true
    }
  ];

  /* ==========================================================================
     2. STATUS & OPERATING HOURS LOGIC (Asia/Karachi Timezone)
     ========================================================================== */
  // Schedule in Asia/Karachi time:
  // Mon-Thu: 15:00 - 02:00 (next day)
  // Fri:     15:00 - 02:30 (next day)
  // Sat:     15:00 - 03:00 (next day)
  // Sun:     17:00 - 03:00 (next day)
  const SCHEDULE = {
    1: { open: 15 * 60, close: 2 * 60 + 1440, closeStr: '2:00 AM' }, // Mon
    2: { open: 15 * 60, close: 2 * 60 + 1440, closeStr: '2:00 AM' }, // Tue
    3: { open: 15 * 60, close: 2 * 60 + 1440, closeStr: '2:00 AM' }, // Wed
    4: { open: 15 * 60, close: 2 * 60 + 1440, closeStr: '2:00 AM' }, // Thu
    5: { open: 15 * 60, close: 2.5 * 60 + 1440, closeStr: '2:30 AM' }, // Fri
    6: { open: 15 * 60, close: 3 * 60 + 1440, closeStr: '3:00 AM' }, // Sat
    0: { open: 17 * 60, close: 3 * 60 + 1440, closeStr: '3:00 AM' }  // Sun
  };

  function getKarachiTime() {
    const now = new Date();
    // Format to Asia/Karachi timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Karachi',
      hour12: false,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      weekday: 'short'
    });

    const parts = formatter.formatToParts(now);
    const dateMap = {};
    parts.forEach(p => (dateMap[p.type] = p.value));

    const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const dayOfWeek = dayMap[dateMap.weekday];
    const hour = parseInt(dateMap.hour, 10);
    const minute = parseInt(dateMap.minute, 10);

    return {
      day: dayOfWeek,
      minutesOfDay: hour * 60 + minute,
      hour,
      minute
    };
  }

  function evaluateBusinessStatus() {
    const { day, minutesOfDay } = getKarachiTime();

    // Check if we are currently in the after-midnight portion of yesterday's shift
    const prevDay = (day + 6) % 7;
    const prevSched = SCHEDULE[prevDay];
    const yesterdayLateClose = prevSched.close - 1440; // e.g. 2:00 AM = 120 min

    if (minutesOfDay < yesterdayLateClose) {
      const minutesRemaining = yesterdayLateClose - minutesOfDay;
      if (minutesRemaining <= 60) {
        return { state: 'closing-soon', text: `Closing soon · closes ${prevSched.closeStr}` };
      }
      return { state: 'open', text: `Open now · closes ${prevSched.closeStr}` };
    }

    // Check today's shift
    const todaySched = SCHEDULE[day];
    if (minutesOfDay >= todaySched.open) {
      // It has opened today. Will it close after midnight or tonight?
      const minutesRemaining = todaySched.close - minutesOfDay;
      if (minutesRemaining <= 60) {
        return { state: 'closing-soon', text: `Closing soon · closes ${todaySched.closeStr}` };
      }
      return { state: 'open', text: `Open now · closes ${todaySched.closeStr}` };
    }

    // Otherwise it is currently closed today before opening
    const openHourFormatted = todaySched.open >= 720 ? `${Math.floor(todaySched.open / 60) - 12}:00 PM` : `${Math.floor(todaySched.open / 60)}:00 AM`;
    return { state: 'closed', text: `Closed · opens today at ${openHourFormatted}` };
  }

  function updateStatusDisplays() {
    const status = evaluateBusinessStatus();
    const statusTextEls = document.querySelectorAll('.js-status-text');
    const indicatorEls = document.querySelectorAll('.status-indicator');

    statusTextEls.forEach(el => {
      el.textContent = status.text;
    });

    indicatorEls.forEach(el => {
      el.classList.remove('is-open', 'is-closing-soon', 'is-closed');
      if (status.state === 'open') el.classList.add('is-open');
      else if (status.state === 'closing-soon') el.classList.add('is-closing-soon');
      else el.classList.add('is-closed');
    });

    // Highlight today in hours table
    const { day } = getKarachiTime();
    const rows = document.querySelectorAll('.hours-table tr[data-day]');
    rows.forEach(r => {
      if (parseInt(r.getAttribute('data-day'), 10) === day) {
        r.classList.add('is-today');
      } else {
        r.classList.remove('is-today');
      }
    });
  }

  /* ==========================================================================
     3. NAVIGATION (Transparent-to-Solid, Scroll spy, Mobile sheet)
     ========================================================================== */
  function initNav() {
    const header = document.getElementById('site-header');
    const sentinel = document.getElementById('nav-sentinel');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-menu-close');
    const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const desktopLinks = document.querySelectorAll('.nav-link');

    // 1. Transparent to solid on scroll
    if ('IntersectionObserver' in window && sentinel) {
      const navObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              header.classList.add('is-scrolled');
            } else {
              header.classList.remove('is-scrolled');
            }
          });
        },
        { rootMargin: '0px', threshold: 0 }
      );
      navObserver.observe(sentinel);
    }

    // 2. Hide on scroll down, show on scroll up
    let lastScrollY = window.scrollY;
    window.addEventListener(
      'scroll',
      () => {
        const currentY = window.scrollY;
        if (currentY > 180 && currentY > lastScrollY && !mobileMenu.classList.contains('is-open')) {
          header.classList.add('is-hidden');
        } else {
          header.classList.remove('is-hidden');
        }
        lastScrollY = currentY;
      },
      { passive: true }
    );

    // 3. Mobile menu open / close with focus management
    let previouslyFocused = null;

    function openMobileMenu() {
      previouslyFocused = document.activeElement;
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      mobileClose.focus();
    }

    function closeMobileMenu() {
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (previouslyFocused && previouslyFocused.focus) {
        previouslyFocused.focus();
      }
    }

    if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // 4. Scroll-spy for desktop navigation
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener(
      'scroll',
      () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach(sec => {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          const id = sec.getAttribute('id');
          if (scrollPos >= top && scrollPos < top + height) {
            desktopLinks.forEach(link => {
              if (link.getAttribute('href') === `#${id}`) {
                link.setAttribute('aria-current', 'true');
              } else {
                link.removeAttribute('aria-current');
              }
            });
          }
        });
      },
      { passive: true }
    );
  }

  /* ==========================================================================
     4. DATA-DRIVEN MENU (Chips filter, Live search, Item dialog)
     ========================================================================== */
  function initMenu() {
    const listContainer = document.getElementById('menu-categories-list');
    const chips = document.querySelectorAll('.category-chips-rail .chip');
    const searchInput = document.getElementById('menu-search');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const searchCountEl = document.getElementById('search-count');
    const emptyStateEl = document.getElementById('menu-empty-state');
    const emptyClearBtn = document.getElementById('empty-clear-btn');

    // Dialog elements
    const itemDialog = document.getElementById('item-dialog');
    const itemClose = document.getElementById('item-dialog-close');
    const dialogImg = document.getElementById('dialog-img');
    const dialogMedia = document.getElementById('dialog-media-wrap');
    const dialogTitle = document.getElementById('dialog-item-title');
    const dialogPrice = document.getElementById('dialog-item-price');
    const dialogCategory = document.getElementById('dialog-item-category');
    const dialogDesc = document.getElementById('dialog-item-desc');

    let activeCategory = 'all';
    let searchQuery = '';
    let lastActiveRow = null;

    // Distinct verified category order
    const categoryOrder = [
      'Burgers',
      'Chicken Mains',
      'Platter',
      'BBQ and Kababs',
      'Starters',
      'Pastas',
      'Sandwiches',
      'Chinese',
      'Beverages',
      'Breads'
    ];

    function renderMenu() {
      listContainer.innerHTML = '';

      // Filter items
      const q = searchQuery.toLowerCase().trim();
      const filtered = MENU.filter(item => {
        const matchesCat = activeCategory === 'all' || item.category.toLowerCase() === activeCategory.toLowerCase();
        const matchesQuery = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
        return matchesCat && matchesQuery;
      });

      // Update search result count for screen readers
      if (searchCountEl) {
        searchCountEl.textContent = `${filtered.length} dishes found`;
      }

      if (filtered.length === 0) {
        emptyStateEl.hidden = false;
        return;
      } else {
        emptyStateEl.hidden = true;
      }

      // Group by category in consistent order
      const grouped = {};
      categoryOrder.forEach(cat => (grouped[cat] = []));

      filtered.forEach(item => {
        if (!grouped[item.category]) grouped[item.category] = [];
        grouped[item.category].push(item);
      });

      categoryOrder.forEach(catName => {
        const items = grouped[catName];
        if (!items || items.length === 0) return;

        const catBlock = document.createElement('div');
        catBlock.className = 'category-block';
        catBlock.id = `cat-${catName.toLowerCase().replace(/\s+/g, '-')}`;

        const header = document.createElement('div');
        header.className = 'category-block-header';
        header.innerHTML = `
          <h3 class="category-block-title">${catName}</h3>
          <span class="category-item-count">${items.length} ${items.length === 1 ? 'item' : 'items'}</span>
        `;
        catBlock.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'category-items-grid';

        items.forEach(item => {
          const row = document.createElement('button');
          row.type = 'button';
          row.className = 'menu-row';
          row.setAttribute('data-id', item.id);
          row.setAttribute('aria-haspopup', 'dialog');
          row.setAttribute('aria-label', `View details for ${item.name}, Rs ${item.price.toLocaleString()}`);

          let thumbHtml = '';
          if (item.image) {
            thumbHtml = `
              <div class="menu-thumb-wrap">
                <img src="${item.image}" alt="${item.name}" width="72" height="72" loading="lazy" class="menu-thumb">
              </div>
            `;
          }

          row.innerHTML = `
            ${thumbHtml}
            <div class="menu-row-content">
              <div class="menu-row-header">
                <span class="menu-item-name">${item.name}</span>
                <span class="menu-dotted-leader" aria-hidden="true"></span>
                <span class="menu-item-price">Rs ${item.price.toLocaleString()}</span>
              </div>
              <p class="menu-item-desc">${item.description}</p>
            </div>
          `;

          row.addEventListener('click', () => openItemDialog(item, row));
          grid.appendChild(row);
        });

        catBlock.appendChild(grid);
        listContainer.appendChild(catBlock);
      });
    }

    // Modal dialog handling
    function openItemDialog(item, triggeringElement) {
      lastActiveRow = triggeringElement;
      dialogTitle.textContent = item.name;
      dialogPrice.textContent = `Rs ${item.price.toLocaleString()}`;
      dialogCategory.textContent = item.category;
      dialogDesc.textContent = item.description;

      if (item.image) {
        dialogImg.src = item.image;
        dialogImg.alt = item.name;
        dialogMedia.hidden = false;
      } else {
        dialogMedia.hidden = true;
      }

      if (typeof itemDialog.showModal === 'function') {
        itemDialog.showModal();
      } else {
        itemDialog.setAttribute('open', '');
      }

      itemClose.focus();
    }

    function closeItemDialog() {
      if (typeof itemDialog.close === 'function') {
        itemDialog.close();
      } else {
        itemDialog.removeAttribute('open');
      }
      if (lastActiveRow && lastActiveRow.focus) {
        lastActiveRow.focus();
      }
    }

    if (itemClose) itemClose.addEventListener('click', closeItemDialog);
    itemDialog.addEventListener('click', e => {
      if (e.target === itemDialog) closeItemDialog();
    });
    itemDialog.addEventListener('cancel', closeItemDialog);

    // Filter Chips
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-selected', 'false');
        });
        chip.classList.add('active');
        chip.setAttribute('aria-selected', 'true');
        activeCategory = chip.getAttribute('data-category');
        renderMenu();
      });
    });

    // Debounced Search (120ms)
    let debounceTimer = null;
    searchInput.addEventListener('input', e => {
      clearTimeout(debounceTimer);
      searchQuery = e.target.value;
      searchClearBtn.hidden = !searchQuery;
      debounceTimer = setTimeout(renderMenu, 120);
    });

    function clearSearch() {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.hidden = true;
      renderMenu();
      searchInput.focus();
    }

    if (searchClearBtn) searchClearBtn.addEventListener('click', clearSearch);
    if (emptyClearBtn) emptyClearBtn.addEventListener('click', clearSearch);

    // Initial render
    renderMenu();
  }

  /* ==========================================================================
     5. REVIEWS RAIL (Snap rail, prev/next buttons, keyboard navigation)
     ========================================================================== */
  function initReviews() {
    const rail = document.getElementById('reviews-rail');
    const prevBtn = document.getElementById('reviews-prev');
    const nextBtn = document.getElementById('reviews-next');

    if (!rail || !prevBtn || !nextBtn) return;

    function updateBtnState() {
      const scrollLeft = rail.scrollLeft;
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      prevBtn.disabled = scrollLeft <= 4;
      nextBtn.disabled = scrollLeft >= maxScroll - 4;
    }

    prevBtn.addEventListener('click', () => {
      rail.scrollBy({ left: -320, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      rail.scrollBy({ left: 320, behavior: 'smooth' });
    });

    rail.addEventListener('scroll', updateBtnState, { passive: true });

    // Keyboard support on the focusable region
    rail.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        rail.scrollBy({ left: -320, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        rail.scrollBy({ left: 320, behavior: 'smooth' });
      }
    });

    updateBtnState();
  }

  /* ==========================================================================
     6. GALLERY LIGHTBOX (Touch swipe, keyboard, adjacent preloading)
     ========================================================================== */
  function initGallery() {
    const dialog = document.getElementById('gallery-dialog');
    const triggers = document.querySelectorAll('.gallery-trigger');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const stage = document.querySelector('.lightbox-stage');

    if (!dialog || triggers.length === 0) return;

    const items = [];
    triggers.forEach((btn, index) => {
      const img = btn.querySelector('img');
      const caption = btn.querySelector('.gallery-caption');
      items.push({
        src: img.src,
        alt: img.alt,
        caption: caption ? caption.textContent : '',
        trigger: btn
      });

      btn.addEventListener('click', () => {
        openLightbox(index);
      });
    });

    let currentIndex = 0;
    let lastActiveTrigger = null;

    function showSlide(index) {
      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;
      currentIndex = index;

      const item = items[currentIndex];
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightboxCaption.textContent = item.caption;
      lightboxCounter.textContent = `${currentIndex + 1} / ${items.length}`;

      // Preload adjacent images
      const nextIdx = (currentIndex + 1) % items.length;
      const prevIdx = (currentIndex - 1 + items.length) % items.length;
      const pre1 = new Image();
      pre1.src = items[nextIdx].src;
      const pre2 = new Image();
      pre2.src = items[prevIdx].src;
    }

    function openLightbox(index) {
      lastActiveTrigger = items[index].trigger;
      showSlide(index);
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
      }
      closeBtn.focus();
    }

    function closeLightbox() {
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
      if (lastActiveTrigger && lastActiveTrigger.focus) {
        lastActiveTrigger.focus();
      }
    }

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    dialog.addEventListener('click', e => {
      if (e.target === dialog) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (!dialog.hasAttribute('open')) return;
      if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
      if (e.key === 'Escape') closeLightbox();
    });

    // Touch swipe (pointer events, 40px threshold)
    let startX = 0;
    let isSwiping = false;

    if (stage) {
      stage.addEventListener('pointerdown', e => {
        startX = e.clientX;
        isSwiping = true;
      });

      stage.addEventListener('pointerup', e => {
        if (!isSwiping) return;
        isSwiping = false;
        const diffX = e.clientX - startX;
        if (diffX > 40) {
          showSlide(currentIndex - 1);
        } else if (diffX < -40) {
          showSlide(currentIndex + 1);
        }
      });

      stage.addEventListener('pointercancel', () => {
        isSwiping = false;
      });
    }
  }

  /* ==========================================================================
     7. LOCATION & MAP FACADE (Copy Address, Load Map)
     ========================================================================== */
  function initLocation() {
    const copyBtn = document.getElementById('copy-address-btn');
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const loadMapBtn = document.getElementById('load-map-btn');
    const mapPlaceholder = document.getElementById('map-facade-placeholder');
    const mapIframeContainer = document.getElementById('map-iframe-container');

    // Copy address + Toast
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const addressText = 'Showroom No.7, GW TOWER, Khayaban E Saadi Road, Block 2 Clifton, Karachi, 75600, Pakistan';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(addressText);
          } else {
            const textarea = document.createElement('textarea');
            textarea.value = addressText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }
          showToast('Address copied to clipboard');
        } catch (err) {
          showToast('Address ready: Showroom 7, GW Tower, Clifton');
        }
      });
    }

    function showToast(msg) {
      if (!toast) return;
      toastMsg.textContent = msg;
      toast.classList.add('is-visible');
      setTimeout(() => {
        toast.classList.remove('is-visible');
      }, 2500);
    }

    // Interactive Map Facade Click-to-load
    function injectMapIframe() {
      if (!mapIframeContainer || mapIframeContainer.innerHTML.trim() !== '') return;
      // Google Maps Embed with exact coordinates: 24.81440071, 67.01962758 (GW Tower Clifton)
      const iframe = document.createElement('iframe');
      iframe.src = 'https://maps.google.com/maps?q=24.81440071,67.01962758&hl=en&z=16&output=embed';
      iframe.title = 'Google Map for Fusion 360 at GW Tower Clifton';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = '0';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      mapIframeContainer.appendChild(iframe);
      mapIframeContainer.hidden = false;
      mapPlaceholder.style.display = 'none';
    }

    if (loadMapBtn) {
      loadMapBtn.addEventListener('click', injectMapIframe);
    }
  }

  /* ==========================================================================
     8. MOBILE STICKY ACTION BAR (<768px)
     ========================================================================== */
  function initActionBar() {
    const actionBar = document.getElementById('mobile-action-bar');
    const heroDock = document.getElementById('hero-action-dock');

    if (!actionBar || !heroDock) return;

    // Show action bar only after hero dock leaves viewport
    if ('IntersectionObserver' in window) {
      const dockObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              actionBar.hidden = false;
              document.body.classList.add('has-action-bar');
            } else {
              actionBar.hidden = true;
              document.body.classList.remove('has-action-bar');
            }
          });
        },
        { rootMargin: '0px', threshold: 0 }
      );
      dockObserver.observe(heroDock);
    } else {
      actionBar.hidden = false;
      document.body.classList.add('has-action-bar');
    }

    // Hide sticky action bar when dialogs or on-screen keyboard open
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
      dialog.addEventListener('close', () => {
        actionBar.classList.remove('is-hidden');
      });
      const observer = new MutationObserver(() => {
        if (dialog.hasAttribute('open')) {
          actionBar.classList.add('is-hidden');
        } else {
          actionBar.classList.remove('is-hidden');
        }
      });
      observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });
    });

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => {
        if (window.visualViewport.height < window.innerHeight * 0.75) {
          // Keyboard likely visible
          actionBar.classList.add('is-hidden');
        } else {
          actionBar.classList.remove('is-hidden');
        }
      });
    }
  }

  /* ==========================================================================
     9. GLOBAL IMAGE ERROR HANDLER (Blueprint 8: Graceful fallback)
     ========================================================================== */
  function initImageErrorHandler() {
    document.addEventListener(
      'error',
      e => {
        if (e.target && e.target.tagName === 'IMG') {
          const img = e.target;
          console.warn('Image failed to load:', img.src);

          // If inside a menu thumbnail, hide thumb wrapper
          const thumbWrap = img.closest('.menu-thumb-wrap');
          if (thumbWrap) {
            thumbWrap.style.display = 'none';
          }

          // If inside gallery, remove the tile
          const galleryItem = img.closest('.gallery-item');
          if (galleryItem) {
            galleryItem.remove();
          }
        }
      },
      true
    );
  }

  /* ==========================================================================
     INITIALIZATION ON DOMContentLoaded
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    // Current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Initialize modules
    updateStatusDisplays();
    initNav();
    initMenu();
    initReviews();
    initGallery();
    initLocation();
    initActionBar();
    initImageErrorHandler();

    // Periodic status refresh every 60 seconds and on tab visibility change
    setInterval(updateStatusDisplays, 60000);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) updateStatusDisplays();
    });
  });
})();
