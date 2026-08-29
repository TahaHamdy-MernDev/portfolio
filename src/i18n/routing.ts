import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	// "ar" is prepared but disabled until Arabic content is fully ready
	locales: ["en"],
	defaultLocale: "en",
	localePrefix: "always",
});
