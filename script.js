/* ===================================================
   明轩 Mayfair — 中英双语交互脚本
   =================================================== */
(function () {
  "use strict";

  /* ---------- 1. 双语词库 ---------- */
  var I18N = {
    zh: {
      "meta.title": "明轩 Mayfair · 至臻中华料理",
      "meta.description": "明轩 Mayfair —— 坐落于伦敦梅费尔区的现代中华料理餐厅,提供经典粤川名菜与北京烤鸭。",

      "nav.home": "首页",
      "nav.menu": "菜单",
      "nav.about": "关于我们",
      "nav.reserve": "订座预约",
      "nav.contact": "联系我们",

      "hero.eyebrow": "伦敦梅费尔 · 始于 2009",
      "hero.title": "至臻中华料理",
      "hero.sub": "在伦敦的心脏地带,品味地道粤川风味与匠心烤鸭。一桌一席,皆为团圆。",
      "hero.ctaMenu": "浏览菜单",
      "hero.ctaReserve": "立即订座",
      "hero.scroll": "向下浏览",

      "menu.eyebrow": "本店菜单",
      "menu.title": "珍馐佳肴",
      "menu.intro": "每一道菜均选用当日时令食材,由主厨团队遵循传统技法精心烹制。",
      "menu.note": "* 菜单价格含增值税,未含 12.5% 服务费。如有食物过敏,请于点餐时告知服务员。",

      "about.eyebrow": "关于明轩",
      "about.title": "十五载匠心,一桌中华",
      "about.p1": "明轩自 2009 年扎根伦敦梅费尔,由主厨陈师傅与团队共同创立。我们坚信,真正的中餐是一门关于火候、时令与情谊的艺术。",
      "about.p2": "从清晨挑选食材,到炭炉中慢烤的片皮鸭,我们用传统技法与当代审美,让每一位客人都能在异乡尝到家的味道。",
      "about.stat1": "创立年份",
      "about.stat2": "招牌菜式",
      "about.stat3": "米其林指南推荐",

      "res.eyebrow": "订座预约",
      "res.title": "预留您的席位",
      "res.intro": "请填写以下信息,我们将在 24 小时内与您确认。10 人以上聚会或包厢预订,欢迎直接来电。",
      "res.name": "姓名",
      "res.namePh": "您的称呼",
      "res.phone": "联系电话",
      "res.phonePh": "便于联络的电话",
      "res.email": "电子邮箱",
      "res.emailPh": "name@example.com",
      "res.guests": "用餐人数",
      "res.guestsPh": "请选择",
      "res.guests9": "9 人或以上",
      "res.date": "用餐日期",
      "res.time": "用餐时间",
      "res.timePh": "请选择",
      "res.lunch": "午市",
      "res.dinner": "晚市",
      "res.notes": "特别需求(选填)",
      "res.notesPh": "过敏信息、庆生安排、座位偏好等",
      "res.submit": "确认预约",
      "res.successTitle": "预约申请已收到",
      "res.again": "再预约一次",

      "contact.eyebrow": "联系我们",
      "contact.title": "欢迎莅临明轩",
      "contact.addrLabel": "地址",
      "contact.addr": "12 Curzon Street, Mayfair<br>London W1J 5HX, United Kingdom",
      "contact.phoneLabel": "电话",
      "contact.emailLabel": "邮箱",
      "contact.hoursLabel": "营业时间",
      "contact.hoursLunch": "午市:12:00 – 14:30",
      "contact.hoursDinner": "晚市:17:30 – 22:30",
      "contact.hoursDays": "每周七天营业",
      "contact.cta": "在线订座",
      "contact.mapLink": "在大地图中查看 ↗",

      "footer.about": "坐落伦敦梅费尔的现代中华料理餐厅,以匠心款待每一位宾客。",
      "footer.linksTitle": "快速导航",
      "footer.hoursTitle": "营业时间",
      "footer.hoursWeek": "周一至周日",
      "footer.contactTitle": "联系",
      "footer.rights": "版权所有。",

      "err.required": "此项为必填",
      "err.email": "请输入有效的邮箱地址",
      "err.phone": "请输入有效的电话号码",
      "err.date": "请选择今天或以后的日期",

      "tag.signature": "招牌",
      "tag.spicy": "辣",
      "tag.veg": "素"
    },

    en: {
      "meta.title": "Ming Xuan Mayfair · Refined Chinese Cuisine",
      "meta.description": "Ming Xuan Mayfair — a contemporary Chinese restaurant in the heart of Mayfair, London, serving classic Cantonese & Sichuan dishes and Peking duck.",

      "nav.home": "Home",
      "nav.menu": "Menu",
      "nav.about": "About",
      "nav.reserve": "Reservations",
      "nav.contact": "Contact",

      "hero.eyebrow": "Mayfair, London · Est. 2009",
      "hero.title": "Refined Chinese Cuisine",
      "hero.sub": "In the heart of London, savour authentic Cantonese & Sichuan flavours and our signature roast duck. Every table, a reunion.",
      "hero.ctaMenu": "View Menu",
      "hero.ctaReserve": "Book a Table",
      "hero.scroll": "Scroll",

      "menu.eyebrow": "Our Menu",
      "menu.title": "A Table of Delicacies",
      "menu.intro": "Every dish is prepared with the day's seasonal ingredients, crafted by our kitchen team in time-honoured tradition.",
      "menu.note": "* Prices include VAT. A discretionary 12.5% service charge applies. Please inform your server of any allergies.",

      "about.eyebrow": "About Ming Xuan",
      "about.title": "Fifteen Years of Craft",
      "about.p1": "Ming Xuan has called Mayfair home since 2009, founded by Head Chef Chen and his team. We believe true Chinese cooking is an art of heat, season and fellowship.",
      "about.p2": "From the morning's market picks to duck slow-roasted over charcoal, we blend traditional technique with a modern sensibility — so every guest tastes a little of home.",
      "about.stat1": "Established",
      "about.stat2": "Signature Dishes",
      "about.stat3": "Michelin Guide Listed",

      "res.eyebrow": "Reservations",
      "res.title": "Reserve Your Table",
      "res.intro": "Complete the form below and we will confirm within 24 hours. For parties over 10 or private dining, please call us directly.",
      "res.name": "Name",
      "res.namePh": "How shall we address you?",
      "res.phone": "Phone",
      "res.phonePh": "A number we can reach you on",
      "res.email": "Email",
      "res.emailPh": "name@example.com",
      "res.guests": "Number of Guests",
      "res.guestsPh": "Please select",
      "res.guests9": "9 or more",
      "res.date": "Date",
      "res.time": "Time",
      "res.timePh": "Please select",
      "res.lunch": "Lunch",
      "res.dinner": "Dinner",
      "res.notes": "Special Requests (optional)",
      "res.notesPh": "Allergies, celebrations, seating preferences…",
      "res.submit": "Confirm Reservation",
      "res.successTitle": "Reservation Request Received",
      "res.again": "Make Another Booking",

      "contact.eyebrow": "Contact",
      "contact.title": "Visit Ming Xuan",
      "contact.addrLabel": "Address",
      "contact.addr": "12 Curzon Street, Mayfair<br>London W1J 5HX, United Kingdom",
      "contact.phoneLabel": "Telephone",
      "contact.emailLabel": "Email",
      "contact.hoursLabel": "Opening Hours",
      "contact.hoursLunch": "Lunch: 12:00 – 14:30",
      "contact.hoursDinner": "Dinner: 17:30 – 22:30",
      "contact.hoursDays": "Open seven days a week",
      "contact.cta": "Book Online",
      "contact.mapLink": "View larger map ↗",

      "footer.about": "A contemporary Chinese restaurant in Mayfair, welcoming every guest with heartfelt craft.",
      "footer.linksTitle": "Quick Links",
      "footer.hoursTitle": "Opening Hours",
      "footer.hoursWeek": "Monday – Sunday",
      "footer.contactTitle": "Contact",
      "footer.rights": "All rights reserved.",

      "err.required": "This field is required",
      "err.email": "Please enter a valid email address",
      "err.phone": "Please enter a valid phone number",
      "err.date": "Please choose today or a later date",

      "tag.signature": "Signature",
      "tag.spicy": "Spicy",
      "tag.veg": "Veg"
    }
  };

  /* ---------- 2. 菜单数据 ---------- */
  var MENU = [
    {
      zh: "凉菜", en: "Cold Appetizers",
      items: [
        { zh: "口水鸡", en: "Mouthwatering Chicken", price: "£12",
          descZh: "嫩鸡浸红油花椒,佐花生碎与香葱。",
          descEn: "Poached chicken in chilli oil with Sichuan pepper and crushed peanuts.",
          tags: ["spicy"] },
        { zh: "蒜泥白肉", en: "Garlic Pork Belly", price: "£13",
          descZh: "薄切五花肉卷黄瓜,淋蒜香酱汁。",
          descEn: "Thinly sliced pork belly rolled with cucumber in aromatic garlic sauce." },
        { zh: "拍黄瓜", en: "Smashed Cucumber", price: "£8",
          descZh: "清爽脆口,蒜醋凉拌。",
          descEn: "Crisp cucumber tossed with garlic and aged vinegar.",
          tags: ["veg"] },
        { zh: "皮蛋豆腐", en: "Century Egg Tofu", price: "£9",
          descZh: "滑嫩豆腐配皮蛋,淋香葱酱油。",
          descEn: "Silken tofu with century egg and spring-onion soy dressing.",
          tags: ["veg"] }
      ]
    },
    {
      zh: "招牌名菜", en: "Signature Dishes",
      items: [
        { zh: "明轩片皮鸭(半只)", en: "Mayfair Peking Duck (Half)", price: "£36",
          descZh: "炭炉慢烤,佐薄饼、葱丝与甜面酱。",
          descEn: "Charcoal-roasted duck served with pancakes, spring onion and hoisin.",
          tags: ["signature"] },
        { zh: "东坡焖肉", en: "Braised Dongpo Pork", price: "£24",
          descZh: "慢火红烧,肥而不腻,入口即化。",
          descEn: "Slow-braised pork belly — rich, glossy and meltingly tender.",
          tags: ["signature"] },
        { zh: "干烧明虾", en: "Dry-Braised King Prawns", price: "£29",
          descZh: "微辣茄汁干烧,鲜甜弹牙。",
          descEn: "King prawns dry-braised in a lightly spiced tomato glaze.",
          tags: ["signature", "spicy"] },
        { zh: "麻婆豆腐", en: "Mapo Tofu", price: "£15",
          descZh: "经典川味,麻辣鲜香。",
          descEn: "Classic Sichuan tofu in a numbing, spicy bean sauce.",
          tags: ["signature", "spicy", "veg"] }
      ]
    },
    {
      zh: "时令主菜", en: "Main Courses",
      items: [
        { zh: "宫保鸡丁", en: "Kung Pao Chicken", price: "£18",
          descZh: "鸡丁、花生与干辣椒同炒,香辣过瘾。",
          descEn: "Diced chicken stir-fried with peanuts and dried chilli.",
          tags: ["spicy"] },
        { zh: "黑椒牛柳", en: "Black Pepper Beef", price: "£26",
          descZh: "嫩牛柳配现磨黑椒,镬气十足。",
          descEn: "Tender beef tenderloin wok-tossed with cracked black pepper." },
        { zh: "鱼香茄子", en: "Yu-Xiang Aubergine", price: "£14",
          descZh: "软糯茄子,酸甜微辣。",
          descEn: "Braised aubergine in a sweet, sour and gently spicy sauce.",
          tags: ["veg", "spicy"] },
        { zh: "咕咾肉", en: "Sweet & Sour Pork", price: "£17",
          descZh: "酥脆里脊配菠萝甜酸汁。",
          descEn: "Crisp pork with pineapple in a tangy sweet-and-sour sauce." }
      ]
    },
    {
      zh: "海鲜河鲜", en: "Seafood",
      items: [
        { zh: "清蒸鲈鱼", en: "Steamed Sea Bass", price: "£32",
          descZh: "整条清蒸,淋豉油姜葱。",
          descEn: "Whole sea bass steamed with ginger, spring onion and soy.",
          tags: ["signature"] },
        { zh: "椒盐软壳蟹", en: "Salt & Pepper Soft-Shell Crab", price: "£28",
          descZh: "酥炸软壳蟹,椒盐香脆。",
          descEn: "Crisp-fried soft-shell crab tossed with spiced salt." },
        { zh: "豉汁蒸扇贝", en: "Steamed Scallops", price: "£26",
          descZh: "鲜活扇贝佐蒜蓉豉汁。",
          descEn: "Fresh scallops steamed with garlic and black bean." },
        { zh: "XO 酱炒带子", en: "Scallops in XO Sauce", price: "£30",
          descZh: "带子炒时蔬,XO 酱提鲜。",
          descEn: "Wok-fried scallops with seasonal greens and XO sauce." }
      ]
    },
    {
      zh: "主食与汤", en: "Rice, Noodles & Soups",
      items: [
        { zh: "扬州炒饭", en: "Yangzhou Fried Rice", price: "£11",
          descZh: "虾仁、叉烧与青豆同炒。",
          descEn: "Fried rice with prawns, char siu and garden peas." },
        { zh: "担担面", en: "Dan Dan Noodles", price: "£12",
          descZh: "麻辣肉臊拌面,芝麻香浓。",
          descEn: "Noodles with spiced minced pork in a sesame-chilli sauce.",
          tags: ["spicy"] },
        { zh: "上汤云吞", en: "Wonton in Supreme Broth", price: "£13",
          descZh: "鲜虾云吞浸金汤。",
          descEn: "Prawn wontons in a long-simmered supreme broth." },
        { zh: "酸辣汤", en: "Hot & Sour Soup", price: "£8",
          descZh: "豆腐木耳,酸辣开胃。",
          descEn: "Tofu and wood-ear in a tangy, peppery soup.",
          tags: ["spicy", "veg"] }
      ]
    },
    {
      zh: "甜点茶饮", en: "Desserts & Tea",
      items: [
        { zh: "杨枝甘露", en: "Mango Pomelo Sago", price: "£9",
          descZh: "芒果西柚西米露,清甜消暑。",
          descEn: "Chilled mango and pomelo sago in coconut cream.",
          tags: ["veg"] },
        { zh: "豆沙锅饼", en: "Red Bean Pancake", price: "£8",
          descZh: "酥香薄饼裹细滑豆沙。",
          descEn: "Crisp pancake filled with smooth sweet red bean paste.",
          tags: ["veg"] },
        { zh: "桂花糕", en: "Osmanthus Jelly", price: "£7",
          descZh: "桂花蜜冻,清香软糯。",
          descEn: "Fragrant osmanthus and honey jelly.",
          tags: ["veg"] },
        { zh: "明轩茉莉香片(每位)", en: "Jasmine Tea (per person)", price: "£4",
          descZh: "高山茉莉花茶,无限续杯。",
          descEn: "Highland jasmine tea, unlimited refills.",
          tags: ["veg"] }
      ]
    }
  ];

  /* ---------- 3. 状态与工具 ---------- */
  var STORE_KEY = "mingxuan-lang";
  var lang = "zh";

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || key;
  }

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  }

  /* ---------- 4. 菜单渲染 ---------- */
  function renderMenu(animate) {
    var grid = $("#menuGrid");
    if (!grid) return;
    grid.innerHTML = "";

    MENU.forEach(function (cat) {
      var block = document.createElement("div");
      block.className = "menu-category" + (animate ? " reveal" : " reveal is-visible");

      var title = document.createElement("h3");
      title.className = "menu-category-title";
      title.appendChild(document.createTextNode(lang === "zh" ? cat.zh : cat.en));
      if (lang === "zh") {
        var catEn = document.createElement("span");
        catEn.className = "cat-en";
        catEn.textContent = cat.en;
        title.appendChild(catEn);
      }
      block.appendChild(title);

      cat.items.forEach(function (item) {
        var row = document.createElement("div");
        row.className = "menu-item";

        var head = document.createElement("div");
        head.className = "menu-item-head";

        var name = document.createElement("span");
        name.className = "menu-item-name";
        name.textContent = lang === "zh" ? item.zh : item.en;

        if (item.tags && item.tags.length) {
          var tagWrap = document.createElement("span");
          tagWrap.className = "menu-tags";
          item.tags.forEach(function (tg) {
            var tag = document.createElement("span");
            tag.className = "tag tag-" + tg;
            tag.textContent = t("tag." + tg);
            tagWrap.appendChild(tag);
          });
          name.appendChild(tagWrap);
        }

        var dots = document.createElement("span");
        dots.className = "menu-item-dots";

        var price = document.createElement("span");
        price.className = "menu-item-price";
        price.textContent = item.price;

        head.appendChild(name);
        head.appendChild(dots);
        head.appendChild(price);

        var desc = document.createElement("p");
        desc.className = "menu-item-desc";
        desc.textContent = lang === "zh" ? item.descZh : item.descEn;

        row.appendChild(head);
        row.appendChild(desc);
        block.appendChild(row);
      });

      grid.appendChild(block);
      if (animate) observeReveal(block);
    });
  }

  /* ---------- 5. 语言切换 ---------- */
  function applyLanguage(next, animate) {
    lang = next;
    document.documentElement.setAttribute("lang", lang);

    $all("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val.indexOf("<") !== -1) { el.innerHTML = val; }
      else { el.textContent = val; }
    });
    $all("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    $all("[data-i18n-content]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-content")));
    });
    $all("[data-i18n-label]").forEach(function (el) {
      el.setAttribute("label", t(el.getAttribute("data-i18n-label")));
    });

    document.title = t("meta.title");

    var toggleText = $(".lang-toggle-text");
    if (toggleText) toggleText.textContent = lang === "zh" ? "EN" : "中文";

    renderMenu(animate);

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  /* ---------- 6. 滚动揭示动画 ---------- */
  var revealObserver = null;
  function observeReveal(el) {
    if (revealObserver) { revealObserver.observe(el); }
    else { el.classList.add("is-visible"); }
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      $all(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    $all(".reveal").forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- 7. 导航栏 ---------- */
  function initNav() {
    var header = $("#siteHeader");
    var burger = $("#navBurger");
    var nav = $("#primaryNav");

    function onScroll() {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    $all(".nav-link", nav).forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    // 当前栏目高亮
    var sections = $all("main section[id]");
    var links = {};
    $all(".nav-link", nav).forEach(function (l) {
      links[l.getAttribute("href")] = l;
    });
    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            $all(".nav-link", nav).forEach(function (l) { l.classList.remove("active"); });
            var active = links["#" + entry.target.id];
            if (active) active.classList.add("active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ---------- 8. 预约表单 ---------- */
  function formatDate(value) {
    var parts = value.split("-");
    if (parts.length !== 3) return value;
    var y = parts[0], m = parseInt(parts[1], 10), d = parseInt(parts[2], 10);
    if (lang === "zh") return y + "年" + m + "月" + d + "日";
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return d + " " + months[m - 1] + " " + y;
  }

  function initForm() {
    var form = $("#reservationForm");
    if (!form) return;
    var dateInput = $("#resDate");
    var success = $("#reservationSuccess");
    var successMsg = $("#reservationSuccessMsg");

    // 限定最早可选日期为今天
    var today = new Date();
    var iso = today.getFullYear() + "-" +
      String(today.getMonth() + 1).padStart(2, "0") + "-" +
      String(today.getDate()).padStart(2, "0");
    dateInput.setAttribute("min", iso);

    function setError(field, msgKey) {
      var wrap = field.closest(".field");
      var errEl = $(".field-error", wrap);
      if (msgKey) {
        wrap.classList.add("invalid");
        if (errEl) errEl.textContent = t(msgKey);
      } else {
        wrap.classList.remove("invalid");
        if (errEl) errEl.textContent = "";
      }
    }

    function validate() {
      var ok = true;
      var name = $("#resName"), phone = $("#resPhone"), email = $("#resEmail");
      var guests = $("#resGuests"), date = $("#resDate"), time = $("#resTime");

      [name, phone, email, guests, date, time].forEach(function (f) {
        if (!f.value.trim()) { setError(f, "err.required"); ok = false; }
        else { setError(f, null); }
      });

      if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setError(email, "err.email"); ok = false;
      }
      if (phone.value.trim() && !/^[+\d][\d\s()\-]{5,}$/.test(phone.value.trim())) {
        setError(phone, "err.phone"); ok = false;
      }
      if (date.value && date.value < iso) {
        setError(date, "err.date"); ok = false;
      }
      return ok;
    }

    // 失焦即时校验
    $all("input, select", form).forEach(function (f) {
      f.addEventListener("blur", function () {
        if (!f.value.trim()) return;
        validate();
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) {
        var firstInvalid = $(".field.invalid input, .field.invalid select");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var name = $("#resName").value.trim();
      var guests = $("#resGuests").value;
      var dateText = formatDate($("#resDate").value);
      var time = $("#resTime").value;

      var msg;
      if (lang === "zh") {
        msg = "感谢您," + name + "!我们已收到您于 " + dateText + " " + time +
          " 的 " + guests + " 位用餐预约。确认信将发送至您的邮箱,期待与您相聚明轩。";
      } else {
        msg = "Thank you, " + name + "! We have received your reservation for " +
          guests + " guest(s) on " + dateText + " at " + time +
          ". A confirmation will be sent to your email — we look forward to welcoming you.";
      }
      successMsg.textContent = msg;

      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    $("#resetReservation").addEventListener("click", function () {
      form.reset();
      $all(".field.invalid", form).forEach(function (w) { w.classList.remove("invalid"); });
      $all(".field-error", form).forEach(function (e) { e.textContent = ""; });
      success.hidden = true;
      form.hidden = false;
      form.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---------- 9. 初始化 ---------- */
  function init() {
    var yearEl = $("#footerYear");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // 选择初始语言:本地存储 > 浏览器语言 > 中文
    var saved;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved === "zh" || saved === "en") {
      lang = saved;
    } else {
      lang = (navigator.language || "zh").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
    }

    initReveal();
    applyLanguage(lang, true);
    initNav();
    initForm();

    var toggle = $("#langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        applyLanguage(lang === "zh" ? "en" : "zh", false);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
