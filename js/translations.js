const TRANSLATIONS = {
  ru: {
    // Page / header
    'page.title':        'SKYBUD — Engineering Call Interview Form',
    'page.tag':          'Engineering Form',
    'header.meta':       'Формы интервью',
    'print.subtitle':    'Engineering Call Interview Form',
    'btn.back':          '← Назад',
    'btn.clear':         'Очистить',
    'btn.print':         'Печать',
    'btn.pdf':           'Скачать PDF',

    // Section titles
    's1.title':  'Данные звонка',
    's2.title':  'Контекст проекта',
    's3.title':  'Стадия объекта',
    's4.title':  'Исходные данные для расчёта',
    's5.title':  'Инженерные системы',
    's6.title':  'Дополнительные системы',
    's7.title':  'Технические условия',
    's8.title':  'Формат работ',
    's9.title':  'Сроки',
    's10.title': 'Бюджет',
    's11.title': 'Дополнительно для B2B',
    's11.note':  '(заполняется только если клиент B2B)',
    's12.title': 'Проблемы с подрядчиками',
    's13.title': 'Ожидания от подрядчика',
    's14.title': 'Резюме проекта',
    's15.title': 'Следующий шаг',

    // Section 1 — labels
    'label.date':         'Дата',
    'label.manager':      'Менеджер',
    'label.client-phone': 'Телефон клиента',
    'label.client-name':  'Имя клиента',
    'label.company':      'Компания',
    'label.city':         'Город / адрес',
    'label.client-type':  'Тип клиента',
    'label.lead-source':  'Источник лида',
    'opt.site':           'сайт',
    'opt.recommendation': 'рекомендация',
    'opt.partner':        'партнёр',
    'opt.other':          'другое',

    // Section 2
    'label.project-context': 'Что именно требуется клиенту?',
    'label.object-type':     'Тип объекта',
    'opt.apartment':         'квартира',
    'opt.house':             'дом',
    'opt.commercial':        'коммерческий объект',
    'label.object-count':    'Количество объектов',
    'opt.one':               'один',
    'opt.several':           'несколько',

    // Section 3
    'label.object-stage':        'Стадия',
    'opt.designing':             'проектируется',
    'opt.building':              'строится',
    'opt.operating':             'эксплуатируется',
    'label.project-type':        'Тип проекта',
    'opt.new':                   'новое строительство',
    'opt.reconstruction':        'реконструкция',
    'opt.modernization':         'модернизация',
    'label.has-existing-works':  'Есть ли уже выполненные инженерные работы?',
    'opt.yes':                   'да',
    'opt.no':                    'нет',
    'label.existing-works-text': 'Какие',

    // Section 4
    'label.energy-ausweis':  'Energy Ausweis',
    'opt.available':         'есть',
    'opt.will-provide':      'будет предоставлен',
    'opt.not-available':     'нет',
    'label.has-plans':       'Планы / чертежи',
    'label.has-photos':      'Фото / видео объекта',
    'opt.will-provide-pl':   'будет предоставлено',

    // Section 5
    'label.heating-type': 'Тип системы отопления',
    'opt.gas':            'газ',
    'opt.heat-pump':      'тепловой насос',
    'label.has-system':   'Система уже есть?',
    'opt.partial':        'частично',

    // Section 6
    'label.add-systems': 'Какие системы нужны?',
    'sys.water':         'Водоснабжение',
    'sys.floor':         'Тёплый пол',
    'sys.radiators':     'Радиаторы',
    'sys.boiler-new':    'Котельная — новая',
    'sys.boiler-mod':    'Котельная — модернизация',
    'sys.ventilation':   'Вентиляция — есть проект',

    // Section 7
    'label.boiler-location':   'Расположение котельной',
    'opt.basement':            'подвал',
    'opt.ground-floor':        'первый этаж',
    'opt.separate-room':       'отдельное помещение',
    'label.room-restrictions': 'Есть ли ограничения по помещению?',

    // Section 8
    'label.work-format':    'Клиенту требуется',
    'opt.install-only':     'только монтаж',
    'opt.install-mat':      'монтаж + материалы',
    'opt.install-all':      'монтаж + материалы + оборудование',

    // Section 9
    'label.start-time':       'Начало работ',
    'opt.soon':               'в ближайшее время',
    'opt.within':             'через',
    'opt.unclear':            'без чётких сроков',
    'label.desired-deadline': 'Желаемый срок завершения',

    // Section 10
    'label.project-budget': 'Ориентировочный бюджет проекта',
    'label.budget-aware':   'Клиент ориентируется в бюджете',

    // Section 11
    'label.b2b-activity':     'Основная деятельность компании',
    'label.b2b-obj-types':    'Тип объектов',
    'opt.residential':        'жилые',
    'opt.commercial-b2b':     'коммерческие',
    'opt.mixed':              'смешанные',
    'label.b2b-yearly':       'Примерное количество проектов в год',
    'suffix.per-year':        'в год',

    // Section 12
    'label.problems':   'Что не устраивает в работе подрядчиков?',
    'prob.deadlines':   'Сроки',
    'prob.quality':     'Качество',
    'prob.comm':        'Коммуникация',
    'prob.resp':        'Ответственность',
    'prob.other':       'Другое',

    // Section 13
    'label.ideal-contractor': 'Идеальный формат сотрудничества',

    // Section 14
    'label.project-summary': 'Краткое описание объекта',

    // Section 15
    'label.next-steps':         'Что делаем дальше?',
    'next.engineer':            'Передать инженеру для расчёта',
    'next.materials':           'Клиент предоставит дополнительные материалы',
    'next.site-visit':          'Нужен выезд на объект',
    'next.other':               'Другое',
    'label.next-contact-date':  'Дата следующего контакта',

    // Placeholders
    'ph.manager':         'Имя менеджера',
    'ph.client-phone':    '+49 000 000 0000',
    'ph.client-name':     'Имя и фамилия',
    'ph.company':         'Название компании',
    'ph.city':            'Город, регион',
    'ph.project-context': 'Опишите запрос клиента...',
    'ph.existing-works':  'Описание выполненных работ...',
    'ph.restrictions':    'Опишите ограничения...',
    'ph.time-value':      'срок',
    'ph.deadline':        'Например: до конца года',
    'ph.budget':          'Например: 80 000 €',
    'ph.b2b-activity':    'Сфера деятельности',
    'ph.ideal':           'Ожидания клиента от подрядчика...',
    'ph.summary':         'Краткое описание проекта и итоги разговора...',

    // Index page
    'index.eyebrow':   'SKYBUD / Формы',
    'index.title':     'Формы интервью',
    'index.subtitle':  'Заполните форму или скачайте пустой шаблон PDF',
    'index.card-title':'Engineering Call Interview Form',
    'index.card-desc': 'Форма для сбора технических данных по объекту, инженерным системам и исходным материалам для расчёта.',
    'index.btn-open':  'Открыть форму',
    'index.btn-pdf':   'Скачать PDF',
  },

  de: {
    // Page / header
    'page.title':        'SKYBUD — Engineering Call Interview Form',
    'page.tag':          'Kunden-Interviewformular',
    'header.meta':       'Interview-Formulare',
    'print.subtitle':    'Engineering Call Interview Form (Kunden-Interviewformular)',
    'btn.back':          '← Zurück',
    'btn.clear':         'Löschen',
    'btn.print':         'Drucken',
    'btn.pdf':           'PDF herunterladen',

    // Section titles
    's1.title':  'ANRUF-DATEN',
    's2.title':  'PROJEKTKONTEXT',
    's3.title':  'OBJEKTSTATUS',
    's4.title':  'AUSGANGSDATEN FÜR DIE BERECHNUNG',
    's5.title':  'TECHNISCHE SYSTEME',
    's6.title':  'ZUSÄTZLICHE SYSTEME',
    's7.title':  'TECHNISCHE BEDINGUNGEN',
    's8.title':  'ARBEITSFORMAT',
    's9.title':  'ZEITPLAN',
    's10.title': 'BUDGET',
    's11.title': 'ZUSÄTZLICH FÜR B2B',
    's11.note':  '(wird nur ausgefüllt, wenn der Kunde B2B ist)',
    's12.title': 'PROBLEME MIT AUFTRAGNEHMERN',
    's13.title': 'ERWARTUNGEN AN DEN AUFTRAGNEHMER',
    's14.title': 'PROJEKTZUSAMMENFASSUNG',
    's15.title': 'NÄCHSTER SCHRITT',

    // Section 1 — labels
    'label.date':         'Datum',
    'label.manager':      'Manager',
    'label.client-phone': 'Telefon des Kunden',
    'label.client-name':  'Name des Kunden',
    'label.company':      'Firma',
    'label.city':         'Stadt / Adresse',
    'label.client-type':  'Kundentyp',
    'label.lead-source':  'Quelle des Leads',
    'opt.site':           'Website',
    'opt.recommendation': 'Empfehlung',
    'opt.partner':        'Partner',
    'opt.other':          'anderes',

    // Section 2
    'label.project-context': 'Was genau braucht der Kunde?',
    'label.object-type':     'Objekttyp',
    'opt.apartment':         'Wohnung',
    'opt.house':             'Haus',
    'opt.commercial':        'Gewerbeobjekt',
    'label.object-count':    'Anzahl der Objekte',
    'opt.one':               'eins',
    'opt.several':           'mehrere',

    // Section 3
    'label.object-stage':        'Status',
    'opt.designing':             'wird geplant',
    'opt.building':              'wird gebaut',
    'opt.operating':             'wird genutzt',
    'label.project-type':        'Projekttyp',
    'opt.new':                   'Neubau',
    'opt.reconstruction':        'Umbau',
    'opt.modernization':         'Modernisierung',
    'label.has-existing-works':  'Gibt es schon ausgeführte technische Arbeiten?',
    'opt.yes':                   'ja',
    'opt.no':                    'nein',
    'label.existing-works-text': 'Welche',

    // Section 4
    'label.energy-ausweis':  'Energieausweis',
    'opt.available':         'vorhanden',
    'opt.will-provide':      'wird bereitgestellt',
    'opt.not-available':     'nicht vorhanden',
    'label.has-plans':       'Pläne / Zeichnungen',
    'label.has-photos':      'Fotos / Videos vom Objekt',
    'opt.will-provide-pl':   'werden bereitgestellt',

    // Section 5
    'label.heating-type': 'Art des Heizsystems',
    'opt.gas':            'Gas',
    'opt.heat-pump':      'Wärmepumpe',
    'label.has-system':   'Ist das System schon vorhanden?',
    'opt.partial':        'teilweise',

    // Section 6
    'label.add-systems': 'Welche Systeme werden benötigt?',
    'sys.water':         'Wasserversorgung',
    'sys.floor':         'Fußbodenheizung',
    'sys.radiators':     'Heizkörper',
    'sys.boiler-new':    'Heizraum — neu',
    'sys.boiler-mod':    'Heizraum — Modernisierung',
    'sys.ventilation':   'Lüftung — Projekt vorhanden',

    // Section 7
    'label.boiler-location':   'Standort des Heizraums',
    'opt.basement':            'Keller',
    'opt.ground-floor':        'Erdgeschoss',
    'opt.separate-room':       'separater Raum',
    'label.room-restrictions': 'Gibt es Einschränkungen im Raum?',

    // Section 8
    'label.work-format': 'Der Kunde braucht',
    'opt.install-only':  'nur Montage',
    'opt.install-mat':   'Montage + Materialien',
    'opt.install-all':   'Montage + Materialien + Geräte',

    // Section 9
    'label.start-time':       'Beginn der Arbeiten',
    'opt.soon':               'in nächster Zeit',
    'opt.within':             'in',
    'opt.unclear':            'ohne klare Frist',
    'label.desired-deadline': 'Gewünschter Fertigstellungstermin',

    // Section 10
    'label.project-budget': 'Ungefähres Projektbudget',
    'label.budget-aware':   'Kennt sich der Kunde im Budget aus',

    // Section 11
    'label.b2b-activity':  'Haupttätigkeit der Firma',
    'label.b2b-obj-types': 'Objekttypen',
    'opt.residential':     'Wohnobjekte',
    'opt.commercial-b2b':  'Gewerbeobjekte',
    'opt.mixed':           'gemischt',
    'label.b2b-yearly':    'Ungefähre Anzahl der Projekte',
    'suffix.per-year':     'pro Jahr',

    // Section 12
    'label.problems': 'Was gefällt nicht an der Arbeit der Auftragnehmer?',
    'prob.deadlines': 'Termine',
    'prob.quality':   'Qualität',
    'prob.comm':      'Kommunikation',
    'prob.resp':      'Verantwortung',
    'prob.other':     'anderes',

    // Section 13
    'label.ideal-contractor': 'Ideales Format der Zusammenarbeit',

    // Section 14
    'label.project-summary': 'Kurze Beschreibung des Objekts',

    // Section 15
    'label.next-steps':        'Was machen wir als nächstes?',
    'next.engineer':           'an den Ingenieur zur Berechnung weitergeben',
    'next.materials':          'der Kunde stellt zusätzliche Materialien bereit',
    'next.site-visit':         'Besichtigung vor Ort ist nötig',
    'next.other':              'anderes',
    'label.next-contact-date': 'Datum des nächsten Kontakts',

    // Placeholders
    'ph.manager':         'Name des Managers',
    'ph.client-phone':    '+49 000 000 0000',
    'ph.client-name':     'Vor- und Nachname',
    'ph.company':         'Firmenname',
    'ph.city':            'Stadt, Region',
    'ph.project-context': 'Beschreiben Sie den Kundenwunsch...',
    'ph.existing-works':  'Beschreibung der ausgeführten Arbeiten...',
    'ph.restrictions':    'Beschreiben Sie die Einschränkungen...',
    'ph.time-value':      'Zeitraum',
    'ph.deadline':        'Z.B.: bis Ende des Jahres',
    'ph.budget':          'Z.B.: 80 000 €',
    'ph.b2b-activity':    'Tätigkeitsbereich',
    'ph.ideal':           'Erwartungen des Kunden an den Auftragnehmer...',
    'ph.summary':         'Kurze Beschreibung des Projekts und Ergebnisse des Gesprächs...',

    // Index page
    'index.eyebrow':    'SKYBUD / Formulare',
    'index.title':      'Interview-Formulare',
    'index.subtitle':   'Füllen Sie das Formular aus oder laden Sie eine leere PDF-Vorlage herunter',
    'index.card-title': 'Engineering Call Interview Form',
    'index.card-desc':  'Formular zur Erfassung technischer Daten zum Objekt, zu Ingenieursystemen und Ausgangsmaterialien für die Berechnung.',
    'index.btn-open':   'Formular öffnen',
    'index.btn-pdf':    'PDF herunterladen',
  }
};
