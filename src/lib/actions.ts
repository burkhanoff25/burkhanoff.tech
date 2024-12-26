"use server";

import {Client} from "kodikwrapper";
import {clerkClient} from "@clerk/nextjs/server";

const kodikClient = new Client({
    token: '925484ea8e5da2f7ff80a35c8ccec921',
});

export async function getKodikPlayer({ shikimoriId }: { shikimoriId: string }) {
    return await kodikClient.search({
        shikimori_id: parseInt(shikimoriId)
    }).then((response) => response.results.shift());
}

export async function getUserById({ id }: { id: string }) {
    return JSON.parse(JSON.stringify(await clerkClient.users.getUser(id)));
}

