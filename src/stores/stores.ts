import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { FastApis } from '$lib/generated-api';

export let isLoggedIn: Writable<boolean> = writable(false);
isLoggedIn.subscribe((val) => browser && localStorage.setItem('isLoggedIn', `${val}`));

// export let fastapi = new FastApis({
// 	BASE: 'http://localhost:8000'
// }).default.indexGet();
