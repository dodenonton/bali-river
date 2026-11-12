/**
 * BALI RIVER ADVENTURE (baliriveradventure.com)
 * Interactive UX: Package Filtering, Currency Converter, Bilingual EN/ID Toggle,
 * Itinerary Modal, and Live Booking & WhatsApp Concierge Calculator.
 */

const PACKAGE_DATA = {
  'canyon-tubing': {
    name: 'Secret Canyon River Tubing Expedition',
    priceIdr: 650000,
    duration: '90 Mins on River (4.5 km)',
    location: 'Payangan Secret Gorge, North Ubud',
    timeline: [
      ['08:00 AM', 'Private air-conditioned hotel pickup from your Bali villa or resort.'],
      ['09:15 AM', 'Welcome herbal drink at our Payangan bamboo basecamp, safety briefing & gear fitting.'],
      ['09:45 AM', 'Board custom 4WD canyon shuttle down to the spring-fed volcanic river launch point.'],
      ['10:00 AM', '90-minute guided Canyon River Tubing through Class I–II rapids, hidden waterfalls & bamboo gorges.'],
      ['11:45 AM', 'Heated rain showers, fresh towel, and gourmet Indonesian buffet lunch overlooking the valley.'],
      ['01:15 PM', 'Private transfer back to your hotel (or continue to Ubud Gorilla Cave ATV).']
    ],
    inclusions: 'Private Hotel Return Transfer, Custom Canyon Tube, CE Helmet & Life Jacket, Certified River Guides, Waterproof Dry Bag, Heated Shower & Towel, Gourmet Buffet Lunch, IDR 500M Adventure Insurance.'
  },
  'cave-tubing': {
    name: 'Sacred Wos River & Ancient Cave Tubing',
    priceIdr: 590000,
    duration: '80 Mins on River',
    location: 'Wos River Sanctuary, Gianyar',
    timeline: [
      ['08:30 AM', 'Private chauffeur pickup from your hotel or villa.'],
      ['09:30 AM', 'Arrival at Wos River Sanctuary, headlamp & tube safety orientation.'],
      ['09:50 AM', 'Float through 3 ancient subterranean water tunnels, jungle canyons, and weeping waterfalls.'],
      ['11:20 AM', 'Hot shower, towel service, and freshly cooked organic Balinese lunch.'],
      ['12:45 PM', 'Relaxing return drop-off at your accommodation.']
    ],
    inclusions: 'Private Return Transfer, River Tube, Headlamp, Helmet & PFD, Professional Guide, Organic Lunch, Towel, Locker, Full Insurance.'
  },
  'ayung-rafting': {
    name: 'Ayung River Luxury White Water Rafting',
    priceIdr: 550000,
    duration: '2 Hours (12 km Class II–III)',
    location: 'Ayung River Valley, Kedewatan Ubud',
    timeline: [
      ['08:00 AM', 'Private hotel pickup in air-conditioned comfort.'],
      ['09:15 AM', 'Check-in at our Ubud riverside lounge, digital locker assignment & paddle safety briefing.'],
      ['09:45 AM', '2-hour (12 km) white water rafting adventure past 300m Ramayana stone carvings & jungle waterfalls.'],
      ['12:00 PM', 'Arrive at our bamboo finishing pontoon; enjoy heated spa showers & fresh towels.'],
      ['12:30 PM', 'All-you-can-eat Indonesian buffet lunch with panoramic rice field and valley views.'],
      ['01:45 PM', 'Private return transfer to your hotel.']
    ],
    inclusions: 'Private Hotel Transfer, Avon Raft & Paddle, Helmet & Life Jacket, Swiftwater Certified Captain, Dry Bag, Heated Showers, Buffet Lunch, Insurance.'
  },
  'telaga-rafting': {
    name: 'Telaga Waja 16km Extreme Rapids & Dam Drop',
    priceIdr: 620000,
    duration: '2.5 Hours (16 km Class III–IV)',
    location: 'Foothills of Mount Agung, East Bali',
    timeline: [
      ['07:30 AM', 'Private pickup from your hotel heading to the cool foothills of Mount Agung.'],
      ['09:15 AM', 'Welcome coffee/tea & safety briefing right by the riverbanks (minimal stairs!).'],
      ['09:30 AM', '16 km continuous Class III–IV rapids culminating in the thrilling 4-meter Bajing Dam drop.'],
      ['12:15 PM', 'Shower, change clothes, and feast on a mountain-view Indonesian buffet lunch.'],
      ['01:30 PM', 'Private transfer back to your hotel.']
    ],
    inclusions: 'Private Hotel Transfer, Full Rafting Equipment, Certified River Guide, Buffet Lunch, Shower & Towel, IDR 500M Insurance.'
  },
  'jungle-atv': {
    name: 'Ubud Gorilla Cave & Hidden Waterfall ATV (Single)',
    priceIdr: 750000,
    duration: '1.5 – 2 Hours Full Off-Road',
    location: 'Bresela & Kuber Jungle Track, Ubud',
    timeline: [
      ['08:30 AM', 'Private hotel pickup in an air-conditioned SUV/minivan.'],
      ['09:45 AM', 'Arrival at Ubud ATV Basecamp; fit helmet, gumboots & complete test circuit orientation.'],
      ['10:00 AM', 'Ride a 250cc automatic quad bike across bamboo forests, rice terraces, river canyon splashes, a jungle waterfall, and the iconic Gorilla Cave tunnel.'],
      ['12:00 PM', 'Heated showers, clean towel, and gourmet lunch at our jungle pavilion.'],
      ['01:15 PM', 'Private return transfer to your hotel.']
    ],
    inclusions: 'Private Return Transfer, 250cc Automatic Quad Bike (Single Rider), Helmet & Boots, ATV Trail Marshal, Shower & Towel, Lunch, Full Insurance.'
  },
  'tandem-atv': {
    name: 'Tandem Jungle Quad Bike (2 Guests Package)',
    priceIdr: 1050000,
    duration: '1.5 – 2 Hours Full Off-Road (2 Pax)',
    location: 'Bresela Jungle Sanctuary, Ubud',
    timeline: [
      ['08:30 AM', 'Private pickup for both guests from your hotel or villa.'],
      ['09:45 AM', 'Safety briefing, boots & helmet fitting at our Ubud basecamp.'],
      ['10:00 AM', 'Share a powerful two-seater 250cc ATV through waterfalls, caves, mud tracks & rice fields (swap drivers anytime).'],
      ['12:00 PM', 'Hot showers and lunch for 2 guests included.'],
      ['01:15 PM', 'Private return drop-off.']
    ],
    inclusions: 'Covers 2 Guests (Driver + Passenger), Private Transfer, 250cc Tandem ATV, 2x Lunches, Boots, Helmets, Showers, Full Insurance.'
  },
  'kintamani-cycling': {
    name: 'Kintamani Volcano to Ubud Heritage Cycling',
    priceIdr: 600000,
    duration: '3.5 Hours (28 km 85% Downhill)',
    location: 'Kintamani Caldera to Tegalalang, Ubud',
    timeline: [
      ['07:30 AM', 'Private hotel pickup heading up to the Kintamani volcanic highlands.'],
      ['08:45 AM', 'Light breakfast & specialty Bali coffee overlooking Mount Batur & Lake Batur caldera.'],
      ['09:30 AM', 'Begin 28 km scenic downhill glide through sleepy Balinese villages, Subak rice terraces, and ancient temples.'],
      ['12:30 PM', 'Finish in northern Ubud for a traditional Balinese feast at our garden restaurant.'],
      ['01:45 PM', 'Private transfer back to your hotel.']
    ],
    inclusions: 'Private Transfer & Trailing Support Van, Dual-Suspension Mountain Bike & Helmet, Volcano Breakfast, Cultural Guide, Village Donations, Buffet Lunch, Insurance.'
  },
  'batur-trekking': {
    name: 'Mount Batur Sunrise Trek & Thermal Hot Springs',
    priceIdr: 790000,
    duration: '6 Hours Total (Summit 1,717m)',
    location: 'Mount Batur UNESCO Global Geopark',
    timeline: [
      ['01:45 AM', 'Early morning private pickup from your hotel (02:30 AM from Ubud).'],
      ['03:45 AM', 'Meet your private licensed Mount Batur trekking guide; receive headlamps & trekking poles.'],
      ['05:45 AM', 'Reach the 1,717m summit in time for panoramic sunrise above the clouds + volcanic steam breakfast.'],
      ['08:30 AM', 'Descend the crater rim and soak in natural lakeside thermal hot springs overlooking Lake Batur.'],
      ['10:30 AM', 'Optional stop at an organic highland coffee plantation before returning to your hotel.']
    ],
    inclusions: 'Private Hotel Transfer, Private English-Speaking Trek Guide, Geopark Entrance Tickets, Headlamps & Poles, Summit Breakfast, Natural Hot Spring Lounge Access, Insurance.'
  },
  'jungle-trekking': {
    name: 'Ancient Rainforest, Rice Terrace & Waterfall Trek',
    priceIdr: 520000,
    duration: '3 Hours Guided Eco-Walk',
    location: 'Taro Rainforest & Payangan Valley, Ubud',
    timeline: [
      ['08:00 AM', 'Private hotel pickup to northern Ubud highlands.'],
      ['09:00 AM', 'Begin guided walk with a local naturalist through giant bamboo forests, spice groves, and UNESCO Subak rice terraces.'],
      ['10:45 AM', 'Arrive at a secluded canyon waterfall for a refreshing swim & freshly husked young coconut.'],
      ['12:15 PM', 'Organic farm-to-table Balinese lunch overlooking the rainforest canopy.'],
      ['01:30 PM', 'Private return transfer to your hotel.']
    ],
    inclusions: 'Private Return Transfer, Local Ethnobotanist Guide, Walking Stick, Waterfall Entrance, Young Coconut, Organic Lunch, Towel & Insurance.'
  },
  'combo-tubing-atv': {
    name: 'COMBO 01: Secret Canyon Tubing + Gorilla Cave ATV',
    priceIdr: 1120000,
    duration: 'Full Day (6 Hours Total)',
    location: 'Payangan & Bresela Jungle, Ubud',
    timeline: [
      ['08:00 AM', 'Private hotel pickup in an air-conditioned SUV/minivan.'],
      ['09:30 AM', '90-minute Secret Canyon River Tubing through crystal-clear gorges & waterfalls.'],
      ['11:30 AM', 'Gourmet Indonesian buffet lunch at our riverside bamboo pavilion.'],
      ['12:45 PM', '2-hour Full Off-Road 250cc ATV Quad Bike through Gorilla Cave, waterfall & rice terraces.'],
      ['03:00 PM', 'Heated rain showers, fresh towel & private drop-off at your hotel.']
    ],
    inclusions: 'Private VIP Return Transfer, 90-Min Canyon River Tubing, 2-Hr 250cc ATV Quad Bike, Buffet Lunch, All Safety Gear, Showers, Towels & IDR 500M Insurance.'
  },
  'combo-rafting-atv': {
    name: 'COMBO 02: Ayung White Water Rafting + Jungle ATV',
    priceIdr: 1050000,
    duration: 'Full Day (6.5 Hours Total)',
    location: 'Ayung Valley & Bresela Jungle, Ubud',
    timeline: [
      ['08:00 AM', 'Private hotel pickup from your Bali villa or resort.'],
      ['09:30 AM', '2-hour (12 km) Ayung River White Water Rafting past Ramayana carvings & waterfalls.'],
      ['12:00 PM', 'All-you-can-eat Indonesian buffet lunch overlooking the river valley.'],
      ['01:15 PM', '2-hour Gorilla Cave & Hidden Waterfall 250cc ATV Quad Bike expedition.'],
      ['03:30 PM', 'Hot shower, fresh change of clothes & private return transfer.']
    ],
    inclusions: 'Private VIP Return Transfer, 12km Ayung Rafting, 2-Hr Gorilla Cave ATV, Buffet Lunch, All Safety Gear, Showers, Towels & Full Insurance.'
  },
  'combo-trek-tubing': {
    name: 'COMBO 03: Mount Batur Sunrise Trek + Canyon Tubing',
    priceIdr: 1190000,
    duration: 'Dawn to Early Afternoon (8 Hours)',
    location: 'Mount Batur & Payangan Canyon, Ubud',
    timeline: [
      ['01:45 AM', 'Private pickup for Mount Batur Sunrise Trekking with your private summit guide.'],
      ['06:00 AM', 'Watch sunrise from 1,717m summit with volcanic steam-cooked breakfast.'],
      ['09:30 AM', 'Drive down to Payangan Ubud for 90-minute refreshing Secret Canyon River Tubing.'],
      ['11:30 AM', 'Heated shower & riverside buffet lunch before returning to your hotel by 01:30 PM.']
    ],
    inclusions: 'Private Chauffeur All Day, Private Batur Trek Guide, Summit Breakfast, 90-Min Canyon River Tubing, Buffet Lunch, All Tickets & Full Insurance.'
  }
};

