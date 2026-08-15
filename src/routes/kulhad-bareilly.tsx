import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/city-page";
import { getCity } from "@/lib/cities";
import { cityHead } from "@/lib/city-head";

const city = getCity("kulhad-bareilly")!;

export const Route = createFileRoute("/kulhad-bareilly")({
  head: () => cityHead(city),
  component: () => <CityPage city={city} />,
});
