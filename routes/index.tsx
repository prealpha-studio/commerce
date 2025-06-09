import { useSignal } from "@preact/signals";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";

export default define.page(function Home() {
  const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          src="/main-logo.svg"
          alt="alpha prototype"
        />
        <h1 class="silka-mono text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider mt-4">
          ALPHA PROTOTYPE
        </h1>
      </div>
    </div>
  );
});