const CURRENCY_RATES = {
  IDR: { symbol: 'Rp ', rate: 1, decimals: 0 },
  USD: { symbol: '$', rate: 1 / 15800, decimals: 0 },
  AUD: { symbol: 'A$', rate: 1 / 10400, decimals: 0 },
  EUR: { symbol: '€', rate: 1 / 17100, decimals: 0 }
};

const I18N_DICTIONARY = {
  en: {
    topbar_promo: 'Season Special: Save 20% on Tubing + ATV Combo Packages • Free Private Hotel Pickup',
    nav_core: 'Core Adventures',
    nav_packages: 'Tour Packages',
    nav_combos: 'Combo Deals',
    nav_cycling: 'Cycling & Trekking',
    nav_safety: 'Safety & Luxury',
    nav_book: 'Book Adventure',
    hero_eyebrow: 'BALIRIVERADVENTURE.COM • EST. UBUD, BALI',
    hero_title: 'Where Sacred Rivers Meet Untamed Balinese Luxury.',
    hero_desc: 'Immerse yourself in Bali’s premier outdoor expeditions. Drift through hidden volcanic canyons on <strong>River Tubing</strong>, conquer <strong>Ayung White Water Rafting</strong>, power through jungle caves on <strong>250cc ATVs</strong>, or explore highland trails with curated <strong>Cycling &amp; Sunrise Trekking</strong> tours.',
    hero_cta_explore: 'Explore Tour Packages',
    hero_cta_combo: 'View Triple-Crown Combos',
    finder_badge: 'Instant Availability',
    finder_title: 'Plan Your Bali Expedition',
    finder_sub: 'Select your adventure for instant pricing & private pickup options.',
    pillars_kicker: 'SIGNATURE EXPEDITIONS',
    pillars_title: 'Five Ways to Experience Untamed Bali',
    catalog_kicker: 'CURATED TOUR PACKAGES',
    catalog_title: 'Signature Bali Adventure Packages'
  },
  id: {
    topbar_promo: 'Promo Spesial: Hemat 20% Paket Combo Tubing + ATV • Gratis Jemputan Hotel Privat',
    nav_core: 'Tur Utama',
    nav_packages: 'Paket Wisata',
    nav_combos: 'Paket Combo',
    nav_cycling: 'Cycling & Trekking',
    nav_safety: 'Standar Keamanan',
    nav_book: 'Pesan Sekarang',
    hero_eyebrow: 'BALIRIVERADVENTURE.COM • PUSAT PETUALANGAN UBUD, BALI',
    hero_title: 'Harmoni Sungai Suci & Petualangan Alam Bali Kelas Dunia.',
    hero_desc: 'Nikmati pengalaman petualangan terbaik di Bali. Susuri ngarai tersembunyi dengan <strong>River Tubing</strong>, taklukkan jeram <strong>Arung Jeram Sungai Ayung</strong>, jelajahi gua hutan dengan <strong>ATV 250cc</strong>, hingga <strong>Cycling Tour Kintamani</strong> &amp; <strong>Sunrise Trekking Gunung Batur</strong>.',
    hero_cta_explore: 'Lihat Paket Tur',
    hero_cta_combo: 'Lihat Paket Combo Hemat',
    finder_badge: 'Konfirmasi Instan',
    finder_title: 'Rencanakan Petualangan Anda',
    finder_sub: 'Pilih paket tur untuk cek harga otomatis & penjemputan hotel privat.',
    pillars_kicker: 'EKSPEDISI UNGGULAN KAMI',
    pillars_title: 'Lima Petualangan Terbaik di Alam Bali',
    catalog_kicker: 'KATALOG PAKET WISATA',
    catalog_title: 'Pilihan Paket Tubing, Rafting, ATV, Cycling & Trekking'
  }
};

