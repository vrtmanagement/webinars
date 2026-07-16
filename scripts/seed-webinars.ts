import { seedWebinarsIfEmpty } from "@/services/webinarRepository";
import { initialWebinars } from "@/utils/mockWebinars";

async function seed() {
  const seeded = await seedWebinarsIfEmpty(
    initialWebinars.map(({ id: _id, ...rest }) => rest)
  );
  if (seeded > 0) {
    console.log(`Seeded ${seeded} webinars into MongoDB.`);
  } else {
    console.log("Database already has webinars, skipping seed.");
  }
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
