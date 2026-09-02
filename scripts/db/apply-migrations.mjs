import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { Client } from "@neondatabase/serverless";
import { seedProjects } from "./seed-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.resolve(__dirname, "../../db/migrations");

function sqlLiteral(value) {
  if (value === null || value === undefined) return "null";
  if (typeof value === "number") return String(value);
  return `'${String(value).replace(/'/g, "''")}'`;
}

function sqlTextArray(values) {
  if (!values.length) return "'{}'";
  return `array[${values.map(sqlLiteral).join(", ")}]::text[]`;
}

function sqlJsonb(value) {
  return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
}

function buildSeedSql() {
  const rows = seedProjects.map((p) => `insert into public.projects (
    id, title_en, title_pt, short_description_en, short_description_pt,
    full_description_en, full_description_pt, preview, images,
    type, category, technologies, features, status, github_url, live_url
) overriding system value values (
    ${p.id}, ${sqlLiteral(p.titleEn)}, ${sqlLiteral(p.titlePt)}, ${sqlLiteral(p.shortDescriptionEn)}, ${sqlLiteral(p.shortDescriptionPt)},
    ${sqlLiteral(p.fullDescriptionEn)}, ${sqlLiteral(p.fullDescriptionPt)}, ${sqlLiteral(p.preview)}, ${sqlTextArray(p.images)},
    ${sqlLiteral(p.type)}, ${sqlLiteral(p.category)}, ${sqlTextArray(p.technologies)}, ${sqlJsonb(p.features)}, ${sqlLiteral(p.status)}, ${sqlLiteral(p.githubUrl)}, ${sqlLiteral(p.liveUrl)}
) on conflict (id) do nothing;`);

  return rows.join("\n\n") + "\n\n" + "select setval(pg_get_serial_sequence('public.projects', 'id'), (select max(id) from public.projects));\n";
}

async function main() {
  const databaseUrl = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set (check .env.local)");
  }

  const seedSql = buildSeedSql();
  writeFileSync(path.join(migrationsDir, "0002_seed_projects.sql"), seedSql, "utf8");

  const createTableSql = readFileSync(path.join(migrationsDir, "0001_create_projects_table.sql"), "utf8");

  const client = new Client(databaseUrl);
  await client.connect();
  try {
    console.log("Running 0001_create_projects_table.sql...");
    await client.query(createTableSql);

    console.log("Running 0002_seed_projects.sql...");
    await client.query(seedSql);

    const { rows } = await client.query("select id, title_en, title_pt, status from public.projects order by id;");
    console.log(`Seeded ${rows.length} projects:`);
    console.table(rows);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
