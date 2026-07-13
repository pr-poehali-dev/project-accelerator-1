import Icon from '@/components/ui/icon';
import CTA from '@/components/landing/CTA';
import SectionTitle from '@/components/landing/SectionTitle';

const HERO_BG =
  'https://cdn.poehali.dev/projects/e66c6c7d-b465-4059-a952-5c768d48be08/files/f2bdf611-a805-4751-ba8a-640c3c644282.jpg';

const Diagnostics = () => {
  const findOut = [
    'что сегодня мешает вам двигаться вперед',
    'какие внутренние программы постоянно возвращают вас в одну и ту же точку',
    'какой следующий шаг даст максимальный эффект именно для вас',
  ];

  const results = [
    'понимание, что именно вас сейчас удерживает',
    'осознание, почему прежние попытки не приносили результата',
    'первые шаги, которые помогут начать менять ситуацию уже после встречи',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/90 via-emerald-deep/75 to-emerald-deep/50" />
        <div className="container relative z-10 py-24">
          <div className="mx-auto max-w-3xl animate-fade-up text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-emerald-deep/40 px-5 py-2 text-sm font-medium text-gold-soft backdrop-blur">
              <Icon name="Sparkles" size={16} />
              Бесплатная Диагностика
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
              Какой результат вы получите на{' '}
              <span className="gold-text-gradient">Бесплатной Диагностике?</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
              Мы определим Сценарии, которые работают против ваших интересов, и
              поймём необходимые шаги для качественных изменений в сценариях
              вашей жизни 🤓
            </p>
          </div>
        </div>
      </section>

      {/* МЫ ОПРЕДЕЛИМ */}
      <section className="container py-24">
        <SectionTitle eyebrow="На встрече" title="Мы определим" />
        <div className="mx-auto grid max-w-3xl gap-6">
          {findOut.map((text) => (
            <div
              key={text}
              className="hover-lift flex items-start gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full gold-gradient text-emerald-deep">
                <Icon name="Check" size={20} />
              </div>
              <p className="text-lg leading-relaxed text-foreground">{text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
          После консультации вы уйдёте с пониманием причины происходящего и
          чётким вектором дальнейших действий.
        </p>
      </section>

      {/* ВЫ ПОЛУЧИТЕ */}
      <section className="bg-emerald-deep py-24">
        <div className="container">
          <SectionTitle eyebrow="Итог встречи" title="Вы получите" light />
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            {results.map((text) => (
              <div
                key={text}
                className="hover-lift rounded-3xl border border-gold/20 bg-white/5 p-8 backdrop-blur"
              >
                <div className="mb-4 text-3xl">✨</div>
                <p className="leading-relaxed text-white/90">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФИНАЛЬНЫЙ CTA */}
      <section className="container py-24 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight text-emerald-deep md:text-5xl">
          Запись на{' '}
          <span className="gold-text-gradient">БЕСПЛАТНУЮ ДИАГНОСТИКУ</span> 👇
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTA tg>Записаться на диагностику</CTA>
        </div>
      </section>
    </div>
  );
};

export default Diagnostics;
