import Icon from '@/components/ui/icon';
import CTA from '@/components/landing/CTA';
import SectionTitle from '@/components/landing/SectionTitle';

const HERO_BG =
  'https://cdn.poehali.dev/projects/e66c6c7d-b465-4059-a952-5c768d48be08/files/f2bdf611-a805-4751-ba8a-640c3c644282.jpg';

const STORY_PHOTO =
  'https://cdn.poehali.dev/projects/e66c6c7d-b465-4059-a952-5c768d48be08/bucket/94b870ea-6bdf-4b9c-afcc-bb8eda0911de.jpg';

const impact = [
  { icon: '🤝', text: 'На отношения' },
  { icon: '💰', text: 'На уровень дохода' },
  { icon: '🧰', text: 'На карьеру' },
  {
    icon: '🎯',
    text: 'На то, что человек считает для себя возможным, потому что все ограничения только в нашей голове',
  },
];

const SonStory = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/95 via-emerald-deep/90 to-emerald-deep/80" />
        <div className="container relative z-10 py-20 text-center md:py-28">
          <div className="mx-auto max-w-2xl animate-fade-up">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-emerald-deep/40 px-5 py-2 text-sm font-medium text-gold-soft backdrop-blur">
              <Icon name="Heart" size={16} />
              Личная история
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
              История моего{' '}
              <span className="gold-text-gradient">сына</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
              О том, как внутренние сценарии меняют детство — и как их можно
              переписать
            </p>
          </div>
        </div>
      </section>

      {/* ФОТО */}
      <section className="container -mt-16 relative z-10 pb-4">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] gold-gradient opacity-40 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-gold/30">
              <img
                src={STORY_PHOTO}
                alt="Мама обнимает сына"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ИСТОРИЯ */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Когда мой сын перешёл в новую школу, я стала замечать, как он
            меняется.
          </p>
          <p>
            Со временем он перестал радоваться, не хотел идти в школу, стал
            закрытым.
          </p>
          <p>Хотя школа была хорошая, дорогая, престижная.</p>
          <p>Однажды я села и спокойно поговорила с ним.</p>
          <p>
            И я увидела то, что как психолог вижу очень часто: не сама
            ситуация ломала его состояние. А внутренние сценарии и установки,
            которые уже начали формироваться внутри него.
          </p>

          <div className="rounded-3xl border border-gold/20 bg-card p-8">
            <p className="italic text-foreground/70">«Со мной не захотят дружить».</p>
            <p className="italic text-foreground/70">«Я недостаточно хорош».</p>
            <p className="italic text-foreground/70">«Меня не примут».</p>
          </div>

          <p>
            Мы открыто пообщались, я выявила сценарии, которые нуждались в
            корректировке. Мы начали мягко переписывать эти сценарии.
          </p>
          <p>Менять реакции, менять внутренний диалог. Менять восприятие себя.</p>
          <p>Прошло несколько месяцев, он пришёл домой счастливый и сказал:</p>

          <div className="hover-lift rounded-3xl gold-gradient p-8">
            <p className="text-xl font-medium leading-relaxed text-emerald-deep">
              «Мама, представляешь… я сегодня понял, что иду по коридору с
              ребятами, мы смеёмся, шутим… и у меня теперь много друзей… Я
              честно, сам не понял, как это всё случилось».
            </p>
          </div>

          <p>
            Это был очень приятный момент. Сценарии меняются очень органично,
            и сам человек может заметить изменения, когда изменения станут
            очевидными.
          </p>
          <p>
            Конечно, как психолог я отлично понимаю, что адекватная здоровая
            самооценка, навык коммуникации с людьми, уверенность в себе имеют
            огромное значение в нашей жизни, которое сложно переоценить.
          </p>
          <p>
            Это всё влияет не только на карьеру и доходы, но и на само
            восприятие жизни, эмоциональный комфорт и качество. Адекватная,
            здоровая самооценка влияет не только на настроение — она влияет
            на всю дальнейшую жизнь человека.
          </p>
        </div>
      </section>

      {/* НА ЧТО ВЛИЯЕТ */}
      <section className="bg-emerald-deep py-24">
        <div className="container">
          <SectionTitle eyebrow="Это касается каждого" title="На что влияет самооценка" light />
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {impact.map((item) => (
              <div
                key={item.text}
                className="hover-lift flex items-start gap-4 rounded-3xl border border-gold/20 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-2xl">{item.icon}</div>
                <p className="leading-relaxed text-white/90">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-medium leading-relaxed text-gold-soft">
            И самое важное — любой сценарий можно изменить.
          </p>
        </div>
      </section>

      {/* ФИНАЛЬНЫЙ CTA */}
      <section className="container py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight text-emerald-deep md:text-5xl">
          Хотите разобраться со{' '}
          <span className="gold-text-gradient">своими сценариями?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Начните с бесплатной диагностики — и посмотрите, что мешает именно
          вам
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTA tg>Записаться на диагностику</CTA>
        </div>
      </section>
    </div>
  );
};

export default SonStory;
