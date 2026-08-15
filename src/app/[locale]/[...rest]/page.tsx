import { redirect } from "@/i18n/navigation";

export const instant = false;
export default function CatchAllPage() {
	return redirect({ href: { pathname: "/" }, locale: "en" });
}
