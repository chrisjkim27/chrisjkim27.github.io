import React from 'react'

function Footer({ page }) {

    function checkPageForBackground(page) {
        if (page === 'home') return 'home-footer-background';
        if (page === 'about') return 'about-footer-background';
        if (page === 'subpage') return 'subpage-footer';
    }

    return (
        <div className={checkPageForBackground(page)}>

            <div className='footer'>
                <a target="_blank" href="https://www.linkedin.com/in/chrisjkim27" rel="noreferrer noopener"><i class="fab fa-linkedin fa-4x"></i></a>

                <div>
                    <h3>Created, designed, and maintained by Chris Kim.</h3>
                    <p>Made using React and CSS. Hosted with Github Pages.</p>
                    {/* <h4>Hosted with Github Pages.</h4> */}
                    <p>
                        All photos are mine. GitHub and LinkedIn icons are from Font Awesome.
                    </p>
                    <p>
                        Site last edited: October 3, 2021
                    </p>
                </div>

                <a target="_blank" href="https://github.com/chrisjkim27" rel="noreferrer noopener"><i class="fab fa-github fa-4x"></i></a>
            </div>

        </div>
    )
}

export default Footer
