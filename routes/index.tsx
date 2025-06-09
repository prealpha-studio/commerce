import { useSignal } from "@preact/signals";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";

export default define.page(function Home() {
  const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/main-logo.svg"
          width="128"
          height="128"
          alt="alpha prototype"
        />
        <img
          class="my-6"
          src="/alpha.svg"
          width="128"
          height="128"
          alt="alpha prototype"
        />
        <img
          class="my-6"
          src="/prototype.svg"
          width="128"
          height="128"
          alt="alpha prototype"
        />
        <p class="my-4">
          2025
        </p>
      </div>
    </div>
  );
});
