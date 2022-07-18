import React from 'react'
import { Link } from 'react-scroll'

export const App = () => {
  return (
    <main className='main'>
      <header className='header'>
        <div className='header__wrap'>
          <Link
            className='header__link'
            smooth
            duration={500}
            to='home'
          >
            home
          </Link>
          <Link
            className='header__link'
            smooth
            duration={500}
            to='blog'
          >
            blog
          </Link>
          <Link
            className='header__link'
            smooth
            duration={500}
            to='contact'
          >
            contact
          </Link>
        </div>
      </header>

      <section className='home section'>
        <h2 className='section__heading'>home</h2>
      </section>

      <section className='blog section'>
        <h2 className='section__heading'>blog</h2>
      </section>

      <section className='contact section'>
        <h2 className='section__heading'>contact</h2>
      </section>
    </main>
  )
}