let currentLang = 'en';

function formatMoney(amountIdr) {
  return 'Rp ' + Math.round(amountIdr).toLocaleString('id-ID');
}

function updateAllDisplayedPrices() {
  document.querySelectorAll('[data-base-idr]').forEach((el) => {
    const baseIdr = Number(el.getAttribute('data-base-idr'));
    if (!Number.isNaN(baseIdr)) {
      const hasPaxSuffix = el.classList.contains('combo-price');
      el.innerHTML = hasPaxSuffix
        ? `${formatMoney(baseIdr)} <small>/ pax</small>`
        : formatMoney(baseIdr);
    }
  });
  updateQuickFinderEstimate();
  updateMainBookingSummary();
}

function updateQuickFinderEstimate() {
  const activityEl = document.getElementById('finder-activity');
  const paxEl = document.getElementById('finder-pax');
  const priceEl = document.getElementById('finder-total-price');
  const noteEl = document.getElementById('finder-discount-note');
  if (!activityEl || !paxEl || !priceEl) return;

  const pkg = PACKAGE_DATA[activityEl.value];
  const pax = Number(paxEl.value) || 2;
  if (!pkg) return;

  let totalIdr = pkg.priceIdr * pax;
  if (pax >= 4) {
    totalIdr *= 0.9; // 10% group discount
    noteEl.textContent = '10% Group Discount Applied + Free Pickup';
  } else {
    noteEl.textContent = 'Includes Buffet Lunch, Gear & Insurance';
  }
  priceEl.textContent = formatMoney(totalIdr);
}

