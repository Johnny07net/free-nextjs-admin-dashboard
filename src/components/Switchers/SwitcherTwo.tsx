import { useState } from "react";

const SwitcherTwo = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    /**
     * This component renders a toggle switch.
     *
     * The switch is initially set to `false` state.
     *
     * The toggle switch is visually represented by a rounded div element with a checkbox input field. The checkbox is hidden (`sr-only`), which means it's only visible to screen readers for accessibility purposes.
     *
     * When the switch is toggled, the `setEnabled` function is called with the negated value of the current `enabled` state. This function is meant to handle the change of state.
     *
     * The switch's visual UI is a round dot that moves left or right depending on the status of the `enabled` state. This movement is animated with a transition.
     *
     * The background color of the switch also changes depending on the `enabled` state. It uses the CSS classes `dark:bg-white` and `bg-primary` when enabled, and `bg-meta-9` and `dark:bg-[#5A616B]` when not enabled.
     */
    <div x-data="{ switcherToggle: false }">
      <label
        htmlFor="toggle2"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            id="toggle2"
            type="checkbox"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="h-5 w-14 rounded-full bg-meta-9 shadow-inner dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute -top-1 left-0 h-7 w-7 rounded-full bg-white shadow-switch-1 transition ${
              enabled && "!right-0 !translate-x-full !bg-primary dark:!bg-white"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherTwo;
