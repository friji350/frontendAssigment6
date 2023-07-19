<script>
    import {page} from '$app/stores';
</script>

<header>
    <nav>
        <ul>
            <li aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}>
                <a href="/"> Home </a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
                <a href="/about"> About </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
    }


    nav {
        display: flex;
        justify-content: center;
        --background: rgba(255, 255, 255, 0.7);
    }


    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: var(--background);
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }


    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: var(--color-text);
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--color-theme-1);
    }
</style>