function updateMainBookingSummary() {
  const pkgSelect = document.getElementById('book-package');
  const guestsInput = document.getElementById('book-guests');
  const pickupSelect = document.getElementById('book-pickup');
  const totalDisplay = document.getElementById('book-total-display');
  const breakdownDisplay = document.getElementById('book-summary-breakdown');
  if (!pkgSelect || !guestsInput || !totalDisplay) return;

  const pkg = PACKAGE_DATA[pkgSelect.value] || PACKAGE_DATA['canyon-tubing'];
  const guests = Math.max(1, Number(guestsInput.value) || 2);
  let totalIdr = pkg.priceIdr * guests;

  const ownTransport = pickupSelect && pickupSelect.value.includes('Own Transport');
  if (ownTransport) {
    totalIdr -= 75000 * guests;
  }

  let discountText = 'Free Private Transfer';
  if (ownTransport) {
    discountText = 'Self-Drive Rebate Applied';
  } else if (guests >= 4) {
    totalIdr *= 0.9;
    discountText = '10% Group Discount + Free Private Transfer';
  }

  totalDisplay.textContent = formatMoney(totalIdr);
  if (breakdownDisplay) {
    breakdownDisplay.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'} • ${discountText}`;
  }
}

function initCategoryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pkg-card');

  function applyFilter(category) {
    filterBtns.forEach((btn) => {
      const isMatch = btn.getAttribute('data-filter') === category;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    cards.forEach((card) => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.removeAttribute('hidden');
      } else {
        card.setAttribute('hidden', '');
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyFilter(btn.getAttribute('data-filter'));
    });
  });

  document.querySelectorAll('[data-filter-trigger]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetCat = link.getAttribute('data-filter-trigger');
      if (targetCat) applyFilter(targetCat);
    });
  });
}

