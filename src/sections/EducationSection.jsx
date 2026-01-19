import { Section } from "../components/layout/Section";

export function EducationSection() {
  return (
    <Section
      id="learning"
      index={4}
      className="space-y-4 rounded-3xl border border-matri-pink/50 bg-matri-pink/15 px-6 py-8"
    >
      <h2 className="font-display text-2xl text-matri-deep">
        Matricharya Learning Studio
      </h2>
      <p className="text-sm text-matri-deep/80">
        Simple, practical content to make Ayurveda and Matricharya concepts
        easy for girls and women via posts, reels and workshops.
      </p>
      <div className="grid gap-4 text-sm md:grid-cols-3">
        <div className="rounded-2xl bg-white/95 p-4">
          <p className="font-semibold text-matri-deep">
            🌸 Period education (Happy Menses series)
          </p>
          <p className="mt-1 text-matri-deep/70">
            Menses ke dauran diet, rest, emotions aur self-care ke bare mein
            friendly guidance.
          </p>
        </div>
        <div className="rounded-2xl bg-white/95 p-4">
          <p className="font-semibold text-matri-deep">
            🤰 Pregnancy care (Month-wise Matricharya)
          </p>
          <p className="mt-1 text-matri-deep/70">
            Har mahine ke hisaab se food, rituals, rest aur baby bonding ideas.
          </p>
        </div>
        <div className="rounded-2xl bg-white/95 p-4">
          <p className="font-semibold text-matri-deep">
            👧 Girls health awareness
          </p>
          <p className="mt-1 text-matri-deep/70">
            School aur college talks, teenage cycle understanding and body
            confidence content.
          </p>
        </div>
        <div className="rounded-2xl bg-white/95 p-4">
          <p className="font-semibold text-matri-deep">
            🧠 Myth vs Ayurveda truth
          </p>
          <p className="mt-1 text-matri-deep/70">
            Period myths, pregnancy superstitions aur Ayurveda ka actual
            drishtikon in short reels.
          </p>
        </div>
        <div className="rounded-2xl bg-white/95 p-4">
          <p className="font-semibold text-matri-deep">
            📖 Samhita references (simple language)
          </p>
          <p className="mt-1 text-matri-deep/70">
            Classical shlokas ko aaj ki language mein samjhaana, specially for
            Matricharya topics.
          </p>
        </div>
        <div className="rounded-2xl bg-white/95 p-4">
          <p className="font-semibold text-matri-deep">💬 Q&amp;A reels</p>
          <p className="mt-1 text-matri-deep/70">
            Common questions from girls and women ke short, clear video
            answers.
          </p>
        </div>
      </div>
    </Section>
  );
}

