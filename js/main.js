/* AgroNova landing page */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * CONFIG: fill these in before going live.
   * ------------------------------------------------------------------ */
  var CONFIG = {
  formEndpoint: "https://formspree.io/f/maeovqrk",
  whatsappNumber: "201559728271",
  email: "mohamedmagdy990900@email.com",
  previewMode: false
};

  var doc = document.documentElement;
  doc.classList.remove("no-js");

  /* ------------------------------------------------------------------
   * English copy. Arabic lives in the HTML (default, SEO, works without JS).
   * ------------------------------------------------------------------ */
  var EN = {
    "skip": "Skip to content",
    "brand": "AgroNova",
    "nav.features": "Features",
    "nav.how": "How it works",
    "nav.faq": "FAQ",
    "cta.book": "Book a demo",
    "cta.how": "See how it works",

    "hero.pill": "Smart farming platform for export farms",
    "hero.title": "Know the state of your land and crop in real time, and decide by the numbers",
    "hero.sub": "Soil sensors, satellite imagery, and disease and weather forecasting in one platform, with clear recommendations sent to your production manager on dashboard and mobile.",
    "hero.t1": "IoT soil monitoring",
    "hero.t2": "Satellite imagery",
    "hero.t3": "Disease forecasting",
    "hero.visualAria": "Illustrative screenshot of the AgroNova dashboard",

    "m.farmName": "Main farm",
    "m.farmMeta": "420 feddans · 12 sectors · updated 4 min ago",
    "m.live": "Live",
    "m.moisture": "Soil moisture",
    "m.salinity": "Salinity EC",
    "m.temp": "Soil temp.",
    "m.ndvi": "Avg. NDVI",
    "m.alertsTitle": "Alerts",
    "m.al1": "Blight risk · B4",
    "m.al2": "Irrigation due · C1",
    "m.al3": "High salinity · A2",
    "m.al4": "8 sectors stable",
    "m.now": "now",
    "m.pnTitle": "Alert: late blight risk",
    "m.pnBody": "Sector B4 · Tomato. Relative humidity 92% for 10 hours. Preventive spray advised within 24 hours.",
    "m.pcTitle": "Soil moisture · C1 · 7 days",
    "m.pcNote": "Below irrigation threshold (22%)",

    "problem.eyebrow": "The challenge",
    "problem.title": "Big decisions made every day on incomplete data",
    "problem.lead": "A production manager at an export farm runs hundreds of feddans, shipping deadlines and strict quality specs, yet most of the information at hand is late or estimated.",
    "problem.c1t": "Irrigation and fertilizing by guesswork",
    "problem.c1p": "Water and fertilizer amounts are set by experience and eye, not by actual soil readings for each sector.",
    "problem.c2t": "Diseases are caught too late",
    "problem.c2p": "By the time an infection is visible, part of the crop is already lost, and spraying becomes a cure instead of prevention.",
    "problem.c3t": "No clear cost per crop",
    "problem.c3p": "Expenses are scattered across notebooks and spreadsheets, so it's hard to know what each crop costs and earns.",

    "how.imgAlt": "Solar-powered soil sensors in a field",
    "how.badgeT": "Continuous field readings",
    "how.badgeS": "Moisture · Salinity · Temperature",
    "how.eyebrow": "How it works",
    "how.title": "From the soil to your decision in 3 steps",
    "how.s1t": "Measure from the ground",
    "how.s1p": "Soil sensors measure moisture, salinity, temperature and more, around the clock, for every sector.",
    "how.s2t": "Analyse the data together",
    "how.s2p": "Satellite imagery and weather data are analysed alongside sensor readings, so you see the full picture.",
    "how.s3t": "A recommendation in your hand",
    "how.s3p": "Clear recommendations and alerts reach the production manager on dashboard and mobile: what's wrong, where, and what to do.",

    "features.eyebrow": "Features",
    "features.title": "Everything you need to run the farm by the numbers",
    "features.f1t": "IoT soil monitoring",
    "features.f1p": "Continuous moisture, salinity and temperature readings per sector, so you irrigate and fertilize only as needed.",
    "features.f2t": "Satellite imagery",
    "features.f2p": "Plant health index (NDVI) across the whole farm, so you spot weak sectors before they show on the ground.",
    "features.f3t": "Disease & weather forecasting",
    "features.f3p": "Early warning when conditions favour disease spread, plus weather forecasts to plan spraying and irrigation.",
    "features.f4t": "Voice assistant in Egyptian Arabic",
    "features.f4p": "Ask the way you talk: “Does sector 3 need irrigation today?” and get an answer in seconds.",
    "features.f5t": "Financial records & cost per crop",
    "features.f5p": "Every expense is logged against its crop and sector, so you know the cost per feddan and your margin.",
    "features.ctaT": "Want to see it on your farm?",
    "features.ctaP": "We'll walk you through the platform on data from a farm like yours.",

    "preview.eyebrow": "Product preview",
    "preview.title": "See the platform from the inside",
    "preview.lead": "Three screens a production manager uses every day.",
    "preview.tab1": "Farm map",
    "preview.tab2": "Alerts",
    "preview.tab3": "Cost report",
    "preview.ndviLow": "Low NDVI",
    "preview.ndviHigh": "High",
    "preview.secName": "Sector B4 · Tomato",
    "preview.secStatus": "Needs attention",
    "preview.recT": "Recommendation:",
    "preview.recP": "Preventive spray against late blight within 24 hours, and reduce irrigation by 15% for two days.",
    "preview.a1t": "Late blight risk",
    "preview.a1p": "Sector B4 · Tomato · Relative humidity 92% for 10 hours at 16–20°C. Preventive spray advised within 24 hours.",
    "preview.a1m": "12 min ago · sent to mobile",
    "preview.a2t": "Irrigation needed",
    "preview.a2p": "Sector C1 · Strawberry · Soil moisture 18%, below the set irrigation threshold (22%).",
    "preview.a2m": "1 hour ago · Assigned to: Eng. Ahmed",
    "preview.a3t": "Rising salinity",
    "preview.a3p": "Sector A2 · Pepper · EC reached 3.8 dS/m. Leaching advised in the next irrigation cycle.",
    "preview.a3m": "3 hours ago",
    "preview.a4t": "Heatwave expected",
    "preview.a4p": "Forecast high of 39°C on Thursday. Review the irrigation schedule for exposed sectors.",
    "preview.a4m": "This morning",
    "preview.lvlCrit": "Urgent",
    "preview.lvlWarn": "Important",
    "preview.lvlInfo": "FYI",
    "preview.costTitle": "Cost per feddan by crop · 2026/2027 season",
    "preview.costUnit": "EGP",
    "preview.thCrop": "Crop",
    "preview.thArea": "Area",
    "preview.thCost": "Cost per feddan",
    "preview.thTop": "Largest item",
    "preview.note": "* Screens and figures shown are illustrative design data only.",
    "crop.strawberry": "Strawberry",
    "crop.grapes": "Grapes",
    "crop.tomato": "Tomato",
    "crop.pepper": "Pepper",
    "crop.potato": "Potato",
    "unit.fed": "fed.",
    "item.labor": "Labour",
    "item.fert": "Fertilizer",
    "item.seed": "Seed",

    "impact.eyebrow": "Expected impact",
    "impact.title": "Real numbers, from real farms",
    "impact.lead": "We're measuring results with our pilot farms now. We'll publish the numbers once they're proven, and we won't print a figure we can't stand behind.",
    "impact.s1": "Irrigation water saved",
    "impact.s2": "Crop losses reduced",
    "impact.s3": "Faster problem detection",
    "impact.s4": "Fertilizer saved",
    "impact.pending": "After the pilot",

    "roles.eyebrow": "Who is it for?",
    "roles.title": "One platform, and everyone on the team gets what matters to them",
    "roles.r1t": "Production manager",
    "roles.r1p": "The full farm picture, with alerts ranked by priority.",
    "roles.r2t": "Agronomist",
    "roles.r2p": "Readings for every sector, plus irrigation, fertilizing and spraying advice.",
    "roles.r3t": "Accountant",
    "roles.r3p": "Cost per crop and sector, without scattered spreadsheets.",
    "roles.r4t": "Quality officer",
    "roles.r4p": "A complete log of treatments and sprays that eases export and traceability requirements.",

    "trust.imgAlt": "Agronomist inspecting a plant leaf in the field",
    "trust.pill": "Pilot programme with selected farms",
    "trust.title": "We're building AgroNova alongside export farms, not apart from them",
    "trust.body": "We're currently working with a small number of farms in a pilot phase, and their feedback shapes the product. If you'd like your farm to be one of them, book a demo and let's talk.",
    "trust.cta": "Join the pilot",

    "faq.eyebrow": "FAQ",
    "faq.title": "Questions we hear a lot",
    "faq.q1": "What if the internet is weak on the farm?",
    "faq.a1": "Sensors keep their readings and send them as soon as the connection returns, so no data is lost. During the site visit we agree with your team on the best connectivity option for your location.",
    "faq.q2": "How long does installation take?",
    "faq.a2": "It depends on farm size and the number of sectors. After the site visit we give you a clear installation schedule, and installation happens without stopping farm work.",
    "faq.q3": "Does it connect to our accounting system?",
    "faq.a3": "You can export financial reports to Excel. Direct integration depends on the accounting system you use; ask us about it during the demo.",
    "faq.q4": "Who owns the data?",
    "faq.a4": "Your farm's data is yours. We don't share it with any third party without your consent, and you can request a copy at any time.",
    "faq.q5": "Pricing: one-off purchase or subscription?",
    "faq.a5": "Pricing depends on area, number of sensors and the features you need. We'll walk you through the options and details in the demo.",

    "demo.eyebrow": "Book a demo",
    "demo.title": "See AgroNova running on a farm like yours",
    "demo.lead": "Leave your details and we'll call you to set a time that suits you.",
    "demo.b1": "Online demo or an on-farm visit",
    "demo.b2": "We review each sector's needs with your team",
    "demo.b3": "No purchase commitment",

    "form.name": "Name",
    "form.company": "Company / Farm",
    "form.role": "Job title",
    "form.choose": "Select",
    "form.roleFinance": "Accountant / Finance",
    "form.roleOwner": "Owner / Senior management",
    "form.roleOther": "Other",
    "form.area": "Area (feddans)",
    "form.crop": "Crop",
    "form.cropPh": "e.g. strawberry, grapes, citrus",
    "form.phone": "Mobile / WhatsApp",
    "form.errRequired": "This field is required",
    "form.errArea": "Enter the area as a number",
    "form.errPhone": "Enter a valid mobile number",
    "form.privacy": "We'll only use your details to contact you about the demo.",
    "form.doneT": "Request received, thank you!",
    "form.doneP": "The AgroNova team will contact you by phone or WhatsApp within one business day.",
    "form.fail": "Something went wrong while sending. Try again or message us on WhatsApp.",

    "footer.tag": "A smart farming platform that helps export farms make decisions by the numbers.",
    "footer.links": "Links",
    "footer.contact": "Contact us",
    "footer.whatsapp": "WhatsApp",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy policy",
    "footer.terms": "Terms of use",
    "footer.rights": "AgroNova. All rights reserved."
  };

  var META = {
    ar: { title: document.title, burger: "القائمة", langBtn: "Switch to English", langLabel: "EN" },
    en: { title: "AgroNova | Smart farming platform for export farms", burger: "Menu", langBtn: "التبديل إلى العربية", langLabel: "عربي" }
  };

  /* ------------------------------------------------------------------
   * i18n
   * ------------------------------------------------------------------ */
  var AR = {};
  var i18nNodes = document.querySelectorAll("[data-i18n]");
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var phNodes = document.querySelectorAll("[data-i18n-ph]");
  var ariaNodes = document.querySelectorAll("[data-i18n-aria]");

  function remember(nodes, attr, read) {
    nodes.forEach(function (el) {
      var key = el.getAttribute(attr);
      if (!(key in AR)) AR[key] = read(el);
    });
  }
  remember(i18nNodes, "data-i18n", function (el) { return el.textContent; });
  remember(altNodes, "data-i18n-alt", function (el) { return el.getAttribute("alt"); });
  remember(phNodes, "data-i18n-ph", function (el) { return el.getAttribute("placeholder"); });
  remember(ariaNodes, "data-i18n-aria", function (el) { return el.getAttribute("aria-label"); });

  var currentLang = "ar";

  function setLang(lang) {
    var dict = lang === "en" ? EN : AR;
    var t = function (k) { return dict[k] != null ? dict[k] : AR[k]; };

    i18nNodes.forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    altNodes.forEach(function (el) { el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))); });
    phNodes.forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    ariaNodes.forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });

    doc.lang = lang;
    doc.dir = lang === "en" ? "ltr" : "rtl";
    document.title = META[lang].title;
    document.getElementById("langLabel").textContent = META[lang].langLabel;
    document.getElementById("langToggle").setAttribute("aria-label", META[lang].langBtn);
    document.getElementById("navBurger").setAttribute("aria-label", META[lang].burger);
    currentLang = lang;
    try { localStorage.setItem("agronova-lang", lang); } catch (e) { /* private mode */ }
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    setLang(currentLang === "ar" ? "en" : "ar");
  });

  var urlLang = new URLSearchParams(location.search).get("lang") || (location.hash === "#en" ? "en" : null);
  var savedLang = null;
  try { savedLang = localStorage.getItem("agronova-lang"); } catch (e) { /* ignore */ }
  setLang(urlLang === "en" || (!urlLang && savedLang === "en") ? "en" : "ar");

  /* ------------------------------------------------------------------
   * Contact links
   * ------------------------------------------------------------------ */
  var waBase = CONFIG.whatsappNumber ? "https://wa.me/" + CONFIG.whatsappNumber : "#";
  document.querySelectorAll('[data-contact="whatsapp"]').forEach(function (a) { a.href = waBase; });
  document.querySelectorAll('[data-contact="email"]').forEach(function (a) { a.href = "mailto:" + CONFIG.email; });
  document.querySelectorAll('[data-contact-label="email"]').forEach(function (s) { s.textContent = CONFIG.email; });
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------
   * Navbar: mobile menu + scrolled state
   * ------------------------------------------------------------------ */
  var nav = document.querySelector(".nav");
  var burger = document.getElementById("navBurger");

  function closeMenu() {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll("#navLinks a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  document.addEventListener("click", function (e) { if (!nav.contains(e.target)) closeMenu(); });

  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------------
   * Product preview tabs (WAI-ARIA tabs pattern)
   * ------------------------------------------------------------------ */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { selectTab(tab, false); });
    tab.addEventListener("keydown", function (e) {
      var rtl = doc.dir === "rtl";
      var next = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
      if (e.key === "Home") next = -i;
      if (e.key === "End") next = tabs.length - 1 - i;
      if (next === undefined) return;
      e.preventDefault();
      selectTab(tabs[(i + next + tabs.length) % tabs.length], true);
    });
  });

  /* ------------------------------------------------------------------
   * Reveal on scroll + mobile sticky CTA
   * ------------------------------------------------------------------ */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el, idx) {
      el.style.transitionDelay = (idx % 4) * 70 + "ms";
      io.observe(el);
    });

    var sticky = document.getElementById("stickyCta");
    var heroGone = false, demoVisible = false;
    var updateSticky = function () {
      var show = heroGone && !demoVisible;
      sticky.classList.toggle("is-visible", show);
      sticky.setAttribute("aria-hidden", String(!show));
      sticky.querySelector("a").tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(function (e) { heroGone = !e[0].isIntersecting; updateSticky(); })
      .observe(document.querySelector(".hero__ctas"));
    new IntersectionObserver(function (e) { demoVisible = e[0].isIntersecting; updateSticky(); })
      .observe(document.getElementById("demo"));
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ------------------------------------------------------------------
   * Demo form
   * ------------------------------------------------------------------ */
  var form = document.getElementById("demoForm");
  var done = document.getElementById("formDone");
  var fail = document.getElementById("formFail");

  // Convert Arabic-Indic / Persian digits to ASCII so "٣٠٠" validates.
  function toAsciiDigits(s) {
    return String(s).replace(/[٠-٩۰-۹]/g, function (d) {
      return String(d.charCodeAt(0) & 0xF);
    });
  }

  var validators = {
    area: function (v) { return /^\d+(\.\d+)?$/.test(toAsciiDigits(v).replace(/[,\s]/g, "")) && parseFloat(toAsciiDigits(v)) > 0; },
    phone: function (v) { return /^\+?\d{8,15}$/.test(toAsciiDigits(v).replace(/[\s\-()]/g, "")); }
  };

  function validateField(el) {
    var v = el.value.trim();
    var ok = v !== "" && (!validators[el.name] || validators[el.name](v));
    el.closest(".field").classList.toggle("is-invalid", !ok);
    el.setAttribute("aria-invalid", String(!ok));
    return ok;
  }

  var fields = form.querySelectorAll(".field input, .field select");
  fields.forEach(function (el) {
    el.addEventListener("blur", function () { if (el.value.trim()) validateField(el); });
    el.addEventListener("input", function () {
      if (el.closest(".field").classList.contains("is-invalid")) validateField(el);
    });
  });

  function buildWhatsAppText(d) {
    var en = currentLang === "en";
    var lines = en
      ? ["Demo request: AgroNova", "Name: " + d.name, "Company / Farm: " + d.company, "Job title: " + d.roleLabel, "Area: " + d.area + " feddans", "Crop: " + d.crop, "Mobile: " + d.phone]
      : ["طلب عرض تجريبي: AgroNova", "الاسم: " + d.name, "الشركة / المزرعة: " + d.company, "الوظيفة: " + d.roleLabel, "المساحة: " + d.area + " فدان", "المحصول: " + d.crop, "الموبايل: " + d.phone];
    return lines.join("\n");
  }

  function showDone() {
    done.hidden = false;
    done.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fail.hidden = true;

    var firstBad = null;
    fields.forEach(function (el) { if (!validateField(el) && !firstBad) firstBad = el; });
    if (firstBad) { firstBad.focus(); return; }
    if (form.elements.website.value) return; // bot

    var roleSel = form.elements.role;
    var data = {
      name: form.elements.name.value.trim(),
      company: form.elements.company.value.trim(),
      role: roleSel.value,
      roleLabel: roleSel.options[roleSel.selectedIndex].textContent.trim(),
      area: toAsciiDigits(form.elements.area.value.trim()),
      crop: form.elements.crop.value.trim(),
      phone: toAsciiDigits(form.elements.phone.value.trim()),
      lang: currentLang,
      page: location.href,
      submittedAt: new Date().toISOString()
    };

    if (CONFIG.formEndpoint) {
      var btn = form.querySelector('button[type="submit"]');
      btn.classList.add("is-loading");
      fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (res) { if (!res.ok) throw new Error(res.status); showDone(); form.reset(); })
        .catch(function () { fail.hidden = false; })
        .finally(function () { btn.classList.remove("is-loading"); });
      return;
    }

    if (CONFIG.whatsappNumber) {
      window.open(waBase + "?text=" + encodeURIComponent(buildWhatsAppText(data)), "_blank", "noopener");
      showDone();
      return;
    }

    if (CONFIG.previewMode) {
      var msg = currentLang === "en"
        ? ["Preview version", "This form isn't connected yet, so your details were not sent. The live site will deliver them to the AgroNova team."]
        : ["نسخة معاينة", "الفورم في النسخة دي لسه مش متوصل، فبياناتك ماتبعتتش. في الموقع الفعلي هتوصل لفريق AgroNova."];
      done.querySelector("h3").textContent = msg[0];
      done.querySelector("p").textContent = msg[1];
      showDone();
      return;
    }

    // Nothing configured yet: don't pretend the request was sent.
    console.warn("[AgroNova] Set CONFIG.formEndpoint or CONFIG.whatsappNumber in js/main.js. Form data:", data);
    fail.hidden = false;
  });
})();
