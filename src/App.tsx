import { Button } from '@pimolu/react'

const links = {
  components: 'https://pimolu.com/components',
  docs: 'https://pimolu.com/docs',
  showcase: 'https://pimolu.com/showcase',
  github: 'https://github.com/pimoludev/ui',
}

function App() {
  return (
    <div className="page">
      <main className="content">
        <h1 className="wordmark">Pimolu <span>UI</span></h1>
        <ol className="instructions">
          <li>Get started by editing <code>src/App.tsx</code>.</li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className="actions">
          <Button size="lg" variant="neutral" radius="full" onClick={() => window.location.assign(links.components)}>
            Explore Components
          </Button>
          <Button size="lg" variant="neutral" radius="full" appearance="outline" onClick={() => window.location.assign(links.docs)}>
            Documentation
          </Button>
        </div>
      </main>
      <footer className="footer" aria-label="Resources">
        <a href={links.docs}>Learn <span aria-hidden="true">↗</span></a>
        <a href={links.showcase}>Showcase <span aria-hidden="true">↗</span></a>
        <a href={links.github}>GitHub <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  )
}

export default App

