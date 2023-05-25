import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export let isLoggedIn: Writable<boolean> = writable(false);
isLoggedIn.subscribe((val) => browser && localStorage.setItem('isLoggedIn', `${val}`));
