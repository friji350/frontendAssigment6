<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    import { onMount } from 'svelte';
    import dayjs, { Dayjs } from 'dayjs';
    import 'dayjs/locale/en';

    import Button from '../lib/Button/Button.svelte';
    import Input from '../lib/Input/Input.svelte';
    import Image from '../lib/Image/Image.svelte';

    let inputText: string = '';
    let imageUrl: string = '';
    let imageAlt: string = '';

    let title: HTMLHeadingElement | null;
    let notification: HTMLDivElement | null;
    let firstComic: HTMLDivElement | null;
    let date: HTMLParagraphElement | null;
    let datePassed: HTMLParagraphElement | null;

    interface ComicData {
        img: string;
        alt: string;
        safe_title: string;
        year: number;
        month: number;
        day: number;
    }

    // Интерфейс для элемента Image с определенными свойствами src и alt
    interface ComicImage extends HTMLElement {
        src: string;
        alt: string;
    }

    async function getId(): Promise<number> {
        try {
            const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${inputText}`);
            firstComic.classList.add('hidden');
            return await response.json();
        } catch (error) {
            if (notification) {
                notification.classList.remove('hidden');
                setTimeout(() => {
                    if (notification) notification.classList.add('hidden');
                }, 2000);
            }
            throw error;
        }
    }

    async function getComic(): Promise<void> {
        try {
            const id = await getId();
            const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            const data: ComicData = await response.json();
            imageUrl = data.img;
            imageAlt = data.alt;
            if (Image) {
                (Image as ComicImage).src = data.img;
                (Image as ComicImage).alt = data.alt;
            }
            if (title) {
                title.textContent = data.safe_title;
            }
            const currentDate = dayjs();
            const dateComic = dayjs([data.year, data.month, data.day]).locale('en').format('dddd, MMMM DD, YYYY');
            const timePassed = currentDate.diff(dateComic, 'millisecond');
            if (datePassed) {
                datePassed.textContent = timePassed.toString();
            }
            if (date) {
                date.textContent = dateComic;
            }
        } catch (error) {
            console.error(error);
        }
    }

    onMount(() => {
        const button = document.querySelector('button');
        title = document.querySelector('#title');
        notification = document.querySelector('#notification');
        date = document.querySelector('#date');
        datePassed = document.querySelector('#datePassed');

        if (button) {
            button.addEventListener('click', getComic);
        }
    });
</script>

<svelte:head>
    <title>{data.post.titlePage}</title>
    <link rel="icon" href="/favicon.png" />
</svelte:head>

<section>
    <Input bind:bindValue={inputText} />
    <Button on:click={async () => await getComic()} />
    <Image src={imageUrl} alt={imageAlt} />
    <h1 bind:this={title} id="title"></h1>
    <div bind:this={notification} id="notification" class="hidden">Error occurred.</div>
    <p bind:this={date} id="date"></p>
    <p bind:this={datePassed} id="datePassed"></p>
    <div bind:this={firstComic} id="firstComic">
        <Image src={data.post.imageUrl} alt={imageAlt} />
        <h1>{data.post.title}</h1>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .hidden {
        visibility: hidden;
    }

</style>
