import Link from "next/link";
import { LayoutProps } from "sanity";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: LayoutProps) {
  return (
    <div>
      <div className="p-3">
        <Link href="/" className="flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
