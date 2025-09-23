import './App.css'

const featureCards = [
  {
    title: 'Snap any receipt',
    description:
      'Upload a photo or forward an e-receipt from anywhere you shop. Fetch finds every eligible offer for you.',
  },
  {
    title: 'Earn on every shop',
    description:
      'Points stack fast with weekly bonuses and partner offers from groceries, retailers, restaurants, and more.',
  },
  {
    title: 'Redeem in seconds',
    description:
      'Cash in for digital gift cards, charitable donations, or sweepstakes entries the moment you hit your goal.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Download the app',
    copy:
      'Create an account for free and join millions of shoppers already earning rewards on the everyday things they buy.',
  },
  {
    number: '02',
    title: 'Scan your receipts',
    copy:
      'Snap a photo of any paper receipt or forward your online receipts to fetch@receipts.com to keep points flowing.',
  },
  {
    number: '03',
    title: 'Collect points automatically',
    copy:
      'We apply eligible offers instantly, so you always know exactly how many points you earned for each purchase.',
  },
  {
    number: '04',
    title: 'Redeem what you love',
    copy:
      'Turn points into gift cards from brands you actually use—Target, Amazon, Starbucks, and hundreds more.',
  },
]

const partnerLogos = [
  'Target',
  'Amazon',
  'Starbucks',
  'Ulta Beauty',
  'DoorDash',
  'Instacart',
]

const receiptActivity = [
  { retailer: 'Target', points: '+1,200 pts', time: '2m ago' },
  { retailer: 'Whole Foods', points: '+950 pts', time: '1h ago' },
  { retailer: 'Amazon', points: '+700 pts', time: 'Today' },
  { retailer: 'Starbucks', points: '+350 pts', time: 'Yesterday' },
]

function App() {
  return (
    <div className="app" id="top">
      <header className="hero">
        <nav className="nav" aria-label="Primary">
          <a href="#top" className="logo" aria-label="Fetch home">
            fetch
          </a>
          <ul className="nav-links">
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#rewards">Rewards</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
          </ul>
          <a className="btn btn-light" href="#download">
            Get the app
          </a>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <span className="pill">Rewards in seconds</span>
            <h1>Scan receipts. Earn rewards. Repeat.</h1>
            <p>
              Stop leaving money on the table. Fetch turns every grocery run, coffee stop, and online order into points you can
              redeem for the things you love.
            </p>
            <div className="cta-group">
              <a className="btn btn-primary" href="#download">
                Download on iOS
              </a>
              <a className="btn btn-outline" href="#download">
                Get it on Google Play
              </a>
            </div>
            <dl className="hero-metrics">
              <div>
                <dt>Active shoppers</dt>
                <dd>13M+</dd>
              </div>
              <div>
                <dt>Receipts scanned monthly</dt>
                <dd>1B</dd>
              </div>
              <div>
                <dt>Gift cards redeemed</dt>
                <dd>100M+</dd>
              </div>
            </dl>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="phone-shell">
              <div className="phone-screen">
                <header className="screen-header">
                  <span className="screen-balance-label">Points balance</span>
                  <span className="screen-balance">24,380</span>
                </header>
                <div className="screen-receipts">
                  {receiptActivity.map((receipt) => (
                    <article className="screen-card" key={receipt.retailer}>
                      <div>
                        <h3>{receipt.retailer}</h3>
                        <p>{receipt.time}</p>
                      </div>
                      <span>{receipt.points}</span>
                    </article>
                  ))}
                </div>
                <footer className="screen-footer">
                  <span>Redeem points</span>
                  <button type="button">Shop rewards</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section features" id="how-it-works">
          <h2>Turn everyday purchases into free rewards</h2>
          <p className="section-lede">
            Fetch automatically finds the best offers for you. Just snap a receipt and we take care of the rest.
          </p>
          <div className="card-grid">
            {featureCards.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section steps" id="rewards">
          <div className="section-heading">
            <h2>Getting rewarded is simple</h2>
            <p className="section-lede">
              From download to redemption, Fetch is designed to keep you motivated. No clipping coupons or linking accounts
              required.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section partners" id="partners">
          <h2>Brands you love partner with Fetch</h2>
          <p className="section-lede">
            Earn bonus points faster with exclusive offers from national retailers, delivery services, and your neighborhood
            favorites.
          </p>
          <div className="partner-logos">
            {partnerLogos.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </section>

        <section className="section highlight" id="download">
          <div className="highlight-card">
            <h2>Ready to start earning in minutes?</h2>
            <p>
              Download Fetch, scan your first receipt, and watch the points add up. It is the fastest way to reward yourself for
              the shopping you already do.
            </p>
            <div className="cta-group">
              <a className="btn btn-light" href="#top">
                Download for iOS
              </a>
              <a className="btn btn-outline" href="#top">
                Download for Android
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Fetch Holdings, Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
