import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
        /**
     * The following method serves as a component that displays a title and navigation.
     * This title is given by the 'pageName' prop. 
     * This navigation consists of a link to the Dashboard, followed by the current page's name.
     * This component ensures that the user knows the current page they are on and provides a quick way back to the Dashboard.
     * 
     * The layout of the title and navigation is responsive:
     * - For small (sm) screens, the title and navigation are stacked vertically with a gap of 3 units, aligning items to the start.
     * - For screens larger than sm, the title and navigation are in a row, items are centered vertically and spaced out between the start and end.
     *
     * The title has a medium font, is semi-bold and has a color that depends on the current theme (black for light theme, white for dark theme).
     * 
     * The navigation is represented as an ordered list with items centered vertically and a gap of 2 units between them.
     * - The first item is a link to the Dashboard page with a medium font and a trailing slash (/).
     * - The second item is the current page's name with a medium font and a primary color.
     *
     * @prop {string} pageName - The name of the current page to be used in the title and navigation.
     */
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
