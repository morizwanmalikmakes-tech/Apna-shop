const ADMIN_API = "http://localhost:3000";

export async function getAdminProducts() {
  const response = await fetch(`${ADMIN_API}/api/products`);

  if (!response.ok) {
    throw new Error("Admin products API failed");
  }

  return response.json();
}
