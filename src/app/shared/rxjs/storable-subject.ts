import { BehaviorSubject } from 'rxjs';

export class StorableSubject<T> extends BehaviorSubject<T> {
  constructor(
    private key: string,
    defaultValue: T,
    private storage: Storage = localStorage
  ) {
    const initialValue: T = StorableSubject.getStoredValue(key, storage) ?? defaultValue;
    super(initialValue);
    this.storage.setItem(key, JSON.stringify(initialValue));
  }

  private static getStoredValue<T>(key: string, storage: Storage): T | null {
    return JSON.parse(storage.getItem(key) ?? 'null');
  }

  private storeValue(value: T) {
    this.storage.setItem(this.key, JSON.stringify(value));
  }

  override next(value: T) {
    this.storeValue(value);
    super.next(value);
  }
}
