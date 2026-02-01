// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="title.html"><strong aria-hidden="true">1.</strong> The nat20 Language</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="overview.html"><strong aria-hidden="true">2.</strong> Syntax Overview</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="comments.html"><strong aria-hidden="true">2.1.</strong> Comments</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="literals.html"><strong aria-hidden="true">2.2.</strong> Literals</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="expressions.html"><strong aria-hidden="true">2.3.</strong> Expressions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="statements.html"><strong aria-hidden="true">2.4.</strong> Statements</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="control.html"><strong aria-hidden="true">2.5.</strong> Control Flow</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="postcard.html"><strong aria-hidden="true">2.6.</strong> Syntax on a Postcard</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="features.html"><strong aria-hidden="true">3.</strong> Feature Overview</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dndliterals.html"><strong aria-hidden="true">3.1.</strong> D&amp;D Literal</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lambdas.html"><strong aria-hidden="true">3.2.</strong> Lambda Functions</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="examples.html"><strong aria-hidden="true">4.</strong> Examples</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="decoder.html"><strong aria-hidden="true">4.1.</strong> Run Length Decoder</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="game_of_life.html"><strong aria-hidden="true">4.2.</strong> Game of Life</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="blackjack.html"><strong aria-hidden="true">4.3.</strong> Black Jack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="advent.html"><strong aria-hidden="true">4.4.</strong> Advent of Code Example</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);

