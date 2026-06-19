import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_BG =
  'https://cdn.poehali.dev/projects/e66c6c7d-b465-4059-a952-5c768d48be08/files/f2bdf611-a805-4751-ba8a-640c3c644282.jpg';

const TG_LINK = 'https://t.me/+5072108025';

const CTA = ({
  children,
  variant = 'gold',
  className = '',
  tg = false,
  onClick,
}: {
  children: React.ReactNode;
  variant?: 'gold' | 'outline';
  className?: string;
  tg?: boolean;
  onClick?: () => void;
}) => {
  const handleClick = onClick ?? (tg ? () => window.open(TG_LINK, '_blank') : undefined);
  if (variant === 'outline') {
    return (
      <Button
        onClick={handleClick}
        className={`h-auto rounded-full border-2 border-gold bg-transparent px-8 py-4 text-base font-semibold text-emerald hover:bg-gold hover:text-emerald-deep transition-all ${className}`}
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      onClick={handleClick}
      className={`h-auto rounded-full gold-gradient px-8 py-4 text-base font-semibold text-emerald-deep shadow-lg shadow-gold/30 hover:scale-105 transition-transform ${className}`}
    >
      {children}
    </Button>
  );
};

const SectionTitle = ({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) => (
  <div className="mb-12 text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
      {eyebrow}
    </p>
    <h2
      className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${
        light ? 'text-white' : 'text-emerald-deep'
      }`}
    >
      {title}
    </h2>
  </div>
);

const Index = () => {
  const tariffs = [
    {
      name: 'Основа',
      tag: 'Группа 5–8 человек',
      duration: '6 недель',
      price: '20 600 ₽',
      highlight: false,
      forWhom:
        'Для тех, кто хочет разобраться в своих сценариях и менять состояние в поддерживающем окружении',
      features: [
        'Проработка до 2 ключевых сценариев',
        '1 диагностический разбор A ⇒ B',
        'Групповые созвоны 1 раз в неделю (40–60 мин)',
        'Чат поддержки',
        'Практики и упражнения',
        'Домашние задания',
        'Общая обратная связь',
        'Рабочая тетрадь к модулям',
      ],
    },
    {
      name: 'Основа Individual',
      tag: 'Индивидуально',
      duration: '6 недель',
      price: '24 600 ₽',
      highlight: true,
      forWhom:
        'Для тех, кому нужна персональная работа и глубокое сопровождение один на один',
      features: [
        'Проработка до 2 сценариев',
        'Индивидуальные созвоны 1 раз в неделю',
        'Персональная корректировка сценариев',
        'Прямой чат с Гульмирой',
        'Практики и домашние задания',
        'Поддержка между встречами',
      ],
    },
    {
      name: 'Глубокое сопровождение VIP',
      tag: 'Индивидуально',
      duration: '10 недель',
      price: '30 500 ₽',
      highlight: false,
      forWhom:
        'Для тех, кто готов к серьёзной трансформации и хочет изменить сразу несколько сфер жизни',
      features: [
        'Проработка до 4 сценариев',
        '2 глубоких диагностических разбора',
        'Еженедельные индивидуальные созвоны',
        'Персональная работа с установками',
        'Аудио и терапевтические техники',
        'Личная стратегия перехода A ⇒ B',
        'Бонус: живые обои-напоминания',
      ],
    },
  ];

  const reviews = [
    {
      name: 'Анна',
      text: 'Я годами начинала и бросала. Здесь впервые дошла до конца и поняла, что меня держало. Перестала контролировать всё вокруг — и стало легче дышать.',
      photo: 'https://i.pravatar.cc/120?img=47',
    },
    {
      name: 'Дмитрий',
      text: 'Сценарий «я недостаточно хорош» был со мной всю жизнь. После сопровождения я наконец вышел на новую работу, о которой боялся даже мечтать.',
      photo: 'https://i.pravatar.cc/120?img=12',
    },
    {
      name: 'Марина',
      text: 'Не быстрая магия, а честная работа. Зато результат настоящий — я перестала сливаться и довела свой проект до денег.',
      photo: 'https://i.pravatar.cc/120?img=32',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/90 via-emerald-deep/70 to-emerald-deep/40" />
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-emerald-deep/40 px-5 py-2 text-sm font-medium text-gold-soft backdrop-blur">
              <Icon name="Sparkles" size={16} />
              Программа «Новая внутренняя опора»
            </span>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
              Перепиши свой <span className="gold-text-gradient">сценарий</span>{' '}
              — измени свою реальность
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Помогаю мягко, но глубоко переписать внутренние сценарии, которые
              мешают отношениям, уверенности, проявленности и доходу. Вы меняете
              восприятие и реакции — и естественно переходите к проявленности,
              спокойной уверенности и росту дохода.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTA tg>Хочу участвовать</CTA>
              <CTA
                variant="outline"
                className="!text-white hover:!text-emerald-deep"
                onClick={() => document.getElementById('for-whom')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать подробнее
              </CTA>
            </div>
          </div>
        </div>
      </section>

      {/* КОМУ ПОДОЙДЁТ */}
      <section id="for-whom" className="container py-24">
        <SectionTitle eyebrow="Узнайте себя" title="Кому подойдёт программа" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: 'RefreshCw',
              title: 'Повторяющиеся сценарии',
              text: 'Вы замечаете, что одни и те же ситуации в отношениях, работе и деньгах повторяются снова и снова — будто по кругу.',
            },
            {
              icon: 'ShieldAlert',
              title: 'Контроль и недоверие себе',
              text: 'Чрезмерный контроль, тревога и привычка всё держать в руках выматывают. Расслабиться и довериться — почти невозможно.',
            },
            {
              icon: 'EyeOff',
              title: 'Страх проявляться',
              text: 'Вы боитесь заявить о себе, начинаете дело и сливаетесь. Внутри живёт ощущение «я недостаточно хорош(а)».',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="hover-lift rounded-3xl border border-border bg-card p-8"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient text-emerald-deep">
                <Icon name={item.icon} size={26} />
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-emerald-deep">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
          Ты не «сломанный человек». Большинство проблем — это сценарии, которые
          когда-то помогали выживать, но сейчас мешают жить. Их можно изменить —
          мягко, глубоко и экологично.
        </p>
      </section>

      {/* ТОЧКА А → Б */}
      <section className="bg-secondary/40 py-24">
        <div className="container">
          <SectionTitle eyebrow="Путь" title="Из точки А — в точку Б" />
          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="rounded-3xl border border-border bg-card p-8">
              <span className="mb-5 inline-block rounded-full bg-muted px-4 py-1 text-sm font-semibold text-muted-foreground">
                Точка А — сейчас
              </span>
              <ul className="space-y-3">
                {[
                  'Постоянная тревога и неуверенность',
                  'Внутренний критик и страх ошибок',
                  'Чувство «я недостаточно хорош(а)»',
                  'Эмоциональная зависимость',
                  'Повторяющиеся проблемы в жизни',
                  'Невозможность спокойно проявляться',
                ].map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 leading-snug text-muted-foreground"
                  >
                    <Icon
                      name="Minus"
                      size={18}
                      className="mt-1 shrink-0 text-muted-foreground/60"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full gold-gradient text-emerald-deep shadow-lg shadow-gold/30">
                <Icon name="ArrowRight" size={28} />
              </div>
            </div>
            <div className="rounded-3xl gold-gradient p-1">
              <div className="rounded-[22px] bg-card p-8">
                <span className="mb-5 inline-block rounded-full gold-gradient px-4 py-1 text-sm font-semibold text-emerald-deep">
                  Точка Б — результат
                </span>
                <ul className="space-y-3">
                  {[
                    'Внутренняя устойчивость и уверенность',
                    'Понимание собственных сценариев',
                    'Новые спокойные реакции',
                    'Здоровые личные границы',
                    'Ощущение ценности себя',
                    'Свобода проявляться и расти в доходе',
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex gap-3 leading-snug text-emerald-deep"
                    >
                      <Icon
                        name="Check"
                        size={18}
                        className="mt-1 shrink-0 text-gold"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="relative overflow-hidden bg-emerald-deep py-24">
        <div className="container relative z-10">
          <SectionTitle
            eyebrow="Что изменится"
            title="Результат, который вы увидите"
            light
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              'Вы перестаёте бросать начатое на полпути и доводите дело до реального результата',
              'Появляется устойчивая внутренняя опора — вместо тревоги и постоянного контроля',
              'Вы понимаете, какой сценарий вами управлял, и больше не действуете на автомате',
              'Открывается путь к реализации, деньгам и отношениям без страха проявляться',
            ].map((text) => (
              <div
                key={text}
                className="flex gap-4 rounded-2xl border border-gold/20 bg-white/5 p-6 backdrop-blur"
              >
                <Icon
                  name="Check"
                  size={24}
                  className="mt-1 shrink-0 text-gold-soft"
                />
                <p className="text-lg leading-relaxed text-white/90">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTA tg>Хочу такой результат</CTA>
          </div>
        </div>
      </section>

      {/* КАК РАБОТАЕТ */}
      <section className="container py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Формат"
              title="Это работа вместе, а не курс в записи"
            />
            <div className="space-y-6 text-left">
              {[
                {
                  icon: 'Users',
                  title: 'Живое сопровождение',
                  text: 'Вы идёте не в одиночку по урокам, а в связке с автором, который ведёт вас шаг за шагом.',
                },
                {
                  icon: 'CalendarClock',
                  title: '6 или 10 недель',
                  text: 'Достаточно времени, чтобы не просто понять, а закрепить новый сценарий в реальной жизни.',
                },
                {
                  icon: 'Target',
                  title: 'Точечная корректировка',
                  text: 'Мы разбираем конкретный сценарий и переписываем его — индивидуально под вашу ситуацию.',
                },
              ].map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-emerald">
                    <Icon name={s.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-emerald-deep">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl gold-gradient p-1">
            <div className="rounded-[22px] bg-card p-10">
              <Icon name="Quote" size={40} className="mb-4 text-gold" />
              <p className="font-display text-2xl font-medium italic leading-snug text-emerald-deep">
                «Дело не в том, чтобы стать другим человеком. Дело в том, чтобы
                перестать жить по чужому сценарию и написать свой».
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section className="bg-secondary/40 py-24">
        <div className="container">
          <SectionTitle eyebrow="Наполнение" title="Что мы разберём внутри" />
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            {[
              {
                n: '01',
                q: 'Диагностика внутренних сценариев',
                a: 'Какие установки управляют вашей жизнью, почему повторяются одинаковые ситуации, автоматические эмоциональные реакции, скрытые страхи и запреты. Результат: вы видите реальные причины своих состояний.',
              },
              {
                n: '02',
                q: 'Самооценка и внутренняя ценность',
                a: 'Внутренний критик, синдром «со мной что-то не так», зависимость от мнения окружающих, привычка обесценивать себя. Результат: появляется ощущение ценности себя без подтверждения извне.',
              },
              {
                n: '03',
                q: 'Тревога и внутреннее напряжение',
                a: 'Жизнь в постоянном контроле, страх будущего, эмоциональная перегрузка, невозможность расслабиться. Результат: снижается тревожность, появляется внутреннее спокойствие.',
              },
              {
                n: '04',
                q: 'Страх проявленности',
                a: 'Страх осуждения, страх ошибок, запрет быть заметным. Практика безопасного проявления. Результат: вы свободнее говорите о себе, своих желаниях и целях.',
              },
              {
                n: '05',
                q: 'Отношения и личные границы',
                a: 'Эмоциональная зависимость, страх потерять отношения, чувство вины, сложности с границами. Навык экологичного «нет». Результат: более спокойные и здоровые отношения.',
              },
              {
                n: '06',
                q: 'Деньги, реализация и новый сценарий жизни',
                a: 'Внутренний потолок, страх успеха, чувство недостойности, самосаботаж. Формирование нового жизненного сценария. Результат: внутреннее расширение и готовность к новым результатам.',
              },
            ].map((item) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className="mb-3 rounded-2xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left font-display text-xl font-semibold text-emerald-deep hover:no-underline">
                  <span className="flex items-center gap-4">
                    <span className="font-display text-2xl text-gold">
                      {item.n}
                    </span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ОБ АВТОРЕ */}
      <section className="container py-24">
        <SectionTitle eyebrow="Почему со мной" title="Об авторе" />
        <div className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] gold-gradient opacity-40 blur-xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-gold/30">
                <img
                  src="https://cdn.poehali.dev/projects/e66c6c7d-b465-4059-a952-5c768d48be08/bucket/1aafe90b-6a43-40b2-9da8-8bf3e18cf776.png"
                  alt="Гульмира — автор программы"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-2 font-display text-3xl font-semibold text-emerald-deep">
              Гульмира
            </h3>
            <p className="mb-5 text-gold">Автор программы «Новая внутренняя опора»</p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Я помогаю переписать внутренние сценарии, которые мешают
              отношениям, самореализации, уверенности и доходу. Мягко, но глубоко
              корректирую установки — и человек естественным образом меняет своё
              восприятие, реакции и саму реальность. Моя работа выросла не из
              теории, а из личной истории, в том числе истории моего сына,
              которая многое изменила в моём подходе.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: '100+', label: 'человек в сопровождении' },
                { num: '6–10', label: 'недель глубокой работы' },
                { num: '1-на-1', label: 'личное внимание' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-semibold text-gold">
                    {s.num}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Мой подход — без давления и обещаний «лёгкого и быстрого». Только
              взрослая, честная работа для думающих людей, которые готовы выйти в
              реализацию.
            </p>
          </div>
        </div>

        {/* ОТЗЫВЫ */}
        <div className="mt-20">
          <h3 className="mb-10 text-center font-display text-3xl font-semibold text-emerald-deep">
            Результаты тех, кто уже прошёл
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="hover-lift rounded-3xl border border-border bg-card p-8"
              >
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-foreground/80">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40"
                  />
                  <span className="font-semibold text-emerald-deep">
                    {r.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section className="bg-emerald-deep py-24">
        <div className="container">
          <SectionTitle
            eyebrow="Форматы участия"
            title="Выберите свой формат"
            light
          />
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {tariffs.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  t.highlight
                    ? 'gold-gradient text-emerald-deep shadow-2xl shadow-gold/20 md:-translate-y-4'
                    : 'border border-gold/20 bg-white/5 text-white backdrop-blur'
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-deep px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gold-soft">
                    Популярный
                  </span>
                )}
                <span
                  className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    t.highlight
                      ? 'bg-emerald-deep/15 text-emerald-deep'
                      : 'bg-gold/15 text-gold-soft'
                  }`}
                >
                  {t.tag} · {t.duration}
                </span>
                <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
                <p
                  className={`mt-2 text-sm leading-snug ${
                    t.highlight ? 'text-emerald-deep/75' : 'text-white/60'
                  }`}
                >
                  {t.forWhom}
                </p>
                <p className="my-6 font-display text-4xl font-bold">{t.price}</p>
                <ul className="mb-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Icon
                        name="Check"
                        size={18}
                        className={`mt-0.5 shrink-0 ${
                          t.highlight ? 'text-emerald-deep' : 'text-gold-soft'
                        }`}
                      />
                      <span className={t.highlight ? '' : 'text-white/85'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => window.open('https://web.telegram.org/a/#5072108025', '_blank')}
                  className={`mt-auto h-auto rounded-full py-4 text-base font-semibold transition-transform hover:scale-105 ${
                    t.highlight
                      ? 'bg-emerald-deep text-gold-soft hover:bg-emerald-deep/90'
                      : 'gold-gradient text-emerald-deep'
                  }`}
                >
                  Забронировать место на курсе
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФИНАЛ */}
      <section className="relative overflow-hidden py-28">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-secondary/90" />
        <div className="container relative z-10 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-emerald-deep md:text-6xl">
            Если вы устали начинать заново — это ваш момент
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Эта программа для взрослых, думающих людей, которые готовы перестать
            жить по старому сценарию и наконец выйти в реализацию, деньги и новую
            жизнь. Без давления — просто сделайте первый шаг.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTA tg>Записаться на бесплатную диагностику</CTA>
            <CTA variant="outline" onClick={() => document.getElementById('for-whom')?.scrollIntoView({ behavior: 'smooth' })}>Узнать подробнее</CTA>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-deep py-10 text-center text-white/50">
        <p className="font-display text-2xl font-semibold text-white">
          Перепиши свой сценарий
        </p>
        <p className="mt-2 text-sm">
          Новая внутренняя опора · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Index;