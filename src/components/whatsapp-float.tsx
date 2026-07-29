import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi Kulhad Factory, I'd like to place an order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="animate-wa-pulse fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.35c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.16.19-.33.22-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.5.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36s-1 .98-1 2.39 1.02 2.77 1.16 2.96c.14.19 2.01 3.06 4.88 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16.02 4C9.94 4 5 8.94 5 15.02c0 1.95.51 3.86 1.48 5.55L5 27l6.6-1.73c1.63.89 3.47 1.36 5.42 1.36 6.08 0 11.02-4.94 11.02-11.02 0-2.94-1.15-5.71-3.23-7.79A11 11 0 0 0 16.02 4z"/>
      </svg>
    </a>
  );
}
