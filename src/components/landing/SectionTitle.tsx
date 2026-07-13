export const SectionTitle = ({
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

export default SectionTitle;
