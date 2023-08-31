import {PortableText as PortableTextInternal} from "astro-portabletext"

const customComponents = {
    block: {
        normal: ({ children, value }) => {
            return `<p class='mt-6 text-lg text-brandgrey-500'>${children}</p>`;
        }
    },
};

export function sanityPortableText(portabletext) {
    return portableTextToHtml(portabletext, customComponents);
}