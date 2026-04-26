import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

type SubjectKey = 'english' | 'gujarati' | 'maths';

const subjectConfig = {
  english: {
    title: 'English',
    envKey: 'NEXT_PUBLIC_ENGLISH_APP_URL',
  },
  gujarati: {
    title: 'Gujarati',
    envKey: 'NEXT_PUBLIC_GUJARATI_APP_URL',
  },
  maths: {
    title: 'Maths',
    envKey: 'NEXT_PUBLIC_MATHS_APP_URL',
  },
} satisfies Record<SubjectKey, { title: string; envKey: string }>;

function isSubjectKey(value: string): value is SubjectKey {
  return value in subjectConfig;
}

function buildSubjectUrl(baseUrl: string, subject: SubjectKey) {
  const url = new URL(baseUrl);
  const baseSegments = url.pathname.split('/').filter(Boolean);

  if (!baseSegments.includes(subject)) {
    baseSegments.push(subject);
  }

  url.pathname = `/${baseSegments.join('/')}`;
  return url.toString();
}

type SubjectRoutePageProps = {
  params: Promise<{
    subject: string;
  }>;
};

export default async function SubjectRoutePage({ params }: SubjectRoutePageProps) {
  const { subject } = await params;

  if (!isSubjectKey(subject)) {
    notFound();
  }

  const config = subjectConfig[subject];
  const configuredBaseUrl = process.env[config.envKey]?.trim();

  if (configuredBaseUrl) {
    redirect(buildSubjectUrl(configuredBaseUrl, subject));
  }

  return (
    <main className="route-status">
      <div className="route-panel">
        <p className="route-eyebrow">{config.title} route detected</p>
        <h1>Deployment URL not configured</h1>
        <p className="route-copy">
          The hub app now handles <code>/{subject}</code>, but it needs the target subject
          deployment URL before it can redirect.
        </p>
        <p className="route-copy">
          Set <code>{config.envKey}</code> in the `hub` Vercel project, then redeploy.
        </p>
        <div className="route-code">{config.envKey}=https://your-subject-app.vercel.app</div>
        <Link href="/" className="route-link">
          Back to hub
        </Link>
      </div>
    </main>
  );
}
