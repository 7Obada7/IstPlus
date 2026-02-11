import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const DB_PATH = path.join(process.cwd(), 'db.json');

async function main() {
    console.log('Starting migration...');

    if (!fs.existsSync(DB_PATH)) {
        console.error('db.json not found!');
        return;
    }

    const rawData = fs.readFileSync(DB_PATH, 'utf-8');
    const data = JSON.parse(rawData);

    console.log(`Found ${data.reservations.length} reservations to migrate.`);

    for (const res of data.reservations) {
        try {
            await prisma.reservation.create({
                data: {
                    // We let MySQL generate a new, clean ID
                    fullName: res.fullName,
                    email: res.email,
                    date: new Date(res.date), // Ensure Date object
                    passengers: res.passengers,
                    destination: res.destination,
                    message: res.message || '',
                    createdAt: res.createdAt ? new Date(res.createdAt) : new Date(),
                },
            });
            console.log(`Migrated reservation for: ${res.fullName}`);
        } catch (error) {
            console.error(`Failed to migrate reservation for ${res.fullName}:`, error);
        }
    }

    console.log('Migration complete.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