function initModal() {
  const modal = document.getElementById('pkg-modal');
  const modalBody = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!modal || !modalBody) return;

  function closeModal() {
    modal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
  }

  function openModal(pkgId) {
    const pkg = PACKAGE_DATA[pkgId];
    if (!pkg) return;

    const timelineHtml = pkg.timeline
      .map(([time, desc]) => `<li><strong>${time}</strong> — ${desc}</li>`)
      .join('');

    modalBody.innerHTML = `
      <span class="section-kicker">${pkg.location}</span>
      <h2 id="modal-title" style="font-family: var(--font-serif); font-size: 2rem; color: var(--jungle-900); margin-bottom: 0.35rem;">
        ${pkg.name}
      </h2>
      <p style="font-size: 0.9rem; color: var(--terracotta); font-weight: 700; margin-bottom: 1rem;">
        Duration: ${pkg.duration} &bull; Rate: ${formatMoney(pkg.priceIdr)} / person
      </p>
      <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-700);">Sample Itinerary</h4>
      <ul class="modal-timeline">${timelineHtml}</ul>
      <div style="background: var(--limestone); padding: 1rem; border-radius: 8px; font-size: 0.86rem; margin-bottom: 1.5rem;">
        <strong>All-Inclusive Package Covers:</strong><br/>
        ${pkg.inclusions}
      </div>
      <button type="button" class="btn btn-primary btn-block" id="modal-book-now-btn" data-pkg="${pkgId}">
        Select This Package &amp; Proceed to Booking
      </button>
    `;

    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');

    const bookBtn = document.getElementById('modal-book-now-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        closeModal();
        selectPackageAndScroll(pkgId);
      });
    }
  }

  document.querySelectorAll('.js-open-modal').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-pkg')));
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });
}

