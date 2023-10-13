import { writable } from "svelte/store";

export const showSidebar = writable(false);

export const y = writable(0);
export const x = writable(0);
export const maxX = writable(0);
export const scrollPoint = writable(0);

export const imgIdx = writable(1);

