import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export let isLoggedIn = writable(false);
isLoggedIn.subscribe((val) => browser && localStorage.setItem('isLoggedIn', `${val}`));
