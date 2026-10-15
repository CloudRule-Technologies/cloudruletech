import "@testing-library/jest-dom";
import { vi } from "vitest";

window.scrollTo = vi.fn();

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};