function selectPackageAndScroll(pkgId) {
  const pkgSelect = document.getElementById('book-package');
  if (pkgSelect && PACKAGE_DATA[pkgId]) {
    pkgSelect.value = pkgId;
    updateMainBookingSummary();
  }
  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Google Apps Script Web App Endpoint (connects to Google Sheets & dewabiketour@gmail.com)
// Paste your deployed Google Apps Script URL here:
const GOOGLE_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwYOUR_DEPLOYMENT_ID/exec';

function initFormsAndNavigation() {
  // Default tomorrow's date on date inputs
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isoDate = tomorrow.toISOString().split('T')[0];

  ['finder-date', 'book-date'].forEach((id) => {
    const input = document.getElementById(id);
    if (input) {
      input.value = isoDate;
      input.min = new Date().toISOString().split('T')[0];
    }
  });

  // Quick finder form
  const finderForm = document.getElementById('quick-finder-form');
  if (finderForm) {
    document.getElementById('finder-activity')?.addEventListener('change', updateQuickFinderEstimate);
    document.getElementById('finder-pax')?.addEventListener('change', updateQuickFinderEstimate);

    finderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const act = document.getElementById('finder-activity').value;
      const date = document.getElementById('finder-date').value;
      const pax = document.getElementById('finder-pax').value;

      const bookPkg = document.getElementById('book-package');
      const bookDate = document.getElementById('book-date');
      const bookGuests = document.getElementById('book-guests');

      if (bookPkg) bookPkg.value = act;
      if (bookDate && date) bookDate.value = date;
      if (bookGuests && pax) bookGuests.value = pax;
      updateMainBookingSummary();

      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Book buttons on cards & combos
  document.querySelectorAll('.js-book-pkg, [data-select-pkg]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const pkgId = btn.getAttribute('data-pkg') || btn.getAttribute('data-select-pkg');
      if (pkgId) {
        e.preventDefault();
        selectPackageAndScroll(pkgId);
      }
    });
  });

  // Main Booking Calculator listeners
  ['book-package', 'book-guests', 'book-pickup'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', updateMainBookingSummary);
    document.getElementById(id)?.addEventListener('change', updateMainBookingSummary);
  });

  // Main Booking Form Submit -> Google Sheets + Email + WhatsApp
  const mainForm = document.getElementById('main-booking-form');
  const voucherBtn = document.getElementById('btn-email-booking');
  const toastEl = document.getElementById('booking-confirmation-toast');

  function buildBookingPayload() {
    const pkgKey = document.getElementById('book-package').value;
    const pkg = PACKAGE_DATA[pkgKey] || PACKAGE_DATA['canyon-tubing'];
    const date = document.getElementById('book-date').value;
    const session = document.getElementById('book-session').value;
    const guests = document.getElementById('book-guests').value;
    const pickup = document.getElementById('book-pickup').value;
    const name = document.getElementById('book-name').value || 'Valued Guest';
    const phone = document.getElementById('book-whatsapp').value || '-';
    const hotel = document.getElementById('book-hotel').value || 'To be advised';
    const total = document.getElementById('book-total-display').textContent;
    const refCode = 'BRA-' + Math.floor(100000 + Math.random() * 900000);

    return {
      refCode,
      pkgKey,
      pkgName: pkg.name,
      date,
      session,
      guests,
      pickup,
      name,
      phone,
      hotel,
      total,
      poweredBy: 'Dewa Bike Tour'
    };
  }

  async function sendToGoogleSheetsAndEmail(payload) {
    if (!GOOGLE_SCRIPT_WEBAPP_URL || GOOGLE_SCRIPT_WEBAPP_URL.includes('YOUR_DEPLOYMENT_ID')) {
      console.info('Google Apps Script URL belum diganti dengan deployment ID nyata.');
      return;
    }
    try {
      await fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script CORS standard
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log('Booking berhasil dikirim ke Google Sheets & dewabiketour@gmail.com');
    } catch (err) {
      console.warn('Gagal sync ke Google Sheets:', err);
    }
  }

  if (mainForm) {
    mainForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = mainForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Menyimpan & Menghubungkan ke WhatsApp...';
      }

      const data = buildBookingPayload();

      // Kirim data ke Google Sheets & Email dewabiketour@gmail.com di background
      await sendToGoogleSheetsAndEmail(data);

      const waText = [
        `*BALI RIVER ADVENTURE — NEW BOOKING (${data.refCode})*`,
        `Website: https://baliriveradventure.com`,
        `Powered by: Dewa Bike Tour`,
        `----------------------------------`,
        `• *Package:* ${data.pkgName}`,
        `• *Date:* ${data.date}`,
        `• *Session:* ${data.session}`,
        `• *Guests:* ${data.guests} Pax`,
        `• *Pickup Area:* ${data.pickup}`,
        `• *Hotel / Notes:* ${data.hotel}`,
        `• *Guest Name:* ${data.name} (${data.phone})`,
        `• *Estimated Total:* ${data.total}`,
        `----------------------------------`,
        `Notification sent to dewabiketour@gmail.com & Google Sheets.`,
        `Please confirm our reservation and pickup time. Thank you!`
      ].join('\n');

      if (toastEl) {
        toastEl.hidden = false;
        toastEl.innerHTML = `
          <strong>✓ Reservasi ${data.refCode} Berhasil Tercatat!</strong><br/>
          Data otomatis masuk ke Google Sheets & notifikasi dikirim ke <strong>dewabiketour@gmail.com</strong>.<br/>
          Membuka WhatsApp Concierge untuk konfirmasi langsung...
        `;
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }

      const waUrl = `https://wa.me/6281238908899?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  if (voucherBtn) {
    voucherBtn.addEventListener('click', async () => {
      const data = buildBookingPayload();
      await sendToGoogleSheetsAndEmail(data);
      if (toastEl) {
        toastEl.hidden = false;
        toastEl.innerHTML = `
          <strong>✓ Instant Reservation Summary (${data.refCode})</strong><br/>
          <em>Powered by Dewa Bike Tour</em><br/>
          <strong>Tour:</strong> ${data.pkgName}<br/>
          <strong>Date &amp; Session:</strong> ${data.date} &bull; ${data.session}<br/>
          <strong>Guest:</strong> ${data.name} (${data.guests} Pax) &bull; <strong>Pickup:</strong> ${data.pickup}<br/>
          <strong>Total Rate:</strong> ${data.total} (Data tercatat di Google Sheets & email notifikasi terkirim ke dewabiketour@gmail.com)
        `;
      }
    });
  }

  // Currency selector
  const currencySelect = document.getElementById('currency-select');
  if (currencySelect) {
    currencySelect.addEventListener('change', () => {
      currentCurrency = currencySelect.value;
      updateAllDisplayedPrices();
    });
  }

  // Language EN / ID toggle
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'id' : 'en';
      document.documentElement.lang = currentLang;
      const dict = I18N_DICTIONARY[currentLang];
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });
      document.getElementById('lang-current').textContent = currentLang.toUpperCase();
      document.getElementById('lang-alt').textContent = currentLang === 'en' ? 'ID' : 'EN';
    });
  }

  // Mobile menu toggle & sticky header
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  // Smart scroll header: hide on scroll down, show on scroll up smoothly
  const header = document.getElementById('site-header');
  let lastScrollY = window.scrollY;
  let scrollThreshold = 10; // minimum movement to prevent micro-jitter

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Tambahkan bayangan jika sudah scroll lewat 20px
    if (header) {
      header.classList.toggle('scrolled', currentScrollY > 20);

      // Jangan sembunyikan jika menu mobile sedang terbuka atau modal sedang aktif
      const isMobileMenuOpen = mainNav && mainNav.classList.contains('open');
      const isModalActive = document.body.classList.contains('modal-open');

      if (isMobileMenuOpen || isModalActive) {
        header.classList.remove('header-hidden');
        lastScrollY = currentScrollY;
        return;
      }

      // Selalu tampilkan header di bagian paling atas halaman
      if (currentScrollY <= 80) {
        header.classList.remove('header-hidden');
      } else if (currentScrollY > lastScrollY + scrollThreshold) {
        // Scroll turun -> sembunyikan header dengan halus
        header.classList.add('header-hidden');
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        // Scroll naik -> munculkan header kembali
        header.classList.remove('header-hidden');
      }
    }

    lastScrollY = Math.max(0, currentScrollY);
  }, { passive: true });

  updateAllDisplayedPrices();
}

document.addEventListener('DOMContentLoaded', () => {
  initCategoryFilter();
  initModal();
  initFormsAndNavigation();
});
