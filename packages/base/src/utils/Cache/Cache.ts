export class Cache {
  #cache: Map<string, unknown>;

  constructor() {
    this.#cache = new Map();
  }

  get(key: string) {
    return this.#cache.get(key);
  }

  set(key: string, value: unknown) {
    this.#cache.set(key, value);
  }
}
