import { useState } from "react";

const CheckboxFive = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    /**
     * This is a component that renders a custom styled checkbox.
     *
     * It consists of a label that wraps an input of type checkbox and a div that visually represents the checkbox.
     * The label is designed to be clickable and to be accessible through assistive technologies by using the htmlFor attribute.
     * The actual checkbox input is visually hidden (using the 'sr-only' class) but is still accessible to screen readers or when navigating with the keyboard.
     * The state of the checkbox is managed with the `setIsChecked` method which toggles the value of `isChecked` on every change event (i.e., whenever the checkbox is clicked).
     * The appearance of the checkbox is controlled with conditional styling: when `isChecked` is true, the 'border-4' class is applied, making the border of the checkbox thicker.
     */
    <div>
      <label
        htmlFor="checkboxLabelFive"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelFive"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary ${
              isChecked && "!border-4"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span>
          </div>
        </div>
        Checkbox Text
      </label>
    </div>
  );
};

export default CheckboxFive;
