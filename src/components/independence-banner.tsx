import { useEffect, useState } from "react";
import { X } from "lucide-react";

const DISMISS_KEY = "kulhad-independence-banner-dismissed-2026";

export function IndependenceBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      setVisible(false);
    }
  }, []);

  const closeBanner = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Independence Day greetings"
      className="relative flex min-h-12 w-full items-center justify-center gap-2 px-12 py-2 text-center text-xs font-bold leading-snug text-[#000080] sm:text-sm"
      style={{
        background:
          "linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
      }}
    >
      <span
        aria-hidden="true"
        className="relative h-4 w-4 shrink-0 rounded-full shadow-[inset_0_0_0_1.3px_#000080]"
        style={{
          background:
            "repeating-conic-gradient(#000080 0deg 7.5deg, transparent 7.5deg 15deg)",
        }}
      >
        <span className="absolute inset-[35%] rounded-full bg-[#000080]" />
      </span>

      <div>
        <p>स्वतंत्रता दिवस की हार्दिक शुभकामनाएं — Happy Independence Day! Jai Hind 🇮🇳</p>
        <p>Kulhad Factory ki or se aapko Hardik Shubhkamnayein.</p>
      </div>

      <button
        type="button"
        aria-label="Close Independence Day banner"
        onClick={closeBanner}
        className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-[#000080]/10 text-[#000080] transition hover:bg-[#000080]/20"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
