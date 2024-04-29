const Loader = () => {
  return (
    /**
     * This method renders a loading spinner in the center of the screen.
     *
     * The spinner is a 16x16 rotating rounded div, having a border color set as primary (color defined elsewhere) and a transparent top border.
     * The background color of the screen is set to white in light mode and black in dark mode.
     *
     * The divs use Tailwind CSS classes for styles:
     * - `flex` to apply Flexbox layout,
     * - `h-screen` to make height equal to the screen height,
     * - `items-center` and `justify-center` to center the spinner both vertically and horizontally,
     * - `bg-white` and `dark:bg-black` to set the background color depending on the theme,
     * - `h-16` and `w-16` to set the height and width of the spinner to 16,
     * - `animate-spin` to animate the spinner with a rotating animation,
     * - `rounded-full` to make the spinner fully rounded,
     * - `border-4`, `border-solid`, `border-primary`, and `border-t-transparent` to set a 4px solid primary color border with a transparent top border to the spinner.
     */
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
