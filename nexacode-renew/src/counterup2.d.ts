declare module "counterup2" {
  interface CounterUpOptions {
    duration?: number;
    delay?: number;
  }

  function counterUp(element: Element, options?: CounterUpOptions): void;

  export default counterUp;
}
