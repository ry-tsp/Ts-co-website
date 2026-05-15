export default function HomePage() {
  return (
    <div className="px-10 sm:px-12 border-l-[4px] border-oxblood sm:border-none py-16 sm:py-[72px] max-w-[640px]">
      <h1 className="font-ibm font-normal text-[18px] sm:text-[23px] leading-[1.65] tracking-[0.01em] text-ink mb-12">
        Thompson Street advises companies on frontier technology, regulatory
        policy, and financial systems.
      </h1>

      <section className="mb-12">
        <p className="font-courier text-[15px] tracking-[0.1em] text-oxblood mb-[14px] uppercase">
          Philosophy
        </p>
        <div className="font-ibm font-normal text-[18px] leading-[1.8] tracking-[0.01em] text-ink space-y-5">
          <p>
            We believe policy begins with a pull-request. We believe builders
            and founders are not downstream of policy. They are the authors of
            it.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <p className="font-courier text-[15px] tracking-[0.1em] text-oxblood mb-[14px] uppercase">
          Engagement
        </p>
        <div className="font-ibm font-normal text-[18px] leading-[1.8] tracking-[0.01em] text-ink space-y-5">
          <p>
            We enter conversations to change them. We produce original
            analysis, research, and data. We help draw influential partners,
            policymakers, and journalists to you.
          </p>
          <p>
            We prefer retainer engagements with a small number of clients.
            Project-based work if the fit is right. We scope engagements
            tightly. We will tell you when you do not have a problem we can
            solve.
          </p>
        </div>
      </section>

      <div className="mt-11">
        <a
          href="mailto:hello@thompsonstreet.co"
          className="font-ibm text-[12px] tracking-[0.06em] text-black/50 hover:text-black transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-oxblood"
        >
          hello@thompsonstreet.co
        </a>
      </div>
    </div>
  );
}